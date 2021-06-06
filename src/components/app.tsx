import { Switch, Route } from 'react-router-dom';

import { Header } from './common/header';
import { MasterList } from './master/MasterList';

export function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/">
          <MasterList />
        </Route>
        <Route path="/master/:masterId">
          <MasterList />
        </Route>
      </Switch>
    </div>
  );
}
