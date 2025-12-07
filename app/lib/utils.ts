import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: (string | undefined)[]) {
   return twMerge(clsx(inputs))
}

export function handleImages(sprites: (string | null)[], avatar: string | null): string[] {
   return Array.from(new Set([avatar, ...sprites,].filter(e => e !== null)))
}