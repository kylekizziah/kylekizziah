//DEFINE CONSTANTS HERE
const cmmMain = 'cmm-main';
//DEFINE HTML ELEMENT CLASSES HERE
class CmmMain extends KoiMain {
  constructor() {
    super();
    this.load = {
      'new' : this.loadCommish,
      'tracker' : this.loadCalendar,
      'home' : this.loadDashboard,
      'stream' : this.loadStarstream,
      'profile' : this.loadProfile
    };
    this.tag = 'cmm-main';
    this.template.innerHTML = `
    <style>
      :host {
        --dark: #1a233a;
        --medium: #272e48;
        --light: #737ea8;
        width:100%;
        height:100%;
        display:flex;
        background-color:transparent;
        justify-content: center;
      }
      .loaded{
        display:none;
      }
      .active{
        display:flex;
      }
      .cmm-main{
        width: calc(100% - 16px);
        background-color:var(--dark);
        height:100vh;
        overflow:scroll;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }
      .cmm-main::-webkit-scrollbar {
        display: none;
      }
    </style>
    <main id="cmm-main" class="cmm-main" name="cmm-main">
      <!-- if user is logged in show app -->
      <div class="loaded" id="commish"><cmm-commish></cmm-commish></div>
      <div class="loaded" id="profile"><cmm-profile></cmm-profile></div>
      <div class="loaded" id="calendar"><cmm-calendar></cmm-calendar></div>
      <div class="loaded active" id="dashboard"><cmm-dashboard></cmm-dashboard></div>
      <div class="loaded" id="starstream"><cmm-starstream></cmm-starstream></div>
      <!-- else show visitor page -->
    </main>
    `;
  }
  selectElements() {
    this.shadowMain = this.shadowRoot.getElementById('cmm-main');
    this.shadowComish = this.shadowRoot.getElementById('commish');
    this.shadowProfile = this.shadowRoot.getElementById('profile');
    this.shadowCalendar = this.shadowRoot.getElementById('calendar');
    this.shadowDashboard = this.shadowRoot.getElementById('dashboard');
    this.shadowStarstream = this.shadowRoot.getElementById('starstream');
    //this.renderContents = [this.shadowComish,this.shadowProfile,this.shadowCalendar,this.shadowDashboard,this.shadowStarstream]
    this.setMain();
  }
  clearActiveMain(){
    console.log('clearing active mains');
    try{
      this.shadowComish.classList.remove('active');

    }catch(e){
      console.log('Error clearing active links: '+e);
      return false;
    }
    try{
      this.shadowProfile.classList.remove('active');
    }catch(e){
      console.log('Error clearing active links: '+e);
      return false;
    }

    try{
      this.shadowCalendar.classList.remove('active');
    }catch(e){
      console.log('Error clearing active links: '+e);
      return false;
    }

    try{
      this.shadowDashboard.classList.remove('active');
    }catch(e){
      console.log('Error clearing active links: '+e);
      return false;
    }

    try{
      this.shadowStarstream.classList.remove('active');
    }catch(e){
      console.log('Error clearing active links: '+e);
      return false;
    }
    return true;
  }
  render_commish(){
    this.clearActiveMain();
    try{
      this.shadowComish.classList.add('active');
      return true;
    }catch(e){
      console.log('Error clearing active links: '+e);
      return false;
    }
  }
  render_calendar(){
    this.clearActiveMain();
    try{
      this.shadowCalendar.classList.add('active');
      return true;
    }catch(e){
      console.log('Error clearing active links: '+e);
      return false;
    }
  }
  render_dashboard(){
    this.clearActiveMain();
    try{
      this.shadowDashboard.classList.add('active');
      return true;
    }catch(e){
      console.log('Error clearing active links: '+e);
      return false;
    }
  }
  render_starstream(){
    this.clearActiveMain();
    try{
      this.shadowStarstream.classList.add('active');
      return true;
    }catch(e){
      console.log('Error clearing active links: '+e);
      return false;
    }
  }
  render_profile(){
    this.clearActiveMain();
    try{
      this.shadowProfile.classList.add('active');
      return true;
    }catch(e){
      console.log('Error clearing active links: '+e);
      return false;
    }
  }
  render(string){
    this.clearActiveMain();
    console.log('render:'+string);
    var fn = 'render_'+string;
    console.log('function:');
    return this[fn]();
  }
  setMain(){
    this.getRootNode().host.setChild('main',this);
  }
}

const register_cmmMain = () => customElements.define(cmmMain, CmmMain);
window.WebComponents ? window.WebComponents.waitFor(register_cmmMain) : register_cmmMain();
