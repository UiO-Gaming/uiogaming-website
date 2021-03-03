import React from "react"

import logo from "../images/logo.jpg"

const Footer = () => (
  <footer>
    <div className="container">
      <div className="split footer-container">

        <div className="split">
          <div>
            <img src={logo} />
          </div>
          <ul className="remove-bullets">
            <li><a href="https://vedtekter.uiogaming.no">Vedtekter</a></li>
            <li><a href="https://github.com/UiO-Gaming/uiogaming-website/">Kildekode til nettside</a></li>
            <li><a href="https://uiogaming.sanity.studio/">Adminområdet</a></li>
          </ul>
        </div>

        <div>
          <p>Nettsiden er utviklet og driftet av foreningen</p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
