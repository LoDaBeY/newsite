import { Header, MainContent } from "Components/CompExtractor";

function Translation() {
  return (
    <div>
      <Header />
      <MainContent  Translator='Translator' Subtitler={undefined} Transcription={undefined} DevTrans={undefined} />
    </div>
  );
}

export default Translation;
