import React, {useEffect, useState} from 'react';
import { View, StyleSheet, StatusBar, Image, PermissionsAndroid } from 'react-native';
import Logo from '../../Image/logo.png';
import { Tab, TabView } from '@rneui/themed';
import Contacts from 'react-native-contacts';
import DialogTab from '../component/DialTab';
import ContactTab from '../component/ContactTab';
import { useDispatch, useSelector } from 'react-redux';
import { setMyContacts } from '../redux/myContants/myContacts';
import { setIndex } from '../redux/index/index';

const HomeScreen = () => {      
    //sotre에 값 전달하는 dispatch 사용
    const dispatch = useDispatch();

    //state 호출하는 useSelector 사용
    const reduxState = useSelector((state)=>state);    
    
    //대기화면에서 메인화면 전환 시 사용할 변수
    const [isReady, setIsReady] = useState(false);

    //초기화면에서 3초 대기 후 메인 화면으로 변경
    useEffect(()=>{
        setTimeout(()=>{
            setIsReady(true);
        },3000)
    });

    //로딩화면
    if(!isReady){      
        //전화번호부 가져오는 소스(초기 1회 허가요청 후 진행됨)
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
            title: 'Contacts',
            message: 'This app would like to view your contacts.',
            buttonPositive: 'Please accept bare mortal',
        })
        .then((res) => {
            console.log('Permission: ', res);
            Contacts.getAll()
                .then((contacts) => {
                    // work with contacts           
                    //setMyContacts(contacts);                    
                    dispatch(setMyContacts(contacts));
                })
                .catch((e) => {
                    console.log(e);
                });
        })
        .catch((error) => {
            console.error('Permission error: ', error);
        });  
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <View style={{alignItems: 'center'}}>
                    <Image
                        source={Logo}
                        style={styles.logo}
                        resizeMode="contain"
                    />                    
                </View>
            </View>
        )
    }

    //메인화면
    return (
        <>
            <Tab
                value={reduxState.index.index}
                onChange={(e)=>dispatch(setIndex(e))}
                indicatorStyle={{
                    backgroundColor: 'white',
                    height: 3,
                }}
                variant="primary"
            >
                <Tab.Item
                    title="Dial Pad"
                    titleStyle={{fontSize:12}}
                    icon={{name:'apps', type: 'ionicon', color: 'white'}}
                />            
                <Tab.Item
                    title="Phone Book"
                    titleStyle={{fontSize:12}}
                    icon={{name:'people-circle', type: 'ionicon', color: 'white'}}
                />                                   
            </Tab>
            <TabView value={reduxState.index.index} onChange={(e)=>dispatch(setIndex(e))} animationType="spring">
                <TabView.Item style={{width: '100%'}}>
                    <DialogTab />                   
                </TabView.Item>
                <TabView.Item style={{width: '100%'}}>    
                    <ContactTab />                                                                                                              
                </TabView.Item>
            </TabView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    logo: {
        width: '50%'
    },  
});

export default HomeScreen;