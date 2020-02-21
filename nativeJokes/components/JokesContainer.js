import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { View } from 'react-native'


export function JokesContainer() {
    const [jokes, setJokes] = useState([])
    useEffect(() => {
        axios.get('https://icanhazdadjoke.com/search')
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log('hey', err)
            })
    }, [])

    return(
        <View>

        </View>
    )
}