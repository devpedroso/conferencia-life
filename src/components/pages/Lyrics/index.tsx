import { Collapse, Image } from "antd";

import AnimatedSection from "../../../components/generic/AnimatedSection";
import { AraryLyrics } from "../../../utils/Lyrics";

const Lyrics = () => {
  const items = Object.keys(AraryLyrics).map((item) => {
    return {
      key: AraryLyrics[item].key,
      label: (
        <div className="flex items-center gap-2 font-bold text-white">
          <div className="h-10">
            <Image
              src="/assets/TM_SOCO_ROXO.png"
              preview={false}
              width={40}
              className="h-full"
            />
          </div>
          <AnimatedSection animate="animate__bounceInRight title-regular animate__delay-0s">
            {AraryLyrics[item].title}
          </AnimatedSection>
        </div>
      ),
      children: (
        <AnimatedSection animate="animate__bounceInRight title-regular animate__delay-0s">
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
        <AnimatedSection animate="animate__bounceInLeft title animate__delay-0s">
          Letras
        </AnimatedSection>
      </div>

      <Collapse ghost items={items} />
    </div>
  );
};

export default Lyrics;
