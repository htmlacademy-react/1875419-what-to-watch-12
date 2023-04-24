import { render, screen} from '@testing-library/react';
import Footer from './footer';
import ProviderWrapper from '../../utils/jest';

describe('Component: Footer', () => {
  it('should render correctly', () => {

    render(
      <ProviderWrapper>
        <Footer/>
      </ProviderWrapper>,
    );

    const containerElement = screen.getByTestId('footer');

    expect(containerElement).toBeInTheDocument();
  });
});
