# ionic-angular-fire-template

## Reason for this repo

This repo contains a new Ionic project with @angular/fire installed.  On this date (30 Nov. 2022), if you create a new Ionic project and then do `ng add @angular/fire` and then try to use AngularFire (in `home.page.ts`), you get build errors:

```
$ ionic build
> ng run app:build
One or more browsers which are configured in the project's Browserslist configuration will be ignored as ES5 output is not supported by the Angular CLI.
Ignored browsers: chrome 60
⠋ Generating browser application bundles (phase: setup)...    TypeScript compiler options "target" and "useDefineForClassFields" are set to "ES2022" and "false" respectively by the Angular CLI. To control ECMA version and features use the Browerslist configuration. For more information, see https://angular.io/guide/build#configuring-browser-compatibility
✔ Browser application bundle generation complete.

Error: node_modules/@angular/fire/compat/firestore/interfaces.d.ts:13:18 - error TS2430: Interface 'DocumentSnapshotExists<T>' incorrectly extends interface 'DocumentSnapshot<DocumentData>'.
  The types returned by 'data(...)' are incompatible between these types.
    Type 'T' is not assignable to type 'DocumentData | undefined'.
      Type 'T' is not assignable to type 'DocumentData'.

13 export interface DocumentSnapshotExists<T> extends firebase.firestore.DocumentSnapshot {
                    ~~~~~~~~~~~~~~~~~~~~~~

  node_modules/@angular/fire/compat/firestore/interfaces.d.ts:13:41
    13 export interface DocumentSnapshotExists<T> extends firebase.firestore.DocumentSnapshot {
                                               ~
    This type parameter might need an `extends firebase.firestore.DocumentData` constraint.
  node_modules/@angular/fire/compat/firestore/interfaces.d.ts:13:41
    13 export interface DocumentSnapshotExists<T> extends firebase.firestore.DocumentSnapshot {
                                               ~
    This type parameter might need an `extends firebase.firestore.DocumentData | undefined` constraint.
  ... <snip> ...
```

From my research this a known bug: https://github.com/angular/angularfire/issues/3290

To fix these errors, I had to edit `package.json` to downgrade Angular from version 15 to version 14 and downgrade typescript from version 4.8.4 to version 4.7.4. Then, delete `node_modules` directory and `package-lock.json`. Then, do `npm install` again. Then `ionic build --prod` works.

***Notice***:

When I installed `@angular/fire` I did not choose to install hosting. But, I did connect this repo to my test Cloud Firestore database -- `testcreatefb`.

Any user of this template will need to change that, and change the firebase info in the `environments/*` files.
