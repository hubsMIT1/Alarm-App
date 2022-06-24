
import React, { useEffect, useState } from "react";
import { View,Text, TouchableHighlight, TouchableOpacity, TextInput } from "react-native";
import { globalStyles } from "./styles";
// import * as Font from 'expo-font';

// import Header from './header';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { Entypo } from '@expo/vector-icons';

import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
// import { FontAwesome } from '@expo/vector-icons';



function Clock () {

    const [play,setPlay] = useState(false)
    const [play1,setPlay1] = useState(false)

    const [stpMS1, setStpMS1] = useState(0)
    const [stpS1, setStpS1] = useState(0)
    const [stpM1, setStpM1] = useState(0)
    const [allTV, setAllT] = useState([])
    const [stpt, setStpVt] = useState(false)

    const [stpw, setStpw] = useState([]);
    const [flag,setFlag] = useState([]);

const [crntH,setH] = useState(new Date().getHours())
  const [crntM,setM] = useState(new Date().getMinutes())
  const [crntS,setS] = useState(new Date().getSeconds())

    var stopw;
    useEffect(() => {
        // console.log(tmrH1,tmrS1,tmrM1)
    //  if(play1){
        
         stopw = setInterval(()=>{

setH(new Date().getHours())
    setM(new Date().getMinutes())
    setS(new Date().getSeconds())
        //  if(stpMS1<=59){
            //     setStpMS1(stpMS1+1)
            //     // setStpS1(tmrS1+1);
            // //  }
            //    if(stpMS1==99 ){
            //     // if(tmrS1==60){
            //         // setStpM1(tmrM1+1)
            //         setStpS1(stpS1+1)
            //         setStpMS1(0)
            //     }
            //     if(stpS1==60){
            //         setStpM1(stpM1+1)
            //         setStpS1(0)
            //         setStpMS1(0)
                //     setTmrH1(tmrH1-1)
                //     setTmrM1(59)
                //     setTmrS1(59)
                // }
            // }
            
          
           
        },1000)
        return() => clearInterval(stopw);
    // }
    })




    // const addflag = () =>{

    // }

    // const startfxn = () => {
    //     // setPlay(true)
    //     setPlay(true);
    //     setPlay1(true);
           
    //     // // else if(tmrM==null) {
    //     // //     setTmrM1(0)
    //     }
    //     const stopfxn = () => {
    //         // setPlay(true)
    //         setPlay(true);
    //         setPlay1(false);
               
    //         // // else if(tmrM==null) {
    //         // //     setTmrM1(0)
    //         }

    //         const tmrDltFxn =() => {

    //             setStpMS1(0),
    //             setStpS1(0),
    //             setStpM1(0),
    //             // setAllT([]),
    //             setPlay(false),
    //             setPlay1(false)
    //             // setTmrH(),
    //             // setTmrM(),
    //             // setTmrS(),
    //             // setTmVt(false)
    //         }
           
    //     // 

    return (
        <SafeAreaProvider>
             
             <View style={globalStyles.modalContainer}>
    <View style ={globalStyles.settime1}> 
    
    <Text style={globalStyles.hrsInput3}>{crntH>=10 ? crntH :"0"+ Number(crntH)}</Text>
   <Entypo name="dots-two-vertical" size={40} color="black" /> 
    <Text style={globalStyles.hrsInput3} > {crntM>=10 ? crntM :"0"+Number(crntM)} </Text>
   <Entypo name="dots-two-vertical" size={40} color="black" /> 
    <Text style={globalStyles.hrsInput3} > {crntS>=10 ? crntS :"0"+Number(crntS)} </Text>
  </View>
  </View>


        </SafeAreaProvider>
    )
}
export default Clock;