import { configData, websiteMetaData } from "../core/lib/config"

export const whiteLabelRender = ({ fontSize = "9px", color = configData.primaryColor }: { fontSize?: string, color?: string }) => {
    return (
        `<a style="font-size:${fontSize};color:${color};text-align:right;text-decoration:none;" href=${websiteMetaData.url} target="_blank">${websiteMetaData.name}</a>`
    )
}