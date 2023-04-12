/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE            *
* CAUTION: This file contains SENSITIVE INFORMATION         *
*                                                           *
* Copyright @JCmiel                                         *
* All rights reserved.                                      *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
import Image from 'next/image';
import Link from 'next/link';

import logo from '~/public/logo.svg';


export default function Navbar() {
    return (
        <div className="top-0 w-100 h-20 flex-center items-center flex justify-center gap-96">
            <Link href="/">
                <Image
                    alt="logo alt"
                    src={logo}
                />
            </Link>

            <div className="flex-center align-center items-center flex justify-center gap-5">
                <span className="cursor-pointer">Daily Digest</span>
                <span className="cursor-pointer">Daily Tools</span>
                <span className="cursor-pointer">Tutorials</span>
                <button className="bg-black text-white p-2 rounded-md">Subscribe</button>
            </div>
        </div>
    );
}
