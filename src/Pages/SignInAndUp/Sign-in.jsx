import { Header } from "Components/CompExtractor"
import  './Sign.css'

function Signin() {

  return (
    <div >
      <Header/>
      <div className="contanier" >

        <form >
          <input type="email" id="Email" placeholder="Put your Email here" required />
          <input type="password" id="Password" placeholder="Put your Password here" required />
          <button type="submit"> Sign in</button>
          <p>You don't have an account? <span><a href="/Sign-up">Sign up Here</a></span></p>

        </form>

      </div>


    </div>
  )
}

export default Signin