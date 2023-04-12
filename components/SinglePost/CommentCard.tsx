/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE            *
* CAUTION: This file contains SENSITIVE INFORMATION         *
*                                                           *
* Copyright @JCmiel                                         *
* All rights reserved.                                      *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
import { InferProps } from 'prop-types';

import { CommentProp } from '~/resources/types';


const CommentCardProps = {
    comment: CommentProp,
};

export default function CommentCard({ comment }: InferProps<typeof CommentCardProps>) {

    return (
        <>
            <div className="bg-white p-2 w-3/6 flex flex-col justify-between rounded-md mt-2 shadow-md">
                <div>
                    <h4 className="text-lg font-bold">{comment.name}</h4>
                    <span className="text-md">{comment.body}</span>
                </div>

                <div className="mt-2">
                    <pre>{comment.email}</pre>
                </div>
            </div>

        </>

    );
}

CommentCard.propTypes = CommentCardProps;
