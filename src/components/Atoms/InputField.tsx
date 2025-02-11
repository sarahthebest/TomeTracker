import React from "react";
import { Input } from "antd";
import { InputFieldProps } from "../../types/input_field.types"; 

const InputField: React.FC<InputFieldProps> = ({
    label,
    type,
    id,
    value,
    onChange,
}) => {
    return (
        <div className="input_wrapper flex flex-col gap-2">
            <label htmlFor={id}>
                {label}
            </label>
            <Input
                type={type}
                required={true}
                id={id}
                value={value}
                onChange={onChange}
                className="w-full"
            />
        </div>
    );
};

export default InputField;
