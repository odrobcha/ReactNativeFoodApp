#Start
documentation can be found https://reactnative.dev/

There 2 options:
- Expo CLI (default) - Third-part service(free). Provide managed aap development. (Easy development). Can swicht to ReactNative any time
 run `sudo npm  install -g expo-cli`
 run `npx create-expo-app AwesomeProject`      
      `cd AwesomeProject`
      `npx expo start`
- ReactNative CLI. Tool provided to ReactNative tool. 

###Running on real device

Install Expo App on your device
run `npx expo start`
scan barCode by phone. And grant the all needed permission to Expo App


###Running on emulator
install Android studio (Linux or Windows)
or 
Xcode (only for iOS)

## Add navigation
Documentations is here https://reactnavigation.org/

- run `npm install @react-navigation/native`
- if useExpo 
    run `npx expo install react-native-screens react-native-safe-area-context`
-use App.js 
    - import {NavigationContainer} and wrap it around component that has to use it.
    - use one of supported Navigators (Stack, NativeStack, Draws,...})
    - install needed Navigator. For example Stack
    run `npm install @react-navigation/native-stack`
    - in App.js
      - import { createNativeStackNavigator } from '@react-navigation/native-stack';
      - create const Stack = createNativeStackNavigator();
      - <Stack.Navigator>
         <Stack.Screen/>
       </Stack.Navigator>
       - Config the Stack.Screen
          <Stack.Screen name="MealsCategories" component = {CategoriesScreens}/>
       - {navigation} if provided to component registered as screen in Stack (App.js)
       - to have access to navigation in any component import {useNavigation} from '@react-navigation/native'
       - use navigation.navigate('MealsOverview') (argument is the name of component to navigate to - the samenameas in App.js in <Stack)
      
### Use navigation
 navigation.navigate('MealsOverview', {
                categoryId: itemDate.item.id, // second argument - is theobjectthat can be pass to target screen
            }) 
            
 the target screen (which is registeed in App.js) obtaines the {route} props
 const MealsOverviewScreen = ({route}) =>{.....} and route.params - the objected past by navigation

OR 
use import {useRoute} from '@react-navigation/native'
const route = useRoute();
const pastParams = route.params.pastParams;
in any component

- Adding button to the header:
with the option on the <Stack.Screen>
options={{
        headerRight:()=>{
                            return(
                              <Button title="*"/>
                            )
                        }
                    }}
OR directly in the component


### ICons
import {Ionicons} from '@expo/vector-icons'
