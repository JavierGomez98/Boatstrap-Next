import FormSelect from '@components/FormSelect'
import type { NextPage } from 'next'
import { Form } from 'react-bootstrap'

const Home: NextPage = () => {
  return (
    <div className="home w-100 flex-center">
      <Form.Select aria-label="Default select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <FormSelect
        value="gola"
        options={['hola', 'como']}
      />
      <div>
        <h4>Don&apos;t forget that</h4>
        <h1 className="ml-3">there are a thousand ways to do it</h1>
      </div>

      <style jsx>{`
        .home {
          height: calc(100vh - 10rem);
        }
      `}</style>
    </div>
  )
}

export default Home
