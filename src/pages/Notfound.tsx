import React from 'react'

const Notfound = () => {
  return (
   <div className='flex min-h-screen items-center justify-center'>
    <div className="text-center">
        <h1 className="mb-4 text-7xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
        </div>

   </div>
  )
}

export default Notfound;