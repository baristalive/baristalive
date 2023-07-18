"use client";
import { useParams } from "next/navigation";
import { dictionaries, SupportedLanguages } from "../../dictionaries/all";
import { fredoka } from "@/app/fonts";

export const Projects = () => {
  const params = useParams();
  const lang = dictionaries[params.lang as SupportedLanguages];
  return (
    <section className="py-20 text-center">
      <h2
        className={`uppercase font-medium text-5xl py-20 ${fredoka.className}`}
      >
        {lang.projects.title}
      </h2>
      <div className="mx-auto flex flex-col md:flex-row max-w-screen-xl gap-20 p-2">
        {lang.projects.content.map((p) => (
          <div
            key={p.title}
            className="card basis-1/2 rounded-lg border-2 border-[var(--palette4)]"
          >
            <div className={`${p.className}-header h-[300px] text-8xl flex justify-center items-center ${fredoka.className}`} />
            <h3
              className={`uppercase font-medium pt-10 text-2xl ${fredoka.className}`}
            >
              {p.title}
            </h3>
            <p className="pb-10">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
