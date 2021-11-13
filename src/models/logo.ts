export enum LogoSizes {
    SMALL = 40,
    MEDIUM = 100,
    LARGE= 300
}

export interface LogoProps {
    size: LogoSizes,
    link?: boolean
}
