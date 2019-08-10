# WeatherStation_Angular
This is the front-end for next semester project module.

Angular details
---------------
```powershell
> node -v
 v10.16.0
> ng new WeatherStation
 Would you like to add Angular routing? Yes
 Which stylesheet format would you like to use? CSS
> ng --version

      _                      _                 ____ _     ___
     / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
    / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
   / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
  /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                 |___/


 Angular CLI: 8.0.3
 Node: 10.16.0
 OS: win32 x64
 Angular:
 ...

 Package                      Version
 ------------------------------------------------------
 @angular-devkit/architect    0.800.3
 @angular-devkit/core         8.0.3
 @angular-devkit/schematics   8.0.3
 @schematics/angular          8.0.3
 @schematics/update           0.800.3
 rxjs                         6.4.0
```

To install Node and Angular
---------------------------
* Within this repository is the installation file for Windows for node, install it.
* Afterwards open the powershell and enter this (follow on-screen instructions and select Angular 8):
```powershell
> npm install -g @angular/cli
```

Clone Web Application
------------------------
```bash
git clone https://github.com/coenraadhuman/WeatherStation_Angular.git
cd ./WeatherStation_Angular/WeatherStation
npm install
```

Serve Web Application for local testing
---------------------------------------
* **Please note that this will fail if you did not run "npm install" to restore the node modules.**
* Run the following command from within the WeatherStation directory within the repository.
```bash
ng serve --open
```

Resource Links
--------------
[Admin Template](https://github.com/BlackrockDigital/startbootstrap-sb-admin-2)
