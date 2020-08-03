import { LitElement, html } from 'lit-element';

// Actions

// Styles
import styles from '../styles/index.js';

// Components

// Redux
// class ___ extends connect(store)(LitElement) {

class WorkHistory extends LitElement {
  render() {
    return html`<section class=" work-history">
      <article class="row">
        <h2>Work History</h2>
        <div class="grid">
          {% for post in site.categories.work limit:4 %}
          <div class="grid-item">
            <a class="block-link  cf" href="{{site.baseurl}}{{post.url}}">
              <div class="linked-block w-h">
                <div class="company">
                  {% include {{post.logo}} %}
                  <h3>
                    {{post.company}} <i class="fal fa-chevron-right icon"></i>
                  </h3>
                </div>
                <!-- <p><img loading="lazy" class="f-l" src="{{site.baseurl}}{{post.index_image}}" alt="{{post.title}}" /></p> -->
                <h4>{{post.position}}</h4>
                <p>
                  <small
                    ><strong
                      >{{post.startDate | date: "%b %Y" }} &mdash;
                      {{post.endDate | date: "%b %Y" }}</strong
                    ></small
                  >
                </p>
              </div>
            </a>
          </div>
          {% endfor %}
        </div>
      </article>
    </section> `;
  }

  static get styles() {
    return styles;
  }
}

customElements.define('work-history', WorkHistory);
