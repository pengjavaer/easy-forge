import { NextPage } from 'next'
import { withAuth } from '@/components/auth/withAuth'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center">
          低代码平台
        </h1>
      </main>
    </div>
  )
}

export default withAuth(Home) 