import defaults from "./defaultInitStr";
import imports from "./imports";

function generateRandomString(length) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function finalize(code, prod) {
  const errorVarName = generateRandomString(10);
  code = defaults.appDlc + code;
  code = imports.resolveImports(code);
  if (!prod) {
    code = `try {
      ${code}
      } catch (${errorVarName}) {
        console.error(${errorVarName})
        document.getElementById("erroLBL").innerHTML = "<strong>Runtime error</strong><br />" + ${errorVarName};
      }`;
  }

  code = "(async () => {\n" + code + "})()";
  return code;
}

export default { finalize };
