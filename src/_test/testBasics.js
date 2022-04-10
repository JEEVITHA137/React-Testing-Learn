import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import Calculator from '../Calculator';

const run = (dummy) => {
  dummy();
}

const numberKeysValue = (value) => {
  const inputElement = screen.getByPlaceholderText(/Enter Input/i);
  expect(inputElement.value).toBe("");
  value.forEach(buttonValue => {
    const buttonlement = screen.getByRole("button", { name: buttonValue });
    fireEvent.click(buttonlement);
  })
  expect(inputElement.value).toBe(value.join(""));
}

const PressButtonForMath = (num1, num2, symbol) => {
  const buttonElement = screen.getByRole("button", { name: num1 });
  const addElement = screen.getByRole("button", { name: symbol });
  const buttonElement1 = screen.getByRole("button", { name: num2 });
  const ansElement = screen.getByRole("button", { name: "=" });
  fireEvent.click(buttonElement);
  fireEvent.click(addElement);
  fireEvent.click(buttonElement1);
  fireEvent.click(ansElement);
}

describe('Header', () => {
  test('Check Header Value', () => {
    render(<App />);
    const headerElement = screen.getByTitle(/Header/i);
    expect(headerElement).toBeInTheDocument();
  });
});

describe('Initial Value', () => {
  test('Check Initial Input value', () => {
    render(<Calculator />);
    const inputElement = screen.getByPlaceholderText(/Enter Input/i);
    expect(inputElement).toBeInTheDocument();
  });
});

describe('Buttons test', () => {
  test('Check Clear Value Button', () => {
    render(<Calculator />);
    const inputElement = screen.getByPlaceholderText(/Enter Input/i);
    expect(inputElement.value).toBe("");
    const buttonlement = screen.getByRole("button", { name: /clear/i });
    console.log(inputElement)
    fireEvent.change(screen.getByPlaceholderText(/Enter Input/i), { target: { value: "12" } });
    // expect(inputElement.value).toBe("12");
    fireEvent.click(buttonlement);
    expect(inputElement.value).toBe("");
  });

  test('Check the Keys Pressed Values', async () => {
    render(<Calculator />);
    await numberKeysValue([1, 2, 3, 4]);
  });
});

describe('Math Function Check', () => {
  test('Check add function', () => {
    render(<Calculator />);
    const inputElement = screen.getByPlaceholderText(/Enter Input/i);
    expect(inputElement.value).toBe("");
    PressButtonForMath(1, 4, "+");
    expect(inputElement.value).toBe("5");
  })
});

test('function calling test', () => {
  const dummy = jest.fn();
  run(dummy);
  expect(dummy).toBeCalled();
});
