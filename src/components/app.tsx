import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppState } from '../store/rootReducer';

import { SystemState } from '../store/system/types';
import { updateCurrency, updateSession } from '../store/system/actions';

import { Header } from './common/header';
import MastersContainer from './products/products_container';
import CartContainer from './cart/cart_container';

interface AppProps {
  updateSession: typeof updateSession;
  updateCurrency: typeof updateCurrency;
  system: SystemState;
}

class App extends React.Component<AppProps> {
  selectCurrency = (currency: string) => {
    const { props } = this;
    props.updateCurrency(currency);
  };

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/">
            <MastersContainer />
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    system: state.system,
  };
};

export default connect(
  mapStateToProps,
  { updateSession, updateCurrency }
)(App);
