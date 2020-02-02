
tutorial for Learn the MERN Stack - Full Tutorial (MongoDB, Express, React, Node.js)
https://www.youtube.com/watch?v=7CqJlxBYj-M&t=348s


/*****************************************************************************/
GIT COPY
https://www.softwarelab.it/2018/10/12/adding-an-existing-project-to-github-using-the-command-line/

Create a new repository on GitHub. You can also add a gitignore file, a readme and a licence if you want
Open Git Bash
Change the current working directory to your local project.
Initialize the local directory as a Git repository.
git init
Add the files in your new local repository. This stages them for the first commit.
git add .
 Commit the files that you’ve staged in your local repository.
git commit -m "initial commit"
 Copy the https url of your newly created repo
In the Command prompt, add the URL for the remote repository where your local repository will be pushed.

git remote add origin remote repository URL

git remote -v
 Push the changes in your local repository to GitHub.

git push -f origin master

/*****************************************************************************/


STEPS 1 (TO CREATE REACT APP)
npx create-react-app mern-exercise-tracker

STEPS 2 (MOVE TO BACKEND SERVER SIDE CODING)
1.cd backend
2.npm init -y to create package.json for dependencies

STEPS 3 (DEPENDENCIES - SERVER SIDE BACKEND)
npm install express cors mongoose dotenv
(optional) npm install -g nodemon for restart app on changes

STEP 4 (CODING)
coding for server in server.js

/*****************************************************************************/

REACT SIDE  (FRONTEND SIDE)
npm install bootstrap
npm install react-router-dom
npm install react-datepicker
npm install axios