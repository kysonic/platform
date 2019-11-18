### Run android emulator
````
~/Library/Android/sdk/emulator/emulator -list-avds
~/Library/Android/sdk/emulator/emulator -avd Pixel_2_API_28
~/Library/Android/sdk/emulator/emulator -avd Nexus_5_API_28
````
### Issues with IOS build 

````
sudo gem install cocoapods
cd ios
pod install
````

### Break and Fix

- Issue: Mix of build processes with IDE (Android Studio XCode) and react native scripts.
  Solution: Delete project and install one more time.

### Android Signing Key

https://stackoverflow.com/questions/42663114/keystore-file-does-not-exist/46138449

### Google Signin

Android - https://github.com/react-native-community/react-native-google-signin/blob/master/docs/android-guide.md
IOS - https://github.com/react-native-community/react-native-google-signin/blob/master/docs/ios-guide.md

### Execution failed for task ':app:transformDexArchiveWithExternalLibsDexMergerForDebug'.

- Try running ./gradlew app:dependencies in android directory in terminal

- just remove both 'build' folder in /android and /android/app
  and build again with 'react-native run-android'

- https://developer.android.com/studio/build/multidex

### IOS Swift version is not compatible 

Update XCode and re-run build 

### IOS Cannot find simulator 

- react-native run-ios --simulator="New Simulator Name"
- remove node_modules and reinstall via npm or yarn

### IOS fatal error: 'React/RCTBridge.h' file not found | Faced in react-native-text-input-mask

n\a - https://github.com/react-native-community/react-native-text-input-mask/issues/73

### Unlink of module was not successful

Delete ./android/app/build
Go to ./android and run `./gradlew clean`

### Clean the app

https://medium.com/@abhisheknalwaya/how-to-clear-react-native-cache-c435c258834e

### Ios app doesn't run on emulator (just not starting make bundle)

1. Go to xcode 
2. Run app 
3. Check error - "Cannot find Google-Service-Infor.plist"
4. Remove previos version.
5. Get new
6. Add via right click on project and select "Add to project_name"
