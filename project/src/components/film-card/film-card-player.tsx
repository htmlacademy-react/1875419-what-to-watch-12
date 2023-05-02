import {useEffect, useRef} from 'react';
import { FilmCardProps } from './film-card-small';

type FilmCardPlayerProps = Pick<FilmCardProps, 'previewVideoLink'> & {
    isPlaying: boolean;
  }

function FilmCardPlayer({isPlaying, previewVideoLink}: FilmCardPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    const player = videoRef.current;
    if (isPlaying) {
      player.play();
    } else {
      player.pause();
      player.currentTime = 0;
    }
  },[isPlaying]);
  return (
    <div className="small-film-card__image" data-testid="card-player">
      <video
        ref={videoRef}
        preload="none"
        muted
        width="280"
        height="175"
      >
        <source src={previewVideoLink}/>
      </video>
    </div>
  );
}

export default FilmCardPlayer;
