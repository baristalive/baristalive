"use client";
import { useParams } from "next/navigation";
import { dictionaries, SupportedLanguages } from "../../dictionaries/all";
import { fredoka } from "../../fonts";
import Link from "next/link";

export const Header = () => {
  const params = useParams();
  const lang = dictionaries[params.lang as SupportedLanguages];
  return (
    <section className="h-[90vh] flex flex-col p-8 pb-48 page1 gap-10">
      <nav className="grow ml-auto flex text-2xl font-semibold gap-2">
        <Link href="/en" className={params.lang !== "en" ? "opacity-50" : ""}>
          en
        </Link>
        <span className="text-3xl">/</span>
        <Link href="/cz" className={params.lang !== "cz" ? "opacity-50" : ""}>
          cz
        </Link>
      </nav>
      <div className="w-full mx-auto max-w-[1500px]">
        <h1 className={`${fredoka.className} text-8xl animate`}>
          Barista Live
        </h1>
        <h2 className="pl-2 mt-2 text-3xl ">{lang.tagLine}</h2>
      </div>
    </section>
  );
};
