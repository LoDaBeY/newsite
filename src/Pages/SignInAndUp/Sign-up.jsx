import { Header } from "Components/CompExtractor";
import "./Sign.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Firebase/config'
import { useState } from "react";
function Signup() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  return (
    <div className="Tool">
      <Header />
      <div className="contanier">
        <p> Create A New Account...</p>

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
              createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed up
                  const user = userCredential.user;
                  console.log('done')
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log(errorMessage)
                  // ..
                });
            }}
            type="submit"
          >
            {" "}
            Sign Up
          </button>
          <p>
            Do you've already an account?{" "}
            <span>
              <a href="/Sign-in">Sign in Here</a>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
