import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setNumberData } from '../redux/numberData/numberData';
import DTMF from 'react-native-dtmf';
import { Icon } from '@rneui/themed';

const DialTab = () => {
    //sotre에 값 전달하는 dispatch 사용
    const dispatch = useDispatch();

    //state 호출하는 useSelector 사용
    const reduxState = useSelector((state)=>state);    

    //다이얼 숫자 클릭 시 입력하는 함수
    const addDial = (num) => {        
        //입력 시 정규식으로 하이픈 삽입
        let newStr = (reduxState.numberData.numberData.replace(/-/gi,'')+num).replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
        dispatch(setNumberData(newStr));
    };

    //삭제 함수
    const deleteDial = () => {
        //삭제 시 정규식으로 하이픈 삽입
        let newStr = reduxState.numberData.numberData.replace(/-/gi,'').slice(0, -1).replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
        dispatch(setNumberData(newStr));
    }

    const sleep = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );    
        
    const callDial = async (num) => {                
        switch(num) {
            case '0':
                await DTMF.playTone(DTMF.DTMF_0,300);
                break;           
            case '1':
                await DTMF.playTone(DTMF.DTMF_1,300);
                break;
            case '2':
                await DTMF.playTone(DTMF.DTMF_2,300);
                break;
            case '3':
                await DTMF.playTone(DTMF.DTMF_3,300);
                break;
            case '4':
                await DTMF.playTone(DTMF.DTMF_4,300);
                break;
            case '5':
                await DTMF.playTone(DTMF.DTMF_5,300);
                break;
            case '6':
                await DTMF.playTone(DTMF.DTMF_6,300);
                break;
            case '7':
                await DTMF.playTone(DTMF.DTMF_7,300);
                break;
            case '8':
                await DTMF.playTone(DTMF.DTMF_8,300);
                break;
            case '9':
                await DTMF.playTone(DTMF.DTMF_9,300);
                break;
            case '*':
                await DTMF.playTone(DTMF.DTMF_S/DTMF_STAR,300);
                break;
            case '#':
                await DTMF.playTone(DTMF.DTMF_P/DTMF_POUND,300);
                break;
            default:
                break;
        }                     
        await sleep(300);
        //await DTMF.stopTone();                
    }
 
    //다이얼 실행하는 함수
    const playDial = async () =>{        
        const arr = reduxState.numberData.numberData.replace(/-/gi,'').split("");

        for(const num of arr){
            await callDial(num); 
            await sleep(100);
        }
    }

    return (
            <View style={{alignItems: 'center'}}>    
                <Text style={styles.number}>{reduxState.numberData.numberData}</Text>         
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity 
                        onPress={()=>                                 
                            addDial('1')                             
                        }   
                        style={styles.roundButton}
                    >
                        <Text style={{fontSize: 30, textAlign: 'center', color: 'white'}}>1</Text>
                    </TouchableOpacity>    
                    <TouchableOpacity 
                        onPress={()=>                                 
                            addDial('2')                             
                        }   
                        style={styles.roundButton}
                    >
                        <Text style={{fontSize: 30, textAlign: 'center', color: 'white'}}>2</Text>
                    </TouchableOpacity>   
                    <TouchableOpacity 
                        onPress={()=>                                 
                            addDial('3')                             
                        }   
                        style={styles.roundButton}
                    >
                        <Text style={{fontSize: 30, textAlign: 'center', color: 'white'}}>3</Text>
                    </TouchableOpacity>                              
                </View>    
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity 
                        onPress={()=>                                 
                            addDial('4')                             
                        }   
                        style={styles.roundButton}
                    >
                        <Text style={{fontSize: 30, textAlign: 'center', color: 'white'}}>4</Text>
                    </TouchableOpacity>    
                    <TouchableOpacity 
                        onPress={()=>                                 
                            addDial('5')                             
                        }   
                        style={styles.roundButton}
                    >
                        <Text style={{fontSize: 30, textAlign: 'center', color: 'white'}}>5</Text>
                    </TouchableOpacity>   
                    <TouchableOpacity 
                        onPress={()=>                                 
                            addDial('6')                             
                        }   
                        style={styles.roundButton}
                    >
                        <Text style={{fontSize: 30, textAlign: 'center', color: 'white'}}>6</Text>
                    </TouchableOpacity>                              
                </View>    
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity 
                        onPress={()=>                                 
                            addDial('7')                             
                        }   
                        style={styles.roundButton}
                    >
                        <Text style={{fontSize: 30, textAlign: 'center', color: 'white'}}>7</Text>
                    </TouchableOpacity>    
                    <TouchableOpacity 
                        onPress={()=>                                 
                            addDial('8')                             
                        }   
                        style={styles.roundButton}
                    >
                        <Text style={{fontSize: 30, textAlign: 'center', color: 'white'}}>8</Text>
                    </TouchableOpacity>   
                    <TouchableOpacity 
                        onPress={()=>                                 
                            addDial('9')                             
                        }   
                        style={styles.roundButton}
                    >
                        <Text style={{fontSize: 30, textAlign: 'center', color: 'white'}}>9</Text>
                    </TouchableOpacity>                              
                </View>   
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity 
                        onPress={()=>                                 
                            deleteDial()                             
                        }
                        style={styles.roundButton}
                    >
                        <Icon name="backspace" color="white"/>
                    </TouchableOpacity>                               
                    <TouchableOpacity 
                        onPress={()=>                                 
                            addDial('0')                             
                        }   
                        style={styles.roundButton}
                    >
                        <Text style={{fontSize: 30, textAlign: 'center', color: 'white'}}>0</Text>
                    </TouchableOpacity>   
                    <TouchableOpacity 
                        onPress={()=>                                 
                                playDial()                             
                        }
                        style={styles.roundButton}
                    >
                        <Icon name="call" color="white" />
                    </TouchableOpacity>                                 
                </View>                                              
            </View>       
    );
}

const styles = StyleSheet.create({
    roundButton: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderRadius: 100,
        backgroundColor: 'rgb(87,174,198)',        
    },
    number: {
        fontSize: 40,
        margin: 50,
        color: 'rgb(160,160,160)',
    },   
});

export default DialTab;