import { LitElement, html } from 'lit-element';

// Actions

// Styles
import styles from '../styles/index.js';

// Components

// Redux
// class ___ extends connect(store)(LitElement) {

class Podcast extends LitElement {
  render() {
    return html`<section class="podcast">
      <article class="row">
        <div class="row-header">
          <h2>Hosted Podcasts</h2>
        </div>
        <div class="grid by-2">
          <div class="module">
            <div class=" grid">
              <img
                loading="lazy"
                src="/assets/img/podcast/compassofdesign.jpg"
                class="f-l"
                alt="Compass of Design"
              />
              <div class="module">
                <h6>Design</h6>
                <h3>Compass of Design Podcast</h3>
                <h4>Host</h4>
                <h4>Darian Rosebrook</h4>
              </div>
            </div>
            <article class="row">
              <iframe
                title="The episodes for the Compass of Design podcast"
                src="https://share.transistor.fm/e/bite-sized-design/latest"
                width="100%"
                height="180"
                frameborder="0"
                scrolling="no"
                seamless="true"
                style="width:100%; height:180px;"
              ></iframe>
            </article>
          </div>
          <div class="module">
            <div class=" grid">
              <img
                loading="lazy"
                src="assets/img/podcast/responsibly-irresponsible.png"
                class="f-l"
                alt="Responsibly Irresponsible"
              />
              <div class="module">
                <h6>Life, Adulting</h6>
                <h3>Responsibly Irresponsible</h3>
                <h4>Co-Host</h4>
                <h4>Evan, Marisa, Darian, and Sara</h4>
              </div>
            </div>
            <article class="row">
              <h3>Episodes Launching Soon</h3>
              <!-- <iframe title="The episodes for the Responsibly Irresponsible podcast" src='https://share.transistor.fm/e/responsiblyirresponsible/latest' width='100%' height='180' frameborder='0' scrolling='no' seamless='true' style='width:100%; height:180px;'></iframe> -->
            </article>
          </div>
        </div>
      </article>
    </section>`;
  }

  static get styles() {
    return styles;
  }
}

customElements.define('podcast-list', Podcast);
