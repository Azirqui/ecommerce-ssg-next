import Head from 'next/head';


export default function Home() {
  return (
    <>
    <Head>
      <title>Home</title>
      <meta name="description" content="This is a sample static site built with Next.js." />
                <meta name="keywords" content="Static Site, Next.js, SEO, Web Development" />
                <meta name="author" content="Chaudhary Noman Ahmad" />
                <meta property="og:title" content="My Static Site" />
                <meta property="og:description" content="This is a sample static site using Next.js." />
                <meta property="og:url" content="https://your-site-url.com" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://your-site-url.com/thumbnail.jpg" />
                <link rel="icon" href="public\window.svg" />
    </Head>
    <div className="flex justify-center items-center min-h-screen bg-gray-100"> <h1 className="text-3xl font-bold">Welcome to My Static Site</h1> </div>
    </>
  );
}
