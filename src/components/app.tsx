import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from './common/header';
import { MasterComponent } from './master/MasterComponent';
import { useAppDispatch } from '../store/appStore';
import { masterStore } from '../store/master/masterStore';

export function App() {
  const dispatch = useAppDispatch();
  dispatch(masterStore.actions.refresh); // get masters

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/">
          <MasterComponent />
        </Route>
      </Switch>
    </div>
  );
}
