/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE            *
* CAUTION: This file contains SENSITIVE INFORMATION         *
*                                                           *
* Copyright @JCmiel                                         *
* All rights reserved.                                      *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

import { API_URL } from '~/resources/constants';


type apis = 'posts' | 'users' | 'comments';

type endpoint = apis | `${apis}/${string}` | `${apis}/${string}/${apis}`;

export const fetcher = (endpoint: endpoint) => fetch(`${API_URL}/${endpoint}`).then((res) => res.json());
