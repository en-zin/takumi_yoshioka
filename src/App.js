import React from 'react';
import Header from './component/Header';
import { Route, Switch, withRouter } from 'react-router-dom';
import routes from './routes';
import './css/index.css'

function App() {
  return (
    <div>
      <Header />
         <Switch>
             {routes.map((route, idx) => (
                <Route
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                    key={idx}
                />
             ))}
          </Switch>
    </div>
  );
}

export default withRouter(App);
