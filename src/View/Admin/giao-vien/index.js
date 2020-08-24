import React from 'react'
import HeaderGV from './Layout/HeaderGV'
import SidebarGV from './Layout/SidebarGV'
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import '../../../assets/plugins/bootstrap/css/bootstrap.min.css'
import '../../../assets/plugins/morrisjs/morris.css'
import '../../../assets/css/style.css'
import '../../../assets/css/colors/blue.css'

const IndexGV = () => {
    return (
        <div id="main-wrapper">
            <HeaderGV />
            <SidebarGV />
        </div>
    )
}

export default IndexGV
