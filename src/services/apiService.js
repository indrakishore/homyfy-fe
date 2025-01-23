const API_BASE_URL = 'http://localhost:8888/api/v1/auth';

export const signupUser = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    return await response.json();
  } catch (error) {
    console.error('Signup Error:', error);
    throw error;
  }
};

export const verifyUser = async (verificationData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/verify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(verificationData),
    });
    return await response.json();
  } catch (error) {
    console.error('Verification Error:', error);
    throw error;
  }
};
