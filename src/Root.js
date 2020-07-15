import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./routes/AuthStack";
import Loading from "./components/Loading";
// import Lottie from "lottie-react-native";
import StackNavigator from "./routes/StackNavigator";
const Root = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setIsLoading(!isLoading);
    // setUser({});
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? (
        <Loading style={{ flex: 1, justifyContent: "center" }} />
      ) : // <Lottie
      //   source={require("../assets/loading.json")}
      //   height
      //   width
      //   autoPlay
      //   loop
      // />
      user ? (
        <StackNavigator />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};
export default Root;
