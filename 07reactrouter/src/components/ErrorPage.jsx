import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">404</h1>
        <p className="mt-2 text-gray-600">Page not found.</p>
        <Link to="/" className="mt-4 inline-block rounded bg-orange-700 px-4 py-2 text-white">
          Go Home
        </Link>
      </div>
    </div>
  )
}
