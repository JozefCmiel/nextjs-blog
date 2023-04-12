/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE            *
* CAUTION: This file contains SENSITIVE INFORMATION         *
*                                                           *
* Copyright @JCmiel                                         *
* All rights reserved.                                      *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/**
 * Search in object for string recursively, expensive operation use with caution
 * @param obj search in this object
 * @param search  search for this string
 * @returns boolean if found
 * @example searchObject({a: {b: 'c'}}, 'c') // true
 * @example searchObject({a: {b: 'c'}}, 'd') // false
 */

export const searchObject = (obj: any, search: string): boolean => {
    if (typeof obj === 'object') {
        for (const key in obj) {
            if (obj[key]) {
                const element = obj[key];
                if (typeof element === 'object') {
                    if (searchObject(element, search)) {
                        return true;
                    }
                } else {
                    if (element.toString().toLowerCase().includes(search.toLowerCase())) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
};
