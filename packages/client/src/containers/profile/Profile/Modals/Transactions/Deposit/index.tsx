import React from 'react';
import 'antd/dist/antd.css';
import { select, table } from './contentDemo';
import './styles.scss';
import { Image } from '@project/libs/components';
import { ClockIcon, ComfirmedIcon, CrossRedIcon } from '@project/libs/assets/images';
import { WrapSelect } from 'components/WrapSelect';

export const Deposit: React.FC = () => {
  
  return(
    <div className={'deposit__container'}>
      <WrapSelect list={select} />
      <section className={'table__container'}>
        {table.map((row, key) => (
          <div
            className={key === 0 ? 'table__row__head' : 'table__row'}
            key={`table-row-${key}`}
          >
            <div
              className={key === 0 ? 'table__item__head' : 'table__item'}
            >
              {row.time}
            </div>
            <div
              className={key === 0 ? 'table__item__head' : 'table__item item_with_icon'}
            >
              {row.amount}
            </div>
            <div
              className={key === 0 ? 'table__item__head' : 'table__item'}
            >
              {row.state === 'Pending' &&
                <div className={'item_with_icon text__gray'}>
                  <Image url={ClockIcon} /> Pending
                </div>
              }
              {row.state === 'Rejected' &&
                <div className={'item_with_icon text__red'}>
                  <Image url={CrossRedIcon} /> Rejected
                </div>
              }
              {row.state === 'Comfirmed' &&
                <div className={'item_with_icon text__green'}>
                  <Image url={ComfirmedIcon} /> Comfirmed
                </div>
              }
            </div>
            <div
              className={key === 0 ? 'table__item__head' : 'table__item'}
            >
              <div className={key === 0 ? '' : 'table__text__blue'}>
                {row.transaction}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};