import React from 'react'
import HeaderTrangChu from './layout/HeaderTrangChu'
import HomeTrangChu from './Home'
import { Route, Switch } from 'react-router-dom'

const TrangChu = () => {
    return (
        <div>
            <HeaderTrangChu />
            <Switch>
                <Route exact path="/" >
                    <HomeTrangChu />
                </Route>
                <Route exact path="/trang-chu/aa" >
                    <title>Trang Chur</title>
                    <h1>hehe</h1>
                </Route>
            </Switch>
        </div>
    )
}

export default TrangChu
