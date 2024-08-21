export const handleLogin = async (username: string, password: string): Promise<string> => {
  const response = await fetch('/app/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (response.ok) {
    const data = await response.json();
    return data.access_token;
  } else {
    throw new Error('Login failed');
  }
};