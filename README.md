# What is This?

This is a [Gridsome](https://gridsome.org) project. Which is a [Vue.js](https://vuejs.org) static site generator. It was created using the default installation command `gridsome create new-project` and has been heavily modified to serve as the main website for [MotiCorp](https://moticorp.com). The project uses [TailwindCSS](https://tailwindcss.com) for styling.

**NOTE: Site is still in production**

## Contribute to the Project

If you would like to contribute to the project. There are a few things you will need to do, but the process is fairly simple. **Note:** These steps are untested and may not work. If you following these steps and it doesn't work, please let us know how and/or why and we'll try to update.

#### 1. Clone the Project Repo
In the Terminal run:
``` shell
cd ~/Sites
git clone "https://github.com/moticorpIT/moticorp.git" moticorp
```
The first line, moves you to your Sites directory. Substitute this with where ever you store you local site projects. The second line, will clone the project files from the repo at the url provided and place all the files in a directory named 'moticorp'.

#### 2. Install the JS Dependencies
In the Terminal run:
``` shell
cd ~/Sites/moticorp
npm install
```
The first line, moves you to your project directory, assuming you store your local site projects in the ~/Sites directory. The second line reads the package.json file and pulls in all the dependencies and puts them in `/node_modules` at the root of your project.

#### 3. Compile and Serve
In the Terminal run:
``` shell
gridsom develop
```
After the command runs, the terminal will be in a 'watch' state. Meaning it's hot reloading any changes you make, once you save the file. The exception to this would be a configuration file change. Which would require rerunning the `gridsome develop` command.

You should see two urls on the terminal output after running the command. The first one, which should look similar to `http://localhost:8080/`, is the url you will use for local production. Click the link in the terminal and it should open our project in your browser.

The second url in the terminal is for the GraphQL Explorer. Clicking this link will open a GraphQL playground where you can create and run queries before adding them to the project. Think SQL tab in phpMyAdmin, but better.

## Now What

At this point you should be running and ready to make contributions. Be sure to create a seperate branch for your work. Never work on the master branch. And... be kind to one another. :smiley: