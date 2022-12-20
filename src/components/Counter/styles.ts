import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between",
  },

  title: {
    fontSize: 14,
    fontWeight: "700",
    marginRight: 8,
  },

  countContainer: {
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: '#333333',
    
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333333',
  },

  counter: {
    textAlign: "center",

    marginTop: -1,

    paddingVertical: 2,
    paddingHorizontal: 8,

    fontSize: 12,
    fontWeight: "700",
    color: '#D9D9D9',
  }
})