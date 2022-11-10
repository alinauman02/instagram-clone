import React from 'react';
import './Input.css';

interface InputProps {
  name: string;
  type: 'string' | 'email' | 'password' | 'number';
  placeholder: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  value?: string;
  label?: string;
}

export function Input({ name, type, placeholder, value, onChange, label }: InputProps) {
  return (
    <div className="flex-box">
      <label htmlFor={name} className="edit-profile-label">
        {label}
      </label>
      <input
        className="input-edit-field"
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete="off"
        value={value}
        id={name}
      />
    </div>
  );
}
