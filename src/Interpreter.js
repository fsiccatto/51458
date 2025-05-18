// src/Interpreter.js
import MiLenguajeVisitor from '../grammar/generated/MiLenguajeVisitor.js';

export class Interpreter extends MiLenguajeVisitor {
  constructor() {
    super();
    this.variables = {};
  }

  visitPrograma(ctx) {
    return this.visitChildren(ctx);
  }

  visitFuncion(ctx) {
    const name = ctx.ID(0).getText();
    const params = ctx.parametros()
      ? ctx.parametros().ID().map(t => t.getText()).join(', ')
      : '';
    console.log(`function ${name}(${params}) {`);
    this.visitChildren(ctx);
    console.log('}');
  }

  visitLeer(ctx) {
    const id = ctx.ID().getText();
    console.log(`  let ${id} = prompt("Ingrese valor para ${id}:");`);
    this.variables[id] = null;
  }

  visitEscribir(ctx) {
    const expr = this.visit(ctx.expresion());
    console.log(`  console.log(${expr});`);
  }

  visitAsignacion(ctx) {
    const id = ctx.ID().getText();
    const val = this.visit(ctx.expresion());
    console.log(`  let ${id} = ${val};`);
    this.variables[id] = val;
  }

  visitExpresion(ctx) {
    if (ctx.NUMERO()) {
      return ctx.NUMERO().getText();
    }
    if (ctx.CADENA()) {
      return ctx.CADENA().getText();
    }
    if (ctx.ID()) {
      return ctx.ID().getText();
    }
    return this.visitChildren(ctx);
  }

  visitExpresion(ctx) {
    return this.visitChildren(ctx);
  }

  visitAddExpr(ctx) {
    const left  = this.visit(ctx.expresion(0));
    const right = this.visit(ctx.expresion(1));
    return `${left} + ${right}`;
  }

  visitPrimExpr(ctx) {
    return ctx.getText();
  }
}
