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
import { PostProp, PostType, UserProp, CommentProp, ApiErrorProp, UserType, CommentType } from '~/resources/types';
import Comments from '~/components/SinglePost/Comments';
import { fetcher } from '~/utils/fetch';
import { createApiError } from '~/utils/createApiError';


const PostPageProps = {
    data: PostProp,
    user: UserProp,
    comments: PropTypes.arrayOf(CommentProp).isRequired,
    error: ApiErrorProp
};


export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const data = await fetcher('posts');

        return {
            paths: data.map((post: PostType) => ({ params: { id: post.id.toString() } })),
            fallback: false,
        };
    } catch (error) {
        return {
            paths: [ { params: { id: '1' } } ],
            fallback: false,
        };
    }
};

export const getStaticProps: GetStaticProps<InferProps<typeof PostPageProps>> =
    async (context: GetStaticPropsContext) => {
        try {
            if (!context.params?.id) {
                throw new Error('No id provided');
            }
            //TODO - add better error handling if just one of the fetches fails
            //TODO (now it will fail if one of the fetches fails), Readme.md
            const data = await fetcher(`posts/${context.params?.id}`);
            const user = await fetcher(`users/${data.userId}`);
            const comments = await fetcher(`posts/${context.params?.id}/comments`);
            return {
                props: {
                    data,
                    user,
                    comments,
                },
            };
        } catch (error) {
            return {
                props: {
                    data: {} as PostType,
                    user: {} as UserType,
                    comments: [] as CommentType[],
                    error: createApiError(error),
                },
            };
        }

    };

export default function PostPage({ data, user, comments, error }: InferGetServerSidePropsType<typeof getStaticProps>) {
    if (error) {
        return <div className="text-red-500">{error.message} </div>;
    }
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
