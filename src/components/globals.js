export const sans = "Montserrat, ";
export const serif = "Source Serif Pro, Georgia";
export const paragraphWidth = 475;
export const paragraphLineHeight = "24px";
export const barChartWidth = 250;
export const primaryHeading = 36;
export const secondaryHeading = 18;

export const tidGrey = "rgb(200,200,200)";
export const paragraph = {
  width: paragraphWidth,
  fontFamily: serif,
  lineHeight: paragraphLineHeight
}

export const side = 1000;


export const axisLabels = {
  x: "pro-tax / pro-action vs. anti-tax / anti-action",
  y: "",
};

// ====== REMEMBER: gid's start at zero, (0, 1, 2) but we show them as group 1, 2, 3 =======

export const groupColor = (gid) => {
  if (gid === 0) {
    return "rgb(7, 121, 183)";
  } else if (gid === 1) {
    return "rgb(255, 128, 0)";
  } else if (gid === 2) {
    return "rgb(153, 153, 153)";
  } else if (gid === 3) {
    return "rgb(255, 253, 0)";
  } else if (gid === 4) {
    return "rgb(104, 64, 157)";
  } else if (gid === 5) {
    return "rgb(179, 90, 30)";
  } else {
    return "rgb(255, 0, 0)";
  }
};

// ====== REMEMBER: gid's start at zero, (0, 1, 2) but we show them as group 1, 2, 3 =======

export const getGroupNamePosition = (gid) => {
  if (gid === 0) {
    return  "translate(555,255)";
  }
  if (gid === 1) {
    return  "translate(200,220)";
  }
  if (gid === 2) {
    return  "translate(400,700)";
  }
  return "translate(50, 50)";
};

// ====== REMEMBER: gid's start at zero, (0, 1, 2) but we show them as group 1, 2, 3 =======

export const groupNames = {
  0: "Uncertain skeptics who acknowledge urgency of problem",
  1: "Pro nanny state",
  2: "Taxes harm the poor",
};

