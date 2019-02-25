# LifeScope Universal App for iOS/Android/Windows/Mac


LifeScope Universal app for iOS/Android/Windows/Mac using Cordova.

Learn more
https://lifescopelabs.github.io/app

https://cordova.apache.org/

## Build process

You first need to add the platforms that you want to build for. Run

```cordova platform add android ios osx windows```

to initialize directories in the 'platforms' directory.
If you don't want to build the files for some of those platforms, just leave it out of that command.

Next, run 

```cordova build```

to build the app for the instantiated platforms. 