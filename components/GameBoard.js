import React, { useEffect, useState } from 'react'
import {View, StyleSheet,Text} from 'react-native'
import Square from './square'


const GameBoard = () =>{
    const [timeLeft, setTimeLeft] = useState(10)

    useEffect(()=>{
        if(!timeLeft) return
        const timerId = setInterval(() => {
            setTimeLeft(timeLeft - 1)
        }, 1000);
        return () => clearInterval(timerId)
        
    },[timeLeft])
    return(
    <View style={styles.container}>
      <Text>Game</Text>
      <Text>{timeLeft}</Text>
      <View style={styles.game}>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </View>      
    </View>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    game:{
      flexDirection:'row',
      flexWrap:'wrap'
    },
  });

export default GameBoard