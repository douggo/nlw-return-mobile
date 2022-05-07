# Miscellaneous

Everything we saw and created on the NLW Return event.

## Error `error:0308010C:digital`

This error will occur when you have a 17.x version installed of nodejs. To solve it, you must uninstall the current version of node and use the code snippet down below.

```sh
sudo apt-get purge --auto-remove nodejs
sudo curl -fsSl https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
node --version
npm -v
expo --version
```

Doing this will solve all problems and you can now use the expo to bundle and see you app on your phone.

## Commands used

- To start a new project using `Expo`:
  - `sudo npm install -g expo-cli`
  - `expo init mobile`
  - `expo start`
  - `expo start --clear`

- To use inter font:
  - `expo install expo-font @expo-google-fonts/inter`

- To create a splash screen while the app is loading the font:
  - `expo install expo-app-loading`

- To use phosphor icons:
  - `npm install --save phosphor-react-native`

- To make the app use svg images
  - `expo install react-native-svg`

- To install a helper to iPhone (styles)
  - `npm install react-native-iphone-x-helper`

- To create a bottom component:
  - `expo install @gorhom/bottom-sheet@^4`

- To make the bottom component have a transition:
  - `expo install react-native-reanimated`

- To make the bottom component have a transition while using the touch to close the bottom:
  - `expo install react-native-gesture-handler`

- To take a screenshot:
  - `expo install react-native-view-shot`

- To make the app have communication with the server:
  - `npm install axios`

- To work with images:
  - `expo install expo-file-system`
