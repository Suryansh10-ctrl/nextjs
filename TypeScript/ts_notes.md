what is typescript ?
it is it nothing not a framework or library it is just a type of static javascript.

why typescript?

1. Javascript is a dnamically tyoe language. 
2. Types checks of variable of runtime

typescript:
1. Typescript is static type checking system of js.
2. Types checked during compile time
3. gives super power to Ts.

How?
1. Typescript never excutes
2. Ts is static type superset of js.
3. It is a transpiler lang.
-> Transpile means coverting or tranfroming high level language
example of ts jsx

workflow of ts
source code of ts -> process -> emitter -> js format -> browser

Ts works on top of js

code      ts    with checks   run           
ts+js -> process -> js => browser

Ts runs in a process => 
    behind the scenes of Ts:
    code => lexer(scanner) scan + chunks (break into smalll parts) => parser => AST(Abstract syntax tree) => binder => checker => transformer => JS

    work of lexer : ex: let a:any=10 => 
          let
          a
tokens    :         =>   parser convert into 1 variable using AST
          any            AST => variable ->
          = 
          10