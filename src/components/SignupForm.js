import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../services/apiService";

const SignupForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone:"",
        username: "",
        password: "",
    });

    const [error, setError] = useState("");


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const result = await signupUser(formData);
          if (result.success) {
            navigate('/verify');
          } else {
            setError(result.message || 'Signup failed');
          }
        } catch (err) {
          setError('Failed to connect to server');
        }
      };
    
      return (
        <div className="container">
          <h2>Signup</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Sign Up</button>
          </form>
          {error && <p className="error">{error}</p>}
        </div>
      );
    };
    
    export default SignupForm;