import React from 'react';
import QuestionCard from '../Card/Card'
import './Main.less';

const Main = (props) => {
  return (
    <div className="main">
      <QuestionCard props={props}></QuestionCard>
    </div>
  )
}

export default Main;