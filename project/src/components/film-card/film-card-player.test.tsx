import { render, screen } from '@testing-library/react';
import FilmCardPlayer from './film-card-player';


describe('FilmCardPlayer', () => {
  const props = {
    isPlaying: true,
    previewVideoLink: 'https://example.com/test-video.mp4',
  };
  beforeAll(() => {
    window.HTMLMediaElement.prototype.play = jest.fn();
    window.HTMLMediaElement.prototype.pause = jest.fn();
  });
  it('renders the video player', () => {
    render(<FilmCardPlayer {...props} />);
    const videoElement = screen.getByTestId('card-player');

    expect(videoElement).toBeInTheDocument();
  });
});
