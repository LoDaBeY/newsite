//import the components for every page, this one is Home
import '../Home/Home.css'
import { Header , Footer, MainContent } from "../../Components/CompExtractor";
function Home() {
  return (
<div >
      <Header />
      <MainContent Subtitler={undefined} Transcription={undefined} Translator={undefined} DevTrans="Transltor/Devloper" />
      <Footer/>
</div>
  )
}

export default Home