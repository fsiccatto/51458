# Sintaxis y semántica de los lenguajes

## Analizador con ANTLR4 y JavaScript

Este repositorio contiene un analizador léxico, sintáctico y un intérprete básico para un lenguaje personalizado, generado con **ANTLR4** y ejecutado con **Node.js**.

### 🚀 Prerrequisitos

- **Java 11+** (para ANTLR)  
- **Node.js 16+** y **npm**

### 📦 Cómo clonar y ejecutar

Abre tu terminal y ejecuta:

```bash
# 1. Clonar el repositorio
git clone https://github.com/fsiccatto/51458.git
cd 51458

# 2. Instalar dependencias de Node.js
npm install

# 3. Generar y ejecutar el analizador
npm start
```

--- 

Se pueden cambiar los archivos de input para probrar distintas entradas para el analizador, en el archivos `index.js`.
En la línea; 
```js
const code = fs.readFileSync(new URL('../input.txt', import.meta.url), 'utf8');
```
cambiar el input.txt por alguno de las alternativas:
- `input2.txt`
- `input3-error.txt`
- `input4-error.txt`

