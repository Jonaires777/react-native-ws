import { Pressable, View} from "react-native"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { styles } from "./CircleButtonStyle";

type CircleButtonProps = {
    onPress?: () => Promise<void> | void
}

export default function CircleButton({ onPress } : CircleButtonProps) {
    return(
        <View style={styles.circleButtonContainer}>
            <Pressable style={styles.circleButton} onPress={onPress}>
                <MaterialIcons name="add" size={38} color="#25292e" />
            </Pressable>
        </View>
    )
}

