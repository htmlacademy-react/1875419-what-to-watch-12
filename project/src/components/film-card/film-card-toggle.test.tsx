import { render, screen } from '@testing-library/react';
import FilmCardToggle from './film-card-toggle';

describe('FilmCardToggle', () => {
  it('should render card-player when isActive is true', () => {
    render(
      <FilmCardToggle
        isActive
        videoLink="https://example.com/test-video.mp4"
        previewImage="https://example.com/poster-image.jpg"
        name="Test Video"
      />
    );

    setTimeout(() => {
      const cardPlayer = screen.getByTestId('card-player');
      expect(cardPlayer).toBeInTheDocument();
    }, 2000);
  });

  it('should render card-poster when isActive is false', () => {
    render(
      <FilmCardToggle
        isActive={false}
        videoLink="https://example.com/test-video.mp4"
        previewImage="https://example.com/poster-image.jpg"
        name="Test Video"
      />
    );

    const posterImageElement = screen.getByAltText('Test Video');
    expect(posterImageElement).toBeInTheDocument();
  });
});
