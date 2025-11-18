import React from 'react'

const SectionTitle = ({ heading, colorHeading, descOne, descTwo, HeadingTag = "h2" }) => {
    return (
        <div className="section-title">
            {heading && <HeadingTag>{heading} {colorHeading && <span>{colorHeading}</span>}</HeadingTag>}
            {descOne && <p>{descOne}</p>}
            {descTwo && <p>{descTwo}</p>}
        </div>
    )
}

export default SectionTitle
