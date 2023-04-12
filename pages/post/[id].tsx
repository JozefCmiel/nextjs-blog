/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE            *
* CAUTION: This file contains SENSITIVE INFORMATION         *
*                                                           *
* Copyright @JCmiel                                         *
* All rights reserved.                                      *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

import { GetStaticProps, GetStaticPaths, InferGetServerSidePropsType, GetStaticPropsContext } from 'next';
import PropTypes, { InferProps } from 'prop-types';

import Post from '~/components/SinglePost/Post';
import { API_URL } from '~/resources/constants';
import { PostProp, PostType, UserProp, CommentProp } from '~/resources/types';
import Comments from '~/components/SinglePost/Comments';
import { fetcher } from '~/utils/fetch';


const PostPageProps = {
    data: PostProp,
    user: UserProp,
    comments: PropTypes.arrayOf(CommentProp).isRequired
};


export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(`${API_URL}/posts`);
    const data = await res.json();
    return {
        paths: data.map((post: PostType) => ({ params: { id: post.id.toString() } })),
        fallback: false, // can also be true or 'blocking'
    };
};

export const getStaticProps: GetStaticProps<InferProps<typeof PostPageProps>> =
async (context: GetStaticPropsContext) => {
    const data = await fetcher(`posts/${context.params?.id}`);
    const user = await fetcher(`users/${data.userId}`);

    const comments = await fetcher(`posts/${context.params?.id}/comments`);

    return {
        props: {
            data,
            user,
            comments
        },
    };
};

export default function PostPage({ data, user, comments }: InferGetServerSidePropsType<typeof getStaticProps>) {
    return (
        <>
            <Post
                post={data}
                user={user}
            />
            <Comments comments={comments} />
        </>
    );
}

PostPage.propTypes = PostPageProps;
