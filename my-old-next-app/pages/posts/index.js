import Layout from "@/components/Layout"
import { getPosts } from "@/lib/post"
import { Card } from "react-bootstrap"
import Link from "next/link"

const Posts = ({ posts }) => {

    return (
        <Layout>
            {posts.map(post => (
                <Card key={post.id} className='my-3 shadow'>
                    <Card.Body>
                        <Card.Title>{post.id} -- {post.title}</Card.Title>
                        <Card.Text>{post.body}</Card.Text>
                        <Card.Link href={`/posts/${post.id}`}>See more</Card.Link>
                    </Card.Body>
                </Card>
            ))}
        </Layout>)
}

// Get static data from backend /db /api

// Du lieu tinh, 
export const getStaticProps = async () => {
    const posts = await getPosts(10)
    return {
        props: {
            posts
        }
    }
}

export default Posts