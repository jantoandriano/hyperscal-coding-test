import {FormLabelProps} from "@/components/form/types";
import React from "react";
import {Label} from "@/components/ui/label";


const FormLabel = React.forwardRef<HTMLInputElement, FormLabelProps>(
    ({label, errors, path, children,
         ...props}, ref) => {
            const errMessage = errors ? errors.toString() : ''
        return (
            <>
                <Label htmlFor={path}>{label.text}</Label>
                <div>{children}</div>
                <div className="text-xs text-red-400">{errMessage}</div>
            </>
        )
    }
);

FormLabel.displayName = 'FormLabel';
export { FormLabel };