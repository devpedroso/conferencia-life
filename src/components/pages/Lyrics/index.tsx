import { Collapse } from "antd";

import AnimatedSection from "../../../components/generic/AnimatedSection";
import { AraryLyrics } from "../../../utils/Lyrics";

const Lyrics = () => {
  const items = Object.keys(AraryLyrics).map((item) => {
    return {
      key: AraryLyrics[item].key,
      label: (
        <div className="flex gap-2 font-bold text-white">
          <AnimatedSection animate="animate__bounceInRight title-regular">
            {AraryLyrics[item].title}
          </AnimatedSection>
        </div>
      ),
      children: (
        <AnimatedSection animate="animate__bounceInRight title-regular">
          <div
            dangerouslySetInnerHTML={{
              __html: AraryLyrics[item].lyrics,
            }}
            style={{ lineHeight: "20px", color: "white" }}
          />
        </AnimatedSection>
      ),
    };
  });

  return (
    <div className="py-4">
      <div className="px-4 text-lg text-white">
        <AnimatedSection animate="animate__bounceInLeft title">
          Letras
        </AnimatedSection>
      </div>

      <Collapse ghost items={items} />
    </div>
  );
};

export default Lyrics;
