import Register from "./components/Register";
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from "./components/Login";
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/signup" component={Register}/>
      <Route exact path="/signin" component={Login}/>
      </Switch> 
      </BrowserRouter>
  );
}

export default App;
