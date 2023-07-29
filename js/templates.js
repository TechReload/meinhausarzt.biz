class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <header class="header">
            <nav class="navbar">
                <a href="index.html" class="logo" id="brand"><img src="img/logo.png"></a>
                <ul class="nav-links">
                    <li><a href="index.html" id="nav-link">Home</a></li>
                    <li><a href="reisemedizin.html" id="nav-link">Reisemedizin</a></li>
                    <li><a href="contact.html" id="nav-link">Urlaub</a></li>
                    <li><a href="patienteninfo.html" id="nav-link">Patienteninfo</a></li>
                </ul>
                <button type="button" class="button" id="button-header"><a href="#" target="_blank" rel="noopener noreferrer">Terminbuchung</a></button>
            </nav>
            <nav class="navbar-mobile">
                <a href="/index.html" class="logo" id="mobile-brand"><img src="img/logo.png"></span></a>
                <div onclick="mobileMenu(this)">
                    <img src="img/menu-btn.png" id="hamburger-icon">
                    <ul class="mobile-menu">
                        <li><a href="index.html" id="nav-link">Home</a></li>
                        <li><a href="reisemedizin.html" id="nav-link">Reisemedizin</a></li>
                        <li><a href="contact.html" id="nav-link">Urlaub</a></li>
                        <li><a href="patienteninfo.html" id="nav-link">Patienteninfo</a></li>
                        <li><button type="button" class="button" id="button-header"><a href="#" target="_blank" rel="noopener noreferrer">Terminbuchung</a></button></li>
                    </ul>
                </div>
            </nav>
        </header>
        `;
  }
}

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="footer-col">
                        <a href="https://www.google.com/maps/place/Kronenstra%C3%9Fe+43,+73734+Esslingen+am+Neckar/@48.7175723,9.3168188,17z/data=!3m1!4b1!4m6!3m5!1s0x4799c0e25be01beb:0xf561962797e44171!8m2!3d48.7175688!4d9.3193937!16s%2Fg%2F11bw431cbs?entry=ttu" target="_blank">
                            <h4>Anschrift</h4>
                            <p><b>Praxis Dr. med. Sven Schönthal</b></p>
                            <p>Facharzt für Innere Medizin (häusliche Versorgung)</p>
                            <p>Kronenstr. 43</p>
                            <p>73734 Esslingen am Neckar</p>
                        </a>
                        </div>
                        <div class="footer-col">
                            <h4>Sprechzeiten</h4>
                            <p><span>Montag - Mittwoch</span><br>8:30-12:00 Uhr und 16:00-18:00 Uhr</p>
                            <br>
                            <p><span>Donnerstag - Freitag</span><br>8:30-12:00 Uhr</p>
                        </div>
                        <div class="footer-col">
                            <h4>Kontakt</h4>
                            <a href="tel:0711%20345101"><p><span>Telefon:</span> 0711 3451011</p></a>
                            <p><span>Fax:</span> 0711 52853896</p>
                            <a href="mailto:dr.schoenthal@meinhausarzt.biz" target="_self"><p><span>E-Mail:</span> dr.schoenthal@meinhausarzt.biz</p></a>
                            <a href="mailto:rezeptservice@meinhausarzt.biz" target="_self"><p><span>Rezeptbestellung:</span> rezeptservice@meinhausarzt.biz</p></a>
                            <a href="ueberweisungsservice@meinhausarzt.biz" target="_self"><p><span>Überweisungsanfrage:</span> ueberweisungsservice@meinhausarzt.biz</p></a>
                            <a href="meintermin@meinhausarzt.biz" target="_self"><p><span>Terminanfrage:</span> meintermin@meinhausarzt.biz</p></a>
                        </div>
                    </div>
                </div>
            </footer>
        `;
  }
}

customElements.define("header-component", Header);
customElements.define("footer-component", Footer);
