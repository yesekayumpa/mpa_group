import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combine des classes CSS en utilisant clsx et tailwind-merge
 * @param inputs - Liste de classes CSS à combiner
 * @returns Chaîne de caractères des classes CSS fusionnées
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
