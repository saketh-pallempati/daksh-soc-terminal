// List of commands that require API calls

import axios from 'axios';
axios.defaults.withCredentials = true;

export const whoami = async (args: string[]): Promise<string> => {
  const response = await axios.get(
    'https://daksh-soc-backend.vercel.app/verify',
  );
  if (response.data.user) {
    return response.data.user.username;
  }
  return `Login to find out 😉`;
};

export const message = async (args: string[]): Promise<string> => {
  const msg = args.join(' ');
  if (!msg) {
    return 'Usage: message [message]. Example: message "Need help with something!"';
  }
  const response = await axios.post(
    'https://daksh-soc-backend.vercel.app/game/message',
    {
      message: msg,
    },
  );
  return response.data.message;
};

export const login = async (args: string[]): Promise<string> => {
  const email = args[0];
  const password = args[1];
  if (!email || !password) {
    return 'Usage: login [email] [password] {KALI}';
  }
  try {
    if (email === 'kali' && password === 'kali') {
      return 'admin likes php !!!';
    }
    const response = await axios.post(
      'https://daksh-soc-backend.vercel.app/login',
      {
        email: email,
        password: password,
      },
    );

    if (response.data.status === true) {
      return 'Logged in successfully';
    } else {
      return response.data.message;
    }
  } catch (error) {
    return error.toString();
  }
};
