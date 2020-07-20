import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header/Header';
import Body from './components/body/Body';


class App extends Component {
  
  render() { 
    return ( 
      <>
        <Header />
        <Body />
      </>
     );
  }
}
 


ReactDOM.render(<App />, document.getElementById("root"));
