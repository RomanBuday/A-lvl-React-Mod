import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../img/svg/logo.svg';
import icon_cart from '../../img/svg/icon_cart.svg';
import profile_icon from '../../img/svg/profile_icon.svg';

import './header.scss';

const Header = () => {
  function play() {}
  function pause() {}
  function stop() {}

  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <Link to="/">
            <img src={logo} alt="central music logo" />
          </Link>

          <nav>
            <ul className="header-menu">
              <li className="header-menu__item" href="#">
                New releases
              </li>
              <li className="header-menu__item" href="#">
                Store
              </li>
              <li className="header-menu__item" href="#">
                Register
              </li>
              <li className="header-menu__item" href="#">
                My Profile
              </li>
              <li className="header-menu__item" href="#">
                Contacts
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <div className="header-actions__cart header-actions__icon">
              <Link to="/cart">
                <img src={icon_cart} alt="cart icon" />
              </Link>
            </div>

            <div className="header-actions__profile header-actions__icon">
              <Link to="/login">
                <img src={profile_icon} alt="profile icon" />
              </Link>
            </div>
          </div>
        </div>

        <h1 className="header-title">
          Vinyl & Digital <br /> music with best price{' '}
        </h1>

        <div className="header-bottom">
          <div className="header-player">
            <button className="header-player__btn btn_play" onClick={play()}>
              Play
            </button>
            <button className="header-player__btn btn_pause" onClick={pause()}>
              Pause
            </button>
            <button className="header-player__btn btn_stop" onClick={stop()}>
              Stop
            </button>
          </div>

          <div className="header-barContainer">
            <div className="header-durationBar">
              <div className="header-positionBar">
                <span className="header-displayStatus"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;