grammar MiLenguaje;

programa : funcion+ ;

funcion 
  : 'function' ID '(' parametros? ')' '{' instrucciones* '}' 
  ;

parametros   
  : ID (',' ID)* 
  ;

instrucciones 
  : leer 
  | escribir 
  | asignacion 
  ;

leer        
  : 'leer' '(' ID ')' ';' 
  ;

escribir    
  : 'escribir' '(' expresion ')' ';' 
  ;

asignacion  
  : ID '=' expresion ';' 
  ;

// ------------- aquí extiendo expresion -------------
expresion
  : expresion '+' expresion   # addExpr
  | primary                   # primExpr
  ;

primary
  : NUMERO
  | CADENA
  | ID
  ;

// ------------- tokens -------------
ID      : [a-zA-Z][a-zA-Z0-9]* ;
NUMERO  : [0-9]+ ;
CADENA  : '"' (~["\r\n])* '"' ;
WS      : [ \t\r\n]+ -> skip ;

