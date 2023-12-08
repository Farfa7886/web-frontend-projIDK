export default `<category name="Sprites" colour="#8c1c43">
<label text="Data" />
<block type="sprite_get_dimentions" />
<label text="Actions" />
<block type="sprite_new_notexture" />
<block type="sprite_set_texture" />
<block type="sprite_anchor_set">
  <field name="spriteVar">character</field>
  <value name="anchor">
    <shadow type="math_number">
      <field name="NUM">0.5</field>
    </shadow>
  </value>
</block>
<block type="sprite_set_position" />
<block type="sprite_set_scale" />
<block type="sprite_set_dimentions">
  <field name="sprite">character</field>
  <field name="idk">width</field>
  <value name="value">
    <block type="math_number">
      <field name="NUM">32</field>
    </block>
  </value>
</block>
<block type="slide_sprite_easy">
<field name="spriteVar">character</field>
<field name="timeFormat">seconds</field>
<value name="x">
  <shadow type="math_number">
    <field name="NUM">0</field>
  </shadow>
</value>
<value name="y">
  <shadow type="math_number">
    <field name="NUM">0</field>
  </shadow>
</value>
<value name="time">
  <shadow type="math_number">
    <field name="NUM">1</field>
  </shadow>
</value>
</block>
</category>`;
