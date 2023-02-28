import React from 'react';
import { View, StyleSheet, FlatList} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Text } from '@rneui/themed';
import { setInputData } from '../redux/inputData/inputData';
import Contact from './Contact'

const ContactTab = () => {
    //sotre에 값 전달하는 dispatch 사용
    const dispatch = useDispatch();

    //state 호출하는 useSelector 사용
    const reduxState = useSelector((state)=>state);    

    const renderItem = ({item})=>{  
        if(reduxState.inputData.inputData===""){
            return (                        
                <Contact contact={item}/>                       
          );
        }
        else{            
            if(item?.givenName.toString().toLowerCase().includes(reduxState.inputData.inputData.toLowerCase()) || 
            item?.familyName.toString().toLowerCase().includes(reduxState.inputData.inputData.toLowerCase())){
                return (                        
                    <Contact contact={item}/>                           
              );
            }            
        }        
    };
    
    const keyExtractor = (item, idx) => {
        return item?.recordID?.toString() || idx.toString();
    };

    return (
            <View style={{ padding:5, height:'100%'}}>
                <Input
                    placeholder='이름 검색'        
                    onChangeText={(text) => dispatch(setInputData(text))}                                                
                />
                <FlatList
                    data={reduxState.myContacts.myContacts}
                    renderItem={renderItem}                             
                    keyExtractor={keyExtractor}                 
                    style={styles.list}
                />              
            </View>                  
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        margin: 5,
    },    
});

export default ContactTab;