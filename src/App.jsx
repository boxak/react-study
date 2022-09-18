import './App.css';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';

function App() {
  const name = '리액트';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16,
  };
  //

  return (
    // <MyComponent name="React"
    // favoriteNumber={1}> 리액트</MyComponent>
    <EventPractice />
  );
}

export default App;
