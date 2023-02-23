import Layout from '@/components/Layout';
import Link from 'next/link';
import { Button } from 'react-bootstrap'

export default function Home() {
  return (
    <Layout>
      <div className='p-5 bg-secondary text-white'>
        <h1>My Next App</h1>
        <p>
          This is my Next.JS App
        </p>
        <p>
          <Link href='/posts'>
            <Button variant="primary">Posts</Button>
          </Link>
        </p>
      </div>
    </Layout>
  )
}
