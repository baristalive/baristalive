"use client";
import { useParams } from "next/navigation";
import { dictionaries, SupportedLanguages } from "../../dictionaries/all";
import { fredoka } from "../../fonts";

export const Organizers = () => {
  const params = useParams();
  const lang = dictionaries[params.lang as SupportedLanguages];
  return (
    <section className="py-20 text-center">
      <h2
        className={`uppercase font-medium text-5xl py-20 ${fredoka.className}`}
      >
        {lang.about.title}
      </h2>
      <div className="space-y-10 mx-auto px-6 lg:px-0 lg:text-4xl text-xl max-w-screen-lg">
        {lang.about.text.map(p => <p key={p}>{p}</p>)}
      </div>
    </section>
  );
};
