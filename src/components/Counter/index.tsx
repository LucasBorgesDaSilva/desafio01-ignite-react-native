import { Text, View } from "react-native";
import { styles } from "./styles";

interface Props {
  title: string;
  color: string;
  counter: number;
}

export const Counter = ({title, color, counter}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, {color: color}]}>{title}</Text>
      <View style={styles.countContainer}>
        <Text style={styles.counter}>{counter}</Text>
      </View>
    </View>
  )
}