// import React, { useState, useEffect } from 'react';
// import { Container, PostCard } from '../components';
// import appwriteService from "../appwrite/major_config";

// function AllPosts() {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         appwriteService.getPosts([]).then((posts) => {
//             if (posts) {
//                 setPosts(posts.documents);
//             }
//         });
//     }, []); // run only once on component mount

//     return (
//         <div className='w-full py-8'>
//             <Container>
//                 <div className='flex flex-wrap'>
//                     {posts.map((post) => (
//                         <div key={post.$id} className='p-2 w-1/4'>
//                             <PostCard {...post} />
//                         </div>
//                     ))}
//                 </div>
//             </Container>
//         </div>
//     );
// }

// export default AllPosts;

import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from "../appwrite/major_config";
import { useSelector } from "react-redux";

function AllPosts() {
    const [posts, setPosts] = useState([]);
    
    // Get logged-in user data from Redux store
    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        if (!userData) return;

        // Fetch all posts
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                // Filter posts by current user ID
                const myPosts = posts.documents.filter(
                    (post) => post.userId === userData.$id
                );
                setPosts(myPosts);
            }
        });
    }, [userData]);

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <div key={post.$id} className='p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))
                    ) : (
                        <p className="text-center w-full">You have not posted anything yet.</p>
                    )}
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;

