import logo from './logo.svg';
import './App.css';
import Topbar from './Compornents/Topbar/Topbar';
import Header from './Compornents/Header/Header';


import Page from './Compornents/Page';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import SinglePost from './Compornents/singlePost/SinglePost';
import Write from './Compornents/Write/Write';
import Acc from './Compornents/Acc/Acc';
import Login from './Compornents/Login/Login';
import Register from './Compornents/Login/Register';

function App() {
  return (<Router>
    <div className="app">
      
        
      <Topbar/>
<Switch>
      <Route  path="/" component={Page} />
      <Route  path="/sp/:id" component={SinglePost} />
      <Route  path="/write" component={Write} />
      <Route  path="/acc" component={Acc} />
      
      <Route  path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
       </Switch>
   </div>
   </Router>
  );
}

export default App;
