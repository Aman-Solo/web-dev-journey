import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => ({
  __esModule: true,
  useParams: () => ({}),
  useNavigate: () => jest.fn(),
  Link: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ element }) => <div>{element}</div>
}));
