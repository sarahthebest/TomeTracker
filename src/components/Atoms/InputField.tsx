type InputFieldProps = {
    label: string;
    type: string;
    id: string;
  };
  
  const InputField = ({ label, type, id }: InputFieldProps) => {
    return (
      <div className="input_wrapper flex justify-between">
        <label className="text-lg" htmlFor={id}>{label}</label>
        <input className="border p-1 w-4/5 rounded focus:outline-none" type={type} id={id} />
      </div>
    );
  };
  
  export default InputField;
  