import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
//import { counter } from '../../store/counter';

import './cart.scss';
import { removeItemFromCart } from '../../store/cart';

const renderItems = (cart, onRemoveFromCartClick) => {
  const counted = Object.values(_.groupBy(cart.items, 'item_id')).map(
    group => ({ ...group[0], count: group.length })
  );
  return counted.map(song => {
    const {
      band,
      price,
      album,
      item_id,
      album_img,
      count,
      onDecrement,
      onIncrement
    } = song;

    return (
      <div className="modal-descr" key={item_id}>
        <div className="modal-descr__img">
          <img src={album_img} alt="album poster" />
        </div>

        <div className="modal-descr__info">
          <span className="modal-descr__band">Band: {band}</span>
          <span className="modal-descr__album">Album: "{album}"</span>
          <span className="modal-descr__price">Price: {price} $</span>

          <div className="modal-counter">
            <button className="modal-counter__minus" onClick={onDecrement}>
              V
            </button>
            <span className="modal-counter__quantity">{count}</span>
            <button className="modal-counter__plus" onClick={onIncrement}>
              V
            </button>
            <button
              className="modal-counter__remove"
              onClick={() => onRemoveFromCartClick(item_id)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  });
};

const Cart = () => {
  const [cart, user] = useSelector(state => [state.cart, state.user]);
  const dispatch = useDispatch();

  const onRemoveFromCartClick = itemId => {
    const newCartItems = cart.items.filter(s => s.item_id !== itemId);
    dispatch(
      removeItemFromCart({ userId: user?.user?.email, items: newCartItems })
    );
  };

  return (
    <section className="modal cart" id="cartModal">
      <div className="container">
        <div className="modal-content fade">
          <h3 className="modal-header">Your Choice</h3>

          <div className="modal-descr__wrapper">
            {renderItems(cart, onRemoveFromCartClick)}
          </div>

          <div className="modal-total">
            <span className="modal-total__text">Summary</span>
            <span className="modal-total__sumPrice">
              Price: 20<span>$</span>
            </span>
            <span className="modal-total__sumQuantity">
              Quantity: 1<span>pcs.</span>
            </span>
          </div>

          <div className="modal-btn">
            <Link to="/Buy">
              <button className="modal-btn btn-buy">Accept</button>
            </Link>

            <Link to="/Cart">
              <button className="modal-btn btn-buy">Cancel</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
