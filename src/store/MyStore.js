import { action, computed, makeObservable, observable } from "mobx";

class MyStore {

  count = 0;

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      count : observable,
      increase : action,
      decrease : action,
      getCount : computed,
    });
  }

  increase = () => {
    this.count++;
    console.log(this.count);
  }

  decrease = () => {
    this.count--;
  }

  get getCount() {
    return this.count;
  }

}

export default MyStore;