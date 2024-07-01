"use client";

import SocialMediaItem from "../../generic/SocialMediaItem";

const SocialMedia = () => {
  return (
    <div className="flex flex-col gap-4 text-white container-social-media p-4 py-8">
      <div className="title text-base">Redes socias</div>

      <div className="grid grid-cols-2 gap-4">
        <SocialMediaItem
          href="https://www.instagram.com/geracaolife/"
          src="/assets/icons/instagram_icon.png"
          text="@geracaolife"
        />

        <SocialMediaItem
          href="https://www.instagram.com/adbaoficial/"
          src="/assets/icons/instagram_icon.png"
          text="@adbaoficial"
        />

        <SocialMediaItem
          href="https://www.facebook.com/geracaolifeAdba"
          src="/assets/icons/face_icon.png"
          text="geracaolife"
        />

        <SocialMediaItem
          href="https://www.facebook.com/ADBAararaquara"
          src="/assets/icons/face_icon.png"
          text="ADBA Oficial"
        />

        <SocialMediaItem
          href="https://www.youtube.com/@ADBAOFICIAL"
          src="/assets/icons/youtube_icon.png"
          text="ADBA Oficial"
        />
      </div>
    </div>
  );
};

export default SocialMedia;
