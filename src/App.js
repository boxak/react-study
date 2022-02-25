import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import MyComponent from './MyComponent';

const App = () => {
  return <MyComponent name='react' favoriteNumber={1}>리액트</MyComponent>
}

export default App;
