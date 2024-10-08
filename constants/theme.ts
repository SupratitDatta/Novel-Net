import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: "#6EACDA",      // Warm and inviting for key actions
    secondary: "#6EACDA",    // Calm and sophisticated for secondary actions

    // neutral colors
    black: "#1C1B1A",        // Rich black for text and emphasis
    white: "#FFFFFF",        // Clean white for backgrounds and contrast
    lightGray: "#F5F5F5",    // Soft gray for backgrounds and subtle elements
    gray: "#A0A4A8",         // Neutral gray for borders and less prominent text

    // accent colors
    darkRed: "#8B0000",      // Bold red for warnings or important highlights
    lightRed: "#FF6B6B",     // Soft red for notifications or alerts
    darkBlue: "#2A3E59",     // Deep blue for links or subtle accents
    lightBlue: "#4A90E2",    // Bright blue for interactive elements
    darkGreen: "#264653",    // Earthy green for success messages or confirmations
    lightGreen: "#2A9D8F",   // Vibrant green for positive accents
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    padding2: 36,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,

    // app dimensions
    width,
    height
};

export const FONTS = {
    largeTitle: { fontFamily: "Roboto-regular", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;