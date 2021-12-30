import React from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';
import './styles.scss';

type SelectProps = {
  list: {value: string, text: string}[];
  classNameContainer?: string;
}

export const WrapSelect: React.FC<SelectProps> = ({
  list,
  classNameContainer
}) => {
  const { Option } = Select;
  
  return(
    <div className={`select__box ${classNameContainer}`}>
      <Select
        defaultValue={list[0].value}
        onChange={() => {}}
      >
        {list.map((item, key) => (
          <Option value={item.value} key={key}>{item.text}</Option>
        ))}
      </Select>
    </div>
  );
}