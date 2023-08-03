import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <div className="mb-auto">&nbsp;</div>

        <main className="px-3">
          <h1 className="mb-5">
            Hi, There
          </h1>
          <p className="lead mb-5">
            I am Fathan with experience frontend development more than 5 years. I use Javascript and Typescript for development. 
            and use Javascript Framework like a React, Vue, Svelte, Next.js, Nuxt.js. 
            please review all feature on technical test Frontend Developer at Depoguna Bangunan Online 
          </p>
          <p className="lead">
            <Link href="/auth" className="btn btn-lg btn-danger fw-bold">
              Click Here
            </Link>
          </p>
        </main>

        <div className="mt-auto">&nbsp;</div>
      </div>
    </>
  )
}
