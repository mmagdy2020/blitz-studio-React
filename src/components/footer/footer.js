import React from 'react';
import './footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer" className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-8 d-none d-sm-none d-md-block">
              <div className="nav navbar-expand">
                <span className="nav-text">Connect</span> <ul>
                  <li className="nav-item"><a href="https://fb.com/blitzstudio.dance" className="nav-link" target="_blank" rel="noopener noreferrer" >Facebook</a></li>
                  <li className="nav-item"><a href="https://www.instagram.com/blitzstudio.dance/" className="nav-link" target="_blank" rel="noopener noreferrer" >Instagram</a></li>
                  <li className="nav-item"><a href="mailto:sophia@BlitzStudio.Dance" className="nav-link" target="_blank" rel="noopener noreferrer" >YouTube</a></li>
                  <li className="nav-item"><a href="https://www.youtube.com/channel/UCY-sN-7aDMWI7En-9njqg2Q/featured" className="nav-link" target="_blank" rel="noopener noreferrer" >Email</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 text-right">
              2020 Copyright Blitz Studio
            </div>
          </div>
        </div>
      </footer>
    );
  }

}

export default Footer;