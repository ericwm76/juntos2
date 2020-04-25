import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import Nav from '../Nav/Nav'
import { Presurvey } from '../../features/presurvey/Presurvey';

const App = () => {

  return (
    <>
      <Nav />
      <Route exact path="/presurvey">
        <Presurvey/>
      </Route>
    </>
  )
}

export default App