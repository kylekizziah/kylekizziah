// Add NoSQL (Firebase RTDB) calls to your components
class KoiConnection{
  get reqStatus() {
    return this._reqStatus;
  }
  set reqStatus(e) {
    this._reqStatus= e;
  }
  get respStatus() {
    return this._respStatus;
  }
  set respStatus(e) {
    this._respStatus= e;
  }
  get selector() {
    return this._selector;
  }
  set selector(e) {
    this._selector= e;
  }
  get connector() {
    return this._connector;
  }
  set connector(e) {
    this._connector= e;
  }
  get localKey() {
    return this._localKey;
  }
  set localKey(e) {
    this._localKey= e;
  }
  constructor(){
    this.localKey = 'mpp';
  }
  //LOCAl DATA GET/SET
  async getLocalValue(path) {
    console.log('Beginning get() for local value: '+path);
    let state;
    try{
      state = await JSON.parse(localStorage.getItem(localKey));
    }catch(e){
      console.log('Error in getting local state:');
      console.log(e);
    }
    if (state) {
      console.log('localStorage data for for state: ');
      console.log(state);
      return state;
    } else {
      console.log('No State data stored locally in this Koifrog project.');
      return false;
    }
    return false;
  }
  async setLocalValue(path, value) {
    console.log('Beginning update to local value:' + path);
    console.log(value);
    let mpp = await JSON.parse(localStorage.getItem(localKey));
    let keys = path.split('/');
    let table = keys[0];
    let prop = keys[1];
    if(table && mpp[table]){
      console.log('Writing to table '+table);
      if(prop){
        console.log('Writing to key '+prop);
        mpp[table][prop] = value;
        console.log(mpp);
        localStorage.setItem(localKey, JSON.stringify(mpp));
        return true;
      }else if(table){
        mpp[table] = value;
        localStorage.setItem(localKey, JSON.stringify(mpp));
        return true;
      }
    }else{
      console.log('Could not write to mpp object:');
      console.log(mpp);
      mpp[table] = {prop : value};
      return true;
    }
    return false;
  }
}
