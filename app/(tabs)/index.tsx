import {View, StyleSheet, ImageSourcePropType} from 'react-native';
import ImageViewer from "@/components/ImageViewer";
import Btn from "@/components/Button";
import * as ImagePicker from 'expo-image-picker'
import {useState, useRef} from "react";
import IconButton from '@/components/IconButton';
import CircleButton from '@/components/CircleButton';
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';


export default function Index() {

    const imageRef = useRef<View>(null)
    const [SelectImage, setSelectImage] = useState<string | undefined>(undefined)
    const [ShowModal, setShowModal] = useState<boolean>(false)
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
    const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | undefined>(undefined)
    const placeholderImage = require('@/assets/images/background-image.png')

        const [status, requestPermission] = MediaLibrary.usePermissions();

        if (status === null) {
            requestPermission();
        }

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
            setShowModal(true)
        } else {
            alert('You did not select any image.');
        }
    }


    const onReset = () => {
        setShowModal(false);
    };

    const onAddSticker = () => {
        setIsModalVisible(true);
    };

    const onModalClose = ()=> {
        setIsModalVisible(false);
    }

    const onSaveImageAsync = async () => {
        try {
            const localUri = await captureRef(imageRef, {
                height: 440,
                quality: 1,
            });

            await MediaLibrary.saveToLibraryAsync(localUri);
            if (localUri) {
                alert('Saved!');
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <View ref={imageRef} collapsable={false}>
                    <ImageViewer imgSource={placeholderImage} selectedImage={SelectImage} />
                    {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
                </View>

            </View>

            {ShowModal ? (
                <View style={styles.optionsContainer}>
                    <View style={styles.optionsRow}>
                        <IconButton icon="refresh" label="Reset" onPress={onReset} />
                        <CircleButton onPress={onAddSticker} />
                        <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
                    </View>
                </View>
            ): (
                <View style={styles.footerContainer}>
                <Btn onPress={pickImageAsync} theme='primary' label='Choose a photo' />
                <Btn label='Use this photo' onPress={()=> setShowModal(true)} />
                </View>
            )}

            <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
                        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose}/>
            </EmojiPicker>
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
    optionsContainer: {
        position: 'absolute',
        bottom: 80,
    },
    optionsRow: {
        alignItems: 'center',
        flexDirection: 'row',
    },
});
