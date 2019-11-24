# trash

### installation

1. yarn install
2. cd ios && pod install

### Configuration

Go to the src/config/ and copy local.example.js as local.js and configure your environment variables


### Build ipa (IOS)

1. react-native bundle --entry-file index.js --platform ios --dev false --bundle-output ios/main.jsbundle --assets-dest ios
2. Go to the XCode
3. Sign app with your Developer account certificate 
4. Product => Scheme => Relase
5. Product => Archive
6. Release

### Build apk (Android)

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
