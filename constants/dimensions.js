import { Dimensions } from "react-native";

export const DIMS = Dimensions.get("window");
export const DEV_WIDTH = DIMS.width;
export const DEV_HEIGHT = DIMS.height;
export const BUTTON_BIG = DEV_WIDTH * 0.4;
export const BIG_CORNER = BUTTON_BIG * 0.25;
export const SMALL_CORNER = BUTTON_BIG * 0.05;
export const DEF_SEPARATION = DEV_WIDTH * 0.08;

export const ICON_MIN = DEV_WIDTH * 0.035;
export const ICON_MAX = DEV_WIDTH * 0.08;
