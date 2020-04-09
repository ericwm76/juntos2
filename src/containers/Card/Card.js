import React from 'react';
import { Button, Card } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import presurveyQuestions from '../../presurveyQuestions'
import './Card.less';
 
const QuestionCard = ({props}) => {
  const {currentQuestion, agree, disagree} = props;

  const handleAgree = () => {
    agree();
  }

  const handleDisagree = () => {
    disagree();
  }

  return (
    <div className="card">
      <div>
        <Card style={{ width: 400, height: 300 }}>
          <p className="question">{presurveyQuestions[currentQuestion].eng}</p>
          <div className="card-buttons">
            <Button className="agree-button" type="primary" icon={<CheckOutlined />} size={"large"} shape={"circle"} onClick={handleAgree}/>
            <Button className="disagree-button" type="primary" icon={<CloseOutlined />} size={"large"} shape={"circle"} onClick={handleDisagree}/>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default QuestionCard;