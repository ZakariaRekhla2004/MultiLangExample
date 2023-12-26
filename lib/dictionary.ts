// import { Locale } from '@/i18n-config'
// import 'server-only'

// const dictionaries = {
//   arb: () => import('@/dictionaries/arb.json').then(module => module.default),
//   eng: () => import('@/dictionaries/eng.json').then(module => module.default),
//   fre: () => import('@/dictionaries/fre.json').then(module => module.default)
// }
// export const getDictionary = async (locale: Locale) =>
//   dictionaries[locale]?.() ?? dictionaries.fre()

import "server-only";
import { Locale, i18n } from "@/i18n-config";

const dictionaries = {
  arb: () => import("@/dictionaries/arb.json").then((module) => module.default),
  eng: () => import("@/dictionaries/eng.json").then((module) => module.default),
  fre: () => import("@/dictionaries/fre.json").then((module) => module.default),
};

dictionaries;
// export const getDictionary = async (Locale : string ) => dictionaries[i18n.Locales.includes(Locale) ? Locale : i18n.defaultLocale]()
// export const getDictionary = async (locale : Locale) => dictionaries[i18n.locales.includes(locale) ? locale : i18n.defaultLocale]()
// export const getDictionary = async (locale: string ) => {
//   return locale == 'arb' ? dictionaries.arb() : dictionaries.eng();
// };
export const getDictionary = async (locale: string) => {
  // @ts-ignore
  return dictionaries[locale]();
};
