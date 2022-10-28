import { useSelector } from 'react-redux';
import './profile.scss';

const renderOrder = item => {
  const { band, album, price, count, item_id: itemId } = item;
  return (
    <div className="profile-orders__item" key={itemId}>
      <span className="orders-info__band">Band: {band}</span>
      <span className="orders-info__album">Album: {album}</span>
      <span className="orders-info__price">
        Price: {price}
        <span>$</span>
      </span>
      <span className="orders-info__quantity">
        Quantity: {count}
        <span>pcs.</span>
      </span>
    </div>
  );
};

const Profile = () => {
  const [user, cart] = useSelector(state => [state.user, state.cart]);

  const { email, displayName, photoURL } = user?.user || {};

  return (
    <section className="profile" key={email}>
      <div className="container profile-container">
        <div className="profile-content fade">
          <h3 className="profile-header">Profile form</h3>

          <div className="profile-descr">
            <div className="profile-info">
              <h4 className="profile-descr__header">My log info</h4>

              <form className="profile-avatar" method="post">
                <div className="profile-info__avatar">
                  <img src={photoURL} alt="avatar" />
                </div>

                <label className="profile-avatar__label">
                  <input
                    className="profile-avatar__form"
                    type="file"
                    accept="image/png, image/jpeg"
                    name="data[file]"
                    placeholder="Upload file"
                  />
                  <button className="profile-avatar__btn btn-buy">
                    Upload File
                  </button>
                </label>
              </form>

              <ul className="profile-info__list">
                <li className="info-list info-list__name">
                  Name: <span>{displayName}</span>
                </li>
                <li className="info-list info-list__mail">
                  Email: <span>{email}</span>
                </li>
              </ul>

              <div className="profile-signOut">
                <button className="profile-signOut__btn btn-buy">
                  Sign Out
                </button>
              </div>
            </div>

            <div className="profile-orders">
              <h4 className="profile-orders__header">My Orders</h4>

              <div className="profile-orders__wrapper">
                {cart.items?.length && cart.items.map(renderOrder)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
