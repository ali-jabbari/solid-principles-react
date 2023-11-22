import React from 'react';

interface IButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    icon?: React.ReactNode;
}

const Button: React.FC<IButtonProps> = (props) => {
    const {text, icon} = props;

    return (
        <button
            className="flex items-center font-bold outline-none pt-4 pb-4 pl-8 pr-8 rounded-xl bg-gray-200 text-black"
            {...props}
        >
            {text}
            <div className="m-2">
                {icon}
            </div>
        </button>
    );
};

export default Button;