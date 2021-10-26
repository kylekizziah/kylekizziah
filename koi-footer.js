//DEFINE CONSTANTS HERE
const footer = 'koi-footer';
//DEFINE HTML ELEMENT CLASSES HERE
class KoiFooter extends KoiComponent {
  constructor() {
    super();
    this.tag = 'koi-footer';
    this.template.innerHTML = `
    <style>
      :host {
        --primary: #fff;
        --secondary: #ccc;
        --light: #0076c0;
        --medium: #003e7e;
        --dark: #0f3062;
        --seraph: Georgia, serif;
        --sans: Tahoma, Geneva, sans-serif;
        --direction: row;
        --mobile-direction: column;
        --justify: space-around;
        font-family: var(--sans);
        width: 100%;
      }
      footer {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: center;
        align-items: center;
        background-color: var(--light);
        color: var(--primary);
        font-weight: 600;
        font-size: 20px;
        padding-left: 40px;
        padding-right: 40px;
      }
      footer img {
          max-width: 200px;
      }
      .footerLeft {
        margin: 40px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 500px;
      }
      @media only screen and (max-width: 905px) {
        .footerLeft {
          width: 100%;
          justify-content: space-between;
        }
      }
      @media only screen and (max-width:575px) {
        .footerLeft {
          margin-left: 10px;
          margin-right: 10px;
        }
      }
      @media only screen and (max-width:515px) {
        .footerLeft {
          justify-content: center;

        }
      }
    </style>
    <footer>
      <div class="footerLeft">
        <div class="footerLogo">
          <img src="/images/footer_logo.png">
        </div>
        <div>
          <p style="margin-top:0px;">&copy;2020 myPilotPortal</p>
          <p><i>Carson City, Nevada</i></p>
          <p>All rights reserved.</p>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;">
        <span style="padding-bottom:20px;">Powered By KoiFrog LLC</span>
        <span style="padding-bottom:20px;">(775) 400-1123</span>
      </div>
    </footer>
  `;
  }
  selectElements() {
    this.shadowFooter = this.shadowRoot.getElementById('kfooter');
    this.shadowLogo = this.shadowRoot.getElementById('klogo');
  }
}

const register_footer = () => customElements.define(footer, KoiFooter);
window.WebComponents ? window.WebComponents.waitFor(register_footer) : register_footer();
