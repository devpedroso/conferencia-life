import { AraryLyrics } from "../../../utils/Lyrics";
import { Collapse, Image } from "antd";

const Lyrics = () => {
  const items = Object.keys(AraryLyrics).map((item) => {
    return {
      key: AraryLyrics[item].key,
      label: (
        <div className="flex gap-2 title-regular font-bold text-white">
          {AraryLyrics[item].title}
        </div>
      ),
      children: (
        <div
          dangerouslySetInnerHTML={{ __html: AraryLyrics[item].lyrics }}
          style={{ lineHeight: "20px", color: "white" }}
        />
      ),
    };
  });

  return (
    <div className="py-4">
      <div className="animate__animated animate__bounceInLeft title px-4 text-lg text-white">
        Letras
      </div>
      <Collapse
        ghost
        items={items}
        className="animate__animated animate__bounceInRight"
      />
    </div>
  );
};

export default Lyrics;
