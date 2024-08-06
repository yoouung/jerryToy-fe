import { ChangeEvent, forwardRef, useRef, useState, Ref } from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  type?: string;
  placeholder?: string;
  onChange: ({ value }: { [x: string]: any; value: string }) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  value?: string;
  disabled?: boolean;
  nextRef?: Ref<HTMLInputElement>;
};

const TextInput = forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      type,
      placeholder,
      onChange,
      onKeyDown,
      value = '',
      disabled = false,
      nextRef,
    },
    ref
  ) => {
    const [text, setText] = useState(value);

    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
      const value = ev.target.value;
      setText(value);
      onChange({ value });
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && nextRef) {
        e.preventDefault();
        (nextRef as React.RefObject<HTMLInputElement>).current?.focus();
      }
      if (onKeyDown) {
        onKeyDown(e);
      }
    };

    return (
      <StyledInput
        ref={ref as Ref<HTMLInputElement>}
        type={type}
        value={text}
        className={className}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        disabled={disabled}
      />
    );
  }
);

const resetInputStyles = `
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
`;

const StyledInput = styled.input`
  ${resetInputStyles}

  width: 330px;
  height: 40px;
  padding: 12px;
  box-sizing: border-box;
  border: 1px solid var(--default-border-color);
  border-radius: 4px;
  color: black;
  &::placeholder {
    color: var(--default-border-color);
  }
  &:focus {
    border-color: var(--focus-border-color);
    color: black;
  }
`;

export default TextInput;
