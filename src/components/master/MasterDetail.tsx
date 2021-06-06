import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from '../header/Header';
import css from './MasterDetail.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/appStore';
import { masterStore } from '../../store/master/masterStore';

export function MasterDetail() {
  const { master } = useAppSelector(state => state.master);

  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const masterId = Number(id);

  useEffect(() => {
    if (masterId) {
      dispatch(masterStore.actions.getMaster(masterId));
    }
  }, [dispatch, masterId]);

  if (!masterId || !master) {
    return null;
  }

  return (
    <>
      <Header hasGradient title="Сотрудник" />
      <div className={css.info}>
        <div className={css.avatar} />
        <div className={css.title}>{master.name}</div>
        <div className={css.description}>{master.description}</div>
      </div>
    </>
  );
}
