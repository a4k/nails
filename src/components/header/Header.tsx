import { Link } from 'react-router-dom';
import css from './Header.module.scss';

interface PropTypes {
  title: string;
  hasGradient?: boolean;
}

export function Header({ title, hasGradient }: PropTypes) {
  return (
    <div className={`${css.header} ${hasGradient ? css.gradient : ''}`}>
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
