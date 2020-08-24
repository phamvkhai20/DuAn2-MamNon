import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/style.css'


const IndexAuth = () => {
    return (
        <div>
    <title>Đăng nhập - Mầm non tốt động</title>
  
            <div id="fullPage">
           

                <div id="brandingWrapper" className="float">
                    <div id="branding" className="illustrationClass"></div>
                </div>
                <div id="contentWrapper" className="float">
                    <div id="content">
                        <div id="header">
                            <img style={{width:"200px",display: "block", marginLeft: "auto", marginRight:"auto"}} src="https://xaydungecohome.vn/wp-content/uploads/2019/07/thiet-ke-logo-truong-mam-non-4.jpg"
                                alt="FPT Corporation" />
                        </div>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Số điện thoại</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Mật khẩu</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label">Nhớ mật khẩu</label>
                            </div>
                            <div>
                                    <button type="submit" className="btn btn-primary mr" >Đăng nhập</button>
                                    <Link to="/" className="btn btn-danger">Quay lại</Link>
                            </div>
                            <div className="form-group mt-3" >
                                <Link to="/quen-mat-khau" style={{paddingLeft:"-20px"}}>Quên mật khẩu</Link>
                            </div>
                        </form>
                        <div id="footerPlaceholder"></div>
                    </div>
                    <div id="footer">
                        <div id="footerLinks" className="floatReverse">
                            <div><span id="copyright">© 2016 Microsoft</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default IndexAuth
