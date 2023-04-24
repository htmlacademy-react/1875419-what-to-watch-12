import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../types/state';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const mockStore = configureMockStore<State>()({});

type TestWrapperProps = {
  children: ReactNode;
  fakeStore?: typeof mockStore;
  }

function ProviderWrapper({ children, fakeStore }: TestWrapperProps) {
  const store = configureMockStore<State>()({});

  return (
    <Provider store={fakeStore || store}>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </Provider>
  );
}

export default ProviderWrapper;

