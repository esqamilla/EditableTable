import { Form, Input, InputRef } from "antd";
import { FC, ReactNode, useContext, useEffect, useRef } from "react";
import { EditTableValues, RowData, SaveRowReturn } from "types/table";
import { EditableContext } from "./EditableRow";

interface EditableCellProps {
  title: ReactNode;
  editable: boolean;
  children: ReactNode;
  dataIndex: keyof RowData;
  record: RowData;
  editing: boolean;
  setEditingKey: (key: number) => void;
  handleSave: (record: RowData, storage: RowData[]) => SaveRowReturn;
  disabled: boolean;
  setDisabled: (value: boolean) => void;
  dataSource: RowData[];
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
  setDisabled,
  disabled,
  dataSource,
  ...restProps
}) => {
  const inputRef = useRef<InputRef>(null);
  const form = useContext(EditableContext)!;

  useEffect(() => {
    if (editing) {
      form.setFieldsValue({ [dataIndex]: record[dataIndex] });
      inputRef.current && inputRef.current.focus();
    }
  }, [editing]);

  const edit = () => {
    setDisabled(true);
    record.key && setEditingKey(record.key);
  };

  const save = async () => {
    try {
      const values: EditTableValues = await form.validateFields();

      const newData = [...dataSource];
      const index = newData.findIndex((row) => record.id === row.id);
      const newRow = {
        ...record,
        ...values,
        price: (values.unitPrice ?? 0) * (values.quantity ?? 0),
      };

      newData.splice(index, 1, newRow);

      const recalculation = handleSave(newRow, dataSource);
      recalculation.changed.forEach((row) => {
        handleSave({ ...row }, newData);
      });

      setDisabled(false);
      setEditingKey && setEditingKey(0);
    } catch (errInfo) {
      console.log("Ошибка:", errInfo);
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
          {
            validator:
              dataIndex === "unitPrice" || dataIndex === "quantity"
                ? (_, value, callback) =>
                    !Number.isFinite(+value) ? callback("Ошибка!") : callback()
                : undefined,
          },
        ]}
      >
        <Input
          ref={inputRef}
          placeholder={(record[dataIndex] ?? "").toString()}
          onPressEnter={save}
        />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onDoubleClick={() => {
          !disabled && edit();
        }}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

export default EditableCell;
