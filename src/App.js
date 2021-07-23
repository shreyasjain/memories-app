import {Container, AppBar, Typography, Grow, Grid} from "@material-ui/core"
import Posts from "./Posts/Posts"
import Form from "./Form/Forms"
import useStyles from "./styles"
import { useEffect, useState } from "react"
import {useDispatch} from "react-redux"
import {getPosts} from "./actions/posts"

function App() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [currentId,setCurrentId] = useState(null)

  useEffect(()=>{
    dispatch(getPosts())
  },[dispatch])

  return (
    <>
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
          <img className={classes.image} src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" height="60" alt="memories"/>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Form currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  );
}

export default App;
