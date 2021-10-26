//DEFINE HTML ELEMENT CLASSES HERE
class KoiInput extends KoiComponent {
  get connection() {
    return this._connection;
  }
  set connection(connection) {
    this._setAttribute('connection', connection);
    return this.hasAttribute('connection');
  }
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(placeholder) {
    this._setAttribute('placeholder', placeholder);
    return this.hasAttribute('placeholder');
  }
  get label() {
    return this._label;
  }
  set label(val) {
    this._setAttribute('label', val);
    return this.hasAttribute('label');
  }
  constructor() {
    super();
    //ASSIGN YOUR CONNECTION HERE FOR NOW
    //SHOULD REALLY MAKE PILOTCOMPONENTS INSTEAD
    this.assignConnection(this, FirebaseRtdb);
  }
  debounce(callback, delay) {
    let timeout;
    return function() {
      clearTimeout(timeout);
      timeout = setTimeout(callback, delay);
    }
  }
  async getLocalValue() {
    console.log('Beginning get() for local value: '+this.path);
    let koiState;
    try{
      koiState = await JSON.parse(localStorage.getItem('mpp'));
    }catch(e){
      console.log('Error in getting local state:');
      console.log(e);
    }
    if (koiState) {
      console.log('localStorage data for for state: ');
      console.log(koiState);
      return koiState;
    } else {
      console.log('No State data stored locally in this Koifrog project.');
      return false;
    }
    return false;
  }
  async setLocalValue(value) {
    console.log('Beginning update to local value:' + this.path);
    console.log(value);
    let mpp = await JSON.parse(localStorage.getItem('mpp'));
    let keys = this.path.split('/');
    let table = keys[0];
    let prop = keys[1];
    if(table && mpp[table]){
      console.log('Writing to table '+table);
      if(prop){
        console.log('Writing to key '+prop);
        mpp[table][prop] = value;
        console.log(mpp);
        localStorage.setItem('mpp', JSON.stringify(mpp));
        return true;
      }else if(table){
        mpp[table] = value;
        localStorage.setItem('mpp', JSON.stringify(mpp));
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
  //// UX ////
  setViewWait() {
    this.UXElement.innerHTML = this.waitMsg ? this.waitMsg + " " + this.wait : this.wait, this.UXElement.classList.remove("koiErr"), this.UXElement.classList.remove("koiSuccess"), this.UXElement.classList.remove("koiReady"), this.UXElement.classList.add("koiWait")
  }
  setViewReady() {
    this.UXElement.innerHTML = this.readyMsg ? this.readyMsg + " " + this.ready : this.ready, this.UXElement.classList.remove("koiErr"), this.UXElement.classList.remove("koiSuccess"), this.UXElement.classList.remove("koiWait"), this.UXElement.classList.add("koiReady")
  }
  setViewSuccess() {
    this.UXElement.innerHTML = this.succMsg ? this.succMsg + " " + this.succ : this.succ, this.UXElement.classList.remove("koiErr"), this.UXElement.classList.remove("koiWait"), this.UXElement.classList.remove("koiReady"), this.UXElement.classList.add("koiSuccess");
  }
  setViewFail() {
    this.UXElement.innerHTML = this.errMsg ? this.errMsg + " " + this.err : this.err, this.UXElement.classList.remove("koiSuccess"), this.UXElement.classList.remove("koiWait"), this.UXElement.classList.remove("koiReady"), this.UXElement.classList.add("koiErr");
  }
  updateView(inputFeedback) {
    if(inputFeedback){
      
    }else{

    }
    //if input is good: set view waiting - set view success - set view ready
    //if input is bad: set view waiting - set view bad
  }
  //// DATA ////
  async assignConnection(inputClass, connectionClass){
    // copy the methods
    Object.assign(inputClass, connectionClass);
  }
}
  const register_kinput = () => customElements.define('koi-input', KoiInput);
  window.WebComponents ? window.WebComponents.waitFor(register_kinput) : register_kinput();
