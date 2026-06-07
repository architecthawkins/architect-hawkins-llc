# Architect Hawkins LLC

Portfolio and marketing website for [Architect Hawkins LLC](https://architecthawkins.com), an Arizona-based architecture firm. Built with Angular 9 and hosted on GitHub Pages at **[architecthawkins.com](https://architecthawkins.com)**.

| | |
|---|---|
| **Repo** | [github.com/architecthawkins/architect-hawkins-llc](https://github.com/architecthawkins/architect-hawkins-llc) |
| **Live site** | [architecthawkins.com](https://architecthawkins.com) |
| **GitHub Pages** | [architecthawkins.github.io/architect-hawkins-llc](https://architecthawkins.github.io/architect-hawkins-llc) |
| **Deployed branch** | `gh-pages` |

## Development

```bash
npm start          # dev server at http://localhost:4200
npm run ng-port    # dev server at http://localhost:8100
```

The app reloads automatically on file changes.

## Build

```bash
npm run build      # development build -> dist/architect-hawkins-llc
```

For a production build, use the `--prod` flag:

```bash
ng build --prod
```

## Deploying to GitHub Pages

A single command handles the production build and deploys to the `gh-pages` branch:

```bash
npm run git-dply
```

The live site is served from the custom domain `architecthawkins.com`, configured via the `CNAME` file in the repo root. This file is preserved on every deploy.

The build uses `--base-href "/"` so all assets resolve relative to the custom domain. Do not change this back to the github.io URL or CORS errors will occur.

The script also sets `NODE_OPTIONS=--openssl-legacy-provider` to work around an OpenSSL incompatibility between Node 17+ and the webpack version used by Angular 9. This flag is required on Node 17 and above.

## Testing

```bash
ng test   # unit tests via Karma
ng e2e    # end-to-end tests via Protractor
```

## Code Generation

```bash
ng generate component component-name
ng generate directive|pipe|service|class|guard|interface|enum|module
```

## Linting

```bash
npm run lint       # run tslint
npm run lint-fix   # auto-fix lint issues
```
