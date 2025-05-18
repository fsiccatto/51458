// Generated from grammar/MiLenguaje.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MiLenguajeListener from './MiLenguajeListener.js';
import MiLenguajeVisitor from './MiLenguajeVisitor.js';

const serializedATN = [4,1,15,83,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,4,0,20,8,0,11,0,12,0,21,1,1,1,1,1,1,
1,1,3,1,28,8,1,1,1,1,1,1,1,5,1,33,8,1,10,1,12,1,36,9,1,1,1,1,1,1,2,1,2,1,
2,5,2,43,8,2,10,2,12,2,46,9,2,1,3,1,3,1,3,3,3,51,8,3,1,4,1,4,1,4,1,4,1,4,
1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,
5,7,76,8,7,10,7,12,7,79,9,7,1,8,1,8,1,8,0,1,14,9,0,2,4,6,8,10,12,14,16,0,
1,1,0,12,14,80,0,19,1,0,0,0,2,23,1,0,0,0,4,39,1,0,0,0,6,50,1,0,0,0,8,52,
1,0,0,0,10,58,1,0,0,0,12,64,1,0,0,0,14,69,1,0,0,0,16,80,1,0,0,0,18,20,3,
2,1,0,19,18,1,0,0,0,20,21,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,1,1,0,0,
0,23,24,5,1,0,0,24,25,5,12,0,0,25,27,5,2,0,0,26,28,3,4,2,0,27,26,1,0,0,0,
27,28,1,0,0,0,28,29,1,0,0,0,29,30,5,3,0,0,30,34,5,4,0,0,31,33,3,6,3,0,32,
31,1,0,0,0,33,36,1,0,0,0,34,32,1,0,0,0,34,35,1,0,0,0,35,37,1,0,0,0,36,34,
1,0,0,0,37,38,5,5,0,0,38,3,1,0,0,0,39,44,5,12,0,0,40,41,5,6,0,0,41,43,5,
12,0,0,42,40,1,0,0,0,43,46,1,0,0,0,44,42,1,0,0,0,44,45,1,0,0,0,45,5,1,0,
0,0,46,44,1,0,0,0,47,51,3,8,4,0,48,51,3,10,5,0,49,51,3,12,6,0,50,47,1,0,
0,0,50,48,1,0,0,0,50,49,1,0,0,0,51,7,1,0,0,0,52,53,5,7,0,0,53,54,5,2,0,0,
54,55,5,12,0,0,55,56,5,3,0,0,56,57,5,8,0,0,57,9,1,0,0,0,58,59,5,9,0,0,59,
60,5,2,0,0,60,61,3,14,7,0,61,62,5,3,0,0,62,63,5,8,0,0,63,11,1,0,0,0,64,65,
5,12,0,0,65,66,5,10,0,0,66,67,3,14,7,0,67,68,5,8,0,0,68,13,1,0,0,0,69,70,
6,7,-1,0,70,71,3,16,8,0,71,77,1,0,0,0,72,73,10,2,0,0,73,74,5,11,0,0,74,76,
3,14,7,3,75,72,1,0,0,0,76,79,1,0,0,0,77,75,1,0,0,0,77,78,1,0,0,0,78,15,1,
0,0,0,79,77,1,0,0,0,80,81,7,0,0,0,81,17,1,0,0,0,6,21,27,34,44,50,77];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiLenguajeParser extends antlr4.Parser {

    static grammarFileName = "MiLenguaje.g4";
    static literalNames = [ null, "'function'", "'('", "')'", "'{'", "'}'", 
                            "','", "'leer'", "';'", "'escribir'", "'='", 
                            "'+'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, "ID", "NUMERO", "CADENA", 
                             "WS" ];
    static ruleNames = [ "programa", "funcion", "parametros", "instrucciones", 
                         "leer", "escribir", "asignacion", "expresion", 
                         "primary" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiLenguajeParser.ruleNames;
        this.literalNames = MiLenguajeParser.literalNames;
        this.symbolicNames = MiLenguajeParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 7:
    	    		return this.expresion_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expresion_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiLenguajeParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this.funcion();
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcion() {
	    let localctx = new FuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MiLenguajeParser.RULE_funcion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this.match(MiLenguajeParser.T__0);
	        this.state = 24;
	        this.match(MiLenguajeParser.ID);
	        this.state = 25;
	        this.match(MiLenguajeParser.T__1);
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 26;
	            this.parametros();
	        }

	        this.state = 29;
	        this.match(MiLenguajeParser.T__2);
	        this.state = 30;
	        this.match(MiLenguajeParser.T__3);
	        this.state = 34;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4736) !== 0)) {
	            this.state = 31;
	            this.instrucciones();
	            this.state = 36;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 37;
	        this.match(MiLenguajeParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parametros() {
	    let localctx = new ParametrosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiLenguajeParser.RULE_parametros);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(MiLenguajeParser.ID);
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 40;
	            this.match(MiLenguajeParser.T__5);
	            this.state = 41;
	            this.match(MiLenguajeParser.ID);
	            this.state = 46;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiLenguajeParser.RULE_instrucciones);
	    try {
	        this.state = 50;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 47;
	            this.leer();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 48;
	            this.escribir();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 49;
	            this.asignacion();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	leer() {
	    let localctx = new LeerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MiLenguajeParser.RULE_leer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(MiLenguajeParser.T__6);
	        this.state = 53;
	        this.match(MiLenguajeParser.T__1);
	        this.state = 54;
	        this.match(MiLenguajeParser.ID);
	        this.state = 55;
	        this.match(MiLenguajeParser.T__2);
	        this.state = 56;
	        this.match(MiLenguajeParser.T__7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	escribir() {
	    let localctx = new EscribirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MiLenguajeParser.RULE_escribir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(MiLenguajeParser.T__8);
	        this.state = 59;
	        this.match(MiLenguajeParser.T__1);
	        this.state = 60;
	        this.expresion(0);
	        this.state = 61;
	        this.match(MiLenguajeParser.T__2);
	        this.state = 62;
	        this.match(MiLenguajeParser.T__7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MiLenguajeParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(MiLenguajeParser.ID);
	        this.state = 65;
	        this.match(MiLenguajeParser.T__9);
	        this.state = 66;
	        this.expresion(0);
	        this.state = 67;
	        this.match(MiLenguajeParser.T__7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expresion(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpresionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 14;
	    this.enterRecursionRule(localctx, 14, MiLenguajeParser.RULE_expresion, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new PrimExprContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 70;
	        this.primary();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 77;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new AddExprContext(this, new ExpresionContext(this, _parentctx, _parentState));
	                this.pushNewRecursionContext(localctx, _startState, MiLenguajeParser.RULE_expresion);
	                this.state = 72;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 73;
	                this.match(MiLenguajeParser.T__10);
	                this.state = 74;
	                this.expresion(3); 
	            }
	            this.state = 79;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	primary() {
	    let localctx = new PrimaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MiLenguajeParser.RULE_primary);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 28672) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MiLenguajeParser.EOF = antlr4.Token.EOF;
MiLenguajeParser.T__0 = 1;
MiLenguajeParser.T__1 = 2;
MiLenguajeParser.T__2 = 3;
MiLenguajeParser.T__3 = 4;
MiLenguajeParser.T__4 = 5;
MiLenguajeParser.T__5 = 6;
MiLenguajeParser.T__6 = 7;
MiLenguajeParser.T__7 = 8;
MiLenguajeParser.T__8 = 9;
MiLenguajeParser.T__9 = 10;
MiLenguajeParser.T__10 = 11;
MiLenguajeParser.ID = 12;
MiLenguajeParser.NUMERO = 13;
MiLenguajeParser.CADENA = 14;
MiLenguajeParser.WS = 15;

MiLenguajeParser.RULE_programa = 0;
MiLenguajeParser.RULE_funcion = 1;
MiLenguajeParser.RULE_parametros = 2;
MiLenguajeParser.RULE_instrucciones = 3;
MiLenguajeParser.RULE_leer = 4;
MiLenguajeParser.RULE_escribir = 5;
MiLenguajeParser.RULE_asignacion = 6;
MiLenguajeParser.RULE_expresion = 7;
MiLenguajeParser.RULE_primary = 8;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_programa;
    }

	funcion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FuncionContext);
	    } else {
	        return this.getTypedRuleContext(FuncionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_funcion;
    }

	ID() {
	    return this.getToken(MiLenguajeParser.ID, 0);
	};

	parametros() {
	    return this.getTypedRuleContext(ParametrosContext,0);
	};

	instrucciones = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionesContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionesContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterFuncion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitFuncion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitFuncion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParametrosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_parametros;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiLenguajeParser.ID);
	    } else {
	        return this.getToken(MiLenguajeParser.ID, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterParametros(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitParametros(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitParametros(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_instrucciones;
    }

	leer() {
	    return this.getTypedRuleContext(LeerContext,0);
	};

	escribir() {
	    return this.getTypedRuleContext(EscribirContext,0);
	};

	asignacion() {
	    return this.getTypedRuleContext(AsignacionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LeerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_leer;
    }

	ID() {
	    return this.getToken(MiLenguajeParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterLeer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitLeer(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitLeer(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EscribirContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_escribir;
    }

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterEscribir(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitEscribir(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitEscribir(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_asignacion;
    }

	ID() {
	    return this.getToken(MiLenguajeParser.ID, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterAsignacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitAsignacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_expresion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class PrimExprContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	primary() {
	    return this.getTypedRuleContext(PrimaryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterPrimExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitPrimExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitPrimExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiLenguajeParser.PrimExprContext = PrimExprContext;

class AddExprContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpresionContext);
	    } else {
	        return this.getTypedRuleContext(ExpresionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterAddExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitAddExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitAddExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiLenguajeParser.AddExprContext = AddExprContext;

class PrimaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_primary;
    }

	NUMERO() {
	    return this.getToken(MiLenguajeParser.NUMERO, 0);
	};

	CADENA() {
	    return this.getToken(MiLenguajeParser.CADENA, 0);
	};

	ID() {
	    return this.getToken(MiLenguajeParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterPrimary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitPrimary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitPrimary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MiLenguajeParser.ProgramaContext = ProgramaContext; 
MiLenguajeParser.FuncionContext = FuncionContext; 
MiLenguajeParser.ParametrosContext = ParametrosContext; 
MiLenguajeParser.InstruccionesContext = InstruccionesContext; 
MiLenguajeParser.LeerContext = LeerContext; 
MiLenguajeParser.EscribirContext = EscribirContext; 
MiLenguajeParser.AsignacionContext = AsignacionContext; 
MiLenguajeParser.ExpresionContext = ExpresionContext; 
MiLenguajeParser.PrimaryContext = PrimaryContext; 
