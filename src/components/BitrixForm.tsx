
// components/BitrixForm.tsx
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const BitrixForm = () => {
  const { lang } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const formIdByLang: Record<string, string> = {
      ru: "inline/3/z3piac",
      en: "inline/7/45ibud",
    };

    const loaderIdByLang: Record<string, string> = {
      ru: "3",
      en: "7",
    };

    const currentFormId = formIdByLang[lang] || formIdByLang["ru"];
    const loaderId = loaderIdByLang[lang] || loaderIdByLang["ru"];

    const container = document.getElementById("bitrix24-form-container");
    
    // Cleanup previous script
    const oldScript = document.getElementById("bitrix24-form-script");
    if (oldScript) oldScript.remove();
    
    if (container) container.innerHTML = "";

    // Load new script
    const script = document.createElement("script");
    script.id = "bitrix24-form-script";
    script.src = `https://cdn-ru.bitrix24.ru/b29979476/crm/form/loader_${loaderId}.js?${Date.now() / 180000 | 0}`;
    script.async = true;
    script.setAttribute("data-b24-form", currentFormId);
    script.setAttribute("data-skip-moving", "true");

    container?.appendChild(script);
  }, [lang, mounted]);

  return mounted ? <div id="bitrix24-form-container" className="max-w-lg mx-auto" /> : null;
};

export default BitrixForm;
