import * as Blockly from "blockly/core";
import javascript from "blockly/javascript";

Blockly.Blocks["project_loaded"] = {
  init: function () {
    this.appendDummyInput().appendField("On project loaded");
    this.appendStatementInput("actions").setCheck(null).appendField("do");
    this.setColour("#d6c333");
    this.setTooltip("Emitted when the project gets loaded");
    this.setHelpUrl("");
  },
};

javascript.javascriptGenerator.forBlock["project_loaded"] = function (
  block,
  generator
) {
  var statements_actions = generator.statementToCode(block, "actions");
  // TODO: Assemble javascript into code variable.
  var code = "...\n";
  return code;
};
