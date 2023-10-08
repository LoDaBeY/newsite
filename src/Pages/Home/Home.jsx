//import the components for every page, this one is Home
import '../Home/Home.css'
import { Header , Footer, MainContent } from "../../Components/CompExtractor";
function Home() {
  return (
<div >
      <Header />
      <MainContent />
      <Footer/>
</div>
  )
}

export default Home