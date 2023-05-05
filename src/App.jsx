import { observer } from 'mobx-react';
import './App.css';
import React from 'react';
import { useStore } from './context/MobxContext';

const App = (props) => {

  const rootStore = useStore();

  const userStore = rootStore.userStore;
  const myStore = rootStore.myStore;

  const inputOnKeyUp = (e) => {
    userStore.setUserName(e.target.value);
  }

  return(
    
    <div>
      <p>{myStore.getCount}</p>
      <button onClick={() => myStore.increase()}>플러스</button>
      <button onClick={() => myStore.decrease()}>마이너스</button>
      <input type="text" 
        onKeyUp={(e)=>inputOnKeyUp(e)}
      />
      <span>{userStore.userName}</span>
    </div>
    
  );
}

export default observer(App);
