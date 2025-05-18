import antlr4 from 'antlr4';
import fs from 'fs';

import MiLenguajeLexer from '../grammar/generated/MiLenguajeLexer.js';
import MiLenguajeParser from '../grammar/generated/MiLenguajeParser.js';
import { Interpreter } from './Interpreter.js';

// 1. Leemos el input
const code = fs.readFileSync(new URL('../input.txt', import.meta.url), 'utf8');
console.log('Contenido de input.txt:\n', code, '\n');

const inputStream = new antlr4.InputStream(code);
const lexer = new MiLenguajeLexer(inputStream);
const tokenStream = new antlr4.CommonTokenStream(lexer);
tokenStream.fill();

// Tabla de tokens
console.log('Tabla de tokens (lexema → tipo) usando literalNames/symbolicNames:');
console.log('--------------------------------------------------------------');
const symbolic = MiLenguajeLexer.symbolicNames;
const literal  = MiLenguajeLexer.literalNames;

for (const token of tokenStream.tokens) {
  if (!token || token.type === antlr4.Token.EOF) continue;
  const text = token.text;
  const tipo = symbolic[token.type] ?? literal[token.type] ?? 'UNKNOWN';
  console.log(`'${text}' → ${tipo}  (L${token.line}:C${token.column})`);
}
console.log('\n');

// Análisis sintáctico
const parser = new MiLenguajeParser(tokenStream);
parser.buildParseTrees = true;
const tree = parser.programa();

if (parser._syntaxErrors > 0) {
  console.error(`Errores de sintaxis: ${parser._syntaxErrors}`);
  process.exit(1);
}

console.log('Traducción a JavaScript:');
console.log('------------------------');
new Interpreter().visit(tree);

