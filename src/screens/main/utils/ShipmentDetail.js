import React, { useState } from 'react';
import { HeaderNBack } from '../../../components/Header';
import { Dimensions, FlatList, Image, PermissionsAndroid, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { darkgray, darkorange, red, tan, white } from '../../../assets/styles/Colors';
import GlobalStyle from '../../../assets/styles/GlobalStyle';
import { Header3ButtonRadio, Header4ButtonRadio, LongButton, RoundButton, SquareButton } from '../../../components/CustomButton';
import { useRoute } from '@react-navigation/native';
import { Line } from '../../../components/Line';
import { CONTAINER_REPORT } from '../../../database/ContainerReport';
import DashedLine from 'react-native-dashed-line';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

function ShipmentDetail(props) {
    const route = useRoute();
    const { Order } = route.params;

    const [openCRGI, setOpenCRGI] = useState(false);
    const [openTemperature, setOpenTemperature] = useState(false);
    const [openContainerTemperature, setOpenContainerTemperature] = useState(false);
    const [openTime, setOpenTime] = useState(false);
    const [openChecklist, setOpenChecklist] = useState(false);
    const [openComments, setOpenComments] = useState(false);

    const [showStatus, setShowStatus] = useState(true);
    const [showPhotos, setShowPhotos] = useState(false);
    const [showReports, setShowReports] = useState(false);
    const [showPhotoTypeSelector, setShowPhotoTypeSelector] = useState(false);

    const [imageCamera, setImageCamera] = useState(null);
    const [imageLibrary, setImageLibrary] = useState(null);
    const [filePath, setFilePath] = useState({});

    const requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: 'Camera Permission',
                        message: 'App needs camera permission',
                    },
                );
                // If CAMERA Permission is granted
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                return false;
            }
        } else return true;
    };

    const requestExternalWritePermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'External Storage Write Permission',
                        message: 'App needs write permission',
                    },
                );
                // If WRITE_EXTERNAL_STORAGE Permission is granted
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                alert('Write permission err', err);
            }
            return false;
        } else return true;
    };

    const captureImage = async (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
            videoQuality: 'low',
            durationLimit: 30, //Video max duration in seconds
            saveToPhotos: true,
        };
        let isCameraPermitted = await requestCameraPermission();
        // let isStoragePermitted = await requestExternalWritePermission();
        if (isCameraPermitted) {
            launchCamera(options, (response) => {
                console.log('Response = ', response);

                if (response.didCancel) {
                    alert('User cancelled camera picker');
                    return;
                } else if (response.errorCode == 'camera_unavailable') {
                    alert('Camera not available on device');
                    return;
                } else if (response.errorCode == 'permission') {
                    alert('Permission not satisfied');
                    return;
                } else if (response.errorCode == 'others') {
                    alert(response.errorMessage);
                    return;
                }
                console.log('base64 -> ', response.base64);
                console.log('uri -> ', response.uri);
                console.log('width -> ', response.width);
                console.log('height -> ', response.height);
                console.log('fileSize -> ', response.fileSize);
                console.log('type -> ', response.type);
                console.log('fileName -> ', response.fileName);
                setFilePath(response);
            });
        }
    };

    const chooseFile = (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
        };
        launchImageLibrary(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                alert('User cancelled camera picker');
                return;
            } else if (response.errorCode == 'camera_unavailable') {
                alert('Camera not available on device');
                return;
            } else if (response.errorCode == 'permission') {
                alert('Permission not satisfied');
                return;
            } else if (response.errorCode == 'others') {
                alert(response.errorMessage);
                return;
            }
            console.log('base64 -> ', response.base64);
            console.log('uri -> ', response.uri);
            console.log('width -> ', response.width);
            console.log('height -> ', response.height);
            console.log('fileSize -> ', response.fileSize);
            console.log('type -> ', response.type);
            console.log('fileName -> ', response.fileName);
            setFilePath(response);
        });
    };

    return (
        <View style={styles.home}>
            <HeaderNBack title={'Shipment Detail'} backgroundColor={tan} />
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.description}>
                        <View>
                            <Image
                                source={require('../../../assets/images/icons/american-flag.png')}
                                style={styles.order_r1}
                            />
                            <Text style={styles.text_bold}>Vessel No.:</Text>
                            <Text style={styles.text_bold}>B/L No.:</Text>
                            <Text style={styles.text_bold}>Container No.:</Text>
                            <Text style={styles.text_bold}>Container Type:</Text>
                        </View>
                        <View>
                            <Text style={styles.text_regular}>{Order.vessel_no}</Text>
                            <Text style={styles.text_regular}>{Order.bl_no}</Text>
                            <Text style={styles.text_regular}>{Order.container_no}</Text>
                            <Text style={styles.text_regular}>{Order.container_type}</Text>
                        </View>
                        <View>
                            <Text style={[styles.text_bold, styles.order_r1]}>Status:</Text>
                            <Text style={styles.text_bold}>ETD:</Text>
                            <Text style={styles.text_bold}>ETA:</Text>
                            <Text style={styles.text_bold}>CSC (Front):</Text>
                            <Text style={styles.text_bold}>CSC (Door):</Text>
                        </View>
                        <View>
                            <Text style={[styles.text_bgray, styles.order_r1]}>{Order.status_all[Order.status_all.length - 1].status}</Text>
                            <Text style={styles.text_regular}>{Order.etd}</Text>
                            <Text style={styles.text_regular}>{Order.eta}</Text>
                            <Text style={styles.text_regular}>{Order.csc_front}</Text>
                            <Text style={styles.text_regular}>{Order.csc_door}</Text>
                        </View>
                    </View>
                    <View style={styles.view_more}>
                        <Text style={styles.view_more_text}>View More</Text>
                        <RoundButton
                            includeIcon
                            iconType='FontAwesome5'
                            iconName='chevron-down'
                            iconSize={15}
                            iconColor={white}
                            buttonStyle={styles.view_more_down}
                        />
                    </View>

                    <Header3ButtonRadio
                        groupStyle={{ alignSelf: 'center' }}

                        option1Text='Status'
                        option2Text='Photos'
                        option3Text='Reports'

                        onPressOption1={() => {
                            setShowStatus(true)
                            setShowPhotos(false)
                            setShowReports(false)
                        }}
                        onPressOption2={() => {
                            setShowStatus(false)
                            setShowPhotos(true)
                            setShowReports(false)
                        }}
                        onPressOption3={() => {
                            setShowStatus(false)
                            setShowPhotos(false)
                            setShowReports(true)
                        }}
                    />

                    <View>
                        {showStatus &&
                            <View style={styles.status_container}>
                                {Order.status_all.slice(0).reverse().map((item, index) => (
                                    <View style={styles.status_item} key={index}>
                                        <RoundButton
                                            includeIcon
                                            iconType='FontAwesome'
                                            iconName={'dot-circle-o'}
                                            iconColor='green'
                                            iconSize={18}
                                        />
                                        {index != Order.status_all.length - 1
                                            && <DashedLine axis='vertical' dashColor='green' style={styles.status_dashed_line} />}

                                        <Text style={index == 0 && styles.text_bold}>{item.created_at}</Text>
                                        <Text style={[styles.status_c3, index == 0 && styles.text_bold]}>{item.status}</Text>
                                    </View>
                                ))}
                            </View>
                        }

                        {showPhotos &&
                            <View>
                                <View style={[GlobalStyle.row_wrapper, { justifyContent: 'space-between' }]}>
                                    <View style={styles.photo_type_container}>
                                        <Text style={styles.photo_type_text}>Type of photo</Text>
                                        <RoundButton
                                            includeIcon
                                            iconType='FontAwesome5'
                                            iconName='chevron-down'
                                            iconSize={ICON_SIZE}
                                            iconColor={white}
                                            buttonStyle={styles.photo_type_down}
                                        />
                                    </View>
                                    <SquareButton
                                        includeIcon
                                        iconName='plus'
                                        iconSize={ICON_SIZE}
                                        onPress={() => setShowPhotoTypeSelector(!showPhotoTypeSelector)}
                                    />
                                </View>
                                {showPhotoTypeSelector &&
                                    <View style={styles.photoTypeSelector}>
                                        <LongButton
                                            includeText
                                            text='Choose from library'
                                            buttonStyle={styles.photoTypeSelectorItem}
                                            textStyle={styles.photoTypeSelectorText}
                                            onPress={() => chooseFile('photo')}
                                        />
                                        <LongButton
                                            includeText
                                            text='Take a photo'
                                            buttonStyle={styles.photoTypeSelectorItem}
                                            textStyle={styles.photoTypeSelectorText}
                                            onPress={() => captureImage('photo')}
                                        />

                                    </View>
                                }
                                <View style={styles.photo_container}>

                                    <View style={styles.photo_item}>
                                        <Image style={styles.photo} source={require('../../../assets/images/container-report/TA1.png')} />
                                        <Text style={styles.photo_alt}>Damaged Front Wall TA1</Text>
                                    </View>
                                    <View style={styles.photo_item}>
                                        <Image style={styles.photo} source={require('../../../assets/images/container-report/TA2.png')} />
                                        <Text style={styles.photo_alt}>Damaged Front Wall TA2</Text>
                                    </View>
                                    <View style={styles.photo_item}>
                                        <Image style={styles.photo} source={require('../../../assets/images/container-report/TA3.png')} />
                                        <Text style={styles.photo_alt}>Damaged Front Wall TA3</Text>
                                    </View>
                                </View>

                            </View>
                        }

                        {showReports &&
                            <View />}

                    </View>
                </View>

            </ScrollView >
        </View >
    );
}

export default ShipmentDetail;

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('screen');
const itemWidth = ScreenWidth; const itemHeight = 130;
const itemFontSize = 13;
const itemPadding = 15;
const STATUS_CONTAINER_WIDTH = 200;
const PHOTO_MARGIN = 10;
const PHOTO_WIDTH = ScreenWidth / 2 - 2 * PHOTO_MARGIN;
const PHOTO_HEIGHT = PHOTO_WIDTH;
const ICON_SIZE = 15;

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: white,
    },
    body: {
        // alignItems: 'center',
        // backgroundColor: 'red',
    },
    description: {
        height: itemHeight,
        width: itemWidth,
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingVertical: itemPadding,
        ...GlobalStyle.row_wrapper,
        // backgroundColor: 'yellow',
    },
    text_regular: {
        fontSize: itemFontSize,
    },
    text_bold: {
        fontSize: itemFontSize,
        fontWeight: '600',
    },
    text_bgray: {
        fontSize: itemFontSize,
        fontWeight: '700',
        color: darkgray,
    },
    order_r1: {
        position: 'absolute',
        top: -(itemHeight / 2) + itemPadding * 2, // cause of padding
    },
    view_more: {
        ...GlobalStyle.row_wrapper,
        alignItems: 'center',
        alignSelf: 'center',
        width: 130,
        height: 25,
        justifyContent: 'space-between',
        backgroundColor: darkgray,
        paddingHorizontal: 5,
        marginBottom: 10,
        borderRadius: 25,
    },
    view_more_text: {
        fontWeight: '600',
        color: white,
        marginHorizontal: 5,
    },
    view_more_down: {
        padding: 5,
        marginLeft: 10,
    },
    status_container: {
        width: STATUS_CONTAINER_WIDTH,
        height: 'auto',
        margin: 10,
        // backgroundColor: 'yellow',
    },
    status_item: {
        ...GlobalStyle.row_wrapper,
        alignItems: 'center',
        padding: 10,
    },
    status_c3: {
        position: 'absolute',
        left: STATUS_CONTAINER_WIDTH - 50,
    },
    status_dashed_line: {
        // borderWidth: 10,
        borderRadius: 1,
        height: '120%',
        position: 'absolute',
        left: 29,
        top: 35,
    },
    photo_container: {
        ...GlobalStyle.row_wrapper,
        width: ScreenWidth,
        alignSelf: 'center',
        flexWrap: 'wrap',
    },
    photo: {
        width: ScreenWidth / 2 - 2 * PHOTO_MARGIN,
        height: ScreenWidth / 2 - 2 * PHOTO_MARGIN,
        margin: PHOTO_MARGIN,
    },
    photo_alt: {
        position: 'absolute',
        bottom: 1.5 * PHOTO_MARGIN,
        left: 1.5 * PHOTO_MARGIN,
        color: white,
        fontWeight: '600',
    },
    photo_type_container: {
        ...GlobalStyle.row_wrapper,
        alignItems: 'center',
        width: 160,
        height: 25,
        justifyContent: 'space-between',
        backgroundColor: darkgray,
        paddingHorizontal: 5,
        margin: PHOTO_MARGIN,
        borderRadius: 25,
    },
    photo_type_text: {
        fontWeight: '600',
        color: white,
        marginHorizontal: 5,
    },
    photo_type_down: {
        width: 20,
        height: 20,
        marginLeft: 10,
    },
    photoTypeSelector: {
        width: 'auto',
        position: 'absolute',
        right: PHOTO_MARGIN,
        top: 2 * PHOTO_MARGIN + ICON_SIZE,
        zIndex: 2,
        backgroundColor: white,
        borderWidth: 0.2,
        borderRadius: 5,
    },
    photoTypeSelectorItem: {
        padding: 10,
        paddingHorizontal: 20,
    },
    photoTypeSelectorText: {
        fontSize: 16,
    }
})