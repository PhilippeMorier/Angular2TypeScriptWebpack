Angular2TypeScriptWebpack
=========================

## Todo
1. Setup Barrels file (index.ts)
2. Unit test with fakeAsync() and tick()
3. E2E tests with Protractor
4. Unit tests (`karma-sourcemap-loader` as preprocessors in `karma.conf.js` & `source-map-support` as frameworks in `karma.conf.js`)
5. Webpack: common modules, maybe separate main, app, spec
6. Refactor `tslint.json` by merging the rules from codelyzer, tslint & tslint-microsoft-contrib (http://stackoverflow.com/questions/171251/how-can-i-merge-properties-of-two-javascript-objects-dynamically)
7. User angular router (with child routes & [routerLinkActive])
8. Have different config for development and production (ev. test)
9. Use animations
10. Internationalisation
11. Import rxjs operators, so that IDE can resolve used functions:
    - `import 'rxjs/add/operator/map'`
    - `import 'rxjs/add/operator/retryWhen'`
    - `import 'rxjs/add/operator/delay'`
12. Add RxJS as a javascript library in IntelliJ to solve resolve issues: http://stackoverflow.com/a/38499577
13. Use http://redux.js.org as a state container
14. Use forms: https://www.youtube.com/watch?v=E92KS_YCSf8
15. Take a look into [offline template compilation](http://www.syntaxsuccess.com/viewarticle/offline-compilation-in-angular-2.0)
16. Create a custom component (e.g. tabs, cards) with `host: { '[class.touched]': 'isTouched' }` according to [Angular's controle state](https://github.com/angular/angular/blob/ae75e3640a2d9eb1e897a0771d92b976c5a42c75/modules/%40angular/common/src/forms-deprecated/directives/ng_control_status.ts#L24) and [Angular Material2](https://github.com/angular/material2/tree/4bb7790653e160bd6d72cfbe117309cb9020f521/src/components), [@HostBindings](http://stackoverflow.com/a/36908784)
17. Use [`npm shrinkwrap`](https://docs.npmjs.com/cli/shrinkwrap)
18. Use Webpack 2
19. Debug app within IntelliJ by [adding](http://stackoverflow.com/a/34683043) a new `'JavaScript Debug'` configuration (`'Shift + Cmd + A'` -> `'Edit Configurations...'`) 

## 1. @Component, @Pipe, @Router
### 1.1 Error
```
error TS1219: Experimental support for decorators is a feature that is subject to change in a future release. Set the 'experimentalDecorators' option to remove this warning.
```
### 1.2 Solution
Add `experimentalDecorators` option in `tsconfig.json`:
```json
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```

## 2. core-js (npm + typings)
### 2.1 Error
```
error TS2304: Cannot find name 'Map' / 'Promise' / 'Set'
```
in @angular/...
### 2.2 Solution
```
> npm install core-js --save-dev
> typings install dt~core-js --save --global
```

## 3. node 6.x
### 3.1 Error
```
error TS2304: Cannot find name 'require'.
```
### 3.2 Solution
 ```
 > typings install dt~node --save --global
 ```
 
## 4. Karma Unit Test
### 4 .1 Error
```
Uncaught Error: More tasks executed then were scheduled.
```
### 4 .2 Solution
Remove 'source-map-support' in `karma.conf.js`.

 ```JavaScript
 frameworks: ['jasmine', 'source-map-support'],
 ```
 
## 5. Barrel Files
### 4 .1 Error
Cannot resolve folder path even if an `index.ts` is provided.

### 4 .2 Solution
Add resolve extensions to `webpack.config.js`

 ```JavaScript
resolve: {
        extensions: ['', '.js', '.ts']
    },
 ```
