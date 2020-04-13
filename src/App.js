
import 'bootstrap/dist/css/bootstrap.css';
//import logo from './logo.svg';
import { Navbar,NavbarBrand } from 'reactstrap';
import Home from './components/HomeComponent';
//import HomeDetail from './components/DishdetailedComponent';
import './App.css';


import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941

import './App.css';
import Loginscreen from './components/LoginscreenComponent';
//injectTapEventPlugin();
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
     // homepage:[]
    }
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<Loginscreen parentContext={this}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
      <div className="App">
       <Navbar>
        <div className="container">
          <NavbarBrand href="/">Ristorant con confuion</NavbarBrand>
        </div>
      </Navbar>
        {this.state.loginPage}
        
      </div>
    );
  }
}
//{this.state.homepage}
export default App;
