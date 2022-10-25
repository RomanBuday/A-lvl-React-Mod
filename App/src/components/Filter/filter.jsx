import './filter.scss';

const Filter = () => {
  return (
    <aside className="shop-filter__aside hide">
              <h3 className="filter-title">Price</h3>

              <div className="filter-content">
                <div className="content-price">
                  <div className="price-inner">
                    <label className="price-inner__label">
                      From
                      <input
                        className="price-inner__input"
                        data-price="minPrice"
                        type="number"
                        placeholder="0"
                      />
                    </label>
                  </div>
                  <div className="price-inner">
                    <label className="price-inner__label">
                      To
                      <input
                        className="price-inner__input"
                        data-price="maxPrice"
                        type="number"
                        placeholder="350"
                      />
                    </label>
                  </div>
                </div>
              </div>

              <h3 className="filter-title genre-title">Genre</h3>
              <div className="filter-content">
                <div className="content-genre">
                  <div className="genre-inner">
                    <label className="genre-inner__label filter-label">
                      <input
                        type="checkbox"
                        className="genre-inner_checkbox filter-checkbox"
                        value="Rock"
                      />
                      Rock
                    </label>
                  </div>
                  <div className="genre-inner">
                    <label className="genre-inner__label filter-label">
                      <input
                        type="checkbox"
                        className="genre-inner_checkbox filter-checkbox"
                        value="Pop"
                      />
                      Pop
                    </label>
                  </div>
                  <div className="genre-inner">
                    <label className="genre-inner__label filter-label">
                      <input
                        type="checkbox"
                        className="genre-inner_checkbox filter-checkbox"
                        value="Rock&Roll"
                      />
                      Rock&Roll
                    </label>
                  </div>
                  <div className="genre-inner">
                    <label className="genre-inner__label filter-label">
                      <input
                        type="checkbox"
                        className="genre-inner_checkbox filter-checkbox"
                        value="Indie"
                      />
                      Indie
                    </label>
                  </div>
                  <div className="genre-inner">
                    <label className="genre-inner__label filter-label">
                      <input
                        type="checkbox"
                        className="genre-inner_checkbox filter-checkbox"
                        value="Ambient"
                      />
                      Ambient
                    </label>
                  </div>
                  <div className="genre-inner">
                    <label className="genre-inner__label filter-label">
                      <input
                        type="checkbox"
                        className="genre-inner_checkbox filter-checkbox"
                        value="Rap"
                      />
                      Rap
                    </label>
                  </div>
                </div>
              </div>
            </aside>
  );
};

export default Filter;
