// Shims for Next.js imports in Astro environment

// Mock next/link - just use regular <a> tags in Astro
export const Link = ({ href, children, ...props }: any) => {
  return { href, children, ...props };
};

// Mock next/image - return img with unoptimized settings
export const Image = ({ src, alt, ...props }: any) => {
  return { src, alt, ...props };
};

// Mock next/script - scripts are handled differently in Astro
export const Script = ({ children, ...props }: any) => {
  return { children, ...props };
};

export default {
  Link,
  Image,
  Script,
};
