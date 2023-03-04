import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


const Navbar = () => {
    const [ t, i18n ] = useTranslation();

  return (
    <div className='w-full h-12 bg-red-700'>
        <Link className='ml-40' to='/home'>
            {t('title1')}
        </Link>
        <Link className='ml-40' to='/location'>
            {t('title2')}
        </Link>
        <Link className='ml-40' to='/prices'>
            {t('title3')}
        </Link>
        { i18n.language =='en' && <button className='ml-80' onClick={() => {
            i18n.changeLanguage('ar');
        }}>تغيير الي اللغة العربية</button>}
        { i18n.language == 'ar' && <button className='ml-80' onClick={() => {
            i18n.changeLanguage('en');
        }}>Shift to English</button>}
    </div>
  )
}

export default Navbar