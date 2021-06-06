import { useParams } from 'react-router-dom';
import { Header } from '../header/Header';
import css from './MasterDetail.module.scss';

export function MasterDetail() {
  const { masterId } = useParams();

  return (
    <>
      <Header title="Сотрудник" />
      <div className={css.info}>{masterId}</div>
    </>
  );
}
