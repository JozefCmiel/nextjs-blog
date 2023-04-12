/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE            *
* CAUTION: This file contains SENSITIVE INFORMATION         *
*                                                           *
* Copyright @JCmiel                                         *
* All rights reserved.                                      *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
import { InferProps } from 'prop-types';

import { PostProp, UserProp } from '~/resources/types';


const PostProps = {
    post: PostProp,
    user: UserProp
};

export default function Post({ post, user }: InferProps<typeof PostProps>) {
    if (!post || !user) {
        return null;
    }
    return (
        <>
            <div className="bg-white p-2 w-5/6 flex flex-col justify-between rounded-md mt-2 shadow-md">
                <div>
                    <h4 className="text-lg font-bold">{post.title}</h4>
                    <span className="text-md">{post.body}</span>
                </div>

                <div>
                    <pre>{user.name}</pre>
                </div>
            </div>

        </>

    );
}

Post.propTypes = PostProps;
