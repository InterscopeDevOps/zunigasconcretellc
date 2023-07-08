import React from 'react'

const LoadingSpinner = ({label='Loading'}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen mb-4">
    <div className="flex items-center justify-center">
      <div className="inline-block w-8 h-8 text-red-500 border-4 rounded-full spinner-border animate-spin" role="status">
        <span className="hidden">{label}</span>
      </div>
    </div>
    <p className="text-xl text-black">{label}...</p>
  </div>
  )
}

export default LoadingSpinner