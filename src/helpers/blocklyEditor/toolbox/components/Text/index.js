export default `<category name="Text" colour="#a81ab8">
<block type="text_create" />
<block type="text_set">
<field name="varName">text</field>
<value name="value">
  <shadow type="text">
    <field name="TEXT">Hello world!</field>
  </shadow>
</value>
</block>
<block type="text_set_color">
<field name="varName">text</field>
<value name="value">
  <shadow type="colour_picker">
    <field name="COLOUR">#33ccff</field>
  </shadow>
</value>
</block>
</category>`;
