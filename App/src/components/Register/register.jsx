import './register.scss';

const Register = () => {
  return (
    <section className="register" id="registerModal">
      <div className="container register-container">
        <div className="register-content fade">
          <h3 className="register-header">Register form</h3>

          <form className="register-form" action="#">
            <div className="register-name register-form__field">
              <label className="register-name__label" for="text">
                My name:
              </label>
              <input
                className="register-name__input register-form__input"
                type="text"
                name="name"
                id="name"
                placeholder="My name is..."
              />
            </div>

            <div className="register-surname register-form__field">
              <label className="register-surname__label" for="text">
                My your surname:
              </label>
              <input
                className="register-surname__input register-form__input"
                type="text"
                name="name"
                id="name"
                placeholder="My surname is..."
              />
            </div>

            <div className="register-mail register-form__field">
              <label className="register-mail__label" for="text">
                Enter mail:
              </label>
              <input
                className="register-mail__input register-form__input"
                type="email"
                name="name"
                id="name"
                placeholder="My email@..."
              />
            </div>

            <div className="register-lock register-form__field">
              <label className="register-lock__label" for="password">
                Enter your password:
              </label>
              <input
                className="register-lock__input register-form__input"
                type="password"
                name="name"
                id="name"
                placeholder="******"
              />
            </div>

            <div className="register-lock register-form__field">
              <label className="register-lock__label" for="password">
                Confirm your password:
              </label>
              <input
                className="register-lock__input register-form__input"
                type="password"
                name="name"
                id="name"
                placeholder="******"
              />
            </div>

            {/* <div className="register-avatar">
              <div className="register-avatar__img">
                <img src="" alt="avatar" />
              </div>

              <label class="register-avatar__form"> 
                <input class="register-avatar__form" type="file" name="data[file]" placeholder="Upload file" />
 	                <button class="register-avatar__btn btn-buy"> 
 		                <span class="register-avatar__file">Upload File</span> 
 	                </button> 
              </label>
            </div> */}

            <div className="register-signIn">
              <input
                className="register-btn btn-buy"
                type="submit"
                value="Register"
              />
            </div>

            <div className="register-signIn">
              <button className="register-btn__cancel btn-buy">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
