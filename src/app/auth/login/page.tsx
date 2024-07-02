'use client';
import { FormGenerator } from '@/components/form/FormGenerator';
import { FormModel, FormSchema } from '@/components/form/types';
import { useFormGen } from '@/components/form/useFormGen';
import { Button } from '@/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
export default function LoginPage() {


    const schema = {
        name: "simple-form",
        definitions: [
            {
                name: "email",
                type: "text",
                label: { text: "Email" },
                rules: [{ name: "required" }]
            },
            {
                name: "password",
                type: "password",
                label: { text: "Password" },
                rules: [{ name: "required" }]
            },
        ],
    } as FormSchema;


    const {
        state,
        model,
        updateModelValue,
        handleSubmit
    }
        = useFormGen({
            schema: schema,
            model: { email: "", password: "" }
        });


    const router = useRouter();
    const searchParams = useSearchParams()


    const handleLogin = async (model: FormModel) => {
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(model)
        });
        if (res.status === 200) {
            let returnUrl = searchParams.get('return');
            returnUrl = (returnUrl && decodeURIComponent(returnUrl)) ?? '/'
            router.push(returnUrl);
        }

    };

    // TODO: Challenge: #4 - Change to use form generator with useFormGenerator hook and do the submit
    // TODO: Optional Challenge #1 - Use tailwindcss to style the login page
    return (
        <>
            <div className="py-16">
                <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                    <img className="hidden lg:block lg:w-1/2 bg-cover" src="https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
                    />
                    <div className="w-full p-8 lg:w-1/2">
                        <h2 className="text-2xl font-semibold text-gray-700 text-center uppercase">Welcome</h2>
                        <form onSubmit={handleSubmit(handleLogin)}>
                            <FormGenerator schema={schema} state={state} model={model} updateModelValue={updateModelValue} />
                            <Button type={'submit'} className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600 mt-4">Login</Button>
                        </form>
                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b w-1/5 md:w-1/4"></span>
                            <a href="#" className="text-xs text-gray-500 uppercase">or sign up</a>
                            <span className="border-b w-1/5 md:w-1/4"></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
