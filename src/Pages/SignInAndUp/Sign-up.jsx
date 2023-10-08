import { Header } from "Components/CompExtractor"
import  './Sign.css'
function Signup() {
  return (
    <div className="Tool">
      <Header/>
      <div className="contanier">
      <p> Create A New Account...</p>

        <form >
          <input type="email" id="Email" placeholder="Put your Email here" required />
          <input type="password" id="Password" placeholder="Put your Password here" required />
          <button type="submit"> Sign Up</button>
          <p>Do you've already an account? <span><a href="/Sign-in">Sign in Here</a></span></p>

        </form>

      </div>


    </div>
  )
}

export default Signup