import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useEffect } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Form from "react-bootstrap/Form";
import { Button, ButtonGroup } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const { providerLogin, signIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  const handleGithubSignIn = () => {
    providerLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        navigate(from, { replace: true });
        // if (user.emailVerified) {
        //   navigate(from, { replace: true });
        // } else {
        //   console.log(
        //     "Your email is not verified. Please verify your email address."
        //   );
        // }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="outline-dark" type="submit">
          Submit
        </Button>
        <Form.Text className="text-danger">{error}</Form.Text>
      </Form>
      <ButtonGroup vertical className="">
        <Button
          onClick={handleGoogleSignIn}
          // className="mb-2"
          variant="outline-dark"
        >
          <FaGithub className="m-2"></FaGithub>
          Login With Google
        </Button>
      </ButtonGroup>
      <ButtonGroup vertical>
        <Button
          onClick={handleGithubSignIn}
          // className="mb-2"
          variant="outline-dark"
        >
          <FaGoogle className="m-2"></FaGoogle>
          Login With Github
        </Button>
      </ButtonGroup>
      <br />
      <ButtonGroup vertical>
        <Link to="/register">
          <Button variant="outline-dark" type="submit">
            Register
          </Button>
        </Link>
      </ButtonGroup>
    </div>
  );
};

export default Login;
