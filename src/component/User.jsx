import React, { useEffect, useState } from 'react'
import SkeletonFrofile from '../skeletons/SkeletonFrofile';

const User = () => {
    const [profile, setfrofile] = useState(null);

    useEffect(() => {
        setTimeout(async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
            const data = await res.json();
            setfrofile(data);

        }, 5000)
    })
    return (
        <div className='User'>
            <h2>User details</h2>


            {profile && (
                <div className='profile'>
                    <h3>{profile.username}</h3>
                    <p>{profile.email}</p>
                    <a href={profile.website}>{profile.website}</a>
                </div>
            )}

            {!profile && <SkeletonFrofile theme="light " />}
        </div>
    )
}

export default User
