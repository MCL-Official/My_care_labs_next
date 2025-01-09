"use client"

interface ButtonProps {
    onClick: () => void;
    disable: boolean;
    className: string;
    name: string;
    Icon :any

}

export const Button = ({ onClick, disable, className, name , Icon }: ButtonProps) => {
    return (
        <button className={className} disabled={disable} onClick={onClick}>
            {Icon}
        </button>
    )
}