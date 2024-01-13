import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonComponent({children, ...rest }: ButtonProps) {
    return (
        <Container>
            <button type="button" {...rest} >{children}</button>
        </Container>
    )
}

