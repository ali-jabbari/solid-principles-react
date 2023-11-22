import {useState} from "react";

interface IFormProps {
    onSubmit: (email: string, password: string) => void;
}

export function Form(props: IFormProps) {
    const [email] = useState("");
    const [password] = useState("");

    const {onSubmit} = props;

    const handleSubmit2 = () => {
        onSubmit(email, password);
    };

    return (
        <section>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form
                            className="space-y-4 md:space-y-6"
                            onSubmit={handleSubmit2}
                        >
                            {/* form inputs ... */}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
