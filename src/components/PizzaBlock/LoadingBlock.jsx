import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingBlock() {
    return (
        <ContentLoader
            className={'pizza-block'}
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#ebebeb"
            foregroundColor="#ffffff"
        >
            <circle cx="133" cy="124" r="112" />
            <rect x="-12" y="266" rx="4" ry="4" width="309" height="26" />
            <rect x="-8" y="305" rx="0" ry="0" width="308" height="81" />
            <rect x="83" y="427" rx="0" ry="0" width="78" height="0" />
            <rect x="0" y="395" rx="0" ry="0" width="79" height="28" />
            <rect x="142" y="440" rx="0" ry="0" width="1" height="1" />
            <rect x="124" y="394" rx="14" ry="14" width="155" height="28" />
        </ContentLoader>
    )
}

export default LoadingBlock
