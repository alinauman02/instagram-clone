import './Input.css';

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
}

export function Input({ name, type, placeholder }: InputProps) {
  return (
    <div className="input-box">
      <input className="input-field" type={type} name={name} placeholder={placeholder} />
    </div>
  );
}
