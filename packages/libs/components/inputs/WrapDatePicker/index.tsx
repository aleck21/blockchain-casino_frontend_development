import React, { useState } from 'react';
import { DatePicker, Space } from 'antd';
import './styles.scss';
import 'antd/dist/antd.css';
import { Image } from '../../common/Image';
import { Button } from '../Button';
import { CalendarIcon } from '../../../assets/images';

type PickerProps = {
  placeholder?: [string, string];
  classNameButton?: string;
};

function dateToString(date: string) {
  const tempDate = new Date(date);
  const month = tempDate.getMonth() + 1;
  const monthString = month.toLocaleString('en-US', { minimumIntegerDigits: 2 });
  const day = tempDate.getDate().toLocaleString('en-US', { minimumIntegerDigits: 2 });
  return `${day}/${monthString}`;
}

export const WrapDatePicker: React.FC<PickerProps> = ({
  placeholder,
  classNameButton,
}) => {
  const { RangePicker } = DatePicker;
  const [open, setOpen] = useState(false);

  const [dates, setDates] = useState(['', '']);

  const showPicker = () => {
    setOpen(true);
  };

  const changeDate = (dateStrings: any) => {
    setDates([dateStrings[0], dateStrings[1]]);
    setOpen(false);
  };

  return (
    <div className="data__picker__box">
      {open
        ? null
        : (
          <Button
            onClick={showPicker}
            className={dates[0] === ''
              ? classNameButton
              : `${classNameButton} button__show__dates`}
          >
            <Image url={CalendarIcon} />
            {' '}
            {dates[0] === ''
              ? 'Select Date'
              : `${dateToString(dates[0])} … ${dateToString(dates[1])}`}
          </Button>
        )}
      {open
        ? (
          <Space
            direction="vertical"
            size={12}
          >
            <RangePicker
              placeholder={placeholder || ['Start', 'End']}
              separator="|"
              format="DD/MM"
              autoFocus
              open={open}
              onChange={changeDate}
            />
          </Space>
        )
        : null}
    </div>
  );
};
