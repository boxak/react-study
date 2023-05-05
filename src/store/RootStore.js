import MyStore from "./MyStore";
import UserStore from "./UserStore";

class RootStore {

  myStore;
  userStore;

  constructor() {
    this.myStore = new MyStore(this);
    this.userStore = new UserStore(this);
  }
  

}

export default RootStore;