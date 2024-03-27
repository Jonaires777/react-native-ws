import { Image, ImageSourcePropType } from "react-native";
import { styles } from "./ImageVieweStyle";

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
