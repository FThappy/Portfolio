/* eslint-disable no-useless-escape */
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const checkValidGmail = (gmail: string) => {
  const gmailRegex = /^[\w\.-]+@[\w\.-]+\.\w+$/;
  return gmailRegex.test(gmail);
};