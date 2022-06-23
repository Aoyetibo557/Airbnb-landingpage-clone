import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h2>404 - Not Found!</h2>
    <Link to="/">Go Home</Link>
  </div>
);


function App() {
  return (
    <div className="app">
     <Router>

       <Switch>
         <Route path="/" exact component=""> 
            <Header />
            <Home />
            <Footer />
         </Route>

          <Route component={NotFound}>

          </Route>

       </Switch>
     </Router>
    </div>
  );
}

export default App;
