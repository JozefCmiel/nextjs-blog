/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE            *
* CAUTION: This file contains SENSITIVE INFORMATION         *
*                                                           *
* Copyright @JCmiel                                         *
* All rights reserved.                                      *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
import PropTypes, { InferProps } from 'prop-types';

import PostCard from '~/components/Posts/PostCard';
import { PostProp, UserProp } from '~/resources/types';


const PostsProps = {
    data: PropTypes.arrayOf(PostProp).isRequired,
    users: PropTypes.objectOf(UserProp).isRequired
};

/**
 *
 * @param param0 data - array of posts, users - normalized object of users
 * @returns array of PostCard components based on data and user
 */


export default function Posts({ data = [], users = {} }: InferProps<typeof PostsProps>) {
    return (
        <>
            {data.map((post) => (
                <PostCard
                    key={post.id}
                    post={post}
                    user={users[post.userId]}
                />
            ))}
        </>
    );
}

Posts.propTypes = PostsProps;
