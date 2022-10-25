import './login.scss';

const Login = () => {
  return (
    <section className="login" id="loginModal">
      <div className="container login-container">
        <div className="login-content fade">

          <div className="login-cross">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
          </div>

          <h3 className="login-header">Sign In</h3>

          <button className="login-btn btn-buy">Register</button>

          <form className="login-form" action="#">
            <div className="login-user">
              <label className="login-user__label" htmlFor="text">
                Enter your login:
              </label>
              <input
                className="login-user__input"
                type="text"
                name="name"
                id="name"
                placeholder="My login"
              />
            </div>

            <div className="login-lock">
              <label className="login-lock__label" htmlFor="password">
                Enter your password:
              </label>
              <input
                className="login-lock__input"
                type="password"
                name="name"
                id="current-password"
                placeholder="******"
              />
            </div>

            <div className="login-signIn">
              <button id="#registerModal" className="login-signIn__btn btn-buy">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
