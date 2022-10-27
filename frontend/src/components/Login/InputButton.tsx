import './InputButton.css';

interface InputButtonProps {
  name: string;
  enable: boolean;
}

export function InputButton({ name, enable }: InputButtonProps) {
  const submitStyle = enable ? 'submit-button' : 'submit-button button-opacity';
  return <input className={submitStyle} type="submit" name={name} value={name} />;
}
