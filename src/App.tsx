import "./styles/globas.css";
import "animate.css";
import SocialMedia from "./components/pages/SocialMedia";
import { Collapse, Image } from "antd";
import Lyrics from "./components/pages/Lyrics";
import Ticker from "./components/generic/Ticker";
import Tema from "./components/pages/Tema";
import { AnimateSharedLayout } from "framer-motion";

const App = () => {
  return (
    <div>
      <div className="container-lyrics">
        <div className="flex justify-center">
          <img
            src="/assets/TAMO_JUNTO_LOGO.png"
            alt=""
            className="animate__animated animate__fadeInDown animate__delay-0.5s p-8 "
            width={352}
          />
        </div>
        <div className="animate__animated animate__zoomIn title-secondary text-white text-lg text-center py-2 tracking-[.08em] leading-[10px]">
          CONFERENCIA LIFE
          <div className="mr-[50px] text-end title-StretchPro text-xs text-[var(--complement)]">
            2K24
          </div>
        </div>
        <SocialMedia />
        <Lyrics />
      </div>
      <div>
        <Tema />

        <div className="flex items-center justify-center gap-16 container-lyrics p-4">
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
