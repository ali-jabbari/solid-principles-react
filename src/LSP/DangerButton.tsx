import {ButtonHTMLAttributes, ReactNode} from "react";

interface IDangerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export const DangerButton = ({children, ...props}: IDangerButtonProps) => {
    return <button {...props} className="danger">{children}</button>;
};