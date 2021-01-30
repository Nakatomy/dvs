import styles from './style.module.css'
// import { Button } from 'components'
// import cn from "classnames";
// import PropTypes from "prop-types";
// import { i18n, Link, withTranslation } from "i18n";
// import React from 'react'

import { FormControl, MenuItem, Select } from '@material-ui/core';
import { useTranslation } from "react-i18next";
import enIcon from 'images/gb.svg'
import deIcon from 'images/de.svg'
import { SvgGb } from 'components'

import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';


const LanguageSwitcher = (className) => {
    const { i18n } = useTranslation();
    const [selected, setSelected] = useState('');
    return (

        // <ReactFlagsSelect
        //     selected={selected}
        //     onSelect={flag => setSelected(flag)}
        // />
        <li className={className} >
            <FormControl className={styles['form__input']}>
                <Select value={i18n.language} className={styles[`icon--${i18n.language}-selected-flag`]} onChange={(e) =>
                    i18n.changeLanguage(e.target.value)
                }>
                    <MenuItem value="en" ><span className={styles['icon--en-flag']}></span></MenuItem>
                    <MenuItem value="de" ><span className={styles['icon--de-flag']}></span></MenuItem>

                </Select>
            </FormControl>

        </li >
    );
}

export default LanguageSwitcher;



{/* <li className={styles['form__data']}>
    <select className={styles['form__input']}
        value={i18n.language}
        onChange={(e) =>
            i18n.changeLanguage(e.target.value)
        }
    >
        <option value="en" data-image={enIcon}> </option>
        <option value="de">German</option>
    </select>
</li> */}



// <span className={styles["icon--gb-flag"]}></span> 
// const LanguageSwitcher = () => {

//     //     const getCurrentLng = () => i18n.language || window.localStorage.i18nextLng || '';


//     //     const lang = getCurrentLng()

//     //     return (
//     //         <Button onClick={() => i18n.changeLanguage(en)} className={lang === 'en' ? styles["icon--gb-flag"] : styles["icon--de-flag"]}> 123</Button>





//     //     );
//     // }

// }
// export default LanguageSwitcher