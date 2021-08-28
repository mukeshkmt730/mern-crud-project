
import NavBar from "./components/NavBar";
import CodeByMukesh from "./components/CodeByMukesh";
import AllUsers from "./components/AllUsers";
import AddUser from "./components/AddUser";
import NotFound from "./components/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EditUser from "./components/EditUser";


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={CodeByMukesh} />
        <Route exact path='/All' component={AllUsers} />
        <Route exact path='/Add' component={AddUser} />
        <Route exact path='/Edit/:id' component={EditUser} />
        <Route component={NotFound}/>

      </Switch>

    </BrowserRouter>

  );
}

export default App;


