import * as Blockly from "blockly/core";
import javascript from "blockly/javascript";

Blockly.Blocks["sprite_anchor_set"] = {
  init: function () {
    this.appendValueInput("anchor")
      .setCheck("Number")
      .appendField("Set")
      .appendField(new Blockly.FieldVariable("character"), "spriteVar")
      .appendField("'s anchor to");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#8c1c43");
    this.setTooltip("The anchor sets the origin point of the sprite");
    this.setHelpUrl("https://pixijs.download/dev/docs/PIXI.Sprite.html#anchor");
  },
};

javascript.javascriptGenerator.forBlock["sprite_anchor_set"] = function (
  block,
  generator
) {
  var variable_spritevar = generator.nameDB_.getName(
    block.getFieldValue("spriteVar"),
    "VARIABLE"
  );
  var value_anchor = generator.valueToCode(
    block,
    "anchor",
    javascript.Order.ATOMIC
  );

  var code = `${variable_spritevar}.anchor.set(${value_anchor});\n`;
  return code;
};
