//DEFINE CONSTANTS HERE
const cmmNav = 'cmm-nav';
//DEFINE HTML ELEMENT CLASSES HERE
class CmmNav extends KoiNav {
  //what props change in a nav that we need to monitor?
  constructor() {
    super();
    this.tag = 'cmm-nav';
    this.template = document.createElement('template');
    this.parent = this.getRootNode().host;
    this.template.innerHTML = `
      <style>
        :host{
          width:100%;
        }
        img{
          width:90%;
          max-width:70px;
          opacity: 30%;
          transition: opacity .2s linear .2s;
          transition-delay: 0ms;
        }
        .active img{
          opacity: 100%;
        }
        a{
          text-align: center;
          text-decoration: none;
          width:calc(100% / 5);
        }
        .cmm-nav{
          width:100%;
          display: flex;
          justify-content: space-around;
        }
      </style>
    	<nav id="cmm-nav" class="cmm-nav" name="cmm-nav">
      <!-- dashboard/artist/commission/new/ -->
        <a id="commish" onclick="this.getRootNode().host.loadContent(event,'commish')">
          <img src="/images/Navi_tag.png">
        </a>
        <!-- dashboard/artist/tracker -->
        <a id="calendar" onclick="this.getRootNode().host.loadContent(event,'calendar')">
          <img src="/images/stack_gradientstroke.png">
        </a>
        <!-- dashboard/artist/ -->
        <a id="dashboard" class="active" onclick="this.getRootNode().host.loadContent(event,'dashboard')">
          <img src="/images/CM_gradientsolid_reflect.png">
        </a>
        <!-- dashboard/artist/stream/ -->
        <a id="starstream" onclick="this.getRootNode().host.loadContent(event,'starstream')">
          <img src="/images/Navi_star.png">
        </a>
        <!-- dashboard/artist/profile -->
        <a id="profile" onclick="this.getRootNode().host.loadContent(event,'profile')">
          <img src="/images/Navi_profilecircle.png">
        </a>
    	</nav>
      `;
  }
  selectElements(){
    this.shadowNav = this.shadowRoot.getElementById('cmm-nav');
    this.links= {
      'commish' : this.shadowRoot.getElementById('commish'),
      'calendar' : this.shadowRoot.getElementById('calendar'),
      'dashboard' : this.shadowRoot.getElementById('dashboard'),
      'starstream' : this.shadowRoot.getElementById('starstream'),
      'profile' : this.shadowRoot.getElementById('profile')
    };
    this.setNav();
  }
  clearActiveLinks(){
    try{
      for(let link in this.links){
        this.links[link].classList.remove('active');
      }
      return true;
    }catch(e){
      console.log('Error clearing active links: '+e);
      return false;
    }
  }
  loadContent(event,content_label){
    let cleared = this.clearActiveLinks();
    console.log(content_label);
    let link_element = this.links[content_label];
    link_element.classList.add('active');
    //send string up to cmm-main
    //this.getRootNode().host.fireEvent(content_label);
  }
  setNav(){
    this.getRootNode().host.setNav(this.shadowNav);
  }
}
const register_cmmNav = () => customElements.define(cmmNav, CmmNav);
window.WebComponents ? window.WebComponents.waitFor(register_cmmNav) : register_cmmNav();
