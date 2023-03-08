import Head from 'next/head'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
            <h1 className="text-center my-20 text-3xl hover:scale-150 transition text-white font-bold font-mono">Profile</h1>
            <div className="my-2 flex gap-10 items-center justify-center">
                <div className="text-right font-mono text-xl w-96 text-white overflow-clip">
                    <h1>An international undergraduate Informatics Engineering student with a strong interest in digital and social technologies. Ive developed strong problem-solving abilities and am always eager to learn something new. Im a quick study who enjoys taking on new challenges.</h1>
                </div>
                <Image
                className='rounded-xl'
                src='/danin.jpg'
                alt=''
                width={463.2}
                height={529.9}
                />
            </div>
            <div className=''>
                <h1 className='hover:text-xl items-center text-white'>
                    <Link href="/">Back</Link>
                </h1>
            </div>
            
</nav>
</section>
</main>
</div>
)
}