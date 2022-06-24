import React, { useEffect, useState,useRef } from "react";
import { View,Text, TouchableHighlight, TouchableOpacity, TextInput } from "react-native";
import { globalStyles, styles } from "./styles";
// import * as Font from 'expo-font';

// import Header from './header';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { Entypo } from '@expo/vector-icons';

import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    // shouldSetBadge: false,
  }),
});

function Timer () {

            const [tmrH, setTmrH] = useState()
            const [tmrS,setTmrS] = useState()
            const [tmrM,setTmrM] = useState( )
            const [play,setPlay] = useState(false)
            const [play1,setPlay1] = useState(true)

            const [tmrH1, setTmrH1] = useState(0)
            const [tmrS1,setTmrS1] = useState(0)
            const [tmrM1,setTmrM1] = useState(0)
            const [allTV, setAllT] = useState([])
            const [tmVt, setTmVt] = useState(false)
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);


            // useEffect(() => {
            //     // retrieveData();
            //    setTmVt(true)
            
            //   },[tmrH>0,tmrS>0,tmrM>0]);

            useEffect(() => {
                // retrieveData();
                getTD()
              
              });
              
              
              useEffect(() => {
                setTData(allTV)
                // console.log(firstD.length)
              }, [allTV]);
              

            const startfxn = () => {
                setPlay(true);
                setPlay1(true);
                if(!tmrH){
                    setTmrH1(0)
                }else{
                  
                    setTmrH1(Number(tmrH))
                }
                if(!tmrS){
                    setTmrS1(0)
                   
                }else{
                  
                    setTmrS1(Number(tmrS))
                }
                // else if(tmrS==null) {
                //     setTmrS1(0)
                // }
                if(!tmrM){
                    setTmrM1(0)
                    
                }
                else{
                    setTmrM1(Number(tmrM))
                }
                if(tmrH1 || tmrM1 || tmrS1) {
                    const newTmr = {
                        svH: tmrH1,
                        sVM: tmrM1,
                        svS: tmrS1,
                        svP:play,
                        svP1:play1,
                        svTmTrue:tmVt,
                    }
                    setAllT(newTmr);
                    setTmrH1(allTV.svH)
                    setTmrM1(allTV.sVM)
                    setTmrS1(allTV.svS)
                    setPlay(allTV.svP)
                    setPlay1(allTV.svP1)
                    setTmVt(allTV.svTmTrue)
                }
            }
           

            const setTData = async setD => {
                try {
                   const jsonV = JSON.stringify(setD);
              
                   await AsyncStorageLib.setItem("storageV2",jsonV)
                  //  console.log(jsonV)
                } catch (e) {
                  
                }
              
                }
                const getTD = async () => {
                    try {
                           const jsonV1 = await AsyncStorageLib.getItem('storageV2');
                           if(jsonV1 != null) {
                  const jsv = JSON.parse(jsonV1)
                            // setFrnds()
                            setAllT(jsv);
                        //     setTmrH1(jsv.svH)
                        //    setTmrM1(jsv.sVM)
                        //     setTmrS1(jsv.svS)
                        //     setPlay(jsv.svP)
                        //     setPlay1(jsv.svP1)
                    setTmrH1(allTV.svH)
                    setTmrM1(allTV.sVM)
                    setTmrS1(allTV.svS)
                    setPlay(allTV.svP)
                    setPlay1(allTV.svP1)
                    setTmVt(allTV.svTmTrue)
                           
                            }
                    } catch (e) {
                      
                    }
                  }


                var timer;
                useEffect(() => {
                    // console.log(tmrH1,tmrS1,tmrM1)
                 if(play1){
                    
                     timer = setInterval(  async ()=>{
                        if(tmrS1>=1){
                            setTmrS1(tmrS1-1);
                        }
                         else if(tmrS1==0 ){
                            if(tmrM1>=1){
                                setTmrM1(tmrM1-1)
                                setTmrS1(59)
                            }
                            else if(tmrH1>=1){
                                setTmrH1(tmrH1-1)
                                setTmrM1(59)
                                setTmrS1(59)
                            }
                        }
                      if(tmrS1 == 1 && tmrM1== 0 && tmrH1 == 0){
                        await schedulePushNotification();
                        console.log (tmrS1)
                        tmrDltFxn();
                        clearInterval(timer);
                      }
                       
                    },1000)
                    return() => clearInterval(timer);
                }
                })
            // }
                
            // const startfxn = () => {
           
            // // else if(tmrM==null) {
            // //     setTmrM1(0)
            // // }
               

            // }
