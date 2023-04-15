import {useEffect, useRef, useState} from 'react';
import FilmCardPlayer from './film-card-player';
import FilmCardPoster from './film-card-poster';

const STANDARD_DELAY = 1000;

type FilmCardToggleProps = {
  isActive: boolean;
  videoLink: string;
  previewImage: string;
  name: string;
}

function FilmCardToggle({previewImage, name, videoLink, isActive}:FilmCardToggleProps) : JSX.Element {

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isActive) {
      timerRef.current = setTimeout(() => {
        setIsPlaying(true);
      }, STANDARD_DELAY);
      return () => {timerRef.current && clearTimeout(timerRef.current);};
    }

    setIsPlaying(false);
  }, [isActive]);

  return isPlaying
    ? < FilmCardPlayer isPlaying={isPlaying} previewVideoLink={videoLink} />
    : < FilmCardPoster name={name} previewImage={previewImage} />;
}


export default FilmCardToggle;
