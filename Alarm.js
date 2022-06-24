import React, { useEffect, useState , useRef} from 'react';
import {globalStyles} from './styles';
import { AntDesign } from '@expo/vector-icons';

import StatusBar  from 'expo-status-bar';

import { SafeAreaView, ScrollView, StyleSheet, Text, View , Touchable, TouchableOpacity, Modal, TextInput, Switch, FlatList,Platform, Alert, Button} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import {Toast} from 'react-native-simple-toast';

let k;

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    // shouldSetBadge: false,
  }),
});

export default function Alarm({clear}) {
  const [crntH,setH] = useState()
  const [crntM,setM] = useState()
  const [modalV,modalSetV] = useState(false);
  const [cancel1, cancelSet] = useState(false)
  const [bool1 , setBool] = useState(true);
  const [Halrm,setHalrm] = useState("Alarm");
  const [toggle,setToggle] = useState(false);


  const[alrmTimeValue,setAlarm] = useState([])
  const [alrP1,setAlrp] = useState()

  const [hrs,setHrs] = useState()
  const [mint, setMints] = useState()
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
      // console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);


var inc = 0;
 const incre = () => {
   inc += 10;
 }
  var timeV;
  useEffect(   ()=>{
   
  
  timeV = setInterval ( () => {
    setH(new Date().getHours())
    setM(new Date().getMinutes())
    
     alrmTimeValue.map( async (arltm) => {

      if(arltm.hours == crntH && (arltm.mints + inc ) == crntM){

        
          await schedulePushNotification(arltm);
          
// Toast.show(arltm.mints);


        Alert.alert('Confirm', 'Alarm at' + arltm.hours + ":" + arltm.mints ,[
          {
            text:"Delete",
            onPress : alrmDlt(arltm)
            
          },
          {
            text:"Set",
            onPress : incre
          }
        ])
        }
        // console.log(crntH,crntM,new Date().getSeconds())
       
      })


    //  })

  },1000)
  return()=> clearInterval(timeV)

  })

  const storeData  = async (alrmValue) => {
    try {
        const jsonV = JSON.stringify(val)
        await AsyncStorage.setItem('storageData',jsonV)
     
    } catch (e) {
      console.log(e)
    }
  }

  React.useEffect(() =>{
   
    getD();
    
  
  },[])
 
React.useEffect(() => {
  setData(alrmTimeValue);
  // getD();
},[alrmTimeValue]);

useEffect(()=>{

})

// console.log(alrmTimeValue)
  const addAlarms = () => {
    k= alrmTimeValue.length + 1;
    if((hrs + mint > 0 || hrs >0) &&  (/^\d+$/.test(hrs)) &&  (/^\d+$/.test(mint)) ){
     
    
   
    const alrmtm = {
      hours:hrs,
      mints:mint,
      key:k,
      toggleV:toggle
    }

  
    setAlarm((settedAlarm)=> {

    return [...settedAlarm,alrmtm];
      
    
    })
  
    setBool(true)
    setHalrm("Alarm")
    modalSetV(false)
    setHrs('')
    setMints('')

  }else{
      Toast.show("Enter a Valid Time")
  }
}
const setData = async (setD) => {
  try {
    const jsonV = JSON.stringify(setD);

    await AsyncStorage.setItem('storageV',jsonV);
  } catch (e) {
    
  }
}

const getD = async () => {
  try {
         const jsonV1 = await AsyncStorage.getItem('storageV');
         if(jsonV1 !== null) {
          setAlarm(JSON.parse(jsonV1))
         }
  } catch (e) {
    
  }
}

const alrmDlt = (alrmKey) => {

        const newAlrm = alrmTimeValue.filter((heyRam) => heyRam.key !== alrmKey )
        setAlarm(newAlrm);
         
}


const ClearA = ()  => {
  Alert.alert('Confirm', 'Clear Alarms',[
    {
      text:'Yes',
      onPress : () => setAlarm([])
    },
    {
      text:'No',
    }
  ])
}
if(clear) {
  Alert.alert('Confirm', 'Clear Alarms',[
    {
      text:'Yes',
      onPress : () => setAlarm([])
    },
    {
      text:'No',
    }
  ])
}



 
  
const ShowAlrm = ({items}) => {
  return (
    <View> 

    { items !== null ?
        
<View key = {items.key} style = {globalStyles.midContainer}> 
<TouchableOpacity  
onPress={async () => {
          await schedulePushNotification(items);
        }} 
>
   <View style={globalStyles.midElement}>
   <View style={globalStyles.timeValues}>
  <Text> {items.hours<10 ?  "0"+Number(items.hours):items.hours}</Text>
  <Text> : {items.mints==null ?
  items.mints = 0
  :null}</Text>
  
  <Text>{items.mints<10 || items.mints==null ? "0"+Number(items.mints) : items.mints}</Text>
  </View>
  <View>
    <Text>day</Text>
  </View>
  <View>
    <TouchableOpacity onPress={()=> alrmDlt(items.key)}> 
  <MaterialIcons name="delete" size={24} color="black" />
    </TouchableOpacity>

    
  </View>

  </View>
  </TouchableOpacity>
    </View>

: <View  style = {globalStyles.midContainer1}>
 <Text> No Alarms </Text></View>
}

</View>
  )
        
}


  return (
    <View style={{ flex: 1 }}>
     

 <SafeAreaView style = {globalStyles.container}>

       

      
      <Modal  visible={modalV}> 
 
    
 <View style={globalStyles.modalContainer}>
 <View style={globalStyles.setAlarm}>

 <Text tyle={globalStyles.setAlarm1} > Type in time </Text>
 </View>
<View style ={globalStyles.settime1}>
      <TextInput
      placeholder="00"
             keyboardType="numeric"
             numberOfLines={1}
             maxLength={2}
             style={globalStyles.hrsInput}
             onChangeText={newTxt1 => setHrs(newTxt1)} 
             value={hrs} 
        
         /> 
        <Text ><Entypo name="dots-two-vertical" size={54} color="black" /> </Text>
       <TextInput 
         placeholder="00"
             keyboardType="number-pad"
             numberOfLines={1}
             maxLength={2}
              style={globalStyles.minInput}
             
             onChangeText={newTxt => setMints(newTxt)} 
             value={mint} 

       
       /> 



</View>
<View tyle={globalStyles.setAlarm2}  >
      {(hrs<=24 && mint<=60 && hrs>=0 && mint>=0 || (hrs == null || mint == null)) ?
   <TouchableOpacity  > 
    <Button title="Add" onPress= {addAlarms} tyle={globalStyles.setAlarm} />
  </TouchableOpacity> 
   :<Text style={{color:"red"}}> Enter a valid time </Text> 
      }

      <Text> </Text>
 
      
   <TouchableOpacity  > 
    <Button  color='red' title="Cancel"onPress={() =>{ modalSetV(false),setHalrm("Alarm")} } />
  </TouchableOpacity>  
      
  </View>
    </View>



 </Modal>

 
 
 <FlatList showsVerticalScrollIndicator={false}
 data = {alrmTimeValue} 
 renderItem={({item}) => 

 <View>
 <ShowAlrm items= {item} />
 
 </View>
}
 
 

 />
 <View style={globalStyles.plusBtn2}> 
   <Text> 
     <Button color='red'
 title='Clear'
 onPress={ClearA}
 
 
 />
 </Text>
 </View>
 
 </SafeAreaView>



       <View style={globalStyles.plusBtn}>
         
         <Text  style={globalStyles.plusBtn1}>
         <TouchableOpacity   onPress={() => {  modalSetV(true), setHalrm("Set an alarm"), cancelSet(true)}}  >

         <AntDesign  name="pluscircle" size={55} color="blue"  />
         </TouchableOpacity>
         </Text>
          
        </View>

    </View>
  );
}
async function schedulePushNotification(aitem) {
  await Notifications.scheduleNotificationAsync({
    content: {
      // title: "You've got mail! 📬",
      // body: 'Here is the notification body',
      // data: { data: 'goes here' },
        title: "Alarm",
        body: (aitem.hours<10 ? "0"+Number(aitem.hours):aitem.hours)  + ":" + (aitem.mints <10 ? "0"+Number(aitem.mints):aitem.mints),
    },
    trigger: { seconds: 1},
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
    // console.log(token);
  } else {
    // alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}
 
