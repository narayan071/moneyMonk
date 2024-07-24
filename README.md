## Steps to integrate expo

1. npm install -g eas-cli
2. eas login
3. eas build:configure

After above steps it will create ine eas.json file.

## Create test build for Android and IOS.

IOS

```
eas build --profile development --platform ios
```

Android

```
eas build --profile development --platform android
```

## Create Preview or staging build

IOS

```
eas build --profile preview --platform ios
```

Android

```
eas build --profile preview --platform android
```

## Create a production build

IOS

```
sudo eas build --platform ios
```

Android

```
sudo eas build --platform android
```

## Submit production build to app store

sudo eas submit --platform ios

## Submit production build to google play

sudo eas submit --platform android
