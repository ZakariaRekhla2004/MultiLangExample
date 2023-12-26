
import { Locale } from '@/i18n-config'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from './locale-switcher'

export default async function Header({ lang }: { lang: Locale }) {
//   const { navigation } = await getDictionary(lang)

  return (
    <header className='py-6'>
      <nav className='container flex items-center justify-between'>
      <header className="flex items-start text-xl text-black font-bold">
          MultiLang WEBApp
        </header>
        <LocaleSwitcher />
      </nav>
    </header>
  )
}