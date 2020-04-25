import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  agreeWithQuestion,
  disagreeWithQuestion
} from './presurveySlice';
import { Button, Card } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import './Presurvey.less';

export const Presurvey = ({ id }) => {
  const dispatch = useDispatch();
  const current = useSelector(state => state.presurvey.current)
  const card = useSelector(state => state.presurvey.cards[current])
  const language = 'eng'

  return (
    <div className="card">
      <div>
        <Card style={{ width: 400, height: 300 }}>
          <p className="question">{card[language]}</p>
          <div className="card-buttons">
            <Button className="agree-button" type="primary" icon={<CheckOutlined />} size={"large"} shape={"circle"} onClick={() => dispatch(agreeWithQuestion())}/>
            <Button className="disagree-button" type="primary" icon={<CloseOutlined />} size={"large"} shape={"circle"} onClick={() => dispatch(disagreeWithQuestion())}/>
          </div>
        </Card>
      </div>
    </div>
  )
}