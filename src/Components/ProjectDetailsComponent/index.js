import React from 'react'
import {Colors} from "@blueprintjs/core"


const ProjectDetailsComponent = (props) => {
    const ShowText = () => {
        let newText = props.text.split('\n').map(i=> {
            console.log(i)
            return (<p style = {{fontSize: 25}}>{i}</p>)
        })
        return newText
    }

    return (
        <div style = {{display: "flex", flexDirection: "row"}}>
            <div>
                <h1 style = {{fontSize: 40, color:Colors.RED3}}>{props.heading}</h1>
                <ShowText></ShowText>
            </div>
            <div>
                <img 
                style = {{ maxWidth: '100%', 
                        imageRendering: "high-quality", 
                        display: "block",
                        position: "absolute",
                        right: 30,
                        }}
                src={props.image}
                />
            </div>

        </div>
    )
}

export default ProjectDetailsComponent