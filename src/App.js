import { BoundFunction, BrowserRouter, Route, Switch } from 'react-router-dom';

// styles
import './App.css'

// pages
import Dashboard from './pages/dashboard/dashboard';
import Signup from './pages/signup/signup';
import Login from './pages/login/login';
import Create from './pages/create/create';
import Project from './pages/project/project';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar/>
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/projects/:id">
              <Project />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App
