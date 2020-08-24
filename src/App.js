import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TrangChu from './View/trang-chu/index';
import IndexAuth from './View/Auth/index';
import IndexGV from './View/Admin/giao-vien';

function App() {
  return (
    <Router >
    <Switch>
            <Route exact path="/" >
                <TrangChu />
            </Route>
            <Route  path="/trang-chu/" >
                <TrangChu />
            </Route>
            <Route  path="/dang-nhap/" >
                <IndexAuth />
            </Route>
            <Route  path="/giao-vien" >
                <IndexGV />
            </Route>
    </Switch>
</Router>
  );
}

export default App;
