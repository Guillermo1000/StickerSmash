import {StyleSheet} from "react-native";
import {Image} from "expo-image";

type Props = {
    ruta: string
}

const ImageViewer = ({ruta}:Props)=> {
    return <Image source={ruta} style={styles.image}/>
}

export default ImageViewer;

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
})

