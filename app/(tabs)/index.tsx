import {View, StyleSheet } from 'react-native';
import ImageViewer from "@/components/ImageViewer";
import Btn from "@/components/Button";

export default function Index() {

    const placeholderImage = require('@/assets/images/background-image.png')

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer ruta={placeholderImage} />
            </View>

            <View style={styles.footerContainer}>
                <Btn theme='primary' label='Choose a photo' />
                <Btn label='Use this photo' />
            </View>
        </View>
    );
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
