import { Button,  Input, Grid, Message, Icon  } from 'semantic-ui-react'
import Feed from './Feed'
import NewPost from './NewPost'

export default function MainPage() {

  // 1. Should get the users to filter from https://dummyjson.com/posts
  // 2. Posts should be listed by the Feed component
 
  return (
    <>
     <p>No posts available</p>
     <NewPost></NewPost>
    </>
  )
}
