
import {StyleSheet} from 'react-native';



export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:25,
    },
    midContainer:{
        color:'black',
        // backgroundColor:'black',

    },
    head: {
        // height:100,
        // paddingTop: 36,
// flexDirection:'row',
        justifyContent:"flex-end",
        backgroundColor:'black',
        borderBottomWidth:3,
        opacity:1,
    },
    name:{
        // color:'white',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20,
        paddingBottom:0,
        // fontSize:30,

        // textAlign:'center',
        // paddingLeft:20,
        // zIndex:1,
       
        // paddingTop:10,
        // alignContent:'center',
        // justifyContent:'center',
        // fontSize:30,
        // fontFamily:'',
    },
    headerName:{
            color:'white',
            top:-10,
            fontSize:30,

    },
    footer:{
        // flex:4,
        left:7,
        flexDirection:'row',
        justifyContent:'space-around'
        // color:'white',
    },
    footerText:{
        color:'white',
        left:-10,
        top:3,
        // cursor:'pointer',
        fontSize:13,

        // flex:1,
        // flexDirection:'column'

    },
    footerIcons:{
    //   flex:1
    // backgroundColor:'red',
    // left:-10,
    flexDirection:'column',
  

    // },
    // footerIcons &:hover:{

    },
    footerContainer:{
    padding:15,
    backgroundColor:'black',
    borderTopWidth:3,
    borderTopColor:'gray'

    },
    
    plusBtn1:{
        // height:40,
        // marginTop:2,
        // marginBottom:10,
        // paddingBottom:2,
        textAlign:'center',
        justifyContent:'center',
    },
    middContainer:{
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        color:'black',


    },
    midContainer:{
        top:30,
        margin:30,
        backgroundColor:'lightblue',
        color:'black'


    },
    midContainer1:{
       
        flex:1,
        // backgroundColor:'red',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        color:'black',


    },
    modalContainer:{
        flex:1,
        borderTopColor:'gray',
        borderTopWidth:2,
        justifyContent:'center',
        // alignContent:'center',
        alignItems:'center',
        color:'black',

    },
     modalContainer1:{
        flex:1,
        borderTopColor:'gray',
        // borderTopWidth:2,
        top:120,
        justifyContent:'center',
        
        alignItems:'center',
        color:'black',
    },
     modalContainer12:{
       
       flex:1,
      //  margin:50,
        height:2,
       marginBottom:400,
      
       borderTopColor:'gray',
        justifyContent:'center', 
        alignItems:'center',
        color:'black',
        // height:200,
        top: 130,
    },
     modalContainer2:{
        // flex:1,
        borderTopColor:'gray',
        // borderTopWidth:2,
        top:-300,  
        // position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        color:'black'
    },

    settime1:{
        flexDirection:'row',
        margin:20,
        marginBottom:0,
    },
     settime2:{
        flexDirection:'row',
        // margin:20,
        // marginBottom:0,
        // marginLeft:75
        
    },
     settime3:{
        flexDirection:'row',
        // margin:20,
        marginBottom:0,
        marginLeft:75
        
    },

    setAlarm1: {
      left:30
    },
    setAlarm2:{
        flexDirection:'row',
        

    },
    hrsInput:{
        color:'black',
        fontSize:30,
        fontWeight:'bold',
        width:40,
        height:50,
        borderBottomColor:'black',
        borderBottomWidth:2,
        
    },
    minInput:{
        color:'black',
        fontWeight:'bold',
        width:40,
        fontSize:30,
        height:50,
        borderBottomColor:'black',
        borderBottomWidth:2,
    },
    hrsInput1: {
        color:'black',
        fontWeight:'bold',
        width:40,
        fontSize:30,
        height:40,
        
        // position:'abslute',
        // borderBottomColor:'black',
        // borderBottomWidth:2,

    },
    hrsInput3: {
        color:'black',
        fontWeight:'bold',
        width:40,
        fontSize:28,
        // height:40,
        
        // position:'abslute',
        // borderBottomColor:'black',
        // borderBottomWidth:2,

    },

    midElement:{
        margin:10,
        fontSize:30,
        // flex:1,
        flexDirection:'row',
        // alignContent:'flex-end',
        justifyContent:"space-between",
    },
    timeValues:{
        flexDirection:'row',
        // fontSize:30,

    },
    plusBtn:{
            // flex:1,
            flexDirection:'row',
            justifyContent:'center',
            marginBottom:20
            // justifyContent:'space-around',
    },
    plusBtn2:{
           
            top:45,
            right:-270,
    },
    tmrdlt1: {
        top:15,
        left:-50,
    },
    tmrdlt2:{
      //  position:'absolute',
        // flex:1,
        top:15,
        right:-50,

    }
    
  });