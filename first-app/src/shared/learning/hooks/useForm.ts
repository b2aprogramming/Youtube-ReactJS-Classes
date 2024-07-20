import { useEffect, useState } from "react";

function useForm(initialValues: any, validationSchema: any = {}) {
    const [formFields, setFormFields] = useState(initialValues);
    const [errors, setErrors] = useState<any>({});
    const [valid, setValid] = useState<any>(true);

    const changeInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = evt.target;
        setFormFields({
            ...formFields,
            [name]: value
        });

        if(validationSchema[name]) {
            const errrorMsg = validationSchema[name](value);
            const errObj = {
                ...errors,
                [name]: errrorMsg
            };

            setErrors(errObj);
        }
        validateErrors();
    }

    const formSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        return validateErrors();
    }

    const validateErrors = ()=> {
        const errorObj: any = {};
        let isValid = true;

        for(let field in validationSchema) {
            const errorMsg = validationSchema[field](formFields[field]);
            errorObj[field] = errorMsg;
            if(errorMsg) {
                isValid = false;
            }
        }
        setValid(isValid);
        setErrors(errorObj);
        return Promise.resolve(isValid);
    }
    useEffect(() => {
        setErrors(() => {
            const obj: any = {};
            for(let i in initialValues) {
                obj[i] = ''; 
            }
            return obj
        })
    }, []);

    return {
        formFields,
        errors,
        changeInput,
        formSubmit,
        valid
    }
}

export default useForm;