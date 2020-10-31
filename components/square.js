import React, { useEffect, useState } from 'react'
import {View, StyleSheet,Text, TouchableOpacity} from 'react-native'
import { addScore } from '../redux'
import {connect} from 'react-redux'

const Square = (props) =>{
    const [moleActive, setMoleActive] = useState(false)
    const [isGameOver, setGameOver] = useState(false)    
    const randomTime = Math.random() * 20000
    let timerId = undefined;
    useEffect(()=>{
        timerId = setInterval(() => {
            setMoleActive(true)
            setTimeout(() => {
                setMoleActive(false)
            }, 800)
        }, randomTime);
        setTimeout(endgame, 10 * 1000)
    },[])
    return(
        <TouchableOpacity onPress={moleActive ? props.addScore : null}>
            <View style={moleActive ? styles.mole : styles.square}>
                {isGameOver && <Text>X</Text>}
            </View>
        </TouchableOpacity>
    )

    function endgame(){
        clearInterval(timerId)
        setGameOver(true)
    }
}



const styles = StyleSheet.create({
    square:{
        flex: 1,
        minWidth:80,
        minHeight:80,
        margin:10,
        backgroundColor:'red'
    },    
    mole:{
        flex: 1,
        minWidth:80,
        minHeight:80,
        margin:10,
        backgroundColor:'blue'
    }
})

const mapStateProps = state =>{
    return {
        score: state.score
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addScore: () => dispatch(addScore())
    }
}

export default connect(mapStateProps,mapDispatchToProps)(Square)