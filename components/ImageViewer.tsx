import {StyleSheet, ImageSourcePropType} from "react-native";
import {Image} from "expo-image";

type Props = {
    imgSource: ImageSourcePropType;
    selectedImage?: string;
}

const ImageViewer = ({imgSource,selectedImage}:Props)=> {
    const imageSource = selectedImage ? { uri: selectedImage } : imgSource;
    return <Image source={imageSource} style={styles.image}/>
}

export default ImageViewer;

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
})

