import './login.scss';

const Login = () => {
  return (
    <section className="login" id="loginModal">
      <div className="container login-container">
        <div className="login-content fade">
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
