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

