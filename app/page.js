import { Advice } from '@/components/Advice';
import { Attribution } from "@/components/Attribution";

export default async function Home() {

  return (
    <main className='bg-blue-900 flex flex-col items-center min-h-screen bg-dark-blue' >
      <div className='bg-dark-grayish-blue m-auto rounded-lg min-w-fit max-w-5xl mx-4 shadow-lg'>
      <Advice />
      </div>
      <Attribution />
    </main>
  )
}
