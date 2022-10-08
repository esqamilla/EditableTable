import {Form} from "antd";
import type { FormInstance } from 'antd/es/form';
import {createContext, FC} from "react";


export const EditableContext = createContext<FormInstance<any> | null>(null);

interface EditableRowProps {
  index: number;
}

const EditableRow: FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();

  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

export default EditableRow