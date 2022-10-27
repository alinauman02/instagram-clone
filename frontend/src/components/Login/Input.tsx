import React from 'react';
import './Input.css';

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

export function Input({ name, type, placeholder, onChange }: InputProps) {
  return (
    <div className="input-box">
      <input className="input-field" type={type} name={name} placeholder={placeholder} onChange={onChange} />
    </div>
  );
}
