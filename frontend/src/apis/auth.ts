import { urlString } from '.';

export const signUpApi = async (name: string, email: string, password: string, username: string) => {
  const response = await fetch(urlString + 'auth/signup/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password, username }),
  });
  return response.json();
};
