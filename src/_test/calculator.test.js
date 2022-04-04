import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../Calculator';

describe('Calculator', () => {
  test('Check Input Field', () => {
    render(<Calculator/>);
    const inputElement = screen.queryByLabelText('Input - 1');
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, {target:{value:'45'}});
    expect(inputElement.value).toBe('45');
  });

});
