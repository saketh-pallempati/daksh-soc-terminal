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

export const ls = async (args: string[]): Promise<string> => {
  return `bin  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var`;
};

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
  setTimeout(
    () => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'),
    0,
  );
  return `Permission denied: 😝 
But here is a pro tip...
Sun Tzu: To banish your files to the shadow realm with no hope of return, wield the mighty shortcut that can permanently delete files it\'s the silent assassin of the upcoming war ⚠️`;
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
