import { render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import thunk from 'redux-thunk';
import HistoryRouter from '../../components/history-route/history-route';
import AuthorizationScreen from './authorization-screen';
import { Provider } from 'react-redux';
import { createAPI } from '../../services/api';
import { configureMockStore } from '@jedmao/redux-mock-store';

const history = createMemoryHistory();
const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});
describe('Component: Sign in page', () => {
  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <AuthorizationScreen />
        </HistoryRouter>
      </Provider>,
    );

    const headerElement = screen.getByTestId('sign-in-header');

    expect(headerElement).toBeInTheDocument();
  });
});
