
import { useNavigate, useParams } from 'react-router-dom';
import { getChoosedFilm, getChoosedFilmLoadingStatus } from '../../store/films-data/films-data.selectors';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { fetchChoosedFilmAction } from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { getTimeLeft } from '../../utils';
import { STEP_BACK } from '../../const';

function PlayerScreen(): JSX.Element {

  const navigate = useNavigate();
  const { id: filmId } = useParams();
  const id = Number(filmId);
  const dispatch = useAppDispatch();
  const film = useAppSelector(getChoosedFilm);
  const isFilmLoading = useAppSelector(getChoosedFilmLoadingStatus);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (id) {
      dispatch(fetchChoosedFilmAction(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    setIsLoaded(!isFilmLoading);
  }, [isFilmLoading]);

  useEffect(() => {
    if (videoRef.current !== null) {
      isPaused ? videoRef.current.pause() : videoRef.current.play();
    }
  }, [isPaused]);

  if(isFilmLoading){
    return <LoadingScreen/>;
  }
  if (!id || !film) {
    return <NotFoundScreen />;
  }

  const handleExitClick = () => navigate(STEP_BACK);

  const handleChangeIsPausedClick = () =>
    setIsPaused((prevState) => !prevState);
  const handleFullScreenClick = () => {
    videoRef.current?.requestFullscreen();
  };

  const handleDurationChange = (evt: ChangeEvent<HTMLVideoElement>) => {
    const currentDuration = Math.round(evt.currentTarget.duration);
    setDuration(currentDuration);
  };
  const handleTimeUpdate = (evt: ChangeEvent<HTMLVideoElement>) => {
    const time = Math.round(evt.currentTarget.currentTime);
    setCurrentTime(time);
  };
  const timeLeft = getTimeLeft(duration - currentTime);
  const { previewImage, videoLink, name } = film;

  return (
    <div className="player">
      {isLoaded ? (
        <video
          ref={videoRef}
          src={videoLink}
          className="player__video"
          poster={previewImage}
          autoPlay
          onDurationChange={handleDurationChange}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleChangeIsPausedClick}
        />
      ) : (
        <LoadingScreen />
      )}
      <button type="button" className="player__exit" onClick={handleExitClick}>
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value={currentTime}
              max={duration}
            >
            </progress>
            <div
              className="player__toggler"
              style={{
                left: `${duration ? (100 / duration) * currentTime : 0}%`,
              }}
            >
              Toggler
            </div>
          </div>
          <div className="player__time-value">{timeLeft}</div>
        </div>

        <div className="player__controls-row">
          {isPaused ? (
            <button
              type="button"
              className="player__play"
              onClick={handleChangeIsPausedClick}
            >
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
          ) : (
            <button
              type="button"
              className="player__play"
              onClick={handleChangeIsPausedClick}
            >
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </button>
          )}
          <div className="player__name">{name}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={handleFullScreenClick}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

//   return (
//     <div className="player">
//       {filmChoosed
//         ?
//         <video
//           src={filmChoosed?.videoLink}
//           className="player__video"
//           poster={filmChoosed?.backgroundImage}
//           autoPlay
//           controls
//           muted={false}
//         >
//         </video>
//         :
//         <video
//           src={promoFilm?.videoLink}
//           className="player__video"
//           poster={promoFilm?.backgroundImage}
//           autoPlay
//           controls
//           muted={false}
//         >
//         </video>}
//       {filmChoosed
//         ?
//         <Link to={(`/films/${filmChoosed.id}`)} type="button" className="player__exit">Exit</Link>
//         :
//         <Link to={(`/films/${promoFilm?.id as number}`)} type="button" className="player__exit">Exit</Link>}
//       {/*
//       <div className="player__controls">
//         <div className="player__controls-row">
//           <div className="player__time">
//             <progress className="player__progress" value="30" max="100"></progress>
//             <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
//           </div>
//           <div className="player__time-value">1:30:29</div>
//         </div>

//         <div className="player__controls-row">
//           <button type="button" className="player__play">
//             <svg viewBox="0 0 19 19" width="19" height="19">
//               <use xlinkHref="#play-s"></use>
//             </svg>
//             <span>Play</span>
//           </button>
//           <div className="player__name">Transpotting</div>

//           <button type="button" className="player__full-screen">
//             <svg viewBox="0 0 27 27" width="27" height="27">
//               <use xlinkHref="#full-screen"></use>
//             </svg>
//             <span>Full screen</span>
//           </button>
//         </div>
//       </div> */}
//     </div>
//   );
// }

export default PlayerScreen;
