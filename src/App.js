import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import DogList from './DogList';
import DogDetails from './DogDetails';
import dogs from './dogs';

function App() {
  const dogNames = dogs.map(dog => dog.name);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogs={dogNames} />
        <Switch>
          <Route exact path="/dogs/:name">
            <DogDetails />
          </Route>
          <Route exact path="/dogs">
            <DogList dogs={dogNames} />
          </Route>
          <Redirect to="/dogs" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
