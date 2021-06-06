import { useHistory } from 'react-router-dom';
import { Master } from '../../domain/Master';
import css from './MasterItem.module.scss';
import { MasterCalendarComponent } from './MasterCalendar';

interface MasterItemProps {
  master: Master;
}

export function MasterItem({ master }: MasterItemProps) {
  const page = `/masters/${master.id}`;
  const history = useHistory();

  const goToMaster = () => {
    history.push(page);
  };

  return (
    <div className={css.item}>
      <div className={css.info}>
        <div className={css.avatar} />
        <div className={css.right}>
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <div className={css.top} onMouseDown={goToMaster}>
            <div className={css.title}>{master.name}</div>
            <div className={css.date}>Сегодня</div>
          </div>
          <div className={css.description}>{master.description}</div>
        </div>
      </div>
      <div className={css.calendar}>
        {master.calendar.map(item => (
          <MasterCalendarComponent key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
