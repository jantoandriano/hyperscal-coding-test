'use client';
import { FormGenerator } from '@/components/form/FormGenerator';
import { FormModel, FormSchema } from '@/components/form/types';
import { useFormGen } from '@/components/form/useFormGen';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { z } from 'zod';

export default function LoginPage() {

    const formSchema = z.object({
        email: z.string().nonempty("Email is required"),
        password: z.string().nonempty("Last Name is required"),
    });

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
        }, formSchema);


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
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
                <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                    <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                    <form onSubmit={handleSubmit(handleLogin)} className='flex flex-col gap-4'>
                        <FormGenerator schema={schema} state={state} model={model} updateModelValue={updateModelValue} />
                        <Button type={'submit'} className="w-full bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-3 px-4 rounded-full shadow-lg transform transition-transform hover:scale-105 mt-4">Login</Button>
                    </form>
                    <div className="mt-4 text-center">
                        <Link href="/register" className="text-blue-500 hover:underline">
                            Don't have an account? Register
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
