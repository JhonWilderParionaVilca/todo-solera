## Vite

```sh
$ yarn create vite diresa-app --template react-ts
$ cd diresa-app
$ yarn
```

## Linters

````sh
$ npx eslint --init
# 3 opc > es6 > react> yes>browser>airbnb>json>no
$ yarn add -D eslint-plugin-react@^7.21.5 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint@^7.2.0 eslint-plugin-import@^2.22.1 eslint-plugin-jsx-a11y@^6.4.1 eslint-plugin-react-hooks@^4 @typescript-eslint/parser@latest
$ yarn add -D eslint-config-prettier prettier
```

- modificar vite.conf.ts
- modificar el [.eslintrc.json](.eslintrc.json)
- crear [.eslintignore](.eslintignore)
- crear [.prettierrc.json](.prettierrc.js) y [.prettierignore](.prettierignore)
- agregar eslintcache a [.gitignore](.gitignore)
- instalar [git commit message linter ](https://www.npmjs.com/package/git-commit-msg-linter) `yarn add -D git-commit-msg-linter`
- instalar [lint-staged](https://github.com/okonet/lint-staged#installation-and-setup) `npx mrm@2 lint-staged`
- para que reconozca el git commit `npx husky add .husky/commit-msg ".git/hooks/commit-msg \$1"`

## Opcional

```sh
# Por defecto no funciona el archivo jest.config, sino que tenemos q agregar las configuraciones al package.json con --

# Para que no salga el warning de jest:

$ yarn add -D eslint-plugin-jest
$ yarn add react-test-renderer

## en eslintrc
{
  "plugins": ["jest"]
},
"env": {
  "jest/globals": true
}
````
