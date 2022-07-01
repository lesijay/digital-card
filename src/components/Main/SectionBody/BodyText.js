import React from "react"
import "./SectionBody.css"

export default function BodyText({title,paragraph}) {
    return (
        <div className="section">
            <h1>{title}</h1>
            <p>{paragraph}</p>
        </div>
    )
}