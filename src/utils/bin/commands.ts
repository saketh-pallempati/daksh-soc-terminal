// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
`;
};




// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};


// export const ls = async (args: string[]): Promise<string> => {
//   return `a
// bunch
// of
// fake
// directories`;
// };

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); 
  return `Permission denied: with little power comes... no responsibility? 😝`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
  ██████╗  █████╗ ██╗  ██╗███████╗██╗  ██╗    ███████╗ ██████╗  ██████╗
  ██╔══██╗██╔══██╗██║ ██╔╝██╔════╝██║  ██║    ██╔════╝██╔═══██╗██╔════╝
  ██║  ██║███████║█████╔╝ ███████╗███████║    ███████╗██║   ██║██║     
  ██║  ██║██╔══██║██╔═██╗ ╚════██║██╔══██║    ╚════██║██║   ██║██║     
  ██████╔╝██║  ██║██║  ██╗███████║██║  ██║    ███████║╚██████╔╝╚██████╗
  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝    ╚══════╝ ╚═════╝  ╚═════╝


Type 'help' to see the list of available commands.`;
};
