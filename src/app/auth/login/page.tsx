import LoginForm from '@/components/auth-components/LoginForm';
import Link from 'next/link'

export default function LogInPage() {
  return (
    <div className='flex flex-col items-center justify-between'>
      <h2 className='text-2xl'>Connexion</h2>

      <div className='w-2/3 mt-4 p-4 border rounded-4xl border-gray-300 shadow-lg flex flex-col items-center'>
        <LoginForm />
        <div className='mt-6 mb-6'>
          <span>Pas de compte ? </span>
          <Link className='underline hover:text-gray-400' href="/auth/signup">Créer un compte</Link>
        </div>
      </div>
      
    </div>
  )
}