import { useState, forwardRef, Ref } from 'react';
import {
  Container,
  StyledTextInput,
  ErrorMessage,
  StyledPasswordInput,
  ErrorIcon,
} from './styles';

type Props = {
  className?: string;
  type?: string;
  placeholder?: string;
  onChange: ({ value }: { value: string }) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  value?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  onKeyDown?: (e: React.KeyboardEvent) => void;
};

const AuthInput = forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      type,
      placeholder,
      onChange,
      value = '',
      disabled = false,
      error = false,
      errorMessage = '',
      onKeyDown,
    }: Props,
    ref: Ref<HTMLInputElement>,
  ) => {
    const [text, setText] = useState(value);

    const handleChange = ({ value }: { value: string }) => {
      setText(value);
      onChange({ value });
    };

    return (
      <Container>
        <>
          <StyledTextInput
            ref={ref}
            type={type}
            placeholder={placeholder}
            onChange={({ value }) => handleChange({ value })}
            value={text}
            disabled={disabled}
            error={error as boolean}
            onKeyDown={onKeyDown}
          />
          {error && <ErrorIcon />}
          <ErrorMessage>{error ? errorMessage : ''}</ErrorMessage>
        </>
      </Container>
    );
  },
);

export default AuthInput;
