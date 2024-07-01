import "./styles/globas.css";
import SocialMedia from "./components/pages/SocialMedia";
import { Collapse, Image } from "antd";
import Lyrics from "./components/pages/Lyrics";
import Ticker from "./components/generic/Ticker";
import Tema from "./components/pages/Tema";

const App = () => {
  return (
    <div>
      <div className="flex items-center gap-2 justify-center title text-lg text-center	bg-[var(--primary)] text-white h-8">
        <img
          src="/assets/TAMO_JUNTO_LOGO.png"
          alt="image rodape"
          style={{ height: 24 }}
        />
        CONFERENCIA LIFE
        <span className="title text-[var(--complement)]"> 2K24</span>
      </div>

      <SocialMedia />
      <Ticker src="/assets/TMJ_BANNER2.png" />
      <Lyrics />
      <Ticker src="/assets/HANDS.png" />
      <Tema />
      <img src="/assets/RODAPE.png" alt="image rodape" />
    </div>
  );
};

export default App;
