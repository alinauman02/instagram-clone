import './SelectField.css';

interface InputProps {
  name: string;
  placeholder: string;
  onChange: (e: React.FormEvent<HTMLSelectElement>) => void;
  value: string;
  label?: string;
  options: string[];
}

export function SelectField({ options, name, placeholder, value, label, onChange }: InputProps) {
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
        {options.map(val => {
          return <option key={val}>{val}</option>;
        })}
      </select>
    </div>
  );
}
