import  './MainContent.css'
import photo from '../../Assets/profile.png'
function MainContent( ) {
  return (
    <section className="content">
  <div className="section1">
    <h2>Hello Visitor</h2>
    <h1>
      My Name's Khaled and I'm a

    </h1>
    <p>
      I am a professional translator, proofreader, and subtitler fluent in
      Turkish, English, and Arabic. <br />
      With over seven years of experience in visual content translation and
      localization, I am interested in the translator position you posted.
    </p>
    <div className="social-media">
      <a href="https://www.facebook.com/people/Khaled-M-Onem/pfbid02RDoZv2JRZVdtqmRFmuysgehP81JHawrMeFtNVAy3xuPkgXSuqLmi3DirBp3Pzw3Zl/">
        <i className="bx bxl-facebook-square" />
      </a>
      <a href="https://www.instagram.com/khaledghoniem5124/">
        <i className="bx bxl-instagram" />
      </a>
      <a href="https://www.linkedin.com/in/khaled-ghonim-4a4007147/">
        <i className="bx bxl-linkedin-square" />
      </a>
    </div>
    <button className="CV">
      <a href="/">Download CV</a>
    </button>
  </div>
  <div className="section2">
    <img src={photo} alt="Image not found" className="img" />
  </div>
</section>

  )
}

export default MainContent