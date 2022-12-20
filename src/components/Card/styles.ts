import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
    
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "center",
    
    height: 64, 

    paddingHorizontal: 12,

    backgroundColor: '#333333', 
    borderRadius: 8, 

    marginBottom: 8,
  },

  checkbox: {
    borderRadius: 999,
    backgroundColor: 'red'
  },

  description: {
    flex: 1,
    height: 40,
    
    marginHorizontal: 8,
    
    justifyContent: "center",
  },
})