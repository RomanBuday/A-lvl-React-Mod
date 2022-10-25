import { useSelector, useDispatch } from 'react-redux';

import './search.scss';
import { setSearch, setSort } from '../../store/filter';

const Search = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onSearchChange = e => {
    dispatch(setSearch(e.target.value));
  };

  const onClickSort = e => {
    dispatch(setSort());
  }



  return (
    <div className="shop-filter">
      <input
        className="shop-filter__search"
        type="search"
        placeholder="Enter band name..."
        value={filter.search}
        onChange={onSearchChange}
      />

      <div className="shop-filter__btn">
        <button className="shop-filter__price btn-filter btn-buy" onClick={onClickSort}>
          Sort by price
        </button>
        <button className="shop-filter__settings btn-filter btn-buy">
          Filter
        </button>
      </div>
    </div>
  );
};

export default Search;
