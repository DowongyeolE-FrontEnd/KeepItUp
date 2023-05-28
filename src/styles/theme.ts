import { DefaultTheme } from "styled-components";

export const backgroundColorType = ["primary", "grey-1", "grey-2", "grey-3", "grey-4", "scrollbar", "white", "black"];
export type BackgroundColorType = "#FFF393" | "#979797" | "#B7B7B7" | "#C1C1C1" | "#D9D9D9" | "#909090" | "#FFFFFF" | "#000000";

const theme: DefaultTheme = {
  backgroundColor: {
    primary: "#FFF393",
    "grey-1": "#979797",
    "grey-2": "#B7B7B7",
    "grey-3": "#C1C1C1",
    "grey-4": "#D9D9D9",
    scrollbar: "#909090",
    white: "#FFFFFF",
    black: "#000000",
  },
};

export default theme;
