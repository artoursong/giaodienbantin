import React from 'react';
import './App.css';

class Contain extends React.Component {
    render () {
        const styles = {
            width: '800px',
            height: '800px',
            backgroundColor: '#fafafa',
            color: "aqua"
        }
        return (
            <form id="contains" style={styles}>
                <Title/><br></br>
                <div id = "giaodien">
                    <Blog name="Hướng dẫn học REACTJS" link="./C++.png"/><br></br>
                </div>
                <div id ="giaodien">
                    <Blog name="Hướng dẫn học REACTJS" link="./C++.png"/><br></br>
                </div>
                <div id ="giaodien">
                    <Blog name="Hướng dẫn học REACTJS" link="./C++.png"/><br></br>
                </div>
                <div id ="giaodien">
                    <Blog name="Hướng dẫn học REACTJS" link="./C++.png"/><br></br>
                </div>
            </form>
        )
    }

}


function Blog(props)
{
    let styles = 
    {
    }
    return (
        <div id="style" style={styles}>
            <img className="img" src = {props.link} height="100" width="250"></img>
            <div  id="noidung">
                <div>
                    <p>{props.name}</p>
                    <p id="color">
                        Posted by NgyenNhan | Th2 23 2016 | JavaScript
                    </p>
                </div>
                    <button id="btread">Read more</button>
            </div>
            
        </div>
    )
}

function Title(){
    let style = 
    {
        width: '800px',
        textAlign: "left",
        fontSize: "19px",
        color : "#000000",
        fontWeight: "bold"
    }
    return <div style = {style}>SERISE: REACR JS: TỪ CƠ BẢN TỚI NÂNG CAO</div>;
}

export default Contain;