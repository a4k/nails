import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FunctionComponent = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <div>
              <h1>Nails</h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
