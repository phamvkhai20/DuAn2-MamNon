import React from 'react'

function SidebarGV() {
    return (
        <aside className="left-sidebar">
        <div className="scroll-sidebar">
            <div className="user-profile">
              
                <div className="profile-text">
                    <h5>Markarn Doe</h5>
                    <a href="#" className="dropdown-toggle u-dropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"><i className="mdi mdi-settings"></i></a>
                    <a href="app-email.html" className="" data-toggle="tooltip" title="Email"><i className="mdi mdi-gmail"></i></a>
                    <a href="pages-login.html" className="" data-toggle="tooltip" title="Logout"><i className="mdi mdi-power"></i></a>
                    <div className="dropdown-menu animated flipInY">
                        <a href="#" className="dropdown-item"><i className="ti-user"></i> My Profile</a>
                        <a href="#" className="dropdown-item"><i className="ti-wallet"></i> My Balance</a>
                        <a href="#" className="dropdown-item"><i className="ti-email"></i> Inbox</a>
                        <div className="dropdown-divider"></div>
                        <a href="#" className="dropdown-item"><i className="ti-settings"></i> Account Setting</a>
                        <div className="dropdown-divider"></div>
                        <a href="login.html" className="dropdown-item"><i className="fa fa-power-off"></i> Logout</a>
                    </div>
                </div>
            </div>
            <nav className="sidebar-nav">
                <ul id="sidebarnav">
                    <li className="nav-devider"></li>
                    <p>
  <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  </div>
</div>
       <p>
  <a class="btn btn-primary" data-toggle="collapse" href="#collapseExamples" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
</p>
<div class="collapse" id="collapseExamples">
  <div class="card card-body">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  </div>
</div>              <li className="nav-small-cap">PERSONAL</li>
                    <li> <a className="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i className="mdi mdi-gauge"></i><span className="hide-menu">Dashboard <span className="label label-rouded label-themecolor pull-right">4</span></span></a>
                        <ul aria-expanded="false" className="collapse">
                            <li><a href="index.html">Minimal </a></li>
                            <li><a href="index2.html">Analytical</a></li>
                            <li><a href="index3.html">Demographical</a></li>
                            <li><a href="index4.html">Modern</a></li>
                        </ul>
                    </li>
                                    
                </ul>
            </nav>
        </div>
    </aside>
    )
}

export default SidebarGV
