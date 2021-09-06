import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../actions';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import RecipesDetails from './RecipesDetails';
import RecipesContainer from './RecipesContainer';
import '../styles/App.css';

function App() {
  const dispatch = useDispatch();
  const query = useSelector(state => state.search.query)
  useEffect(async () => {
    dispatch(fetchRecipes(query))
  }, [query])

  return (
    <div >
      <Router basename={process.env.PUBLIC_URL} >
        <Header />
        <Switch>
          <Route path="/" exact component={RecipesContainer}></Route >
          <Route path='/recipe' exact component={RecipesDetails}></Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
