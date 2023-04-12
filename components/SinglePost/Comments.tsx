/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE            *
* CAUTION: This file contains SENSITIVE INFORMATION         *
*                                                           *
* Copyright @JCmiel                                         *
* All rights reserved.                                      *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
import PropTypes, { InferProps } from 'prop-types';

import { CommentProp } from '~/resources/types';
import CommentCard from '~/components/SinglePost/CommentCard';


const CommentsProps = {
    comments: PropTypes.arrayOf(CommentProp).isRequired,
};

export default function Comments({ comments }: InferProps<typeof CommentsProps>) {

    return (
        <>
            {comments.map((comment) => (
                <CommentCard
                    comment={comment}
                    key={comment.id}
                />
            ))
            }
        </>

    );
}

Comments.propTypes = CommentsProps;
