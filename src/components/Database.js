const DarkMode = () => {
  return {
    "--black": "hsl(220, 6%, 8%)",
    "--bg-black": "hsl(220, 6%, 8.5%)",
    "--dark-gray": "hsl(220, 6%, 12%)",
    "--white": "hsl(220, 6%, 98%)",
  };
};

const LightMode = () => {
  return {
    "--black": "hsl(220, 6%, 94%)",
    "--bg-black": "hsl(220, 6%, 96%)",
    "--dark-gray": "hsl(220, 6%, 98%)",
    "--white": "hsl(220, 6%, 24%)",
  };
};

export const Colors = () => {
  return {
    dark: DarkMode(),
    light: LightMode(),
  };
};
