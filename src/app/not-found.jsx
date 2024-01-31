import React from 'react'
import Link from 'next/link'

function NotFound() {
  return (
    <div>
        <h1>404 Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link href="/">
            Go back home
        </Link>
    </div>
  )
}

export default NotFound