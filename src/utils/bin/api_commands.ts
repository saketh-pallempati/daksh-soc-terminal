// // List of commands that require API calls

import axios from 'axios';
axios.defaults.withCredentials = true;

export const whoami = async (args: string[]): Promise<string> => {
  const response = await axios.get('http://localhost:3000/verify', {
    withCredentials: true,
  });
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
    'http://localhost:3000/game/message',
    {
      message: msg,
    },
    { withCredentials: true },
  );
  return response.data.message;
};

export const submit = async (args: string[]): Promise<string> => {
  const comment = args.join(' ');
  if (!comment) {
    return 'Usage: submit [Vulnerability]. Example: submit unfunctional button at the left corner of the page';
  }
  const response = await axios.post(
    'http://localhost:3000/game/check',
    {
      comment: comment,
    },
    { withCredentials: true },
  );
  if (response.data.flag === true) {
    return 'Vulnerability submitted successfully';
  } else {
    return 'Keep looking for vulnerabilities';
  }
};

export const login = async (args: string[]): Promise<string> => {
  const email = args[0];
  const password = args[1];
  if (!email || !password) {
    return 'Usage: login [email] [password]';
  }
  try {
    const response = await axios.post(
      'http://localhost:3000/login',
      {
        email: email,
        password: password,
      },
      { withCredentials: true },
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
