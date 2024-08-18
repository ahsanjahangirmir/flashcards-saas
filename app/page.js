import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Box, Button, Container, Grid, Toolbar, Typography } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (

    <Container maxWidth='lg'>
      
      <Head>
        <title>Flashkards.AI</title>
        <meta name = "description" content = "Create Flashcards Using AI"/>
      </Head>

      <AppBar position="static">
        
        <Toolbar>
          
          <Typography variant='h6' gutterBottom>FlashKards.AI</Typography>

          <SignedOut>
            <Button color="inherit"> Log In </Button>
            <Button color="inherit"> Sign Up </Button>
          </SignedOut>

          <SignedIn>
            <UserButton/>
          </SignedIn> 
        
        </Toolbar>
      
      </AppBar>

      <Box sx={{textAlign:'center', my:4}}>
      
        <Typography variant="h2" gutterBottom>Welcome to FlashKards.AI</Typography>
        <Typography variant="h5">{'  '}We provide the easiest way to build flashcards from your text.</Typography>
        <Button variant="contained" color="primary" sx={{mt:2}}> Get Started </Button>

      </Box>

      <Box sx={{my:6}}>

        <Typography variant="h4" components="h2" gutterBottom> Features </Typography>

        <Grid container spacing={4}>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Easy Text Input</Typography>
            <Typography>
              {'  '}
              Simply input your text and let us handle the rest. Creating flashcards has never been easier. 
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Smart Flashcards</Typography>
            <Typography>
              {'  '}
              Description for this feature goes here.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Access Anywhere, Anytime.</Typography>
            <Typography>
              {'  '}
              Description for this feature goes here.
            </Typography>
          </Grid>

        </Grid>

      </Box>

      <Box sx={{my:6, textAlign:'center'}}>

        <Typography variant="h4" components="h2" gutterBottom> Pricing </Typography>

        <Grid container spacing={4}>

          <Grid item xs={12} md={6}>
            <Box sx={{p:'3', border:"1px solid", borderColor:'grey.300', borderRadius:'2'}}>
              <Typography variant="h5" gutterBottom>Basic</Typography>
              <Typography variant="h6" gutterBottom>$5/Month</Typography>
              <Typography>
                {'  '}
                Access to basic flashcard features and limited storage.
              </Typography>  
              <Button variant="contained" color="primary" sx={{mt:2}}>Choose Basic</Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{p:'3', border:"1px solid", borderColor:'grey.300', borderRadius:'2'}}>
              <Typography variant="h5" gutterBottom>Pro</Typography>
              <Typography variant="h6" gutterBottom>$10/Month</Typography>
              <Typography>
                {'  '}
                Access to pro flashcard features and priority support.
              </Typography>  
              <Button variant="contained" color="primary" sx={{mt:2}}>Choose Basic</Button>
            </Box>
          </Grid>

        </Grid>

      </Box>

    </Container>
    
  );
}
