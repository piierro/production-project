import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "./Button";
import * as cls from './Button.module.scss'

describe('Button', () => {
  test('test render', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test("Check if class is clear", () => {
    render(<Button theme={ThemeButton.CLEAR}>test</Button>);
    expect(screen.getByText('test')).toHaveClass(cls.clear);
  })
})