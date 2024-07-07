import useForm from "../hooks/useForm";

function TestForm() {
    // Define initial values and validation schema
  const initialValues = {
    username: '',
    email: '',
    password: ''
  };

  const validationSchema = {
    username: (value: any) => {
      if (!value) return 'Username is required';
      return '';
    },
    email: (value: any) => {
      if (!value) return 'Email is required';
      // Simple email validation regex
      if (!/\S+@\S+\.\S+/.test(value)) return 'Email is invalid';
      return '';
    },
    password: (value: any) => {
      if (!value) return 'Password is required';
      // Validate password requirements (e.g., length)
      if (value.length < 8) return 'Password must be at least 8 characters long';
      return '';
    }
  };

  const { values, errors, handleChange, handleSubmit, fieldValidity, isValid }: any = useForm(initialValues, validationSchema);

  const submitForm = (e: any) => {
    handleSubmit(e);
    console.log(values);
    console.log(fieldValidity);
    console.log(errors);
    console.log(isValid);
  }

  return (
    <form onSubmit={submitForm}>
        <div>{isValid ? 'Valid' : 'not valid'}</div>
        <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
                 className={"form-control" +(errors.username ?' is-invalid' : '')}
                 type="text"
                 name="username"
                 value={values.username}
                 onChange={handleChange}
                 placeholder="Enter user name"

            />
             {errors.username && <div className="invalid-feedback">
                {errors.username}
            </div>}
        </div>

        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
                className={"form-control" + (errors.email ?' is-invalid' : '')}
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Enter user email"
            />
            {errors.email && <div className="invalid-feedback">
                {errors.email}
            </div>}
        </div>
      
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
                className={"form-control" + (errors.password ?' is-invalid' : '')}
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Enter user password"
            />
            {errors.password && <div className="invalid-feedback">
                {errors.password}
            </div>}
        </div>
      

      

      <button type="submit">Submit</button>
    </form>
  );
}

export default TestForm;