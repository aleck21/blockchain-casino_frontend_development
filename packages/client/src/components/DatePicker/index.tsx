import React from 'react';
import { DatePicker, Space } from 'antd';
import './styles.scss';
import 'antd/dist/antd.css';

type PickerProps = {
  placeholder?: [string, string];
}

export const WrapDatePicker: React.FC<PickerProps> = ({
  placeholder
}) => {
  const { RangePicker } = DatePicker;
  
  return(
    <div className='data__picker__box'>
      <Space direction="vertical" size={12}>
        <RangePicker
          placeholder={placeholder || ['      Select', 'Date']}
          separator={<></>}
        />
      </Space>
    </div>
  );
}