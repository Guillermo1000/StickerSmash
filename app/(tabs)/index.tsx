import {View, StyleSheet } from 'react-native';
import ImageViewer from "@/components/ImageViewer";
import Btn from "@/components/Button";
import * as ImagePicker from 'expo-image-picker'
import {useState} from "react";

export default function Index() {

    const [SelectImage, setSelectImage] = useState<string | undefined>(undefined)
    const placeholderImage = require('@/assets/images/background-image.png')

    const pickImageAsync = async ()=>{

        let resultado = await ImagePicker.launchImageLibraryAsync(
            {
                mediaTypes: ['images'],
                allowsEditing: true,
                quality: 1
            }
        )

        if (!resultado.canceled) {
            setSelectImage(resultado.assets[0].uri)
        } else {
            alert('You did not select any image.');
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer imgSource={placeholderImage} selectedImage={SelectImage} />
            </View>

            <View style={styles.footerContainer}>
                <Btn onPress={pickImageAsync} theme='primary' label='Choose a photo' />
                <Btn label='Use this photo' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1,
        paddingTop: 28
    },

    footerContainer: {
        flex: 1 / 3,
        alignItems: 'center',
    },
});
