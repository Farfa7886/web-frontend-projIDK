import * as Blockly from "blockly/core";
import javascript from "blockly/javascript";

const blockData = {
  type: "console_log_uo",
  message0: "Log to console %1",
  args0: [
    {
      type: "input_value",
      name: "data",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: "#148563",
  tooltip: "Logs anything to the console, useful for debugging.",
  helpUrl: "",
};

Blockly.Blocks[blockData.type] = {
  init: function () {
    this.jsonInit(blockData);
  },
};

javascript.javascriptGenerator.forBlock["console_log_uo"] = function (
  block,
  generator
) {
  var value_data = generator.valueToCode(
    block,
    "data",
    javascript.Order.ATOMIC
  );

  var code = `console.log(${value_data});
document.getElementById("logLBL").innerHTML = typeof ${value_data} == 'object' ? (JSON.stringify(${value_data}, null, 2)).replaceAll("\\n", "<br />") : String(${value_data});
await delay(0.01);\n`;
  return code;
};
