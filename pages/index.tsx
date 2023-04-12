/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE            *
* CAUTION: This file contains SENSITIVE INFORMATION         *
*                                                           *
* Copyright @JCmiel                                         *
* All rights reserved.                                      *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import PropTypes, { InferProps } from 'prop-types';

import Posts from '~/components/Posts/Posts';
import { API_URL } from '~/resources/constants';
import { PostProp, UserProp } from '~/resources/types';
import { normalizeArray } from '~/utils/serializer';


const HomeProps = {
    data: PropTypes.arrayOf(PostProp).isRequired,
    users: PropTypes.objectOf(UserProp).isRequired,
};

export const getServerSideProps: GetServerSideProps<InferProps<typeof HomeProps>> = async () => {
    const res = await fetch(`${API_URL}/posts`);
    const userRes = await fetch(`${API_URL}/users`);

    const data = await res.json();
    const users = await userRes.json();
    return {
        props: {
            data: data ? data : [],
            users: normalizeArray(users ? users : [])
        },
    };
};

export default function Home({ data, users }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <div className="flex-col flex items-center">
            <h1 className="text-7xl p-5 text-center">Minimal blog template for creative expressions</h1>
            <h2 className="text-xl p-5 text-center">
                100% customisable and SEO-friendly blog template for personal and commercial purposes.
            </h2>

            <div className="flex justify-between w-4/6">
                <h3 className="text-lg font-bold">Daily digest</h3>
                <button className="bg-gray-300 p-2 rounded-md">View all</button>
            </div>
            <Posts
                data={data}
                users={users}
            />
        </div>
    );
}

Home.propTypes = HomeProps;
