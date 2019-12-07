import React from 'react';
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {routes.map(r => (
            <Route key={r.path} {...r}/>
          ))}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
