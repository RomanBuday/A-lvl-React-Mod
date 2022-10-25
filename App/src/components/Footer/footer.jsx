import logo from '../../img/svg/logo.svg';
import icon_twitter from '../../img/svg/twitter.svg';
import icon_instagram from '../../img/svg/instagram.svg';
import icon_facebook from '../../img/svg/facebook.svg';

import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-top__menu">
            <ul className="footer-menu">
              <li className="footer-menu__item" href="#">
                New Releases
              </li>
              <li className="footer-menu__item" href="#">
                Store
              </li>
              <li className="footer-menu__item" href="#">
                Register
              </li>
            </ul>

            <ul className="footer-menu">
              <li className="footer-menu__item" href="#">
                Profile
              </li>
              <li className="footer-menu__item" href="#">
                Contacts
              </li>
              <li className="footer-menu__item" href="#">
                Login
              </li>
            </ul>
          </div>

          <div className="footer-contacts">
            <a className="footer-logo" href="/">
              <img src={logo} alt="logo Central music" />
            </a>

            <div className="footer-social">
              <a href="/" className="footer-social__icons icon-twitter">
                <img src={icon_twitter} alt="twitter" />
              </a>

              <a href="/" className="footer-social__icons icon-instagram">
                <img src={icon_instagram} alt="instagram" />
              </a>

              <a href="/" className="footer-social__icons icon-facebook">
                <img src={icon_facebook} alt="facebook" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <span className="foter-bottom__copyright">
          ©Copyright 2022 "Music Store" by Roman Budai
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;