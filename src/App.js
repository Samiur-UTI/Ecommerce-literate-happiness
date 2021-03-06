import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {Switch,Route} from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignUp from '../src/pages/sign-in-sign-up/sign-in-sign-up.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import { useState,useEffect } from 'react';
function App() {
  const [loggedIn, setloggedIn] = useState({currentUser:null});
  console.log(loggedIn);
  useEffect(() => {
    auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = createUserProfileDocument(userAuth);
        (await userRef).onSnapshot(snapShot => {
          setloggedIn({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      else {
        setloggedIn({currentUser:userAuth})
      }
    })
  },[])  
  return (
    <div>
      <Header {...loggedIn}/>
      <Switch>
        <Route exact path='/' component = {Homepage}/>
        <Route exact path='/shop' component = {ShopPage}/>
        <Route exact path='/signin' component = {SignInAndSignUp}/>
      </Switch>
    </div>
  );
}
export default App;
