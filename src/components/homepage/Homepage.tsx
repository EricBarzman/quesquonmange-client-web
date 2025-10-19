import Link from 'next/link'

function Homepage() {
  return (
    <div className="h-3/4 flex flex-col justify-between items-center">
      <h2 className="font-semibold text-3xl">
        Quesquon'mange
      </h2>
      <Link
        href="/menu"
        className="rounded-4xl px-8 py-6 font-semibold text-lg bg-primary-light hover:bg-primary-dark"
      >
        Trouver mon menu
      </Link>
      <Link
        href="/auth/login"
        className="w-1/2 px-6 py-4 text-center uppercase rounded-sm font-semibold bg-secondary-light hover:bg-secondary-dark cursor-pointer"
      >
        Connexion
      </Link>
    </div>
  )
}

export default Homepage