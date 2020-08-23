# Personal Bio Site

![stability](https://img.shields.io/badge/status-WIP-lightgrey)

This is the first React application using class-based components, full CRUD, and Firebase, that I created while participating in the [Nashville Software School - Full Stack Web Developer Python/Django](http://nashvillesoftwareschool.com).

## Screenshot
![screenshot](./Sportsroster.gif)


## Deployed Project
https://nw-sports-roster.web.app

## Technologies Used
[![JavaScript](https://img.shields.io/badge/-JavaScript-2c9fcc?style=flat-square)](#) [![SASS](https://img.shields.io/badge/-SASS-2c9fcc?style=flat-square)](#) [![HTML](https://img.shields.io/badge/-HTML-2c9fcc?style=flat-square)](#) [![Firebase](https://img.shields.io/badge/-Firebase-2c9fcc?style=flat-square)](#) [![Axios](https://img.shields.io/badge/-Axios-2c9fcc?style=flat-square)](#) [![React](https://img.shields.io/badge/-React-2c9fcc?style=flat-square)](#)


## How to Run
This project uses webpack to compile the code.

1) Clone the project: `git clone git@github.com:nswalters/sports-roster.git`
2) Change directories to the cloned project: `cd sports-roster`
3) Use NPM to install required packages: `npm install`
4) After packages have been installed, run the local webserver using: `npm start`
5) A browser window should open pointing to `localhost:3000` (or similar depending on any other servers you might be running)

## How to Deploy
This project uses Firebase for deployment.

1) Run `firebase init` from the root of the project
2) Select `hosting`
3) Set public directory as `build`
4) Enter `yes` when asked to configure as sing-page app
5) Enter `no` if asked to overwrite
6) Run: `npm run deploy` from the root of the project directory to deploy.
7) Make sure `.firebase/` folder is in your `.gitignore` before committing.
