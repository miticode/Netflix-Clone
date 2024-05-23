import "./index.scss";

function Login() {
  return (
    <div className="login">
     <iframe
        className="login__video"
        src="https://player.vimeo.com/video/695343114?h=1a71dea0f0?controls=0&sidedock=0&title=0&autoplay=1&muted=1&loop=1"
        width="640"
        height="360"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div className="wrapper">
        <div className="logo_login">
          <img
            src="https://seekvectors.com/files/download/Netflix-Logo-19.png"
            alt=""
            width={200}
          />
        </div>
        <div className="login_form">
          <h3>Login into your account</h3>
          <input type="text" />
          <input type="password" />
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;