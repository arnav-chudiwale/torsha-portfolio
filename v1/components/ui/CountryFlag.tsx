import IN from "country-flag-icons/react/3x2/IN";
import BE from "country-flag-icons/react/3x2/BE";
import US from "country-flag-icons/react/3x2/US";

type CountryFlagProps = {
  code: "IN" | "BE" | "US";
  label: string;
};

const flagClass =
  "mt-2.5 h-6 w-9 shrink-0 rounded-[3px] shadow-sm ring-1 ring-chalk/90 md:h-7 md:w-10";

export function CountryFlag({ code, label }: CountryFlagProps) {
  switch (code) {
    case "IN":
      return <IN title={label} aria-label={label} className={flagClass} />;
    case "BE":
      return <BE title={label} aria-label={label} className={flagClass} />;
    case "US":
      return <US title={label} aria-label={label} className={flagClass} />;
  }
}
