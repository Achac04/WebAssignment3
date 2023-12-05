const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form action="/api/login" method="post">
        <label>Email Address</label>
        <input type="email" name="email" placeholder="Type your email"></input>
        <label>Pasword</label>
        <input
          type="password"
          name="password"
          placeholder="Type your password"
        ></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
