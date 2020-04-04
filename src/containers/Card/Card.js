import React from 'react';
import './Card.less';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
 
const QuestionCard = () => {

  return (
    <div className="card">
      <div>
        <Card title="No quiero endeudarme" extra={<a href="#">?</a>} style={{ width: 300 }}>
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