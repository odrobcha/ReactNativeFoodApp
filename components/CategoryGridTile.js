import {View, Pressable, Text, StyleSheet, Platform} from 'react-native'
function CategoryGridTitle ({title, color, onPress}) {
    //to add style conditioally style is function
    return(
      <View style={styles.gridItem}>
          <Pressable
            onPress={onPress}
            android_ripple={{color: "#ccc"}}
            style={({pressed})=>[styles.button, pressed ? styles.buttonPressed : null]}>
              <View style={[styles.innerContainer,  {backgroundColor: color}]}>
                  <Text style={styles.title}>{title}</Text>
              </View>

          </Pressable>
      </View>
    )
}

export default CategoryGridTitle;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation  : 4,  //to add shadow only for Android
        //to add shadow  for iOS start
        backgroundColor: "white",
        shadowColor: "black", //O
        shadowOpacity : 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius:8,
        overflow: Platform.OS === 'android' ? 'hidden' : "visible"

        //to add shadow for iOS end
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer:{
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    title: {
        fontWeight: "bold",
        fontSize: 12
    }
});
