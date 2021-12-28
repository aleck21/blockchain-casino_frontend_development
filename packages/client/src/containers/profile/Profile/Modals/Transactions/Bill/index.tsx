import React from 'react';
import { WrapSelect } from 'components/WrapSelect';
import { WrapDatePicker } from 'components/DatePicker';
import './styles.scss';
import { list } from './contentDemo';

export const Bill: React.FC = () => {
  return(
    <section className={'bill__container'}>
      <div className={'left__column'}>
        <WrapDatePicker placeholder={['  Select', 'Date']} />
        <div className={'box black__box'}>All</div>
        <div className={'box'} >Game</div>
        <div className={'box'} >Bonus</div>
        <div className={'box'} >Affilate</div>
        <div className={'box'} >Swap</div>
      </div>
      <div className={'right__column'}>
        <WrapSelect list={list} />
      </div>
    </section>
  );
}