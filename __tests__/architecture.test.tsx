import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import DesignArchitecture from './DesignArchitecture';

// Mocking external dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  test('renders loading state when data is being fetched', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({ status: 'loading' });
    render(<DesignArchitecture />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays error message when fetching data fails', async () => {
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));
    render(<DesignArchitecture />);
    await waitFor(() => screen.getByText(/failed to fetch/i));
  });

  test('renders design architecture details correctly on successful data fetch', async () => {
    const mockData = { status: 'success', data: { name: 'Sample Design' } };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitecture />);
    await waitFor(() => screen.getByText(/sample design/i));
  });

  test('handles user interaction with filter options', async () => {
    const mockData = { status: 'success', data: [{ name: 'Option1' }, { name: 'Option2' }] };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitecture />);
    await waitFor(() => screen.getByText(/option1/i));
    fireEvent.click(screen.getByText(/option1/i));
    expect(screen.queryByText(/option2/i)).not.toBeInTheDocument();
  });

  test('ensures accessibility features are implemented', async () => {
    const mockData = { status: 'success', data: [{ name: 'Option1' }] };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitecture />);
    await waitFor(() => screen.getByText(/option1/i));
    expect(screen.getByText(/option1/i)).toHaveAttribute('aria-label');
  });

  test('handles edge cases such as empty data', async () => {
    const mockData = { status: 'success', data: [] };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitecture />);
    await waitFor(() => screen.getByText(/no data available/i));
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import DesignArchitecture from './DesignArchitecture';

// Mocking external dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  test('renders loading state when data is being fetched', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({ status: 'loading' });
    render(<DesignArchitecture />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays error message when fetching data fails', async () => {
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));
    render(<DesignArchitecture />);
    await waitFor(() => screen.getByText(/failed to fetch/i));
  });

  test('renders design architecture details correctly on successful data fetch', async () => {
    const mockData = { status: 'success', data: { name: 'Sample Design' } };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitecture />);
    await waitFor(() => screen.getByText(/sample design/i));
  });

  test('handles user interaction with filter options', async () => {
    const mockData = { status: 'success', data: [{ name: 'Option1' }, { name: 'Option2' }] };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitecture />);
    await waitFor(() => screen.getByText(/option1/i));
    fireEvent.click(screen.getByText(/option1/i));
    expect(screen.queryByText(/option2/i)).not.toBeInTheDocument();
  });

  test('ensures accessibility features are implemented', async () => {
    const mockData = { status: 'success', data: [{ name: 'Option1' }] };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitecture />);
    await waitFor(() => screen.getByText(/option1/i));
    expect(screen.getByText(/option1/i)).toHaveAttribute('aria-label');
  });

  test('handles edge cases such as empty data', async () => {
    const mockData = { status: 'success', data: [] };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitecture />);
    await waitFor(() => screen.getByText(/no data available/i));
  });
});