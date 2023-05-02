import { fireEvent, render, screen} from '@testing-library/react';
import Logo from './logo';
import { createMemoryHistory } from 'history';
import { AppRoute } from '../../utils/const';
import HistoryRouter from '../history-route/history-route';
import { Route, Routes } from 'react-router-dom';

const history = createMemoryHistory();
const mainComponent = () => <h1>This is main page</h1>;
describe('Component: Logo', () => {
  it('should render correctly', () => {

    render(
      <HistoryRouter history={history}>
        <Logo/>
      </HistoryRouter>,
    );

    const containerElement = screen.getByTestId('logo');

    expect(containerElement).toBeInTheDocument();
  });

  it('should redirect to main page when user clicked', async () => {
    history.push(AppRoute.SignIn);
    render(
      <HistoryRouter history={history}>
        <Routes>
          <Route
            path="/"
            element={mainComponent()}
          />
          <Route
            path='*'
            element={<Logo />}
          />
        </Routes>
      </HistoryRouter>);
    expect(screen.queryByText('This is main page')).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('link'));


    await screen.findByText('This is main page');
  });
});
