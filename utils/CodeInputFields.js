import { StyleSheet, Text, View } from 'react-native'
import React,{useState ,useRef, useEffect} from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';


const CodeInputFields = ({ setPinReady, code , setCode , maxLength}) => {
  const codeDigitsArray = new Array(maxLength).fill(0);
    const textInputRef = useRef(null);

   const [
       inputContainerIsFocused,
       setInputContainerIsFocused
   ] = useState(false);

   const handleOnPress = () => {
    setInputContainerIsFocused(true);
    textInputRef?.current?.focus();
}

    const handleOnBlur = () => {
        setInputContainerIsFocused(false);
    } 

    useEffect(() => {
   
        setPinReady(code.length === maxLength);
        return () => setPinReady(false);
    },[code]);

    const toCodeDigitInput = ( _value , index) =>{
      const emptyInputChar = '';
      const digit = code[index] || emptyInputChar;
    

      const isCurrentDigit = index === code.length;
      const isLastDigit = index === maxLength - 1;
      const isCodeFull = code.length === maxLength;

      const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeFull);
      const StyledCodeInput = inputContainerIsFocused && isCurrentDigit ? CodeInputFocused : CodeInput;

       return (
   <View style={styles.StyledCodeInput} key={index} >
       <Text style={styles.codeInputText}>{digit}</Text>
   </View>
       );



    };
  return (
    <View style={styles.codeInputSection}>
        <Pressable style={styles.CodeInputsContainer} onPress={handleOnPress}>
            {codeDigitsArray.map(toCodeDigitInput)}
        </Pressable>
      <Text
      style={styles.HiddenTextInput}
      ref={textInputRef}
      value={code}
      onChangeText={setCode}
      onSubmitEditing={handleOnBlur}
      keyboardType="number-pad"
      returnKeyType="done"
      textContentType="oneTimeCode"
      maxLength={maxLength}
 />
    </View>
  )
}

export default CodeInputFields

const styles = StyleSheet.create({

    codeInputSection:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:30
        },
        HiddenTextInput:{
            position:'absolute',
            width:1,
            height:1,
            opacity:0
          
        },
       
        ButtonText:{
           color:'#ffffff',
           fontSize:16
        },
        CodeInputsContainer:{
            width:70,
            flexDirection:'row',
            justifyContent:'space-between'
        },
        codeInput:{
            borderColor:'rgba(16, 185, 129, 0.1)',
            minWidth:'15%',
            borderWidth:2,
            borderRadius:5,
            padding:12
        },
        codeInputText :{
            fontSize:22,
            fontWeight:'bold',
            textAlign:'center',
            color:'#6D28D9',
        },
        codeInputFocused:{
  borderColor:'#10B981'
        }

})     