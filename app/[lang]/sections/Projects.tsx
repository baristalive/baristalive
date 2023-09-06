"use client";
import { useParams } from "next/navigation";
import { dictionaries, SupportedLanguages } from "../../dictionaries/all";
import { fredoka } from "@/app/fonts";
import { PropsWithChildren } from "react";

const WrappedA = ({
  href,
  ...props
}: PropsWithChildren<{ href: string; target: string; rel: string, title: string }>) => (
  <>{href ? <a href={href} {...props} /> : <div {...props} />}</>
);

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
        {Object.values(lang.projects.content).map((p) => (
          <div
            key={p.title}
            className={`card basis-1/2 rounded-lg border-2 border-[var(--palette4)] ${
              p.href ? "hover:scale-110" : "hover:grayscale"
            } transition-transform`}
          >
            <WrappedA href={p.href} target="_blank" rel="related" title={p.title}>
              <div
                className={`${p.className}-header h-[300px] text-8xl flex justify-center items-center ${fredoka.className}`}
              />
              <h3
                className={`uppercase font-medium pt-10 text-2xl ${fredoka.className}`}
              >
                {p.title}
              </h3>
              <p className="pb-10">{p.description}</p>
            </WrappedA>
          </div>
        ))}
      </div>
    </section>
  );
};
