//DEFINE CONSTANTS HERE
const cmmFooter = 'cmm-footer';
//DEFINE HTML ELEMENT CLASSES HERE
class CmmFooter extends KoiFooter {
  constructor() {
    super();
    this.tag = 'cmm-footer';
    this.template.innerHTML = `
    <style>
      :host {
        --dark: #1a233a;
        --medium: #272e48;
        --light: #737ea8;
        color: #fff;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
      }
      img{
        width:80px;
        height:80px;
      }
      .cmm-footer{
        width:100%;
        background-color:var(--medium);
        position:fixed;
        top:0px;
        left:0px;
        right:0px;
        display:flex;
        flex-direction:row;
        flex-wrap: wrap;
        justify-content: center;
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;
        min-height:60px;
      }
      .footer-click{
        display:flex;
        flex-direction:column;
        width:100%;
        align-items: center;
        align-content: center;
      }
      .profiles{
        width: 100%;
        display: flex;
        flex-direction:row;
        justify-content: start;
        overflow-x:scroll;
        padding-left:30px;
        padding-bottom:20px;
        padding-top:10px;
      }
      .profiles::-webkit-scrollbar {
        display: none;
      }
    </style>
    <footer class="cmm-footer" id="cmm-footer" name="cmm-footer">
      <div class="footer-click" id="footer-click" name="footer-click">
        <span>Search</span>
        <i class="fa-solid fa-chevron-down"></i>
      </div>
      <div class="profiles" id="profiles" name="profiles">
        <img src="/images/Navi_star.png">
        <img src="/images/Navi_profilecircle.png">
        <img src="/images/Navi_profilecircle.png">
        <img src="/images/Navi_profilecircle.png">
        <img src="/images/Navi_profilecircle.png">
        <img src="/images/Navi_profilecircle.png">
        <img src="/images/Navi_profilecircle.png">
      </div>
    </footer>
  `;
  }
  selectElements() {
    this.shadowFooter = this.shadowRoot.getElementById('kfooter');
    this.shadowLogo = this.shadowRoot.getElementById('klogo');
  }
}

const register_cmmFooter = () => customElements.define(cmmFooter, CmmFooter);
window.WebComponents ? window.WebComponents.waitFor(register_cmmFooter) : register_cmmFooter();
