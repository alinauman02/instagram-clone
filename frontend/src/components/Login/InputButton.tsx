import './InputButton.css';

interface InputButtonProps {
  name: string;
}

export function InputButton({ name }: InputButtonProps) {
  return <input className="submit-button" type="submit" name={name} value={name} />;
}
