import { ReactNode } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { styles } from "./EmojiPickerStyle";

type EmojiPickerProps = {
  isVisible: boolean;
  onClose: () => void;
  children?: ReactNode;
};

export default function EmojiPicker({
  isVisible,
  onClose,
  children,
}: EmojiPickerProps) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Choose a sticker</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}


