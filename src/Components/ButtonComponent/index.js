import React from 'react';
import { ButtonGroup, Button, Colors } from '@blueprintjs/core';
const ButtonComponent = (props) => {
    return (
    <div>
        <ButtonGroup minimal={true} style={{
                                        position: "absolute",
                                        right: 40,
                                        bottom:30}}>
            <Button onClick={props.previous} icon="Arrow:left">Previous</Button>
            <Button onClick={props.next} icon="Arrow:right">Next</Button>
        </ButtonGroup>
    </div>


    )
}

export default ButtonComponent;