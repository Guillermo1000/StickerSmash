import {Stack,Link} from "expo-router";
import {View,StyleSheet} from "react-native";

export default function NotFoundScreen(){
    return(
        <>
            <Stack.Screen options={{title: 'Error 404'}}/>
            <View style={styles.container}>
                <Link href="(tabs)/index)" style={styles.button}>
                    Go back to Home screen!
                </Link>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
});