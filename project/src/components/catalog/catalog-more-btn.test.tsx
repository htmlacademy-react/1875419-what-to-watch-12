import { render, screen} from '@testing-library/react';
import CatalogMoreBtn from './catalog-more-btn';
import ProviderWrapper from '../../utils/jest';


describe('Component: CatalogMoreBtn', () => {
  it('should render correctly', () => {

    render(
      <ProviderWrapper>
        <CatalogMoreBtn />
      </ProviderWrapper>,
    );

    const buttonElement = screen.getByText('Show more');

    expect(buttonElement).toBeInTheDocument();
  });
});
