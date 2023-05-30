import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

describe('App component', () => {
  it('renders the component', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('toggles the theme', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );

    const toggleButton = getByTestId('toggle-theme-button');
    fireEvent.click(toggleButton);

    expect(toggleButton).toHaveAttribute('data-theme', 'dark');
  });

  it('logs in the user', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = getByTestId('login-button');
    fireEvent.click(loginButton);

    expect(loginButton).toHaveAttribute('data-logged-in', 'true');
  });
});
