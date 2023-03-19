import { useEffect, useRef } from 'react';

const DELAY_BEFORE_PLAY_VIDEO = 1000;

type VideoPlayerProp = {
  previewVideoLink: string;
  posterImage: string;
}

function PreviewVideoPlayer({posterImage, previewVideoLink}: VideoPlayerProp): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, DELAY_BEFORE_PLAY_VIDEO);
  }, []);

  return (
    <video src={previewVideoLink}
      className="player__video"
      poster={posterImage}
      muted
      loop
      ref={videoRef}
    >
    </video>
  );
}

export default PreviewVideoPlayer;
