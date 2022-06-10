import React from "react";
import { InputProps } from "../../models/models";
import { InputArea, InputWrapper } from "./Input.style";

const Input: React.FC<InputProps> = ({
    type,
    placeholder,
    name,
    value,
    icon,
    onChange,
}) => {
    return (
        <InputWrapper>
            <InputArea>
                <i className={icon}></i>
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required
                />
            </InputArea>
        </InputWrapper>
    );
};

export default Input;
