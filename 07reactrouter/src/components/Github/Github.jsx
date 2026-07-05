import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();

    return (
        <div className='m-4 rounded bg-gray-700 p-4 text-center text-3xl text-white'>
            Github followers: {data?.followers ?? 0}
            {data?.avatar_url ? (
                <img src={data.avatar_url} alt="Git picture" width={300} className="mx-auto mt-4 rounded-full" />
            ) : null}
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary');

    if (!response.ok) {
        throw new Response('Failed to fetch GitHub user', { status: 500 });
    }

    return response.json();
}