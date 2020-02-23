import React, {Component} from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import firebase from './firebase';

import Home from './components/Home';
import Header from './components/Header';
import './global.css';

class App extends Component{

  state = {
    firebaseInitialezed: false
  };

  componentDidMount(){
    firebase.isInitialized().then(resultado =>{
      //Devolve o usuario
      this.setState({firebaseInitialezed: resultado});
    })
  }

  render(){
    return this.state.firebaseInitialezed !== false ?(
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    ) : (
      <h1>Carregando...</h1>
    );
  }
}

export default App;