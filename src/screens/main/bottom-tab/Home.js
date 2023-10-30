import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import GlobalStyle from '../../../assets/styles/GlobalStyle';
import { useRoute } from '@react-navigation/native';
import { HomeHeader } from '../../../components/Header';
import { tan } from '../../../assets/styles/Colors';

function Home(props) {
    const route = useRoute();

    const { loggedIn } = route.params;
    // console.log('loggedIn: ', loggedIn)


    return (
        <SafeAreaView style={styles.home}>
            {/* <Text style={GlobalStyle.screen_title}>Home</Text> */}
            <HomeHeader />
            {/* <FlatList
                data={DATA_SPECIAL_OFFER}
                numColumns={2}

                ListHeaderComponent={<HomeBody loggedIn={loggedIn} />}
                renderItem={({ item }) => {
                    return <Item
                        msg={item.msg}
                        image_uri={item.image_uri}
                        exp_date={item.exp_date}
                    />
                }
                }
                keyExtractor={item => item.id}
            /> */}
        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({
    home: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: tan,
        ...GlobalStyle.screen_title,
    }
})