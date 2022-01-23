import { createStackNavigator } from "@react-navigation/stack";
import React,{useState} from "react";
import { TouchableOpacity } from "react-native";
import CreateScreen from "../screens/CreateScreen";
import IndexScreen from "../screens/IndexScreen";
import ShowScreen from "../screens/ShowScreen";
import { Feather, EvilIcons } from "@expo/vector-icons";
import EditScreen from "../screens/EditScreen";


const StackNavigation = ({ navigation }) => {
  const Stack = createStackNavigator();
  const [id, setId] = useState('');
  return (
    <Stack.Navigator initialRouteName="IndexScreen">
      <Stack.Screen
        name="IndexScreen"
        component={IndexScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("EditScreen")}
            >
              <EvilIcons name="pencil" size={35} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="ShowScreen" component={ShowScreen }
       options={{
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate("CreateScreen",{id:id})}
          >
            <Feather name="plus" size={30} />
          </TouchableOpacity>
        ),
      }}
      />
      <Stack.Screen name="CreateScreen" component={CreateScreen} />
      <Stack.Screen name="EditScreen" component={EditScreen} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return <StackNavigation />;
};

export default Navigation;
