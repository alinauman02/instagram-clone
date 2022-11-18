import React from 'react';
import './InputField.css';

interface InputProps {
  name: string;
  type: 'string' | 'email' | 'password' | 'number';
  placeholder: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  value?: string;
  label?: string;
}

export function InputField({ name, type, placeholder, value, onChange, label }: InputProps) {
  const inputField = (
    <input
      className={label ? 'input-edit-field' : 'input-field'}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      autoComplete="off"
      value={value}
      id={name}
    />
  );
  return label ? (
    <div className="flex-box">
      <label htmlFor={name} className="edit-profile-label">
        {label}
      </label>
      {inputField}
    </div>
  ) : (
    inputField
  );
}
