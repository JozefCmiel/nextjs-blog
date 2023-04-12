/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE            *
* CAUTION: This file contains SENSITIVE INFORMATION         *
*                                                           *
* Copyright @JCmiel                                         *
* All rights reserved.                                      *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
import PropTypes from 'prop-types';

import Navbar from '~/components/navbar';


const LayoutProps = {
    children: PropTypes.node,
};

export default function Layout({ children }: PropTypes.InferProps<typeof LayoutProps>) {
    return (
        <>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center justify-between p-24">{children}</main>
        </>
    );
}
