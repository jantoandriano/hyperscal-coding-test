'use client';
import { FormGenerator } from '@/components/form/FormGenerator';
import { FormModel, FormSchema } from '@/components/form/types';
import { useFormGen } from '@/components/form/useFormGen';
import { Button } from '@/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
export default function LoginPage() {
    const router = useRouter();
    const searchParams = useSearchParams()

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
            model: { first_name: "", last_name: "" }
        });

    const handleLogin = async (data: FormModel) => {
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
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
        <div className="w-full md:w-96">
            <form onSubmit={handleSubmit(handleLogin)}>
                <FormGenerator schema={schema} state={state} model={model} updateModelValue={updateModelValue} />
                <Button type={'submit'} className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600 mt-4">Login</Button>
            </form>
        </div>
    )
}