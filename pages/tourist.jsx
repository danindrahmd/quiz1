import Head from 'next/head'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'

export default function Home() {
  const [profileText, setProfileText] = useState('');

  const handleProfileTextChange = (event) => {
    setProfileText(event.target.value);
  }

  return (
    <div>
      <Head>
        <title>Ahmad Danindra</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className='bg-black h-screen'>
          <nav className='p-10'>
            <h1 className="text-center my-20 text-3xl hover:scale-150 transition text-white font-bold font-mono">Tourist</h1>
            <div className="my-2 flex gap-10 items-center justify-center">
                <div className='text-right font-mono text-xl w-96 text-white overflow-clip'>
                    <h1>Bekasi Stadium, located in Bekasi, Indonesia, is a multi-purpose stadium primarily used for football matches. It has a capacity of 30,000 spectators and is home to several teams, including Persija Jakarta and Persikabo 1973. The stadium features a modern pitch, floodlights, and a giant electronic scoreboard.</h1>
                </div>
                <Image
                className='rounded-xl'
                src='/stadion.jpg'
                alt=''
                width={463.2}
                height={529.9}
                />
            </div>
            <div className=''>
                <h1 className='mt-52 hover:text-xl text-white'>
                    <Link href="/"><a>Back</a></Link>
                </h1>
            </div>
            
</nav>
</section>
</main>
</div>
)
}