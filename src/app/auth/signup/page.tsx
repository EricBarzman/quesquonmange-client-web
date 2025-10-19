import SignupForm from '@/components/auth-components/SignupForm';
import Link from 'next/link'

export default function SignUpPage() {
  return (
    <div className='flex flex-col items-center justify-between'>
      <h2 className='text-2xl'>Créer un compte</h2>

      <div className='w-2/3 mt-4 p-4 border rounded-4xl border-gray-300 shadow-lg flex flex-col items-center'>
        <SignupForm />
        <div className='mt-6 mb-6'>
          <span>Déjà un compte ? </span>
          <Link className='underline hover:text-gray-400' href="/auth/login">Se connecter</Link>
        </div>
      </div>
      
    </div>
  )
}