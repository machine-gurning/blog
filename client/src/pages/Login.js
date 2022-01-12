import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section>
      <div className="central-form-box">
        <form action="" className="central-form">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
          <button className="btn">login</button>
          <button className="btn">
            {" "}
            <Link to="/register" className="item-link">
              Register
            </Link>{" "}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
