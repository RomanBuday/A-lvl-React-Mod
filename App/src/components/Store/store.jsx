import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAllSongs } from '../../store/music';
import CartItem from '../CartItem/cartItem';
import Search from '../Search/search';
import Filter from '../Filter/filter';
import Slider from '../Slider/slider';

import './store.scss';
import { addToCart } from '../../store/cart';

const renderCartItems = (allSongs, filter, onAddToCartClick) => {
  const songs =
    filter.search.length < 3
      ? allSongs
      : allSongs.filter(s =>
          s.band.toLowerCase().includes(filter.search.toLowerCase())
        );

  const sortedSongs = filter.sort.price
    ? [...songs].sort((a, b) => (Number(a.price) > Number(b.price) ? 1 : -1))
    : songs;

  return sortedSongs.map(cartItem => (
    <CartItem
      {...cartItem}
      key={cartItem.item_id}
      onAddToCartClick={onAddToCartClick}
    ></CartItem>
  ));
};

const Store = () => {
  const [music, filter, cart, user] = useSelector(state => [
    state.music,
    state.filter,
    state.cart,
    state.user
  ]);
  const dispatch = useDispatch();

  const onAddToCartClick = (e, song) => {
    dispatch(
      addToCart({ userId: user?.user?.email, items: [...cart.items, song] })
    );
  };

  useEffect(() => {
    dispatch(fetchAllSongs());
  }, []);

  return (
    <section className="store">
      <div className="container">
        <Slider />

        <div className="shop">
          <h2 className="shop-title store-title">Music Shop</h2>
          <Search />

          <div className="shop-container">
            <Filter />

            {music.songs.length && (
              <div className="shop-wrapper">
                {renderCartItems(music.songs, filter, onAddToCartClick)}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Store;
