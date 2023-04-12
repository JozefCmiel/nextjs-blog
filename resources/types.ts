/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE            *
* CAUTION: This file contains SENSITIVE INFORMATION         *
*                                                           *
* Copyright @JCmiel                                         *
* All rights reserved.                                      *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
import PropTypes, { InferProps } from 'prop-types';


const stringProp = PropTypes.string.isRequired;
const numberProp = PropTypes.number.isRequired;


const Post = {
    id: numberProp,
    userId: numberProp,
    title: stringProp,
    body: stringProp,
};

export const PostProp = PropTypes.shape(Post).isRequired;
export type PostType = InferProps<typeof Post>;


export const User = {
    id: numberProp,
    name: stringProp,
    username: stringProp,
    email: stringProp,
    address: PropTypes.shape({
        street: stringProp,
        suite: stringProp,
        city: stringProp,
        zipcode: stringProp,
        geo: PropTypes.shape({
            lat: stringProp,
            lng: stringProp
        })
    }),
    phone: stringProp,
    website: stringProp,
    company: PropTypes.shape({
        name: stringProp,
        catchPhrase: stringProp,
        bs: stringProp
    })
};

export const UserProp = PropTypes.shape(User).isRequired;
export type UserType = InferProps<typeof User>;


export const ApiError = {
    message: PropTypes.string,
    status: PropTypes.number,
};

export const ApiErrorProp = PropTypes.shape(ApiError);

export type ApiErrorType = InferProps<typeof ApiError>;


export const Comment = {
    postId: numberProp,
    id: numberProp,
    name: stringProp,
    email: stringProp,
    body: stringProp
};

export const CommentProp = PropTypes.shape(Comment).isRequired;
export type CommentType = InferProps<typeof Comment>;
