import * as React from 'react';
import { Button } from 'antd';

export interface Props {
  htmlType: any,
  icon: string,
  type: any,
  value: string,
  size: any,
}

const FormButton = ({ htmlType, type, value, size, icon }: Props) => (
  <div className="align-center">
    <Button htmlType={htmlType} type={type} size={size} icon={icon}>
      {value}
    </Button>
  </div>
);

export default FormButton;
