import { Header, MainContent } from "Components/CompExtractor";

function Transcription() {
  return (
    <div>
      <Header />
      <MainContent Transcription="Transcriptionist" Subtitler={undefined} Translator={undefined} DevTrans={undefined} />
    </div>
  );
}

export default Transcription;
