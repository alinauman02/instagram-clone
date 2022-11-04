import React from 'react';
import './Input.css';

interface InputProps {
  name: string;
  type: 'string' | 'email' | 'password' | 'number' | 'textarea';
  placeholder: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  value?: string;
}

export function Input({ name, type, placeholder, value, onChange }: InputProps) {
  return (
    <input
      className="input-edit-field"
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      autoComplete="off"
      value={value}
    />
  );
}
