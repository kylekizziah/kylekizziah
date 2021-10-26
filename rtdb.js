// Add NoSQL (Firebase RTDB) calls to your components
class FirebaseRtdb extends KoiConnection {
  get path() {
    return this._path;
  }
  set path(e) {
    this._path= e;
  }
  constructor() {
    //call HTMLElement constructor
    super();
  }
  getRemoteValue(){}
  setRemoteValue(){}
}
