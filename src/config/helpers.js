import { smBreakingPoint ,smFontUnder30, smFontAbove30 } from "./constants"

export const fontForSmallerScreen = (fontSize) => {
    return `
        @media(max-width: ${smBreakingPoint}) {
            font-size: ${fontSize<=30?fontSize*smFontUnder30: fontSize*smFontAbove30}px;
        }
    `
}

export const mediaMaxWidth = (breakingPoint,content) => {
    return `
        @media(max-width: ${breakingPoint}) {
            ${content}
        }
    `
}