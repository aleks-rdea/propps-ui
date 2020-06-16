const screenSize = {
  xs: 0,
  s: 576,
  m: 768,
  l: 1024,
  xl: 1200,
  xxl: 1400
}

export const screen = {
  xs: `screen and (min-width: ${
    screenSize.xs
  }px) and (max-width: ${screenSize.s - 1}px)`,
  s: {
    only: `screen and (min-width: ${
      screenSize.s
    }px) and (max-width: ${screenSize.m - 1}px)`,
    up: `screen and (min-width: ${screenSize.s}px)`,
    down: `screen and (max-width: ${screenSize.m - 1}px)`
  },
  m: {
    only: `screen and (min-width: ${
      screenSize.m
    }px) and (max-width: ${screenSize.l - 1}px)`,
    up: `screen and (min-width: ${screenSize.m}px)`,
    down: `screen and (max-width: ${screenSize.l - 1}px)`
  },
  l: {
    only: `screen and (min-width: ${
      screenSize.l
    }px) and (max-width: ${screenSize.xl - 1}px)`,
    up: `screen and (min-width: ${screenSize.l}px)`,
    down: `screen and (max-width: ${screenSize.xl - 1}px)`
  },
  xl: {
    only: `screen and (min-width: ${
      screenSize.xl
    }px) and (max-width: ${screenSize.xxl - 1}px)`,
    up: `screen and (min-width: ${screenSize.xl}px)`,
    down: `screen and (max-width: ${screenSize.xxl - 1}px)`
  },
  xxl: {
    up: `screen and (min-width: ${screenSize.xxl}px)`
  }
}
