function resolveImports(code) {
  if (code.includes("await delay(")) {
    const toPut =
      "const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));";
    code = toPut + "\n" + code;
  }
  return code;
}

export default { resolveImports };
