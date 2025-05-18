// Generated from c:/Users/Samsung/Desktop/sintaxis/Analizador/grammar/MiLenguaje.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link MiLenguajeParser}.
 */
public interface MiLenguajeListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link MiLenguajeParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(MiLenguajeParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiLenguajeParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(MiLenguajeParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiLenguajeParser#funcion}.
	 * @param ctx the parse tree
	 */
	void enterFuncion(MiLenguajeParser.FuncionContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiLenguajeParser#funcion}.
	 * @param ctx the parse tree
	 */
	void exitFuncion(MiLenguajeParser.FuncionContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiLenguajeParser#parametros}.
	 * @param ctx the parse tree
	 */
	void enterParametros(MiLenguajeParser.ParametrosContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiLenguajeParser#parametros}.
	 * @param ctx the parse tree
	 */
	void exitParametros(MiLenguajeParser.ParametrosContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiLenguajeParser#instrucciones}.
	 * @param ctx the parse tree
	 */
	void enterInstrucciones(MiLenguajeParser.InstruccionesContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiLenguajeParser#instrucciones}.
	 * @param ctx the parse tree
	 */
	void exitInstrucciones(MiLenguajeParser.InstruccionesContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiLenguajeParser#leer}.
	 * @param ctx the parse tree
	 */
	void enterLeer(MiLenguajeParser.LeerContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiLenguajeParser#leer}.
	 * @param ctx the parse tree
	 */
	void exitLeer(MiLenguajeParser.LeerContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiLenguajeParser#escribir}.
	 * @param ctx the parse tree
	 */
	void enterEscribir(MiLenguajeParser.EscribirContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiLenguajeParser#escribir}.
	 * @param ctx the parse tree
	 */
	void exitEscribir(MiLenguajeParser.EscribirContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiLenguajeParser#asignacion}.
	 * @param ctx the parse tree
	 */
	void enterAsignacion(MiLenguajeParser.AsignacionContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiLenguajeParser#asignacion}.
	 * @param ctx the parse tree
	 */
	void exitAsignacion(MiLenguajeParser.AsignacionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code primExpr}
	 * labeled alternative in {@link MiLenguajeParser#expresion}.
	 * @param ctx the parse tree
	 */
	void enterPrimExpr(MiLenguajeParser.PrimExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code primExpr}
	 * labeled alternative in {@link MiLenguajeParser#expresion}.
	 * @param ctx the parse tree
	 */
	void exitPrimExpr(MiLenguajeParser.PrimExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code addExpr}
	 * labeled alternative in {@link MiLenguajeParser#expresion}.
	 * @param ctx the parse tree
	 */
	void enterAddExpr(MiLenguajeParser.AddExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code addExpr}
	 * labeled alternative in {@link MiLenguajeParser#expresion}.
	 * @param ctx the parse tree
	 */
	void exitAddExpr(MiLenguajeParser.AddExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiLenguajeParser#primary}.
	 * @param ctx the parse tree
	 */
	void enterPrimary(MiLenguajeParser.PrimaryContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiLenguajeParser#primary}.
	 * @param ctx the parse tree
	 */
	void exitPrimary(MiLenguajeParser.PrimaryContext ctx);
}