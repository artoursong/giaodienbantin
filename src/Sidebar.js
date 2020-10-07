import React from 'react';

import './App.css';

class Sidebar extends React.Component {
    render() {
        const styles = {
            width: '460px',
            height: '800px',
            textAlign: "center",
            backgroundColor: 'white'
        }
        return (
            <form id="sidebar" style={styles}>
                <Login/><br></br>
                <div id ="giaodien2">
                    <div id="head">Bai viet moi</div><br></br>
                    <New name="Hướng dẫn học REACTJS" link="./C++.png"/><br></br>
                </div><br></br>
                <div id ="giaodien2">
                    <New name="Hướng dẫn học REACTJS" link="./C++.png"/><br></br>
                </div>
            </form>
        )
    }
}

function Login() {
    let styles={
        color: "#000000",
    }
    return (
        <div id="loginForm" style={styles}>
            <p>
                Dang Ki Nhan Bai Viet Moi
            </p>
            <input placeholder="Tên của bạn">
            </input><br></br>
            <input placeholder="Email của bạn">
            </input><br></br>
            <input id="checkbox" type="checkbox"/><br></br>
            <label>Tôi đồng ý với điều khoản</label><br></br>

            <p>
                Đăng kí với chúng tôi để học tập tốt hơn
            </p><br></br>

            <button>Dang ki</button><br></br>
        </div>
    )
}
function New(props) {
    let styles = 
    {
    }
    return (
        <div id="style" style={styles}>
            <img className="img" src = {props.link} height="100" width="50"></img>
            <div  id="noidung">
                <div>
                    <p>{props.name}</p>
                    <p>
                        Posted by NgyenNhan | Th2 23 2016 | JavaScript
                    </p>
                </div>
                    <button id="btread">Read more</button>
            </div>
            
        </div>
    )
}


export default Sidebar;