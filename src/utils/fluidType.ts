interface FluidTypeArgs {
  minSize: number
  maxSize: number
  minWidth?: number
  maxWidth?: number
}

export default (args: FluidTypeArgs): string => {
  const { minSize, maxSize, minWidth = 300, maxWidth = 1200 } = args
  return `
  & {
    font-size: ${minSize}px;

    @media screen and (min-width: ${minWidth}px) {
      font-size: calc(${minSize}px + ${maxSize - minSize} * (( 100vw - ${minWidth}px) / ${maxWidth -
                                                             minWidth}));
    }

    @media screen and (min-width: ${maxWidth}px) {
      font-size: ${maxSize}px;
    }
  }
  `
}
