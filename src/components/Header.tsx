import { signIn, signOut, useSession } from 'next-auth/react';

export const Header = () => {
  const { data: sessionData } = useSession();

  return (
    <div className='navbar bg-primary text-primary-content'>
      <div className='flex-1 pl-5 text-3xl font-bold'>
        {sessionData?.user?.name ? `Notes for ${sessionData.user.name}` : ''}
      </div>
      <div className='flex-none gap-2'>
        <div className='dropdown-end dropdown'>
          {sessionData?.user ? (
            <label
              tabIndex={0}  
              className='btn btn-ghost btn-circle avatar'
              onClick={() => void signOut()}
            >
              <div className='w-10 rounded-full'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={sessionData.user.image ?? ''} alt={sessionData?.user?.name ?? ''} />
              </div>
            </label>
          ) : (
            <button
              className='btn btn-ghost rounded-btn'
              onClick={() => void signIn()}
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
