# static-web-boilerplate
basic boiler plate for quick development 

##Howto:
!never work in public, everything is done in src

First install all the Node dependencies 
```
npm install
```

Run bower install for bootstrap sass and jquery
```
bower install 
```

Now you should be able to run Gulp tasks and start developing 

Default, this starts nodemon for a small webserver and host the public folder, Livereload will watch for changes and update your browser (if you have the livereload plugin)
```
$gulp
```

This generates the public folder with all the html pages and compiled sass
```
$gulp build
```
