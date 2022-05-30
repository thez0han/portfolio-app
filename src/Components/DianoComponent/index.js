import React, { useState } from "react";
import ProjectDetailsComponent from "../ProjectDetailsComponent";
import { Button, Colors } from "@blueprintjs/core";
import ButtonComponent from "../ButtonComponent";
import Create from "../../Diano/Create.jpg"
import ViewGrid from "../../Diano/ViewGrid.jpg"
import Result from "../../Diano/Result.jpg"
const DianoComponent = () => {
    const [count, setCount] = useState(0);

    const incrementState = () => {
        if (count<3) {
            setCount(count+1)
        }
        
    }
    const decrementState = () => {
        if (count>0) {
            setCount(count-1)
        }

    }
    const DianoIntro = () => {
        if(count == 0) {
            return (
                <div>
                    <h1 style = {{fontSize: 60}}><span style={{color:Colors.RED3}}>
                        Reconcile</span> between any two data sources</h1>
                    <h2 style = {{fontSize: 50, paddingTop: 30}}>Create the process</h2>
                    <h2 style = {{fontSize: 50, paddingTop: 30}}>Save the process</h2>
                    <h2 style = {{fontSize: 50, paddingTop: 30}}>Run the process</h2>

                </div>

            )
        }
    }
    const ShowProjectDetails = () => {
        //console.log(count)
        if(count==1 ) {
            return (
                <ProjectDetailsComponent
                    heading= {"Create Process"}
                    text={ "Choose source files. \n Choose a key to use to indentify rows for reconciliation. \n Choose which column to compare using attributes. "}
                    image={Create}>
                    
                </ProjectDetailsComponent>
            )

        }
        else if (count==2) {
            return (
                <ProjectDetailsComponent
                    heading = {"View Process"}
                    text={"View collected list of all processes"}
                    image={ViewGrid}
                    >
                    
                </ProjectDetailsComponent>
            )
        }
        else if (count==3) {
            return (
                <ProjectDetailsComponent
                    heading = {"View Result"}
                    text={"View result of Reconciliation. \n View all rows compared. \n Each row is identified as a BREAK or a MATCH. \n In case of BREAK, see which column is causing BREAK."}
                    image={Result}
                    >
                    
                </ProjectDetailsComponent>
            )
        }

    }
    return (
    <div>
        <DianoIntro></DianoIntro>
        <ShowProjectDetails></ShowProjectDetails>
        <ButtonComponent
            next={incrementState}
            previous={decrementState}
        ></ButtonComponent>


    </div>


    )
}

export default DianoComponent;