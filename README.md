# BACK END SECURITY GUARD CHECKPOINT SYSTEM
The whole project is separete in back, front and mobil applications.

A simple control web system wich allows administrators managment each inspection from security guard. 

## Description

![security guard](https://www.jwm-rfid.com/wp-content/uploads/2020/09/guard-patrol.png)

When you employ the guard tour system, you won’t need to use notebooks or keep track of an ever-growing paper trail for your company. Instead, security officials will scan Qr codes checkpoints and log reports with ease using a smartphone.Before that, the system administrator  will plan a patrol route that includes particular checkpoints where security personnel must stop. The real-time event data is automatically delivered to our web system and stored safely. Using a mobile device, each guard is in charge of their own work. 
    
* You can:
    - Create bases to know where inspection are coming from (subsidiaries)
    - Create incidences
    - Create check point
    - Managment permissions, profiles
    - Create users, user's accounts
    - Show reports
    - Create tour

## Technologies
Node Js (Express), Sequelize, MySql, Qr Code

## Project setup
```
npm install
```
* You must fill the tables manually to have access to the web system and mobile app:
    1. Personals
    2. Perfils
    3. Permisos
    4. Bases
    5. PerfilPermisos
    6. Usuarios

* You can create administrator's and security guard's accounts

* Check it out /database/config file

* Don't forget create only your own database first and also your variables in .env file including your PORT

### Compiles for development
```
node app
```
* Runing the project will create tables automatically
* Enjoy!.
