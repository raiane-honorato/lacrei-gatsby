import React from "react";
import { Link } from "gatsby";
import logo from "./../img/global-nav-logo.svg"

export default function Navbar() {
  return (
    <div class="nav-container">
      <div class="container-md ">
        <nav class="navbar navbar-expand-md navbar-light py-1">
          <a class="navbar-brand" href="/">
            <img src={logo} alt="Lacrei" width="40" height="40"
              class="d-inline-block align-top"/>
            <span class ="hidden">Lacrei</span>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#toggleMobileMenu" aria-controls="toggleMobileMenu" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse navbar-dropdown" id="toggleMobileMenu">

            <ul class="navbar-nav ms-auto text-center">
              <li>
                <a class="nav-link ms-4" href="./pages/lacrei/lacrei-who-we-are.html">LACREI</a>
              </li>
              <li>
                <a class="nav-link ms-4" href="./pages/lacrei-saude/lacrei-saude.html">LACREI SAÚDE</a>
              </li>
              <li>
                <a class="nav-link ms-4" href="/">AJUDA</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}