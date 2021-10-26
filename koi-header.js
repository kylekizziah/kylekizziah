//DEFINE CONSTANTS HERE
const koiHeader = 'koi-header';
//DEFINE HTML ELEMENT CLASSES HERE
class KoiHeader extends KoiComponent {
  constructor() {
    super();
    this.tag = 'koi-header';
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
  			width: 100%;
      }
  		img{
  			width: fit-content;
  		}
  		.kheader {
  			display: flex;
  			color: var(--dark);
  			background: rgba(252,252,255,1);
  			font-family: var(--sans);
  			flex-direction: var(--direction);
  			justify-content: var(--justify);
  			border-bottom: solid 1px rgb(90,90,90);
  			padding-right: 5px;
  			width:100%;
        flex-wrap: wrap;
  		}
  		.klogo{
  			max-width:380px;
  		}
  		.klogoContainer{
  			display: flex;
  			flex-direction: column;
  			justify-content: center;
  			margin-left: 20px;
        align-items:center;
  		}
      .alert-banner{
        width: 100%;
        display: flex;
        justify-content: center;
        background-color:var(--light);
        flex-wrap: wrap;
      }
      .alert{
        width: 100%;
        max-width: 680px;
        color: white;
        display: flex;
        justify-content: space-between;
        font-size: 17px;
        font-weight: 600;
      }
      .hours {
        width: 100%;
        text-align: center;
        color: white;
        font-weight: 600;
        font-size: 18px;
        margin-top: 5px;
      }
      @media only screen and (max-width: 700px) {
        .alert{
          flex-direction: column;
          align-items: center;
          font-size: 20px;
          font-weight: 600;
        }

      }
      @media only screen and (max-width: 500px) {
        .kheader{
          flex-wrap:wrap;
        }
        .klogoContainer{
          width:100%;
        }
      }
  		@media only screen and (max-width: 455px) {
  			:host{
  				width: 100%;
  			}
  			.kheader{
  				width: 100%;
  			}
  			.klogo{
  				max-width:100%;
  			}
        .roleItems{
          padding-left:20px;
        }
      	.kheader{
  				flex-direction: row;
  				border-bottom: solid 1px rgb(90,90,90);
  				border-right: none;
  				justify-content: space-evenly;
  				width: 100%;
  				height: auto;
  			}
  			.klogoContainer{
      		margin-top: 10px;
  			}
      }
    </style>
    <header id="kheader" class="kheader" name="kheader">
  		<div id="klogoContainer" class="klogoContainer" name="klogoContainer">
  			<img id="klogo" class="klogo" name="klogo" src="/images/mpp_header_logo.png">
  		</div>
  		<koi-nav role="presentation"></koi-nav>
    </header>`;
  }
  selectElements(){
    this.shadowHeader = this.shadowRoot.getElementById('kheader');
    this.shadowLogo = this.shadowRoot.getElementById('klogo');
  }
}
//<koi-header></koi-header>
const register_koiHeader = () => customElements.define(koiHeader, KoiHeader);
window.WebComponents ? window.WebComponents.waitFor(register_koiHeader) : register_koiHeader();
