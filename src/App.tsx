import "./styles/globas.css";
import "animate.css";

import { Image } from "antd";

import SocialMedia from "./components/pages/SocialMedia";
import Lyrics from "./components/pages/Lyrics";
import Tema from "./components/pages/Tema";

const App = () => {
  return (
    <div>
      <div className="container-lyrics">
        <div className="flex justify-center">
          <Image
            src="/assets/TAMO_JUNTO_LOGO.png"
            alt=""
            className="animate__animated animate__fadeInDown p-10"
            width={375}
            preview={false}
          />
        </div>
        <div className="flex gap-2 pt-2 justify-center">
          <div className="title text-white text-3xl animate__animated animate__jackInTheBox">
            CONFERENCIA LIFE
          </div>
          <div className="title text-3xl text-[var(--complement)] animate__animated animate__jackInTheBox animate__delay-3s">
            2K24
          </div>
        </div>
        <SocialMedia />
        <Lyrics />
      </div>
      <div>
        <Tema />

        <div className="flex items-center justify-center gap-16 container-lyrics p-4 h-24">
          <Image
            src="/assets/ADBA_BRANCO1.png"
            alt=""
            width={72}
            preview={false}
            className="-mt-[12px]"
          />
          <Image
            src="/assets/geração-life-BRANCO1.png"
            alt=""
            width={72}
            preview={false}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
