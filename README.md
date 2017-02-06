# Patients List Manager
[![Build Status][travis-badge]][travis-badge-url]

This repository holds the TypeScript source code of the [Patients List Manager] based in [angular.io quickstart](https://angular.io/docs/ts/latest/quickstart.html),
the foundation for most of the documentation samples and potentially a good starting point for an Angular 2 application.

## Prerequisites

Node.js and npm are essential to Angular development. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

## Create a new project based on the QuickStart

Clone this repo into new project folder (e.g., `my-patient-list`).
```shell
git clone https://github.com/pmesaj/patientslistcsc  my-patient-list
cd my-patient-list

## Install npm packages

Install the npm packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```

>Doesn't work in _Bash for Windows_ which does not support servers as of January, 2017.

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

The application should open in your browser.

Shut it down manually with `Ctrl-C`.



