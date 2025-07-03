import React, { useState } from "react";
import './App.css'

const FormExample = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [isFormValid,setIsFormValid]=useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    // Validation logic
    if (name === 'username') {
      setFormErrors({
        ...formErrors,
        [name]: value.length < 3 ? 'Username must be at least 3 characters' : ''
      });
    } else if (name === 'email') {
      setFormErrors({
        ...formErrors,
        [name]: !/\S+@\S+\.\S+/.test(value) ? 'Invalid email address' : ''
      });
    } else if (name === 'password') {
      setFormErrors({
        ...formErrors,
        [name]: value.length < 6 ? 'Password must be at least 6 characters' : ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);

    // Reset form after submit
    setFormData({
      username: '',
      email: '',
      password: ''
    });
  };
 
  //check if there are any errors in the form
  const checkFormValidity=()=>{
    const errors=Object.values(formErrors).some((error) => error !=='');
    setIsFormValid(!errors);
  };

  //update the form validity whenever formErrors change
  React.useEffect(()=>{
    checkFormValidity();
  },[formErrors]);



  //JSX
  return (
   <div>
    <h1>React Form Example</h1>
    <form onSubmit={handleSubmit} autoComplete="off" className="form-table">
      <table>
        <tbody>
          <tr>
            <td><label htmlFor='username'>Username: </label></td>
            <td><input type='text' id='username' name='username'
                 value={formData.username} onChange={handleChange}/>
            
            {formErrors.username && <p className="error">{formErrors.username}</p>}
            </td>
          </tr>

          <tr>
            <td><label htmlFor='email'>Email: </label></td>
            <td><input type='email' id='email' name='email'
                 value={formData.email} onChange={handleChange}/>
            
            {formErrors.email && <p className="error">{formErrors.email}</p>}
            </td>
          </tr>

          <tr>
            <td><label htmlFor='password'>Password: </label></td>
            <td><input type='password' id='password' name='password'
                 value={formData.password} onChange={handleChange}/>
            
            {formErrors.password && <p className='error'>{formErrors.password}</p>}
            </td>
          </tr>
        </tbody>
      </table>

      <button type="submit" disabled={!isFormValid}>Submit</button>
    </form>
   </div>
  );
};

export default FormExample;