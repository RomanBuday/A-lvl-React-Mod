import './cart.scss';

const Cart = () => {
    return (
        <section className="modal cart" id="cartModal">
            <div className="container modal-container">
                <div className="modal-content fade">
                    <h3 className="modal-header">Your Choice</h3>

                    <div className="modal-descr">
                        <div className="modal-descr__img">
                            <img src="img/album/TattooYou_Stones.jpg" alt="album poster" />
                        </div>

                        <div className="modal-descr__info">
                            <span className="modal-descr__band">Band: Roling Stones</span>
                            <span className="modal-descr__album">Album: "Tatoo you"</span>
                            <span className="modal-descr__price">Price: 30<span>$</span></span>

                            <div className="modal-counter">
                                <button className="modal-counter__minus">V</button>
                                <span className="modal-counter__quantity">1</span>
                                <button className="modal-counter__plus">V</button>
                                <button className="modal-counter__remove">X</button>
                            </div>
                        </div>
                    </div>

                    <div className="modal-descr">
                        <div className="modal-descr__img">
                            <img src="img/album/TattooYou_Stones.jpg" alt="album poster" />
                        </div>

                        <div className="modal-descr__info">
                            <span className="modal-descr__band">Band: Roling Stones</span>
                            <span className="modal-descr__album">Album: "Tatoo you"</span>
                            <span className="modal-descr__price">Price: 30<span>$</span></span>

                            <div className="modal-counter">
                                <button className="modal-counter__minus">V</button>
                                <span className="modal-counter__quantity">1</span>
                                <button className="modal-counter__plus">V</button>
                                <button className="modal-counter__remove">X</button>
                            </div>
                        </div>
                    </div>

                    <div className="modal-total">
                        <span className="modal-total__text">Summary</span>
                        <span className="modal-total__sumPrice">Price: 20<span>$</span></span>
                        <span className="modal-total__sumQuantity">Quantity: 1<span>pcs.</span></span>
                    </div>

                    <div className="modal-btn">
                        <button className="modal-btn btn-buy">Accept</button>
                        <button className="modal-btn btn-buy">Cancel</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;