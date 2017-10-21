[![Join the chat at https://gitter.im/app-demo-chat/Lobby](https://badges.gitter.im/app-demo-chat/Lobby.svg)](https://gitter.im/app-demo-chat/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/MurWade/app-demo.svg?branch=master)](https://travis-ci.org/MurWade/app-demo)
# Best Starter Kit
## Table of Contents
 * [What is this](#what-is-this)
 * [Demo](#demo)
 * [Libraries](#libraries)
 * [Installation instructions](#installation)
 * [Firebase configuration](#user-content-firebase-configuration-coming-soon)
 * [Author](#author)
 * [License](#license)

## What is this
This is a starter kit which uses [Angular4](https://angular.io/) + [Firebase/Firestore](https://firebase.google.com/) +
[Google Material Design](https://www.google.com/design/spec/material-design/introduction.html) and continues integration with [Travis CI](https://travis-ci.org/). Currently
this demo application contains following features:
 * Authentication with email and password
   * Sign in
   * Signup
   * Reset password
   * Change password
   * Delete Account
   * User presence(Online, Away, Offline)
   * Welcome emails(using firebase functions)
   * Good bye emails(using firebase functions)
 * Routing(Dynamic Page titles, etc)
 * Progressive Web Application
 * Material Design
 * Responsive layout using [fxLayout](https://github.com/angular/flex-layout)
 * Firebase Cloud Functions(FCF)
 * Firebase Cloud Storage(for uploads)
 * Firebase hosting

## Demo
Demo of this application can be found from [https://app-demo-1ac99.firebaseapp.com/](https://app-demo-1ac99.firebaseapp.com/)

![Screenshot of app](https://i.imgur.com/z7tjlBd.png)

### Libraries
 * [Angular 4](https://github.com/angular/angular)
 * [Material Design for Angular](https://github.com/angular/material2)
 * [AngularFire2](https://github.com/angular/angularfire2)
 * [angular2-moment](https://github.com/urish/angular2-moment)
 * [Angular-CLI](https://github.com/angular/angular-cli)


## Installation
 1. Make sure you got the latest `node` and `npm` installed first. Then install these packages
      * `npm install -g @angular/cli`
 2. Clone this repository
 3. Now install the dependencies with `npm install`
 4. Now start the dev server with `ng serve` and open http://localhost:4200
 5. Star this repository.

### Firebase configuration (Coming soon)
I will show you how to deploy this application to your own firebase application instance.

## Author
Mustafa Hossaini

## License
[The MIT License (MIT)](LICENSE)

Copyright (c) 2017 Mustafa Hossaini
