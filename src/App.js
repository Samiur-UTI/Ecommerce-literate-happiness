import './App.css';
import Homepage from './pages/homepage/homepage.component';
import {Switch,Route} from 'react-router-dom';
const HatsPage = (props) => {
  console.log(props);
  return(
    <div>
      <h1>HatsPage</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component = {Homepage} />
        <Route exact path='/hats' component = {HatsPage} />
      </Switch>
    </div>
  );
}

export default App;