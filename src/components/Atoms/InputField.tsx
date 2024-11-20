import React from "react";
import { Input } from "antd";
import { InputFieldProps } from "../../types/InputFieldProps"; 

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
                id={id}
                value={value}
                onChange={onChange}
                className="w-full"
            />
        </div>
    );
};

export default InputField;
