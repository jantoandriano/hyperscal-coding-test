'use client';
import { logout } from "@/actions/logout";
import { FormModel, FormSchema } from "@/components/form/types";
import { useFormGen } from "@/components/form/useFormGen";
import { FormGenerator } from "@/components/form/FormGenerator";
import { Button } from "@/components/ui/button";
import { z } from 'zod';

export default function FormPage() {


    const formSchema = z.object({
        first_name: z.string().nonempty("Name is required"),
        last_name: z.string().nonempty("Last Name is required"),
    });

    const schema = {
        name: "simple-form",
        definitions: [
            {
                name: "first_name",
                type: "text",
                label: { text: "First Name" },
                rules: [{ name: "required" }]
            },
            {
                name: "last_name",
                type: "text",
                label: { text: "Last Name" },
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
        }, formSchema);

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     console.log(model, state.isDirty);
    // };

    const logSubmit = async (model: FormModel) => {
        console.log(model);
    }
    // TODO: Challenge #2: Browser console is throwing a warning. Fix it.
    return (
        <>
            <div className="py-16 min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
                <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                    <img className="hidden lg:block lg:w-1/2 bg-cover" src="https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
                    />
                    <div className="w-full p-8 lg:w-1/2">
                        <form onSubmit={handleSubmit(logSubmit)} className="flex flex-col gap-3">
                            <FormGenerator schema={schema} state={state} model={model} updateModelValue={updateModelValue} />
                            <Button type="submit" className="w-full bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white font-bold py-3 px-4 rounded-full shadow-lg transform transition-transform hover:scale-105">Add</Button>
                        </form>

                        <form action={logout} className="mt-4">
                            <Button className="w-full bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-3 px-4 rounded-full shadow-lg transform transition-transform hover:scale-105" type={"submit"}>Logout</Button>
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
