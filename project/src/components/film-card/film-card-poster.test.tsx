import { render, screen } from '@testing-library/react';
import FilmCardPoster from './film-card-poster';


describe('FilmCardPoster', () => {
  const props = {
    previewImage: 'https://example.com/image.jpg',
    name: 'Test Film',
  };

  it('renders the poster image and title', () => {
    render(<FilmCardPoster {...props} />);
    const image = screen.getByAltText(props.name);
    const title = screen.getByAltText(props.name);

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('width', '280');
    expect(image).toHaveAttribute('height', '175');
    expect(title).toBeInTheDocument();
  });

  it('sets the correct image source and dimensions', () => {
    render(<FilmCardPoster {...props} />);
    const image = screen.getByAltText(props.name);

    expect(image).toHaveAttribute('src', props.previewImage);

  });
});
