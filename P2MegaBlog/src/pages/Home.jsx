import React, { useEffect, useState } from 'react';
import { Container, PostCard } from '../comonents';
import appwriteService from '../appwrite/config';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    if (posts.length === 0) {
        return (
            <div className='w-full py-16 mt-8 text-center bg-gray-100'>
                <Container>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='p-4 w-full max-w-md'>
                            <h1 className='text-3xl font-extrabold text-gray-700 mb-4'>
                                Login to Read Posts
                            </h1>
                            <p className='text-gray-500'>
                                Sign in to access all the latest posts and stay updated!
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className='w-full py-8 bg-gray-50'>
            <Container>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 transition-transform transform hover:scale-105'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
