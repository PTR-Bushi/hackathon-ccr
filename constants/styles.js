import { BUTTON_DARKBLUE, DEFAULT_BLUE, WHITE } from "./colors";
import {
  BUTTON_BIG,
  BIG_CORNER,
  DEF_SEPARATION,
  SMALL_CORNER,
  ICON_MIN,
  ICON_MAX,
  DEV_WIDTH
} from "./dimensions";

// SCREENS
export const DEF_SCREEN = {
  flex: 1,
  alignItems: "center",
  backgroundColor: DEFAULT_BLUE
};

// BUTTONS
export const BUTTON_GENERIC = {
  backgroundColor: BUTTON_DARKBLUE,
  borderRadius: SMALL_CORNER,
  justifyContent: "center",
  alignItems: "center"
};
export const BUTTON_BIG_SQUARE = {
  ...BUTTON_GENERIC,
  width: BUTTON_BIG,
  height: BUTTON_BIG
};
export const BUTTON_TEXT_WIDE = {
  ...BUTTON_GENERIC,
  margin: 5,
  width: DEV_WIDTH * 0.7,
  paddingVertical: 10
};
export const BUTTON_CHOOSE_UPPER = {
  ...BUTTON_BIG_SQUARE,
  borderTopLeftRadius: BIG_CORNER
};
export const BUTTON_CHOOSE_LOWER = {
  ...BUTTON_BIG_SQUARE,
  borderBottomRightRadius: BIG_CORNER
};

// ICONS
export const ICON_SMA = { tintColor: WHITE, width: ICON_MIN, height: ICON_MIN };
export const ICON_BIG = { tintColor: WHITE, width: ICON_MAX, height: ICON_MAX };

// SEPARATORS
export const DEF_HORIZONTAL_SEPARATOR = { width: 1, height: DEF_SEPARATION };
export const DEF_VERTICAL_SEPARATOR = { width: DEF_SEPARATION, height: 1 };

// TEXTS
export const TEXT_DEF = { color: WHITE, textAlign: "right" };
export const TEXT_BIG = { ...TEXT_DEF, fontSize: 30, fontWeight: "bold" };
export const TEXT_SMA = { ...TEXT_DEF, fontSize: 12, fontWeight: "bold" };

// INPUTS
export const DEF_INPUT = {
  backgroundColor: WHITE,
  justifyContent: "center",
  width: DEV_WIDTH * 0.85,
  borderRadius: SMALL_CORNER,
  marginTop: 15,
  paddingHorizontal: 25,
  paddingVertical: 15
};
