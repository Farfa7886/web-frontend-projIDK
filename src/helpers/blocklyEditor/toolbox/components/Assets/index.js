export default `<category name="Assets" colour="#729e26">
<block type="assets_add">
  <field name="assetName">asset</field>
  <value name="texture">
    <shadow type="text">
      <field name="TEXT">https://pixijs.com/assets/flowerTop.png</field>
    </shadow>
  </value>
</block>
<label text="Force asset load" />
<block type="assets_load" />
<block type="assets_load_texture" />
</category>`;
