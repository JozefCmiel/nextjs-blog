/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE            *
* CAUTION: This file contains SENSITIVE INFORMATION         *
*                                                           *
* Copyright @JCmiel                                         *
* All rights reserved.                                      *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

import { useState } from 'react';


type UseBooleanFuncType = {
    on: () => void,
    off: () => void,
    swap: () => void
}

/**
 * Default use boolean hook, to replace copypaste code with setters
 *
 * @example const [hide, setHide] = useBoolean();
 * <icon
 *    onClick={setHide.swap}
 * />
 */
export const useBoolean = (defaultValue = false): [boolean, UseBooleanFuncType ] => {
    const [ val, setVal ] = useState(defaultValue);
    const [ setBoolean ] = useState({
        on: () => setVal(true),
        off: () => setVal(false),
        swap: () => setVal(val => !val),

    });
    return [ val, setBoolean ];
};


type UseStringFuncType = {
    clear: () => void,
    set: (val: string) => void,
    inputSet: (event: React.ChangeEvent<HTMLInputElement>) => void
}

/**
 * Default use string hook, to replace copypaste code with setter of default state use this to have hook ready for
 * Input.js setter
 *
 * @example const [search, setSearch] = useString('');
 * <input
 *    onChange={setSearch.inputSet}
 *    value={search}
 * />
 */
export const useString = (defaultValue = ''): [string, UseStringFuncType] => {
    const [ val, setVal ] = useState(defaultValue);
    const [ setString ] = useState({
        clear: () => setVal(''),
        set: (val: string) => setVal(val),
        inputSet: (event: React.ChangeEvent<HTMLInputElement>) => {
            setVal(event.target.value);
        },

    });
    return [ val, setString ];
};
