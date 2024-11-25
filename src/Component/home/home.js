import { Component } from "react";
import imageHome from "./porsche.png";
// import imageHome from "./chad.png";
class Home extends Component {
    render(){
        return (
            <div>
                <h1>welcome to home</h1>
                <img src={imageHome} className="img-container"/>
            </div>
        );
    }
}

export default Home;