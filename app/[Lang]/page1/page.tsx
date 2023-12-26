import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";

export default async function Home({
  params: { Lang }
}: {
  params: { Lang: string }
}) {
  const { page } = await getDictionary(Lang)
  return (
    <div className="gap-y-6 ">
      <div className="flex justify-center text-center">
        <h2>{page.page1.title}</h2>
      </div>
      <div className="flex justify-center text-center">
        <p className=" w-2/3">
        {page.page1.description}
        </p>
      </div>
    </div>
  );
}


