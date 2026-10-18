import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDict } from "@/data/i18n-dict";
import { pageMetadata } from "@/lib/seo";

const locale = "ar" as const;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/conditions",
  title: getDict(locale).conditions.title,
  description: getDict(locale).conditions.description,
});

export default function Page() {
  const t = getDict(locale);
  return (
    <>
      <Navbar locale={locale} />
      <main className="mt-[70px] py-16 px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-[var(--blue)] mb-6">{t.conditions.title}</h1>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>رخصة قيادة سارية منذ سنتين على الأقل. تُقبل الرخصة الوطنية للأجانب.</p>
          <p>الوديعة: 20 000 درهم (شيك أو نقد أو بطاقة)، تُسترجع إن لم يُلاحظ ضرر.</p>
          <p>تأمين مشمول. كيلومترات غير محدودة. إلغاء مجاني حتى 48 ساعة قبل الاستلام.</p>
          <p>توصيل المطار: مراكش 1200 درهم · الرشيدية 500 درهم. الوكالة الرئيسية في مرزوكة.</p>
          <p>كراء باتجاه واحد بين مراكش ومرزوكة والرشيدية حسب التأكيد.</p>
        </div>
        <a href="https://wa.me/212661371670" className="inline-block mt-10 bg-[var(--red)] text-white font-bold px-6 py-3 rounded-lg">
          {t.common.bookWhatsApp}
        </a>
      </main>
      <Footer locale={locale} />
    </>
  );
}
