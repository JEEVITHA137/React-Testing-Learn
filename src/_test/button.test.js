import { render, screen, fireEvent } from '@testing-library/react';
import ButtonInput from '../button';

const mockTest = jest.fn();


describe('Button', () => {
  test('Check Initial State', () => {
    const value = '+';
    const currentSymbol = ''
    render(<ButtonInput key={value} symbol={value} currentSymbol={currentSymbol} currentSymbolChange={mockTest}/>);
    const buttonElement = screen.getByRole("button", { name: value });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('btn-dark');
  });

  test('Check Function Called', () => {
    const value = '+';
    const currentSymbol = '';
    render(<ButtonInput key={value} symbol={value} currentSymbol={currentSymbol} currentSymbolChange={mockTest}/>);
    const buttonElement = screen.getByRole("button", { name: value });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('btn-dark');
    fireEvent.click(buttonElement);
    expect(mockTest).toBeCalledWith('+');
  });

  test('Check Current Button Symbol Class', () => {
    const value = '+';
    const currentSymbol = '+'
    render(<ButtonInput key={value} symbol={value} currentSymbol={currentSymbol} currentSymbolChange={mockTest}/>);
    const buttonElement = screen.getByRole("button", { name: value });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('btn-success');
  });

  test('Check Clear Button', () => {
    const value = 'Clear';
    const currentSymbol = '';
    render(<ButtonInput key={value} symbol={value} currentSymbol={currentSymbol} currentSymbolChange={mockTest}/>);
    const buttonElement = screen.getByRole("button", { name: value });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('btn-primary');
  });
});
