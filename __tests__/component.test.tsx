import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  const mockUseExternalData = (data?: any, error?: Error) => ({
    data,
    error,
    isLoading: false,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays data when fetched successfully', async () => {
    const mockData = { key: 'value' };
    (useExternalData as jest.Mock).mockReturnValue(mockUseExternalData(mockData));

    render(<CoreFunctionalityComponent />);
    await screen.findByText(/value/i);
    expect(screen.getByText(/value/i)).toBeInTheDocument();
  });

  test('displays error message when data fetching fails', async () => {
    const mockError = new Error('Failed to fetch');
    (useExternalData as jest.Mock).mockReturnValue(mockUseExternalData(undefined, mockError));

    render(<CoreFunctionalityComponent />);
    await screen.findByText(/failed to fetch/i);
    expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument();
  });

  test('displays loading state while fetching data', async () => {
    (useExternalData as jest.Mock).mockReturnValue(mockUseExternalData(undefined, undefined, true));

    render(<CoreFunctionalityComponent />);
    await screen.findByText(/loading/i);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('handles user interaction with button click', async () => {
    const mockOnClick = jest.fn();

    (useExternalData as jest.Mock).mockReturnValue(mockUseExternalData());

    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockOnClick).toHaveBeenCalled();
  });

  test('ensures accessibility features are implemented correctly', async () => {
    (useExternalData as jest.Mock).mockReturnValue(mockUseExternalData());

    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'action-button');

    fireEvent.click(button);
  });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  const mockUseExternalData = (data?: any, error?: Error) => ({
    data,
    error,
    isLoading: false,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays data when fetched successfully', async () => {
    const mockData = { key: 'value' };
    (useExternalData as jest.Mock).mockReturnValue(mockUseExternalData(mockData));

    render(<CoreFunctionalityComponent />);
    await screen.findByText(/value/i);
    expect(screen.getByText(/value/i)).toBeInTheDocument();
  });

  test('displays error message when data fetching fails', async () => {
    const mockError = new Error('Failed to fetch');
    (useExternalData as jest.Mock).mockReturnValue(mockUseExternalData(undefined, mockError));

    render(<CoreFunctionalityComponent />);
    await screen.findByText(/failed to fetch/i);
    expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument();
  });

  test('displays loading state while fetching data', async () => {
    (useExternalData as jest.Mock).mockReturnValue(mockUseExternalData(undefined, undefined, true));

    render(<CoreFunctionalityComponent />);
    await screen.findByText(/loading/i);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('handles user interaction with button click', async () => {
    const mockOnClick = jest.fn();

    (useExternalData as jest.Mock).mockReturnValue(mockUseExternalData());

    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockOnClick).toHaveBeenCalled();
  });

  test('ensures accessibility features are implemented correctly', async () => {
    (useExternalData as jest.Mock).mockReturnValue(mockUseExternalData());

    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'action-button');

    fireEvent.click(button);
  });
});