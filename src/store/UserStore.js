import { action, computed, makeObservable, observable } from "mobx";

class UserStore {

  userName = '';

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      userName : observable,
      getUserName : computed,
      setUserName : action,
    });
  }

  get getUserName() {
    return this.userName;
  }

  setUserName(userName) {
    this.userName = userName;
  }

}

export default UserStore;