import React, { useState } from 'react'
import {Link } from 'react-router-dom'
const HeaderTrangChu = () => {
    const [Status, setStatus] = useState(false)
    const handleClick =()=>{
        Status?setStatus(false):setStatus(true);
        console.log(Status)
    } 
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <button className="navbar-toggler" onClick={handleClick} type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="navbar-brand" to="/"><img style={{height:'50px'}} src="https://xaydungecohome.vn/wp-content/uploads/2019/07/thiet-ke-logo-truong-mam-non-4.jpg" /></Link>
            <div  className={Status?"navbar-collapse collapse show":"collapse navbar-collapse"} id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link"  onClick={handleClick} to="/trang-chu/aa">Giới thiệu <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" onClick={handleClick} to="/trang-chu/aa">Chương trình giảng dạy <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" onClick={handleClick} to="/trang-chu/aa">Tiện nghi <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link"  onClick={handleClick}  to="/trang-chu/aa">Tin tức & sự kiện <span className="sr-only">(current)</span></Link>
                    </li>
                </ul>
                <Link to="/dang-nhap" className="btn btn-outline-primary">Đăng nhập</Link>            
            </div>
        </nav>
    )
}

export default HeaderTrangChu
