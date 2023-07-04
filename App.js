import { useState } from "react";
import { StyleSheet, Text, View, StatusBar, Pressable } from "react-native";

export default function App() {
  const [timePressed, setTimePressed] = useState(0);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setTimePressed((current) => current + 1);
        }}
        style={({ pressed }) => [
          { backgroundColor: pressed ? "#0facd4" : "transparent" },
          { padding: 5, paddingStart: 15, paddingEnd: 15, borderRadius: 5 },
        ]}
      >
        {({ pressed }) => <Text>{pressed ? "Saving..." : "Save"}</Text>}
      </Pressable>
      <Text>You have saved this {timePressed} times</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight,
  },
  save: {
    // backgroundColor: "#d40f75",
    color: "#d40f75",
    padding: 10,
    paddingStart: 15,
    paddingEnd: 15,
    borderRadius: 5,
  },
});
