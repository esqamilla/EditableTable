import {Form, Input, InputNumber, InputRef} from "antd";
import {FC, Key, ReactNode, useContext, useEffect, useRef, useState} from "react";
import {log} from "util";
import {EditableContext} from "./EditableRow";
import {RowData} from "../../../types/table";
interface EditableCellProps {
  title: ReactNode;
  editable: boolean;
  children: ReactNode;
  dataIndex: keyof RowData;
  record: RowData;
  editing: boolean;
  setEditingKey: (key: number) => void;
  handleSave: (record: RowData) => void;
}

const EditableCell: FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  editing,
  setEditingKey,
  ...restProps
}) => {
  const inputRef = useRef<InputRef>(null);
  const form = useContext(EditableContext)!;

  useEffect(() => {
    if (editing) {
      form.setFieldsValue({ [dataIndex]: record[dataIndex] });
      inputRef.current!.focus();
    }
  }, [editing]);

  const edit = () => {
    record.key && setEditingKey(record.key);
  };

  const save = async () => {
    try {
      const values = await form.validateFields();

      setEditingKey && setEditingKey(0);
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} />
      </Form.Item>
    ) : (
      <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onDoubleClick={edit}>
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

export default EditableCell