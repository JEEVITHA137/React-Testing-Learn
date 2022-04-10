import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../input';

const mockTest = jest.fn();


describe('Input', () => {
  test('Check Input Field For Initial Value', () => {
    render(<Input label="Input" value={0} inputChange={mockTest}/>);
    const inputElement = screen.queryByLabelText('Input');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveTextContent("");
  });

  test('Check Input Field With Values', () => {
    render(<Input label="Input" value={0} inputChange={mockTest}/>);
    const inputElement = screen.queryByLabelText('Input');
    fireEvent.change(inputElement, {target:{value:'45'}});
    expect(mockTest).toBeCalledWith('45');
  });
});
