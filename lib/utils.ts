import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const ENDPOINT_URL = process.env.ENDPOINT_URL;

const ENDPOINTS = {
  SUBMIT_QUESTION: `${ENDPOINT_URL}/message/submit`,
};

export default ENDPOINTS;
