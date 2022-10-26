import React, { useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut} from 'firebase/auth';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSelector, useDispatch } from 'react-redux';

import logo from '../../img/svg/logo.svg';
import icon_cart from '../../img/svg/icon_cart.svg';
import profile_icon from '../../img/svg/profile_icon.svg';

import SignIn from '../SignIn/signing';

import './header.scss';
import { getApp, getUserCart, setUserCart } from '../../firebase';
import { setUser, removeUser } from '../../store/user';

const app = getApp();
const auth = getAuth(app);

const Header = () => {
  const cart = useSelector(state => state.cart);

  const [user] = useAuthState(auth);
  if (user) {
    setUserCart(user.email, cart.items);
  }

  // TODO:
  // const fetchCart = useCallback(async () => {
  //   const cartItems = await getUserCart();

  //   dispatch(setUserCart(cartItems.cartItems));
  // }, []);

  // useEffect(() => {
  //   fetchCart().catch(console.error);
  // }, [user]);

  const dispatch = useDispatch();

  const onClickSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        console.log('Signed out');
      })
      .catch(error => {
        console.error(error);
      });
  };

  const onClickSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        dispatch(setUser(user));
      })
      .catch(error => {
        debugger;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  function play() {}
  function pause() {}
  function stop() {}

  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <a class='header-top__logo' href="/">
            <img src={logo} alt="central music logo" />
          </a>

          <nav>
            <ul className="header-menu">
              <li className="header-menu__item" href="">
                New releases
              </li>
              <li className="header-menu__item" href="">
                Store
              </li>
              <li className="header-menu__item" href="">
                Register
              </li>
              <Link to="/Profile"><li className="header-menu__item" href="">
                My Profile
              </li></Link>
              <Link to="/NotFound"><li className="header-menu__item" href="">
                Contacts
              </li></Link>
            </ul>
          </nav>

          <div className="header-actions">
            {user && (
              <div className="header-actions__cart header-actions__icon fade">
                <Link to="/cart">
                  <img src={icon_cart} alt="cart icon" />
                  <div className='header-actions__orders'>
                    <span>{cart.items.length}</span>
                  </div>
                </Link>
              </div>
            )}
            <div className="header-actions__profile header-actions__icon">
              {user ? (
                <div>
                  <Link to="/Profile">
                    <img src={profile_icon} alt="profile icon" />
                  </Link>{' '}
                  <button className='btn-buy header-actions__btn' onClick={onClickSignOut}>Sign out</button>{' '}
                </div>
              ) : (
                <SignIn onClick={onClickSignIn} />
              )}
            </div>
          </div>
        </div>

        <div className="header-wrapper">
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
      </div>
    </header>
  );
};

export default Header;
