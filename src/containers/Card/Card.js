import React from 'react';
import { Button, Card } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import presurveyQuestions from '../../presurveyQuestions'
import './Card.less';
 
const QuestionCard = ({props}) => {
  

  return (
    <div className="card">
      <div>
        <Card style={{ width: 400, height: 300 }}>
          <p className="question">{presurveyQuestions[props.currentQuestion].eng}</p>
          <div className="card-buttons">
            <Button className="agree-button" type="primary" icon={<CheckOutlined />} size={"large"} shape={"circle"} />
            <Button className="disagree-button" type="primary" icon={<CloseOutlined />} size={"large"} shape={"circle"}/>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default QuestionCard;