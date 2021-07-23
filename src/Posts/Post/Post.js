import React from 'react'
import useStyles from "./styles"
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core"
import moment from "moment"
import {ThumbUpAlt, Delete, MoreHoriz} from "@material-ui/icons"

const Post = ({post, setCurrentId}) => {
    const classes = useStyles()

    const handleUpdate = (e)=>{
        e.preventDefault()
        setCurrentId(post._id)
    }

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6" >{post.title}</Typography>
                <Typography variant="body2" >{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color:"white"}} size="small" onClick={(e)=>handleUpdate(e)}></Button>
                <MoreHoriz fontSize="default" />
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags}</Typography>
            </div>
            <CardContent>
            <Typography className={classes.title } variant="h5" gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={()=>{}} >
                    <ThumbUpAlt fontSize="small"/>
                    Like
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={()=>{}} >
                    <Delete fontSize="small"/>
                    Delete
                    {post.deleteCount}
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post
