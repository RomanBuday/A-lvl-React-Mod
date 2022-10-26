import profile_icon from '../../img/svg/profile_icon.svg';

const SignIn = props => {
  const { onClick } = props;

  return (
    <>
      <div className="sign-in" onClick={onClick}>
        <img src={profile_icon} alt="profile icon" />
      </div>
    </>
  );
};

export default SignIn;

