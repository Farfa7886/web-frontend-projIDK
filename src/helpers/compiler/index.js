import defaults from "./defaultInitStr";

function finalize(startCode) {
  startCode = defaults.appDlc + startCode;
  return "(async () => {" + startCode + "})()";
}

export default { finalize };
