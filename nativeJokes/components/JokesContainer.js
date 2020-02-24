import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { View } from 'react-native'


export function JokesContainer() {
    const [jokes, setJokes] = useState([])
    useEffect( () => {
        const fetchData = async () => {
            const result = await fetch('localhost:5000/api/users')
            console.log(result)
        }

        // fetch('localhost:5000/api/users')
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data)
        // })
        // .catch(err => console.log(err))
       fetchData()
    }, [])

   

    return(
        <View>

        </View>
    )
}