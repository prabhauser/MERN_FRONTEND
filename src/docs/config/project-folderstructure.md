# Project Folder Structure

## src

src folder will store all the necessary folders and files required for the project.

## atoms

The smallest possible components, such as buttons, titles, inputs or event color pallets, animations can be stored in the atoms folder.
The components in atoms folder are re-usable.

## components

We can create multiple component files that are used to wrap the application components and determine their overall layout. This folder will have all the UI components.

## constants

This file contains static values used within the features of application.

## router

The project base navigation goes here.
All private , protected and role-based routes are defined in this folder.

## schema

This folder will contain the list of fields defined for each screen in application along with the validation rules.

## assets

This folder will store all the assets that we are using in project. We can add static files like fonts and images to it. Also, we can add more assets like videos in this folder according to the project requirements.

## services

The service folder contains logic, related to external API communications.

## store

We are using Redux and Redux-Thunk in our project and handle business logic using them.
In stores, we can create an actions folder and we can store different types of actions in this folder. We can do the same for reducers.

## utilities

All the utils/helpers files go here that storing reusable methods and logic like validations, progress bar, date pickers, and according to project requirements. This folder will also contain getter and setter functions for storage utilities like sessionStorage and localStorage.
