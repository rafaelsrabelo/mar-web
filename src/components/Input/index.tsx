import React, { InputHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon: React.ComponentType<IconBaseProps>;
}

export function InputComponent({ icon: Icon, ...rest}: InputProps) {
    return (
        <Container>
            { Icon && <Icon size={20}/> }
            <input type="text" {...rest} />
        </Container>
    )
}