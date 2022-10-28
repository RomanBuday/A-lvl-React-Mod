import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './slider.scss';

import slide from '../../img/album/TattooYou_Stones.jpg';

const Slider = () => {
  return (
    <div className="releases">
      <h2 className="releases-title store-title">New Releases</h2>

      <div className="releases-wrapper">
        <div className="releases-item">
          <div className="releases-item__img">
            <img src={slide} alt="releases" />
          </div>

          <div className="releases-item__descr">
              
            <div className="releases-descr">
              <span className="releases-descr__album releases-descr__list">
                <span>Album: </span>"Tatoo you"
              </span>

              <span className="releases-descr__price releases-descr__list">
                <span>Price: </span>20$
              </span>

              <span className="releases-descr__band releases-descr__list">
                <span>Band: </span>Rolling Stones
              </span>

              <span className="releases-descr__year releases-descr__list">
                <span>Year: </span>1987
              </span>

              <span className="releases-descr__genre releases-descr__list">
                <span>Genre: </span>rock&roll
              </span>
              
              <span className="releases-descr__record releases-descr__list">
                <span>Record: </span>vinyl
              </span>
            </div>

            {/* <button className="releases-btn btn-buy">Add to Cart</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
