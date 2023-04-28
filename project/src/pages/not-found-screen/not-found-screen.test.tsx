import { render, screen} from '@testing-library/react';
import NotFoundScreen from './not-found-screen';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../../components/history-route/history-route';

const history = createMemoryHistory();
describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {

    render(
      <HistoryRouter history={history}>
        <NotFoundScreen />
      </HistoryRouter>,
    );

    const headerElement = screen.getByText('Page Not Found');
    const linkElement = screen.getByText('BACK TO THE MAIN PAGE');

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
