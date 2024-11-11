type InputFieldProps = {
    label: string;
    type: string;
    id: string;
  };
  
  const InputField = ({ label, type, id }: InputFieldProps) => {
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} />
      </div>
    );
  };
  
  export default InputField;
  