export type InputFieldProps = {
    label: string;
    type: string;
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField: React.FC<InputFieldProps> = ({
    label,
    type,
    id,
    value,
    onChange,
}) => {
    return (
        <div className="input_wrapper flex justify-between">
            <label className="text-lg" htmlFor={id}>
                {label}
            </label>
            <input
                className="border p-1 w-4/5 rounded focus:outline-none"
                type={type}
                id={id}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default InputField;
