import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setSongs } from '../../store/music';
import CartItem from '../CartItem/cartItem';
import Search from '../Search/search';
import Filter from '../Filter/filter';

import './store.scss';
import { addItem } from '../../store/cart';

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
  const [music, filter] = useSelector(state => [state.music, state.filter]);
  const dispatch = useDispatch();

  const onAddToCartClick = (e, song) => {
    dispatch(addItem(song));
  };

  const fetchSongs = useCallback(async () => {
    const response = await fetch(
      'https://6351911a9d64d7c713032106.mockapi.io/api/music'
    );
    const json = await response.json();

    dispatch(setSongs(json));
  }, [dispatch]);

  useEffect(() => {
    fetchSongs().catch(console.error);
  }, [fetchSongs]);

  return (
    <section className="store">
      <div className="container">
        <div className="releases">
          <h2 className="releases-title store-title">New Releases</h2>

          <div className="releases-wrapper">
            <div className="releases-item">
              <div className="releases-item__img">
                <img src="img/album/TattooYou_Stones.jpg" alt="releases" />
              </div>

              <div className="releases-item__descr">
                <div className="releases-info">
                  <span className="releases-info__band">Rolling Stones</span>
                  <span className="releases-info__price">20$</span>
                </div>

                <div className="releases-descr">
                  <span className="releases-descr__album releases-descr__list">
                    <span>Album: </span>Tatoo you
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

                <button className="releases-btn btn-buy">Add to Cart</button>
              </div>
            </div>

            <div className="releases-item">
              <div className="releases-item__img">
                <img src="img/album/TattooYou_Stones.jpg" alt="releases" />
              </div>

              <div className="releases-item__descr">
                <div className="releases-info">
                  <span className="releases-info__band">Rolling Stones</span>
                  <span className="releases-info__price">20$</span>
                </div>

                <div className="releases-descr">
                  <span className="releases-descr__album releases-descr__list">
                    <span>Album: </span>Tatoo you
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

                <button className="releases-btn btn-buy">Add to Cart</button>
              </div>
            </div>

            <div className="releases-item">
              <div className="releases-item__img">
                <img src="img/album/TattooYou_Stones.jpg" alt="releases" />
              </div>

              <div className="releases-item__descr">
                <div className="releases-info">
                  <span className="releases-info__band">Rolling Stones</span>
                  <span className="releases-info__price">20$</span>
                </div>

                <div className="releases-descr">
                  <span className="releases-descr__album releases-descr__list">
                    <span>Album: </span>Tatoo you
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

                <button className="releases-btn btn-buy">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>

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
