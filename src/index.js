// import registerRootComponent from "expo/build/launch/registerRootComponent";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import userList from "./views/userList";
import userForm from "./views/userForm";
import { Button, Icon } from "react-native-elements";
import { UsersProvider } from "./context/userContext";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="userList"
          screenOptions={screenOptions}
        >
          <Stack.Screen
            name="userList"
            component={userList}
            options={({ navigation }) => {
              return {
                title: "Lista de usuários",
                headerRight: () => (
                  <Button
                    type="clear"
                    onPress={() => navigation.navigate("userForm")}
                    icon={<Icon name="add" size={25} color="white" />}
                  />
                ),
              };
            }}
          />
          <Stack.Screen
            name="userForm"
            component={userForm}
            options={{
              title: "Formulário de usuários",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
};

const screenOptions = {
  headerStyle: {
    backgroundColor: "#f4511e",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

export default App;
