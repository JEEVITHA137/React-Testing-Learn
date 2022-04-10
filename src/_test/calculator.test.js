import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../Calculator';

const InitialTest = () => {
    render(<Calculator/>);
    const inputElement1 = screen.queryByLabelText('Input - 1');
    const inputElement2 = screen.queryByLabelText('Input - 2');
    expect(inputElement1).toBeInTheDocument();
    expect(inputElement2).toBeInTheDocument();
    expect(inputElement1.value).toBe('');
    expect(inputElement2.value).toBe('');
    return {inputElement1, inputElement2};
}

const mathInitialTestFunction = (input1, input2, mathValue, res) => {
  const {inputElement1, inputElement2} = InitialTest();
  fireEvent.change(inputElement1, {target:{value: input1}});
  fireEvent.change(inputElement2, {target:{value: input2}});
  const submitButton =  screen.getByRole("button", { name: "=" });
  const resultLabel = screen.getByText(/Result:/i);
  expect(resultLabel).toHaveTextContent("Result: 0");
  const addButton =  screen.getByRole("button", { name: mathValue});
  fireEvent.click(addButton);
  fireEvent.click(submitButton);
  expect(resultLabel).toHaveTextContent(`Result: ${res}`);
}

describe('Calculator Input Function', () => {
  test('Check Input Initial Value', () => {
    InitialTest();
  });

  test('Check Input With Value', () => {
    const {inputElement1, inputElement2} = InitialTest();
    fireEvent.change(inputElement1, {target:{value:'45'}});
    fireEvent.change(inputElement2, {target:{value:'47'}});
    expect(inputElement1.value).toBe('45');
    expect(inputElement2.value).toBe('47');
  });
});

describe('Calculator Button Function', () => {
  test('Check Clear Button', () => {
    const {inputElement1, inputElement2} = InitialTest();
    const clearButton =  screen.getByRole("button", { name: "Clear" });
    fireEvent.change(inputElement1, {target:{value:'45'}});
    fireEvent.change(inputElement2, {target:{value:'47'}});
    expect(inputElement1.value).toBe('45');
    expect(inputElement2.value).toBe('47');
    fireEvent.click(clearButton);
    expect(inputElement1.value).toBe('');
    expect(inputElement2.value).toBe('');
  });

  test('Check Submit Button', () => {
    const {inputElement1, inputElement2} = InitialTest();
    const submitButton =  screen.getByRole("button", { name: "=" });
    const errorElement = screen.queryByTestId("error");
    expect(errorElement).not.toBeInTheDocument();

    //Input Empty Check
    fireEvent.click(submitButton);
    const errorElementRecheck = screen.queryByTestId("error");
    expect(errorElementRecheck).toBeInTheDocument();
    expect(errorElementRecheck).toHaveTextContent('Enter both inputs');

    //Math Empty Check
    fireEvent.change(inputElement1, {target:{value:'45'}});
    fireEvent.change(inputElement2, {target:{value:'47'}});
    fireEvent.click(submitButton);
    expect(errorElementRecheck).toHaveTextContent('Choose any one of the Math Function');
    
    //Clear Button
    const clearButton =  screen.getByRole("button", { name: "Clear" });
    fireEvent.click(clearButton);
    expect(errorElementRecheck).not.toBeInTheDocument();

  });

  test('Check Add Function', () => {
    mathInitialTestFunction(56, 5, "+", 61);
  });

  test('Check Sub Function', () => {
    mathInitialTestFunction(56, 5, "-", 51);
  });

  test('Check Multiply Function', () => {
    mathInitialTestFunction(56, 5, "*", 280);
  });

  test('Check Divide Function', () => {
    mathInitialTestFunction(56, 5, "/", 11.2);
  });

  test('Check Reminder Function', () => {
    mathInitialTestFunction(56, 5, "%", 1);
  });
  
})
