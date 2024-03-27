import { StyleSheet, Image, ImageSourcePropType } from "react-native";

type ImageProps = {
  placeholderImageSource: ImageSourcePropType;
  selectedImage?: string | null;
};

export default function ImageViewer({
  placeholderImageSource,
  selectedImage,
}: ImageProps) {
  const imageSource = selectedImage
    ? { uri: selectedImage.toString() } // Add parentheses to call the toString() function
    : placeholderImageSource;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
