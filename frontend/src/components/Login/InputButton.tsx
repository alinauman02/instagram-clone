import './InputButton.css';

interface InputButtonProps {
  name: string;
  disable: boolean;
}

export function InputButton({ name, disable }: InputButtonProps) {
  return (
    <button className="submit-button" type="submit" name={name} value={name} disabled={disable}>
      {name}
    </button>
  );
}
