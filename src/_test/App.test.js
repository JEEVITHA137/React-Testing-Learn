import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Title', () => {
  test('Check Title exist', () => {
    render(<App />);
    const headerElement = screen.getByTitle(/Header/i);
    expect(headerElement).toBeInTheDocument();
    expect(headerElement.textContent).toBe("Simple Calculator");
  });
});
