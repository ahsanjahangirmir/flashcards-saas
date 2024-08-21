'use client'

import { SignUp } from '@clerk/clerk-react'
import {AppBar, Box, Button, Container, Link, Toolbar, Typography} from '@mui/material'

export default function SignUpPage() 
{
    return (
        
    <Container maxWidth='100vw'>

        <AppBar position='static' sx={{backgroundColor: '#3f51b5'}}>
            <Toolbar>
                <Typography variant='h6' sx={{flexGrow:1}}>FlashKards.AI</Typography>
                <Button color='inherit'>
                    <Link href='/sign-in' passHref> Login </Link>
                </Button>
                <Button color='inherit'>
                    <Link href='/sign-up' passHref> Sign Up  </Link>
                </Button>
            </Toolbar>
        </AppBar>

        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <Typography variant='h4'>Sign Up</Typography>
            <SignUp/>
        </Box>

    </Container> 
    
    ) 
    
}