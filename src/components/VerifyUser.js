import React, { useState } from 'react';
import { verifyUser } from '../services/apiService';

const VerifyUser = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const result = await verifyUser({ email, otp });
      setMessage(result.success ? 'Verification successful!' : 'Invalid OTP');
    } catch (error) {
      setMessage('Error verifying user');
    }
  };

  return (
    <div className="container">
      <h2>Verify Account</h2>
      <form onSubmit={handleVerify}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="text" placeholder="Enter OTP" onChange={(e) => setOtp(e.target.value)} required />
        <button type="submit">Verify</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default VerifyUser;
    