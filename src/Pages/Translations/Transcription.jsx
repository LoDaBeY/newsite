import { Header, MainContent } from "Components/CompExtractor";

function Transcription() {
  return (
    <div>
      <Header />
      <MainContent Transcription="Transcriptionist" Subtitler={undefined} Translator={undefined} />
    </div>
  );
}

export default Transcription;
