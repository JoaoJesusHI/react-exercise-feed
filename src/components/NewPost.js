import { Form } from 'semantic-ui-react'

export default function NewPost() {

  return (
    <>
      <Form>
          <Form.Input fluid label='Title' placeholder='Title' />        
          <Form.TextArea label='Content' placeholder='Write post content...' />
          <Form.Button>Submit</Form.Button>
      </Form>
    </>
  )
}
