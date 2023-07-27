import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {styles} from './styles'

type Props = {
    title: string;
}

export const MyButton = ({title}:Props) => {
    return(
            
            <TouchableOpacity onPress={() => {}} style={styles.container} >
                <Text style={styles.text}>{title}</Text>
             </TouchableOpacity>
        
    )
}