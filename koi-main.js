//DEFINE CONSTANTS HERE
const main = 'koi-main';
//DEFINE HTML ELEMENT CLASSES HERE
class KoiMain extends KoiComponent {
  constructor() {
    super();
    this.tag = 'koi-main';
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
      .banner{
        width: 100%;
        height: 700px;
        background: url('/images/mpp_parallax_banner.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .container{
        flex-direction: column;
        flex-wrap: wrap;
        display: flex;
        padding-bottom: 30px;
        justify-content: center;
        align-items: center;
        width: 100%;
      }
      .container.dark {
        background-color: var(--dark);
      }
      .container.light {
        background-color: var(--medium);
      }
      .signupButton {
        color: #fff;
        background-color: var(--light);
        padding: 5px;
        padding-left: 20px;
        padding-right: 20px;
        line-height: 29pt;
        font-size: 20pt;
        font-weight: 600;
        border: none;
        width: 300px;
        height: auto;
        margin-top: 20px;
        margin-bottom: 20px;
      }
      .loginput input {
        line-height: 20px;
        font-size: 19px;
        padding: 10px;
        text-decoration: none;
        font-size: 13pt;
        font-weight: 600;
        padding-left: 10px;
      }
      @media only screen and (max-width: 960px){
        .banner{
          height: 285px;
        }
      }
      @media only screen and (max-width: 1200px){
        .banner{
          height: 385px;
        }
      }
      @media only screen and (max-width: 1475px){
        .banner{
          height: 485px;
        }
      }
      @media only screen and (max-width: 1675px){
        .banner{
          height: 600px;
        }
      }
    </style>
    <main id="kmain" class="kmain" name="kmain">
      <div class="banner"></div>
      <div class="container dark">
        <div style="max-width:900px;display:flex;justify-content:center;align-items:center;flex-direction:column;">
          <h2 style="color: #fff;
    font-weight: 900;
    margin: 10px;
    font-size: 25pt;
    letter-spacing: 1px;
    padding-top: 20px;">New to myPilotPortal?</h2>
          <button class="signupButton" onclick="location.href='/view/visitor/sign-up/'">SIGN UP</button>
          <p style="color: #fff;
    font-weight: 600;
    margin: 10px;
    max-width: 800px;
    font-size: 20pt;">myPilotPortal™ manages pilot history and underwriting information in a single secure site. No more long, confusing forms to fill out and fax. The online myPilotPortal™ forms are clear and easy to use. Access and update your pilot
            records anytime, anywhere through myPilotPortal</p>
        </div>
      </div>
      <div class="container light">
        <h2 style="color: #fff;font-weight: 900;margin: 10px;font-size: 25pt;">Need help?</h2>
        <p style="color: #fff;font-weight: 900;margin: 10px;font-size: 20pt;">Contact support at support@koifrog.com</p>
        <p style="color: #fff;
    font-weight: 600;
    margin: 10px;
    max-width: 800px;
    font-size: 20pt;">If you have any problems accessing your account, editing your information, or generating your PDF, you can contact us at support@koifrog.com. A myPilotPortal team member will respond to your email to ensure you get the support you
          need.</p>
      </div>
    </main>
    `;
  }
  selectElements() {
    this.shadowMain = this.shadowRoot.getElementById('kmain');
    this.shadowLogo = this.shadowRoot.getElementById('klogo');
  }
}

const register_main = () => customElements.define(main, KoiMain);
window.WebComponents ? window.WebComponents.waitFor(register_main) : register_main();
