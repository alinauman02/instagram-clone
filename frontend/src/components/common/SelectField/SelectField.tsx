import './SelectField.css';

interface InputProps {
  name: string;
  placeholder: string;
  onChange: (e: React.FormEvent<HTMLSelectElement>) => void;
  value?: string;
  label?: string;
}

export function SelectField({ name, placeholder, value, label, onChange }: InputProps) {
  return (
    <div className="flex-box">
      <label htmlFor={name} className="edit-profile-label">
        {label}
      </label>
      <select
        className={label ? 'input-edit-field' : 'input-field'}
        name={name}
        placeholder={placeholder}
        autoComplete="off"
        value={value}
        id={name}
        onChange={onChange}
      >
        <option value="male">male</option>
        <option value="female">female</option>
      </select>{' '}
    </div>
  );
}
