const urlString = 'http://127.0.0.1:3002/aurora-instagram-clone/us-central1/api/auth/signup';

export const signUpApi = async (name: string, email: string, password: string, username: string) => {
  const response = await fetch(urlString, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password, username }),
  });
  return response.json();
};
