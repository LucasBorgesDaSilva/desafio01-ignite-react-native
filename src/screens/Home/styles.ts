import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    width: '100%', 
    height: 173 ,
    alignItems: "center", 
    justifyContent: "center", 
    backgroundColor: '#0D0D0D',
  },

  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    padding: 24
  },

  containerWrapper: {
    marginTop: -50,
    flexDirection: "row",
  },

  inputText: {
    width: 290,
    height: 54,
    padding: 16,
    marginRight: 4,
    
    color: '#FFFFFF',
    backgroundColor: '#262626',
    borderColor: '#0D0D0D',
    borderRadius: 6
  },

  button: {
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonBorderText: {
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: '#1E6F9F',
    
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFFFFF',

    width: 20,
  },

  buttonText: {
    marginTop: -2,
    marginBottom: -1,
    paddingHorizontal: 3,

    fontSize: 16,
    fontWeight: "bold",
    color: '#FFFFFF',
  },

  
  counterContainer: {
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between", 
    marginTop: 32,
  },
  
  divider: {
    borderBottomColor: '#969696b3',
    borderBottomWidth: 1,
    width: '100%',
    marginTop: 15,
    marginBottom: 15,
  }, 

  emptyListContainer: {
    alignItems: "center", 
    justifyContent: "center", 
    marginTop: 48, 
  },

  listEmptyText: {
    color: '#808080',
    fontSize: 14,
    textAlign: 'center',
  },

  listEmptyBoldText: {
    fontWeight: "700"
  },
})