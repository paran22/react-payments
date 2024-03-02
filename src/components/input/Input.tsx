import { HTMLInputTypeAttribute, RefObject } from "react";

type InputType = "basic" | "underline";

export interface BaseInputProps {
  value?: string;
  onChange?: (value: string) => void;
  onKeydown?: (value: string) => void;
  placeHolder?: string;
  inputRef?: RefObject<HTMLInputElement>;
  type?: HTMLInputTypeAttribute;
  maxLength?: number;
}
interface InputProps extends BaseInputProps {
  style: InputType;
}

export default function Input({
  style,
  value,
  onChange,
  onKeydown,
  placeHolder,
  inputRef,
  type,
  maxLength,
}: InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    onKeydown?.(e.key);
  };

  return (
    <input
      className={`input-${style}`}
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder={placeHolder}
      ref={inputRef}
      type={type}
      maxLength={maxLength}
    />
  );
}