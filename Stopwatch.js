// import { SafeAreaProvider } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { View,Text, TouchableHighlight, TouchableOpacity, TextInput,FlatList } from "react-native";
import { globalStyles } from "./styles";
// import * as Font from 'expo-font';

// import Header from './header';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { FontAwesome } from '@expo/vector-icons';


function StopWtch () {

    const [play,setPlay] = useState(false)
    const [play1,setPlay1] = useState(false)

    var [stpMS1, setStpMS1] = useState(0)
    var [stpS1, setStpS1] = useState(0)
    var [stpM1, setStpM1] = useState(0)
    var [stpMS12, setStpMS12] = useState(0)
    var [stpS12, setStpS12] = useState(0)
    var [stpM12, setStpM12] = useState(0)
    const [allTV, setAllT] = useState([])
    const [stpt, setStpVt] = useState(false)
    const [ref,setrefStp] = useState(false)

    const [stpw, setStpw] = useState([]);
    const [flag,setFlag] = useState([]);
    // const [flagV,setflagV] = useEffect([])


    var stopw;
    
    // getStp;


// getStp;
    useEffect(()=> {
      // if(play && !play1){
        getStp()
      // }
    },[]);
    useEffect(()=> {
      getStplap()
    },[]);
useEffect(() => {

  strStplap(flag);

},[flag]);
    useEffect(() => {

        if(stpw.length != 0) {
            setStpM1(Number(stpw[0].min))
          setStpMS1( Number(stpw[0].mSec))

           setStpS1( Number(stpw[0].sec))
         
// console.log(stpw,1);
        }
    },[stpw]);

   
     useEffect(()=> {
      //  if(play && !play1)
      strStp(stpw)
    },[stpw]);

    // useEffect(()=> {
    //   setFlag(flag)
    // },[flag]);

var s1 =0; 
 useEffect(()=> {
    if (flag != null){
          setrefStp(true)
        }
 },[])

 
var s2= 0;
var s3= 0; 
    useEffect(() => {
       
      
          // console.log(stpw,stpw[0].sec,2)
     if(play1){
      
         stopw = setInterval(()=>{
        //  if(stpMS1<=59){
        
                setStpMS1(s1+stpMS1+1)
               
                // setStpS1(tmrS1+1);
            //  }


               if(stpMS1>=99 ){
                // if(tmrS1==60){
                    // setStpM1(tmrM1+1)
                    setStpS1(s2+stpS1+1)
                    setStpMS1(0)
                }
                if(stpS1>=60){
                    setStpM1(s3+stpM1+1)
                    setStpS1(0)
                    setStpMS1(0)
                //     setTmrH1(tmrH1-1)
                //     setTmrM1(59)
                //     setTmrS1(59)
                // }
            }
             setStpMS12(s1+stpMS12+1)
            if(stpMS12>=99 ){
                // if(tmrS1==60){
                    // setStpM1(tmrM1+1)
                    setStpS12(s2+stpS12+1)
                    setStpMS12(0)
                }
                if(stpS12>=60){
                    setStpM12(s3+stpM12+1)
                    setStpS12(0)
                    setStpMS12(0)
                //     setTmrH1(tmrH1-1)
                //     setTmrM1(59)
                //     setTmrS1(59)
                // }
            }
            const stpOb = {
              min:stpM1,
              sec:stpS1,
              mSec:stpMS1,
              plsyStp:play1,
              resettp:ref
            }
            
           const addflag = () =>{
              //  setAllT

                           
    }
           
        },1)
        return() => clearInterval(stopw);
    }

  var flagV1 = {
    
  }
    })


   const strStp = async lapV => {
     try {
            const  jsonVS = JSON.stringify(lapV);
            await AsyncStorage.setItem('StpStorage',jsonVS);
            // console.log(lapV)
            // console.log(jsonVS);

     }catch(e) {
       
     }
   }

        const getStp = async () => {
          try {
                const jsonF = await AsyncStorage.getItem('StpStorage');
                  if(jsonF !== null) {
                  //  strStp(JSON.parse(jsonF))
                  const j = JSON.parse(jsonF);
                   setStpw(JSON.parse(jsonF))
                 
                  //  setStpM1((j.min))
                  //  setStpMS1( (j.mSec))
                  //  setStpS1((j.sec))
                  //  console.log(stpw.mSec, " ",stpw);
                  }

          }catch(e) {

          }
        }

        const strStplap = async lapV1 => {
            try {
            const  jsonVL = JSON.stringify(lapV1);
            await AsyncStorage.setItem('StpStorageLap',jsonVL);

     }catch(e) {
       
     }
   }
   
          const getStplap = async () => {
          try {
                const jsonF = await AsyncStorage.getItem('StpStorageLap');
                setFlag(JSON.parse(jsonF))
                
          }catch(e) {

          }
        }



    const startfxn = () => {
        // setPlay(true)
        setPlay(true);
        setPlay1(true);
        //  setStpw([])
           
        // // else if(tmrM==null) {
        // //     setTmrM1(0)
        }

        const stopfxn = () => {
            // setPlay(true)
            setPlay(true);
            setPlay1(false);
            setStpw([])
             const stpObV = {
              min:stpM1,
              sec:stpS1,
              mSec:stpMS1,
              playStp:play1,
              resettp:ref
            }
            
            setStpw((stpOb1) => {
                   
                 return [...stpOb1,stpObV];
            })
          
  strStp(stpw)
            }
            const tmrDltFxn =() => {
                setStpMS1(0),
                setStpS1(0),
                setStpM1(0),
                setPlay(false),
                setPlay1(false),
                 setStpw([]),
                 setFlag([]),
                 setrefStp(false)
               
            }
           
      function LapSave() {
        var lF2 = flag.length ;
        // setrefStp(true)
        setStpM12(0),
        setStpS12(0)
        setStpMS12(0)
        if(lF2>0){

              const lapOb = {
                key:lF2+1,
                lMS:stpMS12,
                lS:stpS12,
                lM:stpM12,
                mlMs:stpMS1,
                mlS:stpS1,
                mlM:stpM1,
                ref:setrefStp(true),
                ref1:true
        }
         setFlag((saveLap) => {
          return [...saveLap, lapOb];

        })
        }
        else {
           const lapOb = {
                key:1,
                lMS:stpMS1,
                lS:stpS1,
                lM:stpM1,
                mlMs:stpMS1,
                mlS:stpS1,
                mlM:stpM1,
                ref:setrefStp(true),
                ref1:true
        }
 setFlag((saveLap) => {
          return [...saveLap, lapOb];

        })
        }
       

              
      }

   const Lapshow = () => {
    var lF = flag.length;


          return (
          lF != null ?
            
<View style ={globalStyles.settime2}> 

 <View style ={globalStyles.settime1}> 
 <Text  style={globalStyles.hrsInput4}> 
{lF+1}
</Text>
</View>


    <View style = {globalStyles.settime1}> 
    <Text style={globalStyles.hrsInput4}>{Math.abs(stpM12)>=10 ? Math.abs(stpM12) :"0"+ Number(Math.abs(stpM12))}</Text>
   <Entypo name="dots-two-vertical" size={20} color="black" /> 
    <Text style={globalStyles.hrsInput4} > {Math.abs(stpS12)>=10 ? Math.abs(stpS12):"0"+Number(Math.abs(stpS12))} </Text>
   <Entypo name="dots-two-vertical" size={20} color="black" /> 
    <Text style={globalStyles.hrsInput4} > {Math.abs(stpMS12)>=10 ? Math.abs(stpMS12):"0"+Number(Math.abs(stpMS12)
    )} </Text>

  </View>

<View style ={globalStyles.settime1}> 
    
    <Text style={globalStyles.hrsInput4}>{stpM1 >=10 ? stpM1 :"0"+ Number(stpM1)}</Text>
   <Entypo name="dots-two-vertical" size={20} color="black" /> 
    <Text style={globalStyles.hrsInput4} > {stpS1>=10 ? stpS1 :"0"+Number(stpS1)} </Text>
   <Entypo name="dots-two-vertical" size={20} color="black" /> 
    <Text style={globalStyles.hrsInput4} > {stpMS1>=10 ? stpMS1 :"0"+Number(stpMS1)} </Text>
  </View>
  </View>
  : null
            
          )


        }

        const SaveLapshow = ({flag1}) => {



    // var lF = flag.length;
    // console.log(flag1, "flag")

          return (

         flag1 != null ?

<View style ={globalStyles.settime2}> 



    <View style ={globalStyles.settime1}> 
    <Text style={globalStyles.hrsInput4}> 
{flag1.key}
</Text>
</View>
<View style ={globalStyles.settime1}> 
    <Text style={globalStyles.hrsInput4}>{flag1.lM>=10 ? flag1.lM :"0"+ Number(flag1.lM)}</Text>
   <Entypo name="dots-two-vertical" size={20} color="black" /> 
    <Text style={globalStyles.hrsInput4} > {flag1.lS>=10 ? flag1.lS:"0"+Number(flag1.lS)} </Text>
   <Entypo name="dots-two-vertical" size={20} color="black" /> 
    <Text style={globalStyles.hrsInput4} > {flag1.lMS>=10 ? flag1.lMS :"0"+Number(flag1.lMS)} </Text>
  </View>
            <View style ={globalStyles.settime1}> 
    
    <Text style={globalStyles.hrsInput4}>{flag1.mlM>=10 ? flag1.mlM :"0"+ Number(flag1.mlM)}</Text>
   <Entypo name="dots-two-vertical" size={20} color="black" /> 
    <Text style={globalStyles.hrsInput4} > {flag1.mlS>=10 ? flag1.mlS:"0"+Number(flag1.mlS)} </Text>
   <Entypo name="dots-two-vertical" size={20} color="black" /> 
    <Text style={globalStyles.hrsInput4} > {flag1.mlMs>=10 ?flag1.mlMs:"0"+Number(flag1.mlMs)} </Text>
  </View>
  </View>
  :null
          )
        }
    

       const StpTime = ({items}) =>  {
          return (
             items !== null ?
             
   
    <View  key={items.key} style ={globalStyles.settime1}> 
    
    <Text style={globalStyles.hrsInput3}>{items.min>=10 ? items.min :"0"+ Number(items.min)}</Text>
   <Entypo name="dots-two-vertical" size={40} color="black" /> 
    <Text style={globalStyles.hrsInput3} > {items.sec>=10 ? items.sec :"0"+Number(items.sec)} </Text>
   <Entypo name="dots-two-vertical" size={40} color="black" /> 
    <Text style={globalStyles.hrsInput3} > {items.mSec>=10 ? items.mSec :"0"+Number(items.mSec)} </Text>
  </View>
 
  :null
            
          )
        }
       

    return (
        <SafeAreaProvider style = {{flex:1}}>

<View style={globalStyles.modalContainer1}> 
        { play1==true && play==true ?
        // <View style={globalStyles.modalContainer1}>
    <View style ={globalStyles.settime1}> 
    
    <Text style={globalStyles.hrsInput3}>{stpM1 >=10 ? stpM1 :"0"+ Number(stpM1)}</Text>
   <Entypo name="dots-two-vertical" size={40} color="black" /> 
    <Text style={globalStyles.hrsInput3} > {stpS1 >=10 ? stpS1 :"0"+Number(stpS1)} </Text>
   <Entypo name="dots-two-vertical" size={40} color="black" /> 
    <Text style={globalStyles.hrsInput3} > {stpMS1 >=10 ? stpMS1 :"0"+Number(stpMS1)} </Text>
  </View>
  // </View>             
    : stpw.length != 0 ? 
     <View  style ={globalStyles.settime3}>
    <FlatList  showsVerticalScrollIndicator={false}
 data = {stpw} 
 renderItem = {({item}) => 

 <View>
 <StpTime items= {item} />
 </View>
 }
 

/> 
</View>

  :
  //  <View style={globalStyles.modalContainer1}>
    <View style ={globalStyles.settime1}> 
    
    <Text style={globalStyles.hrsInput3}>00</Text>
   <Entypo name="dots-two-vertical" size={40} color="black" /> 
    <Text style={globalStyles.hrsInput3} > 00 </Text>
   <Entypo name="dots-two-vertical" size={40} color="black" /> 
    <Text style={globalStyles.hrsInput3} > 00 </Text>
  </View>
  // </View>
        }

    
{
 
  ref && flag.length != 0  ?
 <Lapshow  />
: null
}


 </View>

<View style={ globalStyles.modalContainer12 } > 
  <FlatList inverted
data={flag} 
renderItem = {({item}) =>
<View>
 <SaveLapshow flag1 = {item}
 /> 

 </View>
 
  } />

        </View>
  <View style={globalStyles.plusBtn}>


           {/* <Modal visible = {modelV}> adjkfhajkdfaj a</Modal> */}
           { play ||  flag.length != 0 ?
<View style={globalStyles.tmrdlt1}>
               <Text onPress={tmrDltFxn}> 
               <FontAwesome  name="refresh" size={24} color="black" />
                   </Text>
                   </View>
               :null
       }
        <Text  style={globalStyles.plusBtn1}>
        {/* <AntDesign  name="pluscircle" size={40} color="blue"  /> */}
        { 
             play ?
             play1 ?
             <TouchableOpacity onPress={stopfxn}>
               <Feather  name="pause-circle" size={60} color="blue" />
               </TouchableOpacity>

               :<TouchableOpacity onPress={startfxn}>  
               <FontAwesome onPress={startfxn}  name="play-circle-o" size={60} color="blue" /> 
               </TouchableOpacity>
               : <TouchableOpacity onPress={startfxn}> 
               <FontAwesome   name="play-circle-o" size={60} color="blue" />
               </TouchableOpacity>
                
       } 
        </Text>
        {play ?


        
        <Text  style={globalStyles.tmrdlt2}>
        <TouchableOpacity onPress ={LapSave} >
         <Foundation name="flag" size={24} color="black" />
         </TouchableOpacity>
         </Text>
        
        : null
}
     
       </View>
        </SafeAreaProvider>
    )
}
export default StopWtch;