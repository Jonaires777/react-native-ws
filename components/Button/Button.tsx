import {  Pressable, View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { styles } from "./ButtonStyle";

type ButtonProps = {
  label: string;
  theme?: string;
  onPress?: () => Promise<void> | void
};

export default function Button({ label, theme, onPress }: ButtonProps) {
  if (theme === "primary") {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: '#fff' }]}
          onPress={onPress}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={[styles.label, { color: "#25292e" }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.button}
        onPress={() => alert("You pressed a button.")}
      >
        <Text style={styles.label}>{label}</Text>
      </Pressable>
    </View>
  );
}


