const size = {
  mobile: "42em", //672px
  tablet: "62em", //992px
  desktop: "64em", //3200px
  desktopS: "63em", //3200px
}

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  desktopS: `(min-width: ${size.desktopS})`,
  desktop: `(min-width: ${size.desktop})`,
}
