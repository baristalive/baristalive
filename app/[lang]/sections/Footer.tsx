"use client";
import { useParams } from "next/navigation";
import { dictionaries, SupportedLanguages } from "../../dictionaries/all";
import AtIcon from "../../icons/at";
// import FacebookIcon from "../../icons/facebook";
// import InstagramIcon from "../../icons/instagram";
// import AtIcon from "../../icons/at";

export const Footer = () => {
  const params = useParams();
  const lang = dictionaries[params.lang as SupportedLanguages];
  return (
    <footer className="pb-20 pt-32 px-2 footer">
      <div className="w-full mx-auto max-w-[1000px] flex">
        <div className="basis-1/2">
            <a className="h-[34px] w-[34px] inline-block" href="mailto:info@baristalive.cz">
              <AtIcon />
            </a>
        </div>
        <ul className="basis-1/2 space-y-2 text-lg text-right">
          <li className="font-regular">
            &copy; {`${new Date().getFullYear()}`} Barista Live, z. s.
          </li>
          <li className="font-regular">IČO: 17701651</li>
        </ul>
      </div>
    </footer>
  );
};
