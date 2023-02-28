import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import { useDispatch } from 'react-redux';
import { setNumberData } from '../redux/numberData/numberData';
import { setIndex } from '../redux/index/index';

const Contact = ({contact}) => {
    //sotre에 값 전달하는 dispatch 사용
    const dispatch = useDispatch();

    //연락처에서 번호 선택 시 이동하는 함수
    const directDial = (num) => {
        let newStr = (num.replace(/-/gi,'')).replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);        
        dispatch(setNumberData(newStr));
        dispatch(setIndex(0));
    }

    return (                        
        <TouchableOpacity 
            onPress={()=>                                 
                directDial(contact?.phoneNumbers[0]?.number)                        
            }                       
        >
            <View style={styles.contactCon}>
                <View style={styles.imgCon}>
                    <View style={styles.placeholder}>
                    <Text style={styles.txt}>{contact?.givenName[0]}</Text>
                    </View>
                </View>
                <View style={styles.contactDat}>
                    <Text style={styles.name}>
                    {contact?.givenName} {contact?.middleName && contact.middleName + ' '}
                    {contact?.familyName}
                    </Text>
                    <Text style={styles.phoneNumber}>
                    {contact?.phoneNumbers[0]?.number}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>                           
  );
}

const styles = StyleSheet.create({
    contactCon: {
      flex: 1,
      flexDirection: 'row',
      padding: 5,
      borderBottomWidth: 0.5,
      borderBottomColor: '#d9d9d9',
    },
    imgCon: {},
    placeholder: {
      width: 55,
      height: 55,
      borderRadius: 30,
      overflow: 'hidden',
      backgroundColor: '#d9d9d9',
      alignItems: 'center',
      justifyContent: 'center',
    },
    contactDat: {
      flex: 1,
      justifyContent: 'center',
      paddingLeft: 5,
    },
    txt: {
      fontSize: 18,
    },
    name: {
      fontSize: 16,
    },
    phoneNumber: {
      color: '#888',
    },
  });

export default Contact;