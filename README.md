# trash

### installation

1. yarn install
2. cd ios && pod install
3. Go to Android Studio and run it in ./android folder

### Configuration

Go to the src/config/ and copy local.example.js as local.js and configure your environment variables


### Build ipa (IOS)

1. react-native bundle --entry-file index.js --platform ios --dev false --bundle-output ios/main.jsbundle --assets-dest ios
2. Go to the XCode
3. Sign app with your Developer account certificate 
4. Product => Scheme => Release
5. Product => Archive
6. Release
7. Select distribution Development
8. Continue with wizard

### Build apk (Android)

0. react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
1. Find java folder /usr/libexec/java_home   
2. cd your java home folder
3. sudo keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
    (valid for 10000 days)
4. Copy file to /android/app folder
5. Edit the file ~/.gradle/gradle.properties or android/gradle.properties, and add the following (replace ***** with the correct keystore password, alias and key password),

MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=*****
MYAPP_UPLOAD_KEY_PASSWORD=*****

6. Create build configuration (Edit configuration) in Android Studio (top bar, android icon)
7. Select Gradle 
8. Tasks: assemble
9. Gradle project -> select android folder of app
10. Run

### Launch screen and icons

https://medium.com/better-programming/react-native-add-app-icons-and-launch-screens-onto-ios-and-android-apps-3bfbc20b7d4c
