# Angular/Firebase/Material - Demo
## Table of Contents
 * [What is this](#what-is-this)
 * [Demo](#demo)
 * [Used libraries, guides, etc.](#used-libraries-guides-etc)
   * [Libraries](#libraries)
   * [Guides](#guides)
   * [Other resources](#other-resources)
 * [Installation](#installation)
   * [Configuration](#configuration)
   * [Firebase](#firebase)
 * [Development](#development)
 * [Build](#build)
 * [Author](#author)
 * [License](#license)

## What is this
Just a small demo to show how to use [Angular4](https://angular.io/) + [Firebase](https://firebase.google.com/) +
[Google Material Design](https://www.google.com/design/spec/material-design/introduction.html) together. Currently
this demo application contains following features:
 * Authentication with email and password
   * Sign in
   * Signup
   * Forgot Password
   * Delete Account
   * User presence
 * Routing
 * Progressive Web Application
 * Material Design
 * Responsive layout using [fxLayout](https://github.com/angular/flex-layout)
 * Firebase Cloud Functions(FCF)
 * Firebase Cloud Storage
 * Firebase hosting

## Demo
Demo of this application can be found from [https://app-demo-1ac99.firebaseapp.com/](https://app-demo-1ac99.firebaseapp.com/)
![Screenshot of app](https://i.imgur.com/z7tjlBd.png)

### Libraries
 * [Angular 4](https://github.com/angular/angular)
 * [Material Design for Angular 4](https://github.com/angular/material2)
 * [AngularFire2](https://github.com/angular/angularfire2)
 * [angular2-moment](https://github.com/urish/angular2-moment)
 * [Angular-CLI](https://github.com/angular/angular-cli)


## Installation
 1. Install ```npm``` and ```node.js``` to your box.
 2. Clone this repository
 4. Create a [new firebase application](https://console.firebase.google.com/)
 5. Now set your own configuration on `src/environment/environment.prod.js` and `src/environment/environment.js`.
 6. Now start the dev server with `ng serve` and open http://localhost:4200  
 7. Star this project

### Firebase configuration

After you have created new application you need to make some [security rules](https://firebase.google.com/docs/database/security/quickstart)
for the used data storage. Below is configuration that this demo application uses, so you can use the same within your
application.

```
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null",

    "users": {
      "$user_id": {
        ".write": "$user_id === auth.uid"
      }
    }

  }
}
```

These rules ensure that 'todo' items are show only to user who made those. Also chat messages requires that user is
logged in to read / write those.

## Development
To start developing in the project run `ng serve`.
Then head to http://localhost:4200 in your browser.



## Build
Run `ng build --prod` to build the project. The build artifacts will be stored in the `dist/` directory

## Deploy to firebase
Run `ng build --prod` to build the project. The build artifacts will be stored in the `dist/` directory

## Author
Mustafa Hossaini

## License
[The MIT License (MIT)](LICENSE)

Copyright (c) 2017 Mustafa Hossaini
