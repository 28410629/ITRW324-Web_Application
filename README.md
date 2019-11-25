# ITRW324 University Project
Other repositories for project.
* [ESP8266 Weather Station](https://github.com/coenraadhuman/WeatherStation_Unit)
* [.Net Core Web API](https://github.com/coenraadhuman/WeatherStation_API)

## WeatherStation_Angular
This is the front-end for next semester project module.

Node.js details
---------------
```powershell
> node -v
 v10.16.2
```

To install Node
---------------------------
* Install node via respective OS guide on the internet, ensure the version number is the same.

Clone Web Application
------------------------
```bash
git clone https://github.com/coenraadhuman/WeatherStation_Angular.git
cd ./WeatherStation_Angular/WeatherWebApplication
npm install
```

Serve Web Application for local testing
---------------------------------------
* **Please note that this will fail if you did not run "npm install" to restore the node modules.**
* Run the following command from within the WeatherWebApplication directory within the repository.
```bash
npm start
```

## Build (Publish to Github Pages)
I, `THE BADASS`, will normally do this, but here are the steps:

Within the development directory of the repository:
```bash
ng build --prod --output-path docs --base-href "https://anchormenstations.tech/"
```
1. Move all files within `docs` to **gh-pages branch.** 
1. Make a copy of index.html and rename it to 404.html

ngx-admin
----------
```
The most popular admin dashboard based on Angular 8+, Bootstrap 4+ and Nebular with Eva Design System support. 
Free and Open Source for personal and commercial purposes. 
Never start from scratch again - integrate backend API bundles.
```

* [ngx-admin source code](https://github.com/akveo/ngx-admin)
* [ngx-admin installation](https://akveo.github.io/ngx-admin/docs/getting-started/installation-guidelines#install-ngxadmin)
* [ngx-admin documentation](https://akveo.github.io/ngx-admin/docs/getting-started/what-is-ngxadmin)

Eva Icon Set Names
------------------
* [https://akveo.github.io/eva-icons/#/][https://akveo.github.io/eva-icons/#/]

Resolve Node.js Errors
----------------------
https://stackoverflow.com/questions/47714946/angular-cli-installation-fails-at-step-fetchmetadata-sill-resolvewithnewmodule/47715378#47715378 
