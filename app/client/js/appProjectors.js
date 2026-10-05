import {ConnectorProjector}     from "../../../framework/client/js/projector/connectorProjector.js";
import {defaultProjectors}               from "../../../framework/client/js/projector/defaultProjectors.js";
import {ARTIST, ARTIST_ARTWORK, ARTWORK} from "./appTypes.js";
import {dom}                             from "../../../framework/client/js/util/dom.js";

export { appProjectors }

const connectorProjector = (workbenchController) => {

    const SpecialProjector = (workbenchController) => {
        const projectConnection = (rel_meta, entityName, entity) => {
             return ConnectorProjector(workbenchController).projectConnection(rel_meta, entityName, entity);
        };
        return { projectConnection }
    };

    console.info("specialized connector projector in use");
    return SpecialProjector(workbenchController);
};


/** @type { ProjectorProviderType } */
const appProjectors = {
    ...defaultProjectors, // default - we only want to specialize the connectors
    connectorProjector,
};

