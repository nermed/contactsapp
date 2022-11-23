import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Appearance, StyleSheet, Text, View} from 'react-native';
import {ContactDetail, HomeScreen, SettingsScreen} from './screens';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {AppHeaderRight} from './components';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {changeTheme} from './stores/reducers/themeMode';
import {useInitHelper, useIsLightMode} from './helpers/main';
import {COLORS} from './constants';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
  const isLightMode = useIsLightMode();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let tabBarIconProps = 'home';
          if (route.name !== 'Home') {
            tabBarIconProps = 'settings';
          }
          return (
            <MaterialIcons
              name={tabBarIconProps}
              color={focused ? '#D4EFDF' : '#145A32'}
              size={focused ? 30 : size}
            />
          );
        },
        tabBarActiveBackgroundColor: isLightMode
          ? '#1E8449'
          : COLORS.dark.backgroundColor1,
        tabBarInactiveBackgroundColor: isLightMode
          ? COLORS.light.white
          : COLORS.dark.primary,
        tabBarActiveTintColor: isLightMode ? '#D4EFDF' : COLORS.dark.primary,
        tabBarHideOnKeyboard: true,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: 'Contacts',
          headerRight: () => <AppHeaderRight />,
          headerTitleStyle: {
            color: isLightMode
              ? COLORS.light.white
              : COLORS.dark.primary,
          },
          headerStyle: {
            backgroundColor: isLightMode
              ? COLORS.light.primary
              : COLORS.dark.backgroundColor1,
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerRight: () => <AppHeaderRight />,
          headerTitleStyle: {
            color: isLightMode
              ? COLORS.light.white
              : COLORS.dark.primary,
          },
          headerStyle: {
            backgroundColor: isLightMode
              ? COLORS.light.primary
              : COLORS.dark.backgroundColor1,
          },
        }}
      />
    </Tab.Navigator>
  );
}

// function App() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={HomeTabs} />
//       <Stack.Screen name="Profile" component={Profile} />
//       <Stack.Screen name="Settings" component={Settings} />
//     </Stack.Navigator>
//   );
// }

export default function App() {
  const dispatch = useDispatch();
  useInitHelper();
  useEffect(() => {
    const getColorScheme = () =>
      Appearance.addChangeListener(({colorScheme}) => {
        dispatch(changeTheme(colorScheme));
      });
    getColorScheme();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeTabs"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
        <Stack.Screen name="ContactDetail" component={ContactDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
