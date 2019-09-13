# Rocketseat_Node-js (Backend)
# (Fase 2)
Bootcamp Rocketseat - Node.js

# Comandos e Configurações:

TERMINAL:
Instalação do Chocolatey (Windows - CMD)=> @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

Instalação do Chocolatey (Windows - PowerShell)=> Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

Instalação do Node: cinst nodejs/ cinst nodejs.install/ node -v/ npm -v
Instalação do Yarn: choco install yarn/ yarn -v

yarn init -y // cria o package.json (criar dentro do repositório)
code . // abre o vs

VS CODE:
yarn add express
ctrl + shift + p abre o settings.json
yarn add nodemon -D
yarn add sucrase nodemon -D
yarn add eslint
yarn eslint --init
yarn faz mapeamento das dependencias
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
yarn eslint --fix src --ext .js
yarn add sequelize
yarn add sequelize-cli -D
yarn add pg pg-hstore
yarn sequelize migration:create --name=create-users
yarn sequelize db:migrate
yarn sequelize db:migrate:undo
yarn sequelize db:migrate:undo:all
yarn add bcryptjs
yarn add jsonwebtoken
yarn add yup (biblioteca schema validation, define os campos e os tipos)
yarn add multer
yarn sequelize migration:create --name=create-files
yarn sequelize db:migrate
yarn sequelize migration:create --name=add-avatar-field-to-users
yarn sequelize db:migrate
yarn sequelize migration:create --name=create-appointments
yarn sequelize db:migrate
yarn add youch
yarn add dotenv
yarn add date-fns@nx
docker run --name mongobarber -p 27017:27017 -d -t mongo
yarn add mongoose
yarn add nodemailer
yarn add express-handlebars nodemailer-express-handlebars
docker run --name redisbarber -p 6379:6379 -d -t redis:alpine
yarn add bee-queue
yarn add @sentry/node@5.6.2
yarn add express-async-errors

CONFIGURAÇÕES VS CODE settigns.json:
(ctrl+shift+p) // atalho para abrir e pesquise settings.json

{
  "workbench.startupEditor": "newUntitledFile",
  "workbench.iconTheme": "material-icon-theme",
  "workbench.colorTheme": "Dracula",
  "editor.fontFamily": "Fira Code",
  "window.zoomLevel": 0,
  "editor.fontLigatures": true,
  "editor.fontSize": 14,
  "editor.lineHeight": 24,
  "editor.formatOnSave": true,
  "editor.rulers": [
    80,
    120
  ],
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    {
      "language": "javascript",
      "autoFix": true
    },
    {
      "language": "javascriptreact",
      "autoFix": true
    },
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    }
  ],
  "editor.tabSize": 2,
  "editor.renderLineHighlight": "gutter",
  "terminal.integrated.fontSize": 14,
  "emmet.syntaxProfiles": {
    "javascript": "jsx"
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "javascript.updateImportsOnFileMove.enabled": "never",
  "breadcrumbs.enabled": true,
  "editor.parameterHints.enabled": false,
  "prettier.eslintIntegration": true,
  "git.enableSmartCommit": true,
  "terminal.integrated.rendererType": "dom",
  "explorer.confirmDelete": false
}


