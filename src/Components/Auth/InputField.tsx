import { HTMLAttributes } from "react";

interface InputFieldProps extends HTMLAttributes<HTMLInputElement> {
  type: string;
  //   key: string;
  className?: string;
  placeholder: string;
  name: string;
}

function InputField({
  type,
  className,
  //   key,
  placeholder,
  name,
  ...rest
}: InputFieldProps) {
  return (
    <input
      type={type}
      className={`removeDefault p-3 rounded  ${className}`}
      placeholder={placeholder}
      name={name}
      {...rest}
      required
    />
  );
}

export default InputField;
