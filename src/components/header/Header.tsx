import { Link } from 'react-router-dom';
import css from './Header.module.scss';

interface PropTypes {
  title: string;
}

export function Header({ title }: PropTypes) {
  return (
    <div className={css.header}>
      <div>
        <Link to="/" className={css.link}>
          Назад
        </Link>
      </div>
      <div>
        <div className={css.heading}>{title}</div>
      </div>
      <div>
        <Link to="/login" className={css.link}>
          Войти
        </Link>
      </div>
    </div>
  );
}
