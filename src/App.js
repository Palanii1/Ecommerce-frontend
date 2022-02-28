import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import AboutPage from './pages/about';
import ServicePage from './pages/service';
import ContactPage from './pages/contact';
import Productpage from './pages/product';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/signup' component={SignupPage} exact />
        <Route path='/about' component={AboutPage} exact />
        <Route path='/services' component={ServicePage} exact />
        <Route path='/contact' component={ContactPage} exact />
        <Route path='/product' component={Productpage} exact />
      </Switch>
    </Router>
  );
}

export default App;
