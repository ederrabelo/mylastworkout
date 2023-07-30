import { MouseEventHandler } from "react";
import styles from "./button.module.css"

interface ButtonProps {
    name: string,
    type: "button" | "submit" | "reset" | undefined,
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined,
}

export default function Button({ name, type, onClick }: ButtonProps) {
    return (
        <button
            className={`${styles.button} ${(type === "submit" ? styles.primary : '')}`}
            type={type}
            onClick={onClick}
        >
            {name}
        </button>
    )
}