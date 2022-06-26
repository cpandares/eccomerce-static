import { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import "../styles/login.scss";

const Login = () => {
  const form = useRef(null);
  const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    console.log(data);
  };

  const goToRegister = ()=>{
    history.push('/signup')
  }
  return (
    <div className="login">
      <div className="form-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <form className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            name="email"
            placeholder="platzi@example.cm"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="*********"
            className="input input-password"
          />
          <button
            type="submit"
            defaultValue="Log in"
            className="primary-button login-button"
            onClick={handleSubmit}
          >
            Login
          </button>

          <Link to="/new-password">Forgot my password</Link> <br/>
        </form>

        <button  className="secondary-button signup-button" onClick={ goToRegister }>Sign up</button>

      </div>
    </div>
  );
};

export default Login;
