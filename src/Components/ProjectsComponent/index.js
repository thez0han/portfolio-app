import React from "react";
import { Tab, Tabs, Classes, Colors } from '@blueprintjs/core'
import DianoComponent from "../DianoComponent";
const ProjectComponent = () => {

    return (
        <div>
            <Tabs className={Classes.TAB_PANEL} id="TabsExample">
                <Tab  id="ng" title="Diano" panel={<DianoComponent/>} />
                <Tab  id="mb" title="Chronos" panelClassName="ember-panel" />
            </Tabs>

        </div>
    )
}

export default ProjectComponent;