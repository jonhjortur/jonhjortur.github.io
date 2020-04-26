import React from "react"

const Footer = () => (
  <div className="site-footer">
    <h4 className="text-center">Kannski titill á síðunni?</h4>
    <p className="text-center">Samfélagsmiðlar og ég veit ekki hvað...</p>
    <div className="footer-social-links">
      <ul className="social-links-list">
        <li>
          <a
            href="https://www.facebook.com/jonhjorturdotcom/"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <i class="fab fa-facebook-f fa-2x"></i>
          </a>
        </li>
        <li>
          <a
            href="https://stallman.org/facebook.html"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter"
          >
            <i class="fab fa-twitter fa-2x"></i>
          </a>
        </li>
        {/*<li>
          <a
            href="https://stallman.org/facebook.html"
            target="_blank"
            rel="noopener noreferrer"
            className="google"
          >
            <i class="fab fa-google fa-2x"></i>
          </a>
        </li>
        <li>
          <a
            href="https://stallman.org/facebook.html"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube"
          >
            <i class="fab fa-youtube fa-2x"></i>
          </a>
        </li>
        <li>
          <a
            href="https://stallman.org/facebook.html"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            <i class="fab fa-github fa-2x"></i>
          </a>
        </li>*/}
        {/*
          https://stallman.org/google.html

          */}
      </ul>
    </div>
  </div>
)

export default Footer
