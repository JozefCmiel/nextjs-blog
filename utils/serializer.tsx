/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE            *
* CAUTION: This file contains SENSITIVE INFORMATION         *
*                                                           *
* Copyright @JCmiel                                         *
* All rights reserved.                                      *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

import { PostType, UserType } from '~/resources/types';

/**
 * normalizes array of objects to object with id as key and object as value
 * @param arr array of objects
 * @returns object with id as key and object as value
 */

export const normalizeArray = <T extends UserType | PostType>(arr: T[]) => {
    return arr.reduce((acc, val) => {
        acc[val.id.toString()] = val;
        return acc;
    }, {} as Record<string, T>);
};
