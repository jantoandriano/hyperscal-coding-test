'use client';
import { logout } from "@/actions/logout";
import { FormModel, FormSchema } from "@/components/form/types";
import { useFormGen } from "@/components/form/useFormGen";
import { FormGenerator } from "@/components/form/FormGenerator";
import { Button } from "@/components/ui/button";

export default function FormPage() {
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
        });

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
            <div className="py-16 bg-gray-800 h-[100vh]">
                <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                    <img className="hidden lg:block lg:w-1/2 bg-cover" src="https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
                    />
                    <div className="w-full p-8 lg:w-1/2">
                        <form onSubmit={handleSubmit(logSubmit)}>
                            <FormGenerator schema={schema} state={state} model={model} updateModelValue={updateModelValue} />
                            <Button type="submit" className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600 mt-4">Add</Button>
                        </form>

                        <form action={logout}>
                            <Button className="bg-red-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-red-600 mt-4" type={"submit"}>Logout</Button>
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
