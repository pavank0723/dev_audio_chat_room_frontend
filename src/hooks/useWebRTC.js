import { useCallback, useEffect, useRef, useState } from "react"
import { useStateWithCallback } from "./useStateWithCallback"


// const users = [
//     {
//         id: 1,
//         name: 'Pavan Y'
//     },
//     {
//         id: 2,
//         name: 'Praveen Y'
//     },
// ]

export const useWebRTC = (roomId, user) => {
    const [clients, setClients] = useStateWithCallback([])

    const audioElements = useRef({

    })

    const peerConnections = useRef({})

    const localMediaStream = useRef(null)

    // setClients((prev) => { }, (state) => {
    //     //after state update
    // })

    const addNewClients = useCallback((newClient, cb) => {
        const lookingFor = clients.find((client) =>client.id === newClient.id)
        if(lookingFor === undefined){
            setClients((existingClient) =>[...existingClient,newClient],cb)
        }
    },
        [clients, setClients]
    )

    // Capture Media
    useEffect(() => {
        const startCapture = async () => {
            localMediaStream.current = await navigator.mediaDevices.getUserMedia({
                audio: true
            })
        }
        startCapture().then(() => {
            addNewClients(user,() =>{
                const localElement = audioElements.current[user.id]
                if(localElement){
                    localElement.volume = 0     //Self voice is audible
                    localElement.srcObject = localMediaStream.current
                }

                //Other user media by using socket emit JOIN socket io

            })
        })
    }, [])
    
    const provideRef = (instance, userId) => {
        audioElements.current[userId] = instance
    }

    return { clients, provideRef }

}