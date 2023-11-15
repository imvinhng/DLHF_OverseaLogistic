import React, { useState } from 'react';
import { HeaderNBack } from '../../../components/Header';
import { Dimensions, FlatList, Image, PermissionsAndroid, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { black, darkgray, darkorange, lightgray, red, tan, white } from '../../../assets/styles/Colors';
import GlobalStyle from '../../../assets/styles/GlobalStyle';
import { Header3ButtonRadio, Header4ButtonRadio, LongButton, RoundButton, SquareButton } from '../../../components/CustomButton';
import { useRoute } from '@react-navigation/native';
import { Line, Triangle } from '../../../components/Line';
import { CONTAINER_PHOTO_TYPE, CONTAINER_REPORT } from '../../../database/ContainerReport';
import DashedLine from 'react-native-dashed-line';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import { useSelector } from 'react-redux';
import { USERS } from '../../../database/Credentials';

import CRGI from '../../../components/report/CRGI';
import Temperature from '../../../components/report/Temperature';
import ContainerTemperature from '../../../components/report/ContainerTemperature';
import Time from '../../../components/report/Time';
import Checklist from '../../../components/report/Checklist';
import Comments from '../../../components/report/Comments';

const findUserTypeByPhone = (phone) => {
    const database = USERS;
    for (let i = 0; i < USERS.length; i++) {
        if (database[i].phone_number == phone) {
            return database[i].type;
        }

    }
}


function ShipmentDetail(props) {
    const route = useRoute();
    const { Order } = route.params;
    const { phone_number } = useSelector(state => state.userReducer);
    const userType = findUserTypeByPhone(phone_number);

    const [openPhotoType, setOpenPhotoType] = useState(false);
    const [valuePhotoType, setValuePhotoType] = useState('');

    const [showStatus, setShowStatus] = useState(true);
    const [showPhotos, setShowPhotos] = useState(false);
    const [showReports, setShowReports] = useState(false);
    const [showPhotoTypeSelector, setShowPhotoTypeSelector] = useState(false);
    const [showViewMore, setShowViewMore] = useState(false);

    const [photoDB, setPhotoDB] = useState([]);
    const [nextID, setNextID] = useState(1);
    const FILE_NAME = `User-defined Image #${nextID}`;

    const ArrowDownIcon = () => {
        return (
            <RoundButton
                includeIcon
                iconType='FontAwesome5'
                iconName='chevron-down'
                iconSize={ICON_SIZE}
                iconColor={white}
                backgroundColor={darkgray}
                buttonStyle={styles.photo_type_down}
                onPress={() => setOpenPhotoType(!openPhotoType)}
            />
        )
    }
    const ArrowUpIcon = () => {
        return (
            <RoundButton
                includeIcon
                iconType='FontAwesome5'
                iconName='chevron-up'
                iconSize={ICON_SIZE}
                iconColor={white}
                backgroundColor={darkgray}
                buttonStyle={styles.photo_type_down}
                onPress={() => setOpenPhotoType(!openPhotoType)}
            />
        )
    }

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

                setPhotoDB(
                    [
                        ...photoDB,
                        { id: nextID, uri: response.assets[0].uri, alt: FILE_NAME }
                    ]
                )
                setNextID(nextID + 1);
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

            setPhotoDB(
                [
                    ...photoDB,
                    { id: nextID, uri: response.assets[0].uri, alt: FILE_NAME }
                ]
            )
            setNextID(nextID + 1);
        });
    };


    return (
        <View style={styles.home}>
            <HeaderNBack title={'Shipment Detail'} backgroundColor={tan} />
            <ScrollView style={styles.body}>

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

                {showViewMore &&
                    <View>
                        <CRGI audience={userType == 'receiver' ? 'receiver' : 'sender'} />
                        <Temperature audience={userType == 'receiver' ? 'receiver' : 'sender'} />
                        <ContainerTemperature audience={userType == 'receiver' ? 'receiver' : 'sender'} />
                        <Time audience={userType == 'receiver' ? 'receiver' : 'sender'} />
                        <Checklist audience={userType == 'receiver' ? 'receiver' : 'sender'} />
                        <Comments audience={userType == 'receiver' ? 'receiver' : 'sender'} />
                    </View>}

                <View style={styles.view_more}>
                    <Text style={styles.view_more_text}>{showViewMore ? 'View Less' : 'View More'}</Text>
                    <RoundButton
                        includeIcon
                        iconType='FontAwesome5'
                        iconName={showViewMore ? 'chevron-up' : 'chevron-down'}
                        iconSize={15}
                        iconColor={white}
                        buttonStyle={styles.view_more_down}
                        onPress={() => setShowViewMore(!showViewMore)}
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

                <View style={{ zIndex: 99 }}>
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
                        <View style={{ zIndex: 99, height: 'auto', minHeight: 200 }}>
                            <View style={styles.photo_header}>
                                <View>
                                    <DropDownPicker
                                        style={styles.photo_type_dropdown}
                                        textStyle={styles.photo_type_text}
                                        open={openPhotoType}
                                        value={valuePhotoType}
                                        items={CONTAINER_PHOTO_TYPE}
                                        // key={CUSTOMER_NAME.labels}
                                        setOpen={setOpenPhotoType}
                                        setValue={setValuePhotoType}
                                        placeholder={'Type of photo'}
                                        listMode='SCROLLVIEW'
                                        // containerProps={{ height: 20 }}
                                        ArrowDownIconComponent={ArrowDownIcon}
                                        ArrowUpIconComponent={ArrowUpIcon}
                                        selectedItemLabelStyle={{
                                            color: black
                                        }}
                                        dropDownContainerStyle={{ backgroundColor: 'darkgray' }}
                                    />
                                </View>


                                <SquareButton
                                    includeIcon
                                    iconName='plus'
                                    buttonStyle={styles.photo_plus}
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
                                        onPress={() => {
                                            chooseFile('photo')
                                            setShowPhotoTypeSelector(!showPhotoTypeSelector)
                                        }}
                                    />
                                    <LongButton
                                        includeText
                                        text='Take a photo'
                                        buttonStyle={styles.photoTypeSelectorItem}
                                        textStyle={styles.photoTypeSelectorText}
                                        onPress={() => {
                                            captureImage('photo')
                                            setShowPhotoTypeSelector(!showPhotoTypeSelector)
                                        }}
                                    />

                                </View>
                            }
                            <View style={styles.photo_container}>
                                {Order.photo.map((item, index) => {
                                    if (valuePhotoType == 'All' || valuePhotoType == '') {
                                        return (
                                            <View key={index} style={styles.photo_item}>
                                                <Image style={styles.photo} source={item.uri} />
                                                <Text style={styles.photo_alt}>{item.alt}</Text>
                                            </View>
                                        )
                                    } else if (item.type == valuePhotoType) {
                                        return (
                                            <View key={index} style={styles.photo_item}>
                                                <Image style={styles.photo} source={item.uri} />
                                                <Text style={styles.photo_alt}>{item.alt}</Text>
                                            </View>
                                        )
                                    }
                                })}

                                {/* TODO: Make this work */}
                                {photoDB.map((item, index) => {
                                    return (
                                        <View key={index} style={styles.photo_item}>
                                            <Image style={styles.photo} source={{ uri: item.uri }} />
                                            <Text style={styles.photo_alt}>{item.alt}</Text>
                                        </View>
                                    )
                                })}
                                {/* <Image source={{ uri: filePath }} width={100} height={100} /> */}
                            </View>

                        </View>
                    }

                    {showReports &&
                        <View />}

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
const PLUS_SIZE = ICON_SIZE + 4 * PHOTO_MARGIN;

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: white,
    },
    body: {
        // alignItems: 'center',
        // backgroundColor: 'red',
        // flex: 1,
    },
    description: {
        height: itemHeight,
        width: itemWidth,
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingVertical: itemPadding,
        ...GlobalStyle.row_wrapper,
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
        fontSize: itemFontSize,
        color: white,
        marginHorizontal: 5,
    },
    view_more_down: {
        height: 20,
        width: 25,
        marginLeft: 10,
    },
    status_container: {
        width: STATUS_CONTAINER_WIDTH,
        height: 'auto',
        margin: 10,
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
    photo_plus: {
        height: PLUS_SIZE,
        width: PLUS_SIZE,
    },
    photo_type_dropdown: {
        ...GlobalStyle.row_wrapper,
        alignItems: 'center',
        width: 160,
        minHeight: 25,
        backgroundColor: darkgray,
        borderRadius: 25,
    },
    photo_type_text: {
        fontWeight: '600',
        fontSize: itemFontSize,
        color: white,
        marginHorizontal: 5,
    },
    photo_type_down: {
        width: 20,
        height: 20,
    },
    photo_header: {
        ...GlobalStyle.row_wrapper,
        justifyContent: 'space-between',
        // height: 200,
        // backgroundColor: 'yellow',
        alignItems: 'center',
        margin: PHOTO_MARGIN,
        marginBottom: 0,
        zIndex: 99,
    },
    photoTypeSelector: {
        width: 'auto',
        position: 'absolute',
        right: PHOTO_MARGIN,
        top: PHOTO_MARGIN + PLUS_SIZE,
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