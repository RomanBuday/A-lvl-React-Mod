import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const SongPage = props => {
  const { itemId } = useParams();
  const music = useSelector(state => state.music);
  const navigate = useNavigate();

  const song = music.songs.find(s => s.item_id === itemId);
  if (!song) {
    return navigate('/404');
  }

  const {item_id, album, album_img, band, price, genre, year, vinyl} = song;

  return (
    <div className="songpage container">
      <div className="shop-item songpage-item" key={item_id}>
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
        </div>
      </div>
    </div>
  );
};

export default SongPage;
