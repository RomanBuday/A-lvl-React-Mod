import './404.scss';

const NotFound = () => {
  return (
    <section className="notFound">
      <div className="notFound-text">
        <h1>
          <span className="notFound-text__span" id="digit1">4</span>
          <span className="notFound-text__span" id="digit2">0</span>
          <span className="notFound-text__span" id="digit3">4</span>
        </h1>
      <h3 className="fadeIn">PAGE NOT FOUND</h3>
      <button className="notFound-text__btn btn-buy" type="button" name="button">Return To Home</button>
      </div>
    </section>
  )
};

export default NotFound;
