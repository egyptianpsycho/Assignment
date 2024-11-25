import { Component } from "react"
import Home from "./Component/home/home"
import Footer from "./Component/footer/Footer";
import Header from "./Component/header/Header";
class App extends Component{
  render(){
    return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
    ) ;
  }
}

export default App;
