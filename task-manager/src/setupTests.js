// src/setupTests.js
import '@testing-library/jest-dom';

// Global mock for react-router-dom
jest.mock('react-router-dom', () => ({
  __esModule: true,
  useParams: () => ({}),
  useNavigate: () => jest.fn(),
  Link: ({ children, ...props }) => <a {...props}>{children}</a>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ element }) => element,
  BrowserRouter: ({ children }) => <div>{children}</div>,
}));