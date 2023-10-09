import { Header } from "Components/CompExtractor";
import "./Sign.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Firebase/config'
import { useState } from "react";

function Signin() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  return (
    <div>
      <Header />
      <div className="contanier">
        <form>
          <input
            type="email"
            id="Email"
            placeholder="Put your Email here"
            required
            onChange={(eo) => { setemail(eo.target.value) }}
          />
          <input
            type="password"
            id="Password"
            placeholder="Put your Password here"
            required
            onChange={(eo) => { setpassword(eo.target.value) }}

          />
          <button
            onClick={(eo) => {
              eo.preventDefault()
              signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  window.prompt('You are signed go to any services above')
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                });
            }}
            type="submit"
            
          >
            Sign in
          </button>
          <p>
            You don't have an account?{" "}
            <span>
              <a href="/Sign-up">Sign up Here</a>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signin;
