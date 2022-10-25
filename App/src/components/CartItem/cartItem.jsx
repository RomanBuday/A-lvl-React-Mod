const CartItem = props => {
  const { band, album_img, price, album, genre, year, vinyl, item_id } = props;
  return (
    <div className="shop-item" key={item_id}>
      <div className="shop-item__img">
        <img src={album_img} alt="releases" />
      </div>

      <div className="shop-item__descr">
        <div className="shop-info">
          <span className="shop-info__band">{band}</span>
          <span className="shop-info__price">{price}$</span>
        </div>

        <div className="shop-descr">
          <span className="shop-descr__album shop-descr__list">
            <span>Album: </span>
            {album}
          </span>
          <span className="shop-descr__year shop-descr__list">
            <span>Year: </span>
            {year}
          </span>
          <span className="shop-descr__genre shop-descr__list">
            <span>Genre: </span>
            {genre}
          </span>
          <span className="shop-descr__record shop-descr__list">
            <span>Vinyl: </span>
            {vinyl ? 'yes' : 'no'}
          </span>
        </div>

        <button className="shop-btn btn-buy">Add to Cart</button>
      </div>
    </div>
  );
};

export default CartItem;