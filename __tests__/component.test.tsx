import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  beforeEach(() => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      error: null,
      loading: false,
    });
  });

  it('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  it('displays loading state while fetching data', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      error: null,
      loading: true,
    });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  it('displays an error message if fetching fails', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      error: new Error('Fetching failed'),
      loading: false,
    });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/fetching failed/i)).toBeInTheDocument();
  });

  it('handles user interaction with buttons', () => {
    const mockHandleClick = jest.fn();
    render(
      <CoreFunctionalityComponent
        handleButtonClick={mockHandleClick}
      />
    );
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(mockHandleClick).toHaveBeenCalled();
  });

  it('ensures accessibility features are properly implemented', () => {
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveAttribute('aria-label');
    expect(button).toBeVisible();
  });

  it('renders data when fetched successfully', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [{ id: '1', title: 'Product' }],
      error: null,
      loading: false,
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/product/i)).toBeInTheDocument());
  });

  it('handles edge cases such as empty data array', () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      error: null,
      loading: false,
    });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/no products available/i)).toBeInTheDocument();
  });

  it('handles edge cases such as unexpected data structure', () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [{ id: '1' }], // missing title
      error: null,
      loading: false,
    });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/unexpected data structure/i)).toBeInTheDocument();
  });

  it('handles edge cases such as network errors', () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      error: new Error('Network error'),
      loading: false,
    });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/network error/i)).toBeInTheDocument();
  });

  it('handles edge cases such as server errors', () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      error: new Error('Server error'),
      loading: false,
    });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/server error/i)).toBeInTheDocument();
  });

});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  beforeEach(() => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      error: null,
      loading: false,
    });
  });

  it('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  it('displays loading state while fetching data', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      error: null,
      loading: true,
    });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  it('displays an error message if fetching fails', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      error: new Error('Fetching failed'),
      loading: false,
    });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/fetching failed/i)).toBeInTheDocument();
  });

  it('handles user interaction with buttons', () => {
    const mockHandleClick = jest.fn();
    render(
      <CoreFunctionalityComponent
        handleButtonClick={mockHandleClick}
      />
    );
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(mockHandleClick).toHaveBeenCalled();
  });

  it('ensures accessibility features are properly implemented', () => {
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveAttribute('aria-label');
    expect(button).toBeVisible();
  });

  it('renders data when fetched successfully', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [{ id: '1', title: 'Product' }],
      error: null,
      loading: false,
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/product/i)).toBeInTheDocument());
  });

  it('handles edge cases such as empty data array', () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      error: null,
      loading: false,
    });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/no products available/i)).toBeInTheDocument();
  });

  it('handles edge cases such as unexpected data structure', () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [{ id: '1' }], // missing title
      error: null,
      loading: false,
    });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/unexpected data structure/i)).toBeInTheDocument();
  });

  it('handles edge cases such as network errors', () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      error: new Error('Network error'),
      loading: false,
    });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/network error/i)).toBeInTheDocument();
  });

  it('handles edge cases such as server errors', () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      error: new Error('Server error'),
      loading: false,
    });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/server error/i)).toBeInTheDocument();
  });

});