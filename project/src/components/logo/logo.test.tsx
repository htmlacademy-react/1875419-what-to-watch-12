import { render, screen} from '@testing-library/react';
import Logo from './logo';
import ProviderWrapper from '../../utils/jest';

describe('Component: Logo', () => {
  it('should render correctly', () => {

    render(
      <ProviderWrapper>
        <Logo/>
      </ProviderWrapper>,
    );

    const containerElement = screen.getByTestId('logo');

    expect(containerElement).toBeInTheDocument();
  });
});
