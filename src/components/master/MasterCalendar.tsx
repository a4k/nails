import { MasterCalendar } from '../../domain/MasterCalendar';
import css from './MasterCalendar.module.scss';

interface PropTypes {
  item: MasterCalendar;
}

export function MasterCalendarComponent({ item }: PropTypes) {
  return <div className={css.item}>{item.timeFrom}</div>;
}
