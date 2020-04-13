import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import logo from './logo.svg';
import { Navbar,NavbarBrand } from 'reactstrap';
import Home from './components/HomeComponent';
//import HomeDetail from './components/DishdetailedComponent';
import './App.css';
import { WEB } from './shared/webtools';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      webs: WEB,
     // comments: COMMENTS,
    };
  }
render() {
  return (
    <div>
      <Navbar>
        <div className="container">
          <NavbarBrand href="/">Ristorant con confuion</NavbarBrand>
        </div>
      </Navbar>
      <Home webs = {this.state.webs}/>
      

    </div>
  );
}
}

export default App;
