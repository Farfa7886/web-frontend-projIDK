import values from "../blocklyEditor/blocks/CustomEvents/values";

function resolveBlocks(code) {
  const lines = code.split("\n");
  let blocks = [];
  let currentBlock = { start: -1, end: -1, lines: [], event: "" };

  lines.forEach((line, index) => {
    if (line.includes("//cevents-")) {
      if (currentBlock.start !== -1) {
        blocks.push(currentBlock);
      }
      currentBlock = {
        start: index,
        end: -1,
        lines: [],
        event: line.replace("//cevents-", ""),
      };
    } else if (line.includes("//end-cevent")) {
      currentBlock.end = index;
      blocks.push(currentBlock);
      currentBlock = { start: -1, end: -1, lines: [], event: "" };
    } else if (currentBlock.start !== -1) {
      currentBlock.lines.push(line);
    }
  });

  blocks.forEach((block) => {
    if (block.start !== -1 && block.end !== -1) {
      const evVarName = values.idkConst2 + block.event + values.idkConst;
      const eventDeclaration = `const ${evVarName} = new Event("${block.event}");\n`;
      lines.splice(block.start, block.end - block.start + 1);
      lines.unshift(eventDeclaration, ...block.lines);
    }
  });

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

function toBottom(code) {
  var lines = code.split("\n");
  var startIndex, endIndex;

  // Find the start and end indices of the block of code to move
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].includes("//bottom")) {
      startIndex = i;
    } else if (lines[i].includes("//end-bottom")) {
      endIndex = i;
    }
  }

  // Remove the block of code from its original position
  var block = lines.splice(startIndex, endIndex - startIndex + 1).join("\n");

  // Join the remaining lines back together into a string
  var newCode = lines.join("\n");

  // Add the block of code to the end of the new string
  newCode += "\n" + block;
  return newCode + "\n";
}

function resolveImports(code) {
  return toBottom(resolveBlocks(resolveInline(code)));
}

export { resolveImports };
