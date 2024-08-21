'use client'

import { useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import { collection, doc, getDoc, setDoc } from "firebase/firestore"
import { useRouter } from "next/navigation"
import { db } from "@/firebase/firebase"
import { Card, CardActionArea, CardContent, Container, Grid, Typography } from "@mui/material"

export default function Flashcards() {

    const {isLoaded, isSignedIn, user} = useUser()
    const [flashcards, setFlashcards] = useState([])

    const router = useRouter()

    useEffect(() => {

        async function getFlashcards() {

            if (!user)
            {
                return 
            }

            const docReference = doc(collection(db, 'users'), user.id)
            const docSnapshot = await getDoc(docReference)

            if (docSnapshot.exists())
    
            {
                const collections = docSnapshot.data().flashcards || []
                setFlashcards(collections)
            }
    
            else
    
            {
                await setDoc(docReference, {flashcards: []})
            }
        }

        getFlashcards()
    
    }, [user])

    if (!isLoaded || !isSignedIn)
    
    {
        return <></>
    }


    const handleCardClick = (id) => {

        router.push(`/flashcard?id=${id}`)
    }

    return (

        <Container maxWidth='100vw'>
            <Grid container spacing={3} sx={{mt:4}}>
                {flashcards.map((card, idx) => (
                    <Grid item xs={12} sm={6} md={4} key={idx}>
                        <Card>
                            <CardActionArea onClick={() => {handleCardClick(card.name)}}>
                                <CardContent>
                                    <Typography variant="h6">{card.name}</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))} 
            </Grid>
        </Container>
    )
}