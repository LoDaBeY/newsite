import { Header, MainContent } from "Components/CompExtractor";

function Subtitling() {
  return (
    <div>
      <Header />
      <MainContent Subtitler="Subtitler" Transcription={undefined} Translator={undefined} />
    </div>
  );
}

export default Subtitling;
