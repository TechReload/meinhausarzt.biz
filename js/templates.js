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
                            <h4>Anschrift</h4>
                            <ul>
                                <li>Praxis Dr. med. Sven Schönthal</li>
                                <li>Facharzt für Innere Medizin (häusliche Versorgung)</li>
                                <li>Kronenstr. 43</li>
                                <li>73734 Esslingen am Neckar</li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Sprechzeiten</h4>
                            <div style="border:1px solid black">
                                <b>Montag - Mittwoch</b>
                                <p>8:30-12:00 Uhr und 16:00-18:00 Uhr</p>
                            </div>
                            <div style="border:1px solid black">
                                <b>Donnerstag - Freitag</b>
                                <p>8:30-12:00 Uhr</p>
                            </div>
                        </div>
                        <div class="footer-col">
                            <h4>Kontakt</h4>
                            <table>
                                <tr><th>Telefon:</th><td>0711 3451011</td></tr>
                                <tr><th>Fax:</th><td>0711 52853896</td></tr>
                                <tr><th>E-Mail:</th><td>dr.schoenthal@meinhausarzt.biz</td></tr>
                                <tr><th>Rezeptbestellung:</th><td>rezeptservice@meinhausarzt.biz</td></tr>
                                <tr><th>Überweisungsanfrage:</th><td>ueberweisungsservice@meinhausarzt.biz</td></tr>
                                <tr><th>Terminanfrage:</th><td>meintermin@meinhausarzt.biz</td></tr>
                            </table>
                        </div>
                    </div>
                </div>
            </footer>
        `;
  }
}

customElements.define("header-component", Header);
customElements.define("footer-component", Footer);
