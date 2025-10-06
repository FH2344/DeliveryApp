// themeColors.ts
const themeColors = {
    // Primary colors
    primary: '#4CAF50',       // example green
    secondary: '#FFC107',     // example amber
    accent: '#FF5722',        // example orange
    bgColor: (opacity = 1) => `rgba(0,0,0,${opacity})`, // black with opacity
    white: '#FFFFFF',
    gray: '#9CA3AF',
    lightGray: '#F3F4F6',
    textDark: '#111827',
    textLight: '#6B7280',

    // Add any more colors you like
};

export default themeColors;
