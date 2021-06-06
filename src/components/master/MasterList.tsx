import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/appStore';
import { MasterItem } from './MasterItem';
import css from './MasterList.module.scss';
import { masterStore } from '../../store/master/masterStore';
import { Header } from '../header/Header';

export function MasterList() {
  const dispatch = useAppDispatch();
  const { masters } = useAppSelector(state => state.master);

  useEffect(() => {
    dispatch(masterStore.actions.getMasterList()); // get masters
  }, [dispatch]);

  return (
    <div>
      <Header title="Выбор мастера" />
      <div className={css.wrapper}>
        <div className={css.search}>
          <input type="text" className={css.searchInput} placeholder="Поиск" />
        </div>
        <div className={css.calendar}>
          <button type="button" className={css.changeDateBtn}>
            Выбрать дату
          </button>
        </div>
        <div className={css.masterList}>
          {masters.map(master => (
            <MasterItem key={master.id} master={master} />
          ))}
        </div>
      </div>
    </div>
  );
}
