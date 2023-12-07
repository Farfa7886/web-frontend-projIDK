import values from "../blocklyEditor/blocks/CustomEvents/values";

function resolveBlocks(code) {
  const lines = code.split("\n");
  let blockStart = -1;
  let blockEnd = -1;
  let blockLines = [];
  let event = "";

  lines.forEach((line, index) => {
    if (line.includes("//cevents-")) {
      blockStart = index;
      event = line.replace("//cevents-", "");
    } else if (line.includes("//end-cevent")) {
      blockEnd = index;
    }

    if (blockStart !== -1 && blockEnd === -1) {
      blockLines.push(line);
    }
  });

  if (blockStart !== -1 && blockEnd !== -1) {
    const evVarName = values.idkConst2 + event + values.idkConst;
    const eventDeclaration = `const ${evVarName} = new Event("${event}");\n`;
    lines.splice(blockStart, blockEnd - blockStart + 1);
    lines.unshift(eventDeclaration, ...blockLines);
  }

  return lines.join("\n");
}

function resolveInline(code) {
  const lines = code.split("\n");
  lines.forEach((line) => {
    if (line.includes("//cevents-inline-")) {
      const event = line.replace("//cevents-inline-", "");
      const evVarName = values.idkConst2 + event + values.idkConst;
      code = `const ${evVarName} = new Event("${event}");\n` + code;
    }
  });
  return code;
}

function resolveImports(code) {
  return resolveBlocks(resolveInline(code));
}

export { resolveImports };
