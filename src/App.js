import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NotFound from './components/NotFound';



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
