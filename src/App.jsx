import './App.css';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import React, { Component } from 'react';
import IterationSample from './IterationSample';
import LifeCycleSamle from './LifeCycleSamle';
import ErrorBoundary from './ErrorBoundary';

function getRandomColor() {
  return '#'+Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {

  state = {
    color : '#000000'
  }

  handleClick = () => {
    this.setState({
      color : getRandomColor()
    });
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSamle color = {this.state.color}/>
        </ErrorBoundary>
      </div>
    );
  };
}

export default App;