const stopFxn = () => {
    setPlay(false)
}

// const tmrDltFxn=() => {
//     setPlay(false);
//     setPlay1(false);
//     setTmrH()
//     setTmrM()
//     setTmrS()
// }

const tmrDltFxn =()=> {
        setAllT([]),
        setPlay(false),
        setPlay1(false),
        setTmrH(),
        setTmrM(),
        setTmrS(),
        setTmVt(false)
}


    return (
        <SafeAreaProvider>
          

            
 <View style={globalStyles.modalContainer}>
 {/* <View style={globalStyles.setAlarm}> */}
 {/* <Text onPress={() =>{ modalSetV(false),setHalrm("Alarm")} }> Type in time</Text> */}

{ play ? 
    <View style ={globalStyles.settime1}> 
    
      <Text style={globalStyles.hrsInput3}>{tmrH1>=10 ? tmrH1 :"0"+ Number(tmrH1)}</Text>
     <Entypo name="dots-two-vertical" size={40} color="black" /> 
      <Text style={globalStyles.hrsInput3} > {tmrM1>=10 ? tmrM1 :"0"+Number(tmrM1)} </Text>
     <Entypo name="dots-two-vertical" size={40} color="black" /> 
      <Text style={globalStyles.hrsInput3} > {tmrS1>=10 ? tmrS1 :"0"+Number(tmrS1)} </Text>
    </View>

 : <View style ={globalStyles.settime1}> 
      <TextInput
    //   onPress={()=>setTmrH("")}
             placeholder="00"
             keyboardType="numeric"
             numberOfLines={1}
             maxLength={2}
             style={globalStyles.hrsInput1}
             onChangeText={newTxt => setTmrH(newTxt)} 
             value={tmrH} 
        
         /> 
        <Entypo name="dots-two-vertical" size={40} color="black" /> 
       <TextInput 
    //    onPress={()=>setTmrM()}
             placeholder="00"
             keyboardType="number-pad"
             numberOfLines={1}
             maxLength={2}
              style={globalStyles.hrsInput1}
             // multiline = {true}
             onChangeText={newTxt => setTmrM(newTxt)} 
             value={tmrM} 
           

       
            
       /> 
      <Entypo name="dots-two-vertical" size={40} color="black" /> 
       <TextInput 
    //    onPress={()=>setTmrS()}
             placeholder="00"
             keyboardType="number-pad"
             numberOfLines={1}
             maxLength={2}
              style={globalStyles.hrsInput1}
              onChangeText={newTxt => setTmrS(newTxt)} 
             value={tmrS} 
             
       /> 

            </View>

}
          
            </View>

            <View style={globalStyles.plusBtn}>
           
            {/* <Modal visible = {modelV}> adjkfhajkdfaj a</Modal> */}
            { play ?
<View  style={globalStyles.tmrdlt1}>
                <Text onPress={tmrDltFxn}> 
                    <AntDesign  name="delete" size={24} color="black" /> 
                    </Text>
                    </View>
                :null
        }
         <Text  style={globalStyles.plusBtn1}>
         {/* <AntDesign  name="pluscircle" size={40} color="blue"  /> */}
         { tmrH || tmrM || tmrS ?

              play ?
              play1 ?
              <TouchableOpacity onPress={()=> setPlay1(false)}>
                <Feather  name="pause-circle" size={55} color="blue" />
                </TouchableOpacity>
                :<TouchableOpacity onPress={()=> setPlay1(true)} >
                <FontAwesome   name="play-circle-o" size={55} color="blue" />
                </TouchableOpacity>
                : <TouchableOpacity onPress={startfxn} >
                 <FontAwesome  name="play-circle-o" size={55} color="blue" />
                 </TouchableOpacity>
                
            : null
        } 
         </Text>
         {/* onPress={() => navigation.navigate("AlrmInput")}  */}
        </View>

        </SafeAreaProvider>

    )
}
async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Timer",
      body:  "Time's up !!",
      // // data: { data: 'goes here' },
      //   title: "Alarm",
      //   body: (aitem.hours<10 ? "0"+Number(aitem.hours):aitem.hours)  + ":" + (aitem.mints <10 ? "0"+Number(aitem.mints):aitem.mints),
    },
    trigger: { seconds: 2},
  });
}
async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      // alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    // alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [250, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

export default  Timer;
