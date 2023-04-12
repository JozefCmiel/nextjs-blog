/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE            *
* CAUTION: This file contains SENSITIVE INFORMATION         *
*                                                           *
* Copyright @JCmiel                                         *
* All rights reserved.                                      *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import PropTypes, { InferProps } from 'prop-types';
import { createContext } from 'react';

import Posts from '~/components/Posts/Posts';
import { PostProp, UserProp, ApiErrorProp } from '~/resources/types';
import { useString } from '~/utils/defaultHooks';
import { normalizeArray } from '~/utils/serializer';
import { fetcher } from '~/utils/fetch';
import { createApiError } from '~/utils/createApiError';


const HomeProps = {
    data: PropTypes.arrayOf(PostProp).isRequired,
    users: PropTypes.objectOf(UserProp).isRequired,
    error: ApiErrorProp
};

export const getServerSideProps: GetServerSideProps<InferProps<typeof HomeProps>> = async () => {
    try {
        const data = await fetcher('posts');
        const users = await fetcher('users');
        return {
            props: {
                data: data ? data : [],
                users: normalizeArray(users ? users : [])
            },
        };
    } catch (error) {
        return {
            props: {
                data: [],
                users: {},
                error: createApiError(error),
            },
        };
    }

};
export const SearchContext = createContext({ search: '' } as { search: string });
export default function Home({ data, users, error }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [ search, setSearch ] = useString('');
    return (
        <div className="flex-col flex items-center">
            <h1 className="text-7xl p-5 text-center">Minimal blog template for creative expressions</h1>
            <h2 className="text-xl p-5 text-center">
                100% customisable and SEO-friendly blog template for personal and commercial purposes.
            </h2>

            <input
                onChange={setSearch.inputSet}
                placeholder="Search..."
                value={search}
            />

            <div className="flex justify-between w-4/6">
                <h3 className="text-lg font-bold">Daily digest</h3>
                <button className="bg-gray-300 p-2 rounded-md">View all</button>
            </div>
            {error && <div className="text-red-500">{error.message}</div>}
            <SearchContext.Provider value={{ search }}>
                <Posts
                    data={data}
                    users={users}
                />
            </SearchContext.Provider>
        </div>
    );
}

Home.propTypes = HomeProps;
