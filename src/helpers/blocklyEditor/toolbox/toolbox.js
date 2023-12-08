import App from "./components/App";
import Sprites from "./components/Sprites";
import Assets from "./components/Assets";
import Events from "./components/Events";
import Snippets from "./components/Snippets";
import DefaultToolbox from "./components/DefaultToolbox";
import CustomEvents from "./components/CustomEvents";
import Base from "./components/Base";
import Misc from "./components/Misc";

export default `<xml
xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
${DefaultToolbox}
<sep />
${Base}
${Snippets}
${Events}
${CustomEvents}
${App}
${Assets}
${Sprites}
</xml>`;
