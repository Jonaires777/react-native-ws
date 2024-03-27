import { useState } from "react";
import { FlatList, Platform, Pressable, Image, StyleSheet } from "react-native";

type EmojiListProps = {
  onSelect: (item: any) => void;
  onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: EmojiListProps) {
  const [emoji] = useState([
    require("../assets/favicon.png"),
    require("../assets/icon.png"),
    require("../assets/icon.png"),
    require("../assets/icon.png"),
    require("../assets/icon.png"),
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS == "web"}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ index, item }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
        >
          <Image source={item} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});