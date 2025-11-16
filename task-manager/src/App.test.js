import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import { CompletedProvider } from './CompletedContext';
test('renders navigation links',()=>{
  render(
    <BrowserRouter>
      <ThemeProvider>
        <CompletedProvider>
          <App />
        </CompletedProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
  expect(screen.getByText(/home/i)).toBeInTheDocument();
  expect(screen.getByText(/greetings/i)).toBeInTheDocument();
  expect(screen.getByText(/tasks/i)).toBeInTheDocument();
});
