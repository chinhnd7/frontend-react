import Layout from "@/components/Layout"
import { getBooks } from "@/lib/book"
import { Button, Card } from "react-bootstrap"

const Books = ({ books }) => {
    return (
        <Layout>
            {books.map(book => (
                <Card className='my-3 shadow' key={book.bookName}>
                    <Card.Body>
                        <Card.Title>{book.bookName}</Card.Title>
                        <Card.Text>{book.bookContent}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
            <Card.Link href='/'>
                <Button variant='dark'>Back</Button>
            </Card.Link>
        </Layout>
    )
}

export const getStaticProps = async () => {
    const books = await getBooks()
    return {
        props: {
            books
        }
    }
}

export default Books