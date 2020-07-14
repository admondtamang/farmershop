import React, { useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";

const SignupScreen = () => {
  const buttonSheetRef = useRef();
  const fall = new Animated.Value(1);

  const renderContent = () => (
    <View>
      <Text>Hello</Text>
    </View>
  );
  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => buttonSheetRef.current.snapTo(1)}>
        <Text style={{ fontWeight: "bold", color: "#3465d9" }}>Sign Up</Text>
      </TouchableOpacity>

      <BottomSheet
        ref={buttonSheetRef}
        initialSnap={2}
        callbackNode={fall}
        enabledGestureInteraction={true}
        snapPoints={[450, 300, 0]}
        renderContent={renderContent}
        renderHeader={renderHeader}
      />
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHeader: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#000040",
    marginBottom: 10,
  },
});
