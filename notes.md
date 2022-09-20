Links Úteis:

https://www.aluiziodeveloper.com.br/um-pouco-mais-sobre-typescript/

# Extensões Utilizadas no VS Code

- EditorConfig
- ESLint
- Prettier
- Docker

# Sobre o TypeScript

É um JavaScript com "super poderes".
Foi criado para resolver dois problemas:

1. Fornecer aos devs de JS um sistema de tipagem

2. Fornecer aos devs de JS a capacidade de utilizar os recursos mais recentes do
   ECMAScript mesmo sem terem sido implementados oficialmente pelos browsers / node

## Tipos Básicos

1. boolean
2. number
3. string

## Outros tipos

1. any
2. void
3. null
4. undefined
5. never

## Arrays

## Interfaces

## Implements

## Type Assertions

# Configurando o Projeto

_yarn add typescript ts-node-dev @types/node tsconfig-paths -D_

- criar o tsconfig.json:
  _yarn tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true_

- compila:
  _yarn tsc_

- configurar script para rodar servidor localmente:
  _"dev": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules src/server.ts"_

- configurando ESLint:
  _yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin_

- configurando o Prettier
  _yarn add -D prettier_
  _yarn add esling-config-prettier eslint-plugin-prettier -D_
  _yarn add esling-config-prettier eslint-plugin-prettier -D_

- instalado express cors express-async-errors
