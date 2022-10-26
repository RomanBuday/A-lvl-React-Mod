import './profile.scss';

const Profile = () => {
  return (
    <section className="profile" id="profileModal">
      <div className="container profile-container">
        <div className="profile-content fade">

          <div className="profile-cross" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" /></svg>
          </div>

          <h3 className="profile-header">Profile form</h3>

          <div className="profile-descr">
            <div className="profile-info">
              <h4 className="profile-descr__header">My log info</h4>

              <div className="profile-info__avatar">
                <img src="" alt="avatar"/>
              </div>

              <ul className="profile-info__list">
                <li className="info-list info-list__name">Name: <span>Roman</span></li>
                <li className="info-list info-list__surname">Surname: <span>Budai</span></li>
                <li className="info-list info-list__mail">Email: <span>asasd@dsdsd.com</span></li>
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
                <div className="profile-orders__item">
                  <span className="orders-info__band">Band: Roling Stones</span>
                  <span className="orders-info__album">Album: "Tatoo you"</span>
                  <span className="orders-info__price">Price: 30<span>$</span></span>
                  <span className="orders-info__quantity">Quantity: 3<span>pcs.</span></span>
                </div>

                <div className="profile-orders__item">
                  <span className="orders-info__band">Band: Roling Stones</span>
                  <span className="orders-info__album">Album: "Tatoo you"</span>
                  <span className="orders-info__price">Price: 30<span>$</span></span>
                  <span className="orders-info__quantity">Quantity: 3<span>pcs.</span></span>
                </div>

                <div className="profile-orders__item">
                  <span className="orders-info__band">Band: Roling Stones</span>
                  <span className="orders-info__album">Album: "Tatoo you"</span>
                  <span className="orders-info__price">Price: 30<span>$</span></span>
                  <span className="orders-info__quantity">Quantity: 3<span>pcs.</span></span>
                </div>

                <div className="profile-orders__item">
                  <span className="orders-info__band">Band: Roling Stones</span>
                  <span className="orders-info__album">Album: "Tatoo you"</span>
                  <span className="orders-info__price">Price: 30<span>$</span></span>
                  <span className="orders-info__quantity">Quantity: 3<span>pcs.</span></span>
                </div>

                <div className="profile-orders__item">
                  <span className="orders-info__band">Band: Roling Stones</span>
                  <span className="orders-info__album">Album: "Tatoo you"</span>
                  <span className="orders-info__price">Price: 30<span>$</span></span>
                  <span className="orders-info__quantity">Quantity: 3<span>pcs.</span></span>
                </div>

                <div className="profile-orders__item">
                  <span className="orders-info__band">Band: Roling Stones</span>
                  <span className="orders-info__album">Album: "Tatoo you"</span>
                  <span className="orders-info__price">Price: 30<span>$</span></span>
                  <span className="orders-info__quantity">Quantity: 3<span>pcs.</span></span>
                </div>

                <div className="profile-orders__item">
                  <span className="orders-info__band">Band: Roling Stones</span>
                  <span className="orders-info__album">Album: "Tatoo you"</span>
                  <span className="orders-info__price">Price: 30<span>$</span></span>
                  <span className="orders-info__quantity">Quantity: 3<span>pcs.</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;