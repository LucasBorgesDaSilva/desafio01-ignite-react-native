
import Checkbox from "expo-checkbox";
import React from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles";


interface CardProps {
  isSelected: boolean;
  description: string;
  onChange: (value: boolean) => void;
  onDelete: () => void;
}

export const Card = ({isSelected, description, onChange, onDelete}: CardProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onDelete} disabled={false}>
        <Checkbox 
          disabled={false} 
          style={styles.checkbox} 
          color={isSelected ? '#5E60CE' : '#4EA8ED'} 
          value={isSelected} 
          onValueChange={onChange} 
        />
      </TouchableOpacity>
      <Text 
        style={[styles.description, 
          { 
            color: isSelected ? '#808080' : '#F2F2F2',
            textDecorationLine: isSelected ? "line-through" : "none",
          }
        ]}
      >
        {description}
      </Text>
      <TouchableOpacity onPress={onDelete}>
        <Image 
          source={require('../../../assets/trash.png')}
        />
      </TouchableOpacity>
    </View>
  )
}