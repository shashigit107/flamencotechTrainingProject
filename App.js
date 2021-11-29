import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import index from './Components';
import Store from './Components/Redux/Store'
import { Provider } from 'react-redux';
import UserInterface from './Components/UserInterface';
import UserDescription from './Components/UserDescription';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={UserInterface} />
        <Stack.Screen name="User Detail" component={UserDescription} />

      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};
export default App;






































// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { StyleSheet, Text, View } from 'react-native';

// // import Store from './Components/Redux/Store';
// // import { Provider } from 'react-redux';
// // import UserDescription from './Components/UserDescription';
// // import UserInterface from './Components/UserInterface';
// import index from './Components';


// const Stack = createStackNavigator();

// export default function App() {
//   return (
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="screen1">
//           <Stack.Screen name="screen1" component={index}></Stack.Screen>
//           {/* <Stack.Screen name="screen2" component={Screen2}></Stack.Screen> */}
//         </Stack.Navigator>
//       </NavigationContainer>
//   );
// }
    
 

