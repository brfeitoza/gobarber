import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';

import Input from '../../components/Input';

let mockedUseFieldError = '';

jest.mock('@unform/core', () => {
  return {
    useField: () => ({
      fieldName: 'email',
      defaultValue: '',
      error: mockedUseFieldError,
      registerField: jest.fn(),
    }),
  };
});

describe('Input component', () => {
  it('should be able to render an input', () => {
    const { getByPlaceholderText } = render(
      <Input name="email" placeholder="E-mail" />,
    );

    expect(getByPlaceholderText('E-mail')).toBeTruthy();
  });

  it('should render highlight on input focus', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="E-mail" />,
    );

    const inputElement = getByPlaceholderText('E-mail');
    const containerElement = getByTestId('input-container');

    fireEvent.focus(inputElement);

    await waitFor(() => {
      expect(containerElement).toHaveStyle('border-color: #ff9000');
      expect(containerElement).toHaveStyle('color: #ff9000');
    });

    fireEvent.blur(inputElement);

    await waitFor(() => {
      expect(containerElement).not.toHaveStyle('border-color: #ff9000');
      expect(containerElement).not.toHaveStyle('color: #ff9000');
    });
  });

  it('should keep input text highlight when input is filled', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="E-mail" />,
    );

    const inputElement = getByPlaceholderText('E-mail');
    const containerElement = getByTestId('input-container');

    fireEvent.change(inputElement, {
      target: { value: 'johndoe@example.com' },
    });

    fireEvent.blur(inputElement);

    await waitFor(() => {
      expect(containerElement).not.toHaveStyle('border-color: #ff9000');
      expect(containerElement).toHaveStyle('color: #ff9000');
    });
  });

  it('should render highlight and icon on input error', async () => {
    mockedUseFieldError = 'E-mail inválido';

    const { getByTestId } = render(<Input name="email" placeholder="E-mail" />);

    const containerElement = getByTestId('input-container');
    const iconElement = getByTestId('error-icon');

    expect(containerElement).toHaveStyle('border-color: #c53030');
    expect(iconElement).toHaveStyle('color: #c53030');
  });
});
