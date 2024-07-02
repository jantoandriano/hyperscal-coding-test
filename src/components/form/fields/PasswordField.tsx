// TODO: Challenge #3 - create a password field component
import { PasswordFieldProps } from "@/components/form/types";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";


const PasswordField = React.memo(React.forwardRef<HTMLInputElement, PasswordFieldProps>(
    ({ field, value, path,
        updateModelValue, ...props }, ref) => {
        const [isPasswordVisible, setPasswordVisible] = useState(false);


        useEffect(() => {
            console.log(`PasswordField ${path} mounted`);
            return () => {
                console.log(`PasswordField ${path} unmounted`);
            }
        }, []);


        useEffect(() => {
            console.log(`PasswordField ${path} rerendered`);
        }, []);




        const togglePasswordVisibility = () => {
            setPasswordVisible(!isPasswordVisible);
        };




        return (
            <div className="flex border border-red-50">
                <Input
                    type={isPasswordVisible ? 'text' : 'password'}
                    ref={ref}
                    name={field.name}
                    id={path}
                    // @ts-ignore
                    value={value}
                    onChange={(e) =>
                        updateModelValue(path, field, e.target.value)}
                />
                <button type="button" onClick={togglePasswordVisibility}>
                    {isPasswordVisible ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
));


PasswordField.displayName = 'PasswordField';
export { PasswordField };