import './register.scss';

const Register = () => {
  return (
    <section classname="register" id="registerModal">
      <div classname="container register-container">
        <div classname="register-content fade">

          <div classname="register-cross">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" /></svg>
          </div>

          <h3 classname="register-header">Register form</h3>


          <form classname="register-form" action="#">
            <div classname="register-form__input">
              <div classname="register-name register-form__field">
                <label classname="register-name__label" for="text">My name:</label>
                <input classname="register-name__input register-form__input" type="text" name="name" id="name" placeholder="My name is..." />
              </div>

              <div classname="register-surname register-form__field">
                <label classname="register-surname__label" for="text">My your surname:</label>
                <input classname="register-surname__input register-form__input" type="text" name="name" id="name" placeholder="My surname is..." />
              </div>

              <div classname="register-mail register-form__field">
                <label classname="register-mail__label" for="text">Enter mail:</label>
                <input classname="register-mail__input register-form__input" type="email" name="name" id="name" placeholder="My email@..." />
              </div>

              <div classname="register-lock register-form__field">
                <label classname="register-lock__label" for="password">Enter your password:</label>
                <input classname="register-lock__input register-form__input" type="password" name="name" id="name" placeholder="******" />
              </div>

              <div classname="register-lock register-form__field">
                <label classname="register-lock__label" for="password">Confirm your password:</label>
                <input classname="register-lock__input register-form__input" type="password" name="name" id="name" placeholder="******" />
              </div>
            </div>

            <div classname="register-form__btn">
              <form classname="register-avatar" method="post">
                <div classname="register-avatar__img">
                  <img src="" alt="avatar"/>
                </div>

                <label classname="register-avatar__label">
                  <input classname="register-avatar__form" type="file" accept="image/png, image/jpeg" name="data[file]" placeholder="Upload file" />
                  <button classname="register-avatar__btn btn-buy">
                    <span classname="register-avatar__file">Upload File</span>
                  </button>
                </label>
              </form>

              <div classname="register-signIn">
                <input classname="register-btn btn-buy" type="submit" value="Register" />
              </div>

              <div classname="register-signIn">
                <button classname="register-btn__cancel btn-buy">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
