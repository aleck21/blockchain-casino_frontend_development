import React, { useState } from 'react';
import { DatePicker, Space } from 'antd';
import './styles.scss';
import 'antd/dist/antd.css';
import { Button } from 'components/Button';
import { CalendarIcon } from '@project/libs/assets/images';

type PickerProps = {
  placeholder?: [string, string];
  classNameButton?: string;
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
  }

  const changeDate = (dates: any, dateStrings: any) => {
    setDates([dateStrings[0], dateStrings[1]]);
    setOpen(false)
  }

  return(
    <div className='data__picker__box'>
      {open
        ? null
        : <Button
            text={dates[0] === '' ? 'Select Date' : dates[0] + ' … ' + dates[1]}
            icon={CalendarIcon}
            onClick={showPicker}
            className={dates[0] === ''
              ? classNameButton
              : classNameButton + ' button__show__dates'
            }
          />
      }
      {open 
        ? <Space direction="vertical" size={12}>
            <RangePicker
              placeholder={placeholder || ['Start', 'End']}
              separator={'|'}
              format={'DD/MM'}
              autoFocus={true}
              open={open}
              onChange={changeDate}
            />
          </Space>
        : null
      }
    </div>
  );
}