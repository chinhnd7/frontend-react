import Layout from "@/components/Layout"
import { getRandomJoke } from "@/lib/joke"
import { Button, Card } from "react-bootstrap"

const Random = ({ joke }) => {
    return (
        <Layout>
            <Card className='my-3 shadow'>
                <Card.Body>
                    <Card.Title>Here's your random joke for today</Card.Title>
                    <Card.Text>{joke.value}</Card.Text>
                    <Card.Link href='/'>
                        <Button variant='dark'>Back</Button>
                    </Card.Link>
                </Card.Body>
            </Card>
        </Layout>
    )
}

export const getServerSideProps = async () => {
    const joke = await getRandomJoke()

    if (!joke)
        return {
            notFound: true // neu api joke sap thi chuyen den 404 page
        }

    // hoac ve lai /posts
    // return {
    //     redirect: {
    //         destination: '/post',
    //         permanent: false
    //     }
    // }

    return {
        props: {
            joke
        }
    }
}

export default Random