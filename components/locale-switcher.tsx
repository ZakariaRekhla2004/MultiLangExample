'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { Locale, i18n } from '@/i18n-config'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@radix-ui/react-select'

export default function LocaleSwitcher() {
  const pathName = usePathname()
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div>
      <p>Locale switcher:</p>
      <ul>
        {i18n.locales.map((locale : Locale) => {
          return (
            <li key={locale}>
              <Link href={redirectedPathName(locale)}>{locale}</Link>
            </li>
          )
        })}
      </ul>


  
</div>
    
  )
}














