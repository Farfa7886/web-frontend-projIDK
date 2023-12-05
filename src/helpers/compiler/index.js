import defaults from "./defaultInitStr";
import imports from "./imports";

function finalize(startCode) {
  startCode = defaults.appDlc + startCode;
  startCode = imports.resolveImports(startCode);
  return "(async () => {\n" + startCode + "})()";
}

export default { finalize };
