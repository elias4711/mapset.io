import React from 'react'
import {FormattedMessage, IntlProvider} from 'react-intl'
import { Link } from 'gatsby'

const Footer = class extends React.Component {
  state = {
    locale: this.props.locale,
    messages: this.props.messages['generic']['footer']
  }
  
  render() {
    return (
        <IntlProvider locale={this.state.locale} messages={this.state.messages}>
          <footer className="footer">
            <div className="menu">
              <ul className="menu-list">
                <li>
                  <Link className="navbar-item" to="/">
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link className="navbar-item" to="/">
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <span className="is-smaller"><FormattedMessage id="Der" /> </span>
              <span className="brandName">Trafimage </span>
              <span className="is-bolder title">PlanEditor </span>
              <span className="is-smaller"><FormattedMessage id="wird unterstützt durch" /> </span>
              <span className="logo">EVOQ</span>
              <span> | </span>
              <span className="logo">geOps</span>
            </div>
          </footer>
        </IntlProvider>
    )
  }
}

export default Footer
