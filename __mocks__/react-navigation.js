jest.mock('@react-navigation/native-stack', () => {
    return {
      addEventListener: jest.fn(),
      createNativeStackNavigator: jest.fn()
    }
  });