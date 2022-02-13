export default function Input({ label, type, name, id, onChange, value }) {
  return (
    <>
      <label htmlFor={id}>
        {label}
        <input
          type={type}
          name={name}
          id={id}
          onChange={onChange}
          placeholder={label}
          value={value}
        />
      </label>
    </>
  );
}
