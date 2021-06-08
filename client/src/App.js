import './App.css';
import Header from './components/ui/Header';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import LoginSponsor from './components/forms/LoginSponsor';
import RegisterSponsor from './components/forms/RegisterSponsor';
import RegisterTeam from './components/forms/RegisterTeam';
import LoginTeam from './components/forms/LoginTeam';
import Tournaments from './components/pages/Tournaments';
import TournamentDetails from './components/pages/TournamentDetails';
import Profile from './components/pages/Profile';
const App = () => {
  
    return (
      <div className="root-container">
         <Router>
           <Header />
           <Switch>



            <Route exact path="/">
                <Home />
             </Route> 
             <Route exact path="/profile">
                <Profile />
             </Route>
             <Route path="/tournaments" exact >
               <Tournaments />
             </Route>
             <Route path="/tournaments/:id" exact >
               <TournamentDetails />
             </Route>
             <Route path="/sponsor/login" exact>
               <LoginSponsor />
             </Route>
             <Route path="/team/login" exact>
               <LoginTeam />
             </Route>
             <Route path="/sponsor/register" exact>
               <RegisterSponsor />
             </Route>
             <Route path="/team/register" exact>
               <RegisterTeam />
             </Route>
           </Switch>
         </Router>
      </div >
    );
}
export default App;