import { useState } from "react";
import useForm from "../../shared/learning/hooks/useForm";

function FormValidationReusable() {
    const {formFields, changeInput, errors, formSubmit, valid} = useForm({
        fName: '',
        lName: '',
        email: '',
        phone: '',
        addresDetails : {
            address1: '',
            address2: '',
            city: '',
        }
    }, {
        fName: (value: any) => {
            if(!value) {
                return 'First Name is required'
            }
            return ''
        },
        lName: (value: any) => {
            if(!value) {
                return 'Last Name is required'
            }
            return ''
        },
        email: (value: any) => {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if(!value) {
                return 'Email is required'
            }else if(value && !value.match(emailPattern)) {
                return 'Email is not valid';
            }else {
                return ''
            }
        },
        phone: (value: any) => {
            var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            if(!value) {
                return 'Email is required'
            }else if(value && !value.match(phoneno)) {
                return 'Phone is not valid';
            }else {
                return ''
            }
        }
    })
    const renderError = (message: string) => {
        return (
            <div className="error-field">
                 {message}
            </div>
        );
    }

    const submitForm = (e: React.FormEvent) => {
        formSubmit(e).then((isValid) => {
            console.log('@@@ VALID', isValid);
            if(isValid) {

            }
        });
    }

    return (
        <div className="form-block">
            <form className="test-form" onSubmit={submitForm}>
                <div className="form-field">
                    <label>First Name</label>
                    <div>
                        <input 
                        type="text" 
                        value={formFields.fName} 
                        name="fName"
                        onChange={(evt:  React.ChangeEvent<HTMLInputElement>) => changeInput(evt)} />
                        {renderError(errors.fName)}
                        
                    </div>
                </div>
                <div className="form-field">
                    <label>Last Name</label>
                    <div>
                        <input type="text" name="lName" value={formFields.lName} onChange={(evt:  React.ChangeEvent<HTMLInputElement>) => changeInput(evt)} />
                        {renderError(errors.lName)}
                    </div>
                </div>
                <div className="form-field">
                    <label>Email</label>
                    <div>
                        <input type="text" name="email" value={formFields.email} onChange={(evt:  React.ChangeEvent<HTMLInputElement>) => changeInput(evt)} />
                        {renderError(errors.email)}
                    </div>
                </div>
                <div className="form-field">
                    <label>Phone</label>
                    <div>
                        <input type="text" name="phone" value={formFields.phone} onChange={(evt:  React.ChangeEvent<HTMLInputElement>) => changeInput(evt)} />
                        {renderError(errors.phone)}
                    </div>
                </div>

                <div className="form-field">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default FormValidationReusable;