import React, { useContext } from "react";
import UsersContext from "../context/userContext";
import { SafeAreaView, FlatList, Alert } from "react-native";
import { Button, Icon } from "react-native-elements";
import { ListItem, Avatar } from "@rneui/themed";

const UserList = (props) => {
  const { state, dispatch } = useContext(UsersContext);

  const confirmUserDeletion = (user) => {
    Alert.alert("Excluir usuário", "Deseja excluir o usuário?", [
      {
        text: "Sim",
        onPress() {
          dispatch({
            type: "deleteUser",
            payload: user,
          });
        },
      },
      {
        text: "Não",
      },
    ]);
  };

  const getActions = (user) => {
    return (
      <>
        <Button
          onPress={() => props.navigation.navigate("userForm", user)}
          type="clear"
          icon={<Icon name="edit" size={25} color="orange" />}
        />
        <Button
          onPress={() => confirmUserDeletion(user)}
          type="clear"
          icon={<Icon name="delete" size={25} color="red" />}
        />
      </>
    );
  };

  const getUserItem = ({ item: user }) => {
    return (
      <ListItem
        key={user.id}
        topDivider
        onPress={() => props.navigation.navigate("userForm", user)}
      >
        <Avatar source={{ uri: user.avatarUrl }} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.ButtonGroup
          containerStyle={{
            borderColor: "transparent",
          }}
          buttons={[getActions(user)]}
        />
      </ListItem>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={(user) => user.id.toString()}
        data={state.users}
        renderItem={getUserItem}
      ></FlatList>
    </SafeAreaView>
  );
};

export default UserList;
