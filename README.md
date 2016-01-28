# hyngwar-receiver for smart sheet web hooks

### Set up:
- put your HTML content under the /public folder.
    + Be sure to have an index page
    + putting content under /public/subs will generate an index that exposes each sub folder as a link. This is especially usefull for dropping prototype challenge results in for demo
- for basic auth:
    + set an environmental variable "SECURESITE=true"
    + add your user:password combos in the /data/users.httpaswd file

### To run:

```
$ npm install
$ npm start
```

### To set up CI/CD with [Magnum CI](http://magnum-ci.com) & [Heroku](http://heroku.com)
- create a heroku app
    + add the Papertrail add-on for good measure.
    + fetch your account's API key/token from your account settings.
- create a Magnum CI project
    + create a new node.js project that points to your git repo.
    + follow the instructions for setting up a webhook in your repo. This will be what tells Magnum CI about events on your repo. Suggest hooks are commit & tag events.
    + After setting up the web hooks, goto the project's settings and set up the "Build Configuration". Suggested settings are to only build on pushes to master branch.
    + No resources are required for this project so all datastores can be unselected.
    + If you utilize Slack you can add a Slack channel integration that will receive build notices. This can be configured under "Add Ons".
    + Under "Deployments" install "Heroku".
        * leave "Branch" as "master".
        * set the "Application" to the exact name of your Heroku app.
        * set the "API token" to your Heroku account's API key.
- any pushes to origin/master of your repo will now be automagically deployed to heroku, pending the build passes. Build failures can occur through general errors or failed unit tests. Always run your unit tests and preview your code against a dev site before master branch pushes (and subsequent site deployments).
