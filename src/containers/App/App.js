import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import Nav from '../Nav/Nav'


import {
  agreeWithQuestion,
  disagreeWithQuestion
} from '../../features/presurvey/presurveySlice'
import { Presurvey } from '../../features/presurvey/Presurvey';

const App = () => {
  const dispatch = useDispatch()
  const cards = useSelector(state => state.presurvey.cards)
  const current = useSelector(state => state.presurvey.current)

  return (
    <>
      <Nav />
      <Route exact path="/presurvey">
        <Presurvey id={current}/>
      </Route>
    </>
  )
}

export default App