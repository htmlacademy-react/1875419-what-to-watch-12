import { render, screen} from '@testing-library/react';
import { BrowserRouter} from 'react-router-dom';
import NotFoundScreen from './not-found-screen';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {

    render(
      <BrowserRouter>
        <NotFoundScreen />
      </BrowserRouter>,
    );

    const headerElement = screen.getByText('Page Not Found');
    const linkElement = screen.getByText('BACK TO THE MAIN PAGE');

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
