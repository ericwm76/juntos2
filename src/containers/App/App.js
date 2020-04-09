import React, { Component } from 'react';
import Nav from '../Nav/Nav'
import Main from '../Main/Main'
import './App.less';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      agreedQuestions: [],
      disagreedQuestions: [],
      language: 'eng'
    };
  }

  agree = (question) => {
    const count = this.state.currentQuestion + 1;
    this.setState({
      currentQuestion: count, 
      agreedQuestions: [this.state.agreedQuestions, question]
    });
  }

  disagree = (question) => {
    const count = this.state.currentQuestion + 1;
    this.setState({
      currentQuestion: count, 
      disagreedQuestions: [this.state.disagreedQuestions, question]
    });
  }

  toggleLanguage = () => {

  }

  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <Main agree={this.agree} disagree={this.disagree} currentQuestion={this.state.currentQuestion}></Main>
      </div>
    )
  }
}

export default App;
