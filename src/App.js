import logo from './logo.svg';
import './App.css';
import Topbar from './Compornents/Topbar/Topbar';
import Header from './Compornents/Header/Header';


import Page from './Compornents/Page';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SinglePost from './Compornents/singlePost/SinglePost';
import Write from './Compornents/Write/Write';
import Acc from './Compornents/Acc/Acc';
import Login from './Compornents/Login/Login';
import Register from './Compornents/Login/Register';

function App() {
  const user=true;

  return (
  <Router>
    <div className="app">


      <Topbar />
      <Switch>
        <Route exact path="/" component={Page} >
          {user ?<Page/>:<Login/>}
        </Route>
        <Route exact path="/sp/:id" component={SinglePost}/>
        
        <Route exact path="/write" component={Write} >
        {user ?<Write/>:<Login/>}
        </Route>
        <Route exact path="/acc" component={Acc} >
        {user ?<Acc/>:<Login/>}
        </Route>

        <Route exact path="/register" component={Register} />
        
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
