import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

export default function Logo() {
    return (
        <StaticImage
            src="content//assets/images/logos/IASstudio_CMYK_white.png"
            alt="IAS logo"
            placeholder="blurred"
            layout="fixed"
            width={124}
            height={60}
        />
    )
}