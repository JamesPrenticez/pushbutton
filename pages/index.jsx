import Head from 'next/head'

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Push Button</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>
        {data.message}
      </p>

    </>
  )
}

export async function getServerSideProps(){
  const res = await fetch('http://localhost:3000/api/hello')
  const data = await res.json()

  return {props: {data}}
}