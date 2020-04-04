import React from 'react';
import './Card.less';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
 
const QuestionCard = () => {
  const question = "No quiero endeudarme"

  return (
    <div className="card">
      <div>
        <Card style={{ width: 400, height: 300 }}>
          <p className="question">{question}</p>
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