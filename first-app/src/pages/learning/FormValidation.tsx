import { useState } from "react";

function FormValidation() {
    const [formFields, setFormFields] = useState({
        fName: '',
        lName: '',
        email: '',
        phone: ''
    });
    const [erros, setErros] = useState({
        fName: false,
        lName: false,
        email: false,
        phone: false
    });

    // const validateFiels = {
    //     fName: '',
    //     lName: '',
    //     email: '',
    //     phone: ''
    // };



    const submitForm = (e: React.FormEvent) => {
        console.log(e);
        e.preventDefault();
       // e.stopPropagation();
       validateForm(formFields, undefined, (err) => {
        if(!err.fName && !err.lName && !err.email && !err.phone) {
            console.log('@@@ HI FORM');
           }
       });

      
       
    }

    const updateFormField = (evt: React.ChangeEvent<HTMLInputElement>, field: string) => {
        let value = evt.target.value;
        setFormFields((prev) => {
            const obj: any = {...prev};
            obj[field] = value;
            validateForm(obj, field);
            return obj;
        });
    };

    const validateForm = (fields: any, formField?: string, callBack?: (err: any) => void) => {
        setErros((prev) => {
            const errorObj: any = {...prev};
            if(formField) {
                errorObj[formField] = !fields[formField] ? true : false;
            }else{
                errorObj.fName = !fields.fName ? true : false;
                errorObj.lName = !fields.lName ? true : false;
                errorObj.email = !fields.email ? true : false;
                errorObj.phone = !fields.phone ? true : false;
            }
           
            if(callBack) {
                callBack(errorObj);
            }
            return errorObj;
        })
       
    }
    

    const renderError = (message: string) => {
        return (
            <div className="error-field">
                 {message}
            </div>
        );
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
                        onChange={(evt:  React.ChangeEvent<HTMLInputElement>) => updateFormField(evt, 'fName')} />
                        {erros.fName && renderError('First Name is Required')}
                    </div>
                </div>
                <div className="form-field">
                    <label>Last Name</label>
                    <div>
                        <input type="text" value={formFields.lName} onChange={(evt:  React.ChangeEvent<HTMLInputElement>) => updateFormField(evt, 'lName')} />
                        {erros.lName && renderError('Last Name is Required')}
                    </div>
                </div>
                <div className="form-field">
                    <label>Email</label>
                    <div>
                        <input type="text" value={formFields.email} onChange={(evt:  React.ChangeEvent<HTMLInputElement>) => updateFormField(evt, 'email')} />
                        {erros.email && renderError('Email is Required')}
                    </div>
                </div>
                <div className="form-field">
                    <label>Phone</label>
                    <div>
                        <input type="text" value={formFields.phone} onChange={(evt:  React.ChangeEvent<HTMLInputElement>) => updateFormField(evt, 'phone')} />
                        {erros.phone && renderError('Phone is Required')}
                    </div>
                </div>

                <div className="form-field">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default FormValidation;