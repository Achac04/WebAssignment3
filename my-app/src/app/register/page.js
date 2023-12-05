const Register = () => {
  return (
    <div>
      <h1> Registration </h1>
      <form action="/api/register" method="post">
        <label>Email Address</label>
        <input type="email" name="email" placeholder="Type your email"></input>
        <label>Pasword</label>
        <input
          type="password"
          name="password"
          placeholder="Type your password"
        ></input>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
