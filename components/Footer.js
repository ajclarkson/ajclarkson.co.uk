import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment'

class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <p>&copy;2013&mdash;{ moment(Date.now()).format('YYYY')} Handcrafted by <Link to="/about/">Adam Clarkson</Link>, powered by <Link to="https://github.com/gatsbyjs/gatsby">Gatsby</Link> and <Link to="https://gitlab.com">Gitlab</Link></p>
            </div>
            <div className="col-md-4">
            <ul className="social-links">
              <li className="social-links__item">
                <Link to="https://twitter.com/ajclarkson"><i className="fa fa-twitter"></i></Link>
              </li>
              <li className="social-links__item">
                <Link to="https://instagram.com/ajclarkson"><i className="fa fa-instagram"></i></Link>
              </li>
              <li className="social-links__item">
                <Link to="https://dribbble.com/ajclarkson"><i className="fa fa-dribbble"></i></Link>
              </li>
              <li className="social-links__item">
                <Link to="https://gitlab.com/ajclarkson"><i className="fa fa-gitlab"></i></Link>
              </li>
              <li className="social-links__item">
                <Link to="https://uk.linkedin.com/in/ajclarkson"><i className="fa fa-linkedin"></i></Link>
              </li>
            </ul>
            </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Footer;
