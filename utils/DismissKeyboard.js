import React from 'react';
import {ScrollView , TouchableWithoutFeedback , Keyboard,KeyboardAvoidingView} from 'react-native';

const DismissKeyboard = ({ children }) => {

    return (
        

                <TouchableWithoutFeedback
                    onPress={Keyboard.dismiss}>
                        {children}
                </TouchableWithoutFeedback>
       
    );

};

export default DismissKeyboard;