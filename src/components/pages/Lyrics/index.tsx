import { AraryLyrics } from "../../../utils/Lyrics";
import { Collapse, Image } from "antd";

const Lyrics = () => {
  const items = Object.keys(AraryLyrics).map((item) => {
    return {
      key: AraryLyrics[item].key,
      label: <div className="content font-bold">{AraryLyrics[item].title}</div>,
      children: (
        <div
          dangerouslySetInnerHTML={{ __html: AraryLyrics[item].lyrics }}
          style={{ lineHeight: "20px" }}
        />
      ),
    };
  });

  return (
    <div className="container-lyrics py-4">
      <div className="title px-4">Letras</div>
      <Collapse ghost items={items} />
    </div>
  );
};

export default Lyrics;
