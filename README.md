Angular2TypeScriptWebpack
=========================

## Todo
1. Setup Barrels file (index.ts)
2. Unit test with fakeAsync() and tick()
3. E2E tests
4. Unit tests (`karma-sourcemap-loader` as preprocessors in `karma.conf.js` & `source-map-support` as frameworks in `karma.conf.js`)

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