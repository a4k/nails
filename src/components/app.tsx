import { Switch, Route } from 'react-router-dom';

import { MasterList } from './master/MasterList';
import { MasterDetail } from './master/MasterDetail';

export function App() {
  return (
    <div>
      <Switch>
        <Route path="/masters/:id">
          <MasterDetail />
        </Route>
        <Route path="/">
          <MasterList />
        </Route>
      </Switch>
    </div>
  );
}
