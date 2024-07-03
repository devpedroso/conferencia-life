import { Collapse } from "antd";

import AnimatedSection from "../../../components/generic/AnimatedSection";
import { AraryLyrics } from "../../../utils/Lyrics";

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
      <AnimatedSection animate="animate__bounceInLeft">
        <div className="title px-4 text-lg text-white">Letras</div>
      </AnimatedSection>
      <AnimatedSection animate="animate__bounceInRight">
        <Collapse ghost items={items} />
      </AnimatedSection>
    </div>
  );
};

export default Lyrics;
