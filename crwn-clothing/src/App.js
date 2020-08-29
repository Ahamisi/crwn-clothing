import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import  './pages/homepage/homepage.styles.scss';
import ShopPage from '././pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils'
import {createUserProfileDocument} from './firebase/firebase.utils'
// const HatsPage = () =>{
//   return (
//     <div>
//       <h1>Hatss Pages</h1>
//     </div>
//   )
// }

class App extends React.Component{ 
  constructor(){
    super();
     this.state = {
       currentUser: null
     }
  }
  unSubscribeFromAuth = null;
  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot =>{
          this.setState({
              currentUser:{
                id: snapshot.id,
              ...snapshot.data()         
             }
          });
          console.log(this.state)
        })
      }
      this.setState({currentUser : userAuth})
    });
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
            <Route path="/" exact="true" component={HomePage} />
            <Route path="/shop" exact="true" component={ShopPage} />
            <Route path="/signin" exact="true" component={SignInAndSignUpPage} />
  
            {/* // <HomePage/> */}
            {console.log(this.state.currentUser)}
        </Switch>
      </div>
    );
  }
}

export default App;
