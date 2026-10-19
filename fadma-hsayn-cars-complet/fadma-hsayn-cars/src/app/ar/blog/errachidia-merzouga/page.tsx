import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { pageMetadata } from "@/lib/seo";
import { localizedPath } from "@/lib/i18n";

const locale = "ar" as const;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/blog/errachidia-merzouga",
  title: 'كراء سيارة الرشيدية-مرزوكة: المطار واتجاه واحد',
  description: 'تحضّر كراء سيارة من مطار الرشيدية إلى مرزوكة؟ تعرّف على الرحلة والاتجاه الواحد والسيارة المناسبة.',
  image: "/images/location-voiture-errachidia.webp",
});

export default function ArticlePage() {
  const lp = (p: string) => localizedPath(p, locale);
  return (
    <>
      <Navbar locale={locale} />
      <main className="mt-[70px]">
        <section className="bg-gradient-to-r from-[var(--blue)] to-[#0d1a3a] text-white py-16 px-4 md:px-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">كراء سيارة الرشيدية-مرزوكة: المطار واتجاه واحد</h1>
          </div>
        </section>
        <article className="py-16 px-4 md:px-10 max-w-3xl mx-auto text-gray-700 space-y-5 leading-relaxed">
          <img src="/images/location-voiture-errachidia.webp" alt='كراء سيارة الرشيدية-مرزوكة: المطار واتجاه واحد' className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg mb-8" />

          <p>
            مطار الرشيدية غالباً ما يختاره المسافرون للوصول إلى مرزوكة وكثبان إرغ شبي دون المرور بمراكش.{" "}
            <strong>كراء سيارة الرشيدية مرزوكة</strong> يتيح استلام مركبة قرب المطار ومتابعة الطريق نحو مرزوكة على وتيرتك. عند توفر الشروط، يمكن{" "}
            <Link href={lp("/location-voiture-aller-simple")} className="text-[var(--red)] font-semibold hover:underline">كراء باتجاه واحد</Link>
            {" "}مع إرجاع السيارة في مرزوكة.
          </p>
          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">من الرشيدية إلى مرزوكة بالسيارة</h2>
          <p>
            الرشيدية بوابة جوية عملية لمنطقة مرزوكة. الكراء عند الوصول يمنحك حرية أكبر للوصول لإقامتك والتنقل. راجع{" "}
            <Link href={lp("/location-voiture-errachidia")} className="text-[var(--red)] font-semibold hover:underline">كراء مطار الرشيدية</Link>
            {" "}و{" "}
            <Link href={lp("/location-voiture-merzouga")} className="text-[var(--red)] font-semibold hover:underline">كراء مرزوكة</Link>.
          </p>
          <p>
            المسافة والمدة تعتمد على نقطة الاستلام والمسار والوقفات والطقس. أكّد مع الوكالة حسب تواريخك. توصيل مرتبط بمطار الرشيدية متاح؛ رسوم التوصيل والتفاصيل تُؤكَّد عند الحجز (حوالي 500 درهم حسب ما أُعلن في الموقع).
          </p>
          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">اتجاه واحد الرشيدية–مرزوكة</h2>
          <p>
            الاستلام في الرشيدية أو المطار والإرجاع في مرزوكة عند التوفر. راجع{" "}
            <Link href={lp("/location-voiture-aller-simple")} className="text-[var(--red)] font-semibold hover:underline">الاتجاه الواحد</Link>
            {" "}و{" "}
            <Link href={lp("/conditions")} className="text-[var(--red)] font-semibold hover:underline">الشروط</Link>.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-1">
            <li>مكان الاستلام والإرجاع؛</li>
            <li>رسوم التوصيل والاتجاه الواحد؛</li>
            <li>الكيلومترات والتأمين والوديعة؛</li>
            <li>الأوقات وأي قيود.</li>
          </ul>
          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">اختيار السيارة</h2>
          <p>
            <Link href={lp("/vehicules/dacia-duster")} className="text-[var(--red)] font-semibold hover:underline">داستر</Link>
            {" · "}
            <Link href={lp("/vehicules/hyundai-creta")} className="text-[var(--red)] font-semibold hover:underline">كريتا</Link>
            {" · "}
            <Link href={lp("/vehicules/hyundai-tucson")} className="text-[var(--red)] font-semibold hover:underline">توسان</Link>
            . ليس كل SUV دفع رباعي. الكثبان قد تكون ممنوعة أو غير مؤمَّنة.
          </p>
          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">الحجز</h2>
          <p>أرسل التواريخ، الاستلام (المطار؟)، الإرجاع، رقم الرحلة، عدد المسافرين ونوع السيارة عبر واتساب أو{" "}
            <Link href={lp("/contact")} className="text-[var(--red)] font-semibold hover:underline">اتصل بنا</Link>.
          </p>
          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">أسئلة شائعة</h2>
          <h3 className="text-lg font-semibold text-[var(--blue)]">هل يمكن الكراء من مطار الرشيدية لمرزوكة؟</h3>
          <p>نعم مع توصيل مرتبط بالمطار. الشروط والرسوم والتوفر تُؤكَّد حسب التواريخ.</p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">هل يمكن الإرجاع في مرزوكة؟</h3>
          <p>نعم عند توفر الاتجاه الواحد وبعد تأكيد الشروط.</p>
          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">الخاتمة</h2>
          <p>كراء بين الرشيدية ومرزوكة يسهّل الوصول للصحراء. حضّر التواريخ وتفاصيل المطار واطلب التأكيد عبر واتساب مع Fadma Hsayn Cars.</p>

          <div className="mt-8 p-6 bg-[var(--blue)] text-white rounded-2xl text-center">
            <a href="https://wa.me/212661371670" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[var(--red)] text-white font-bold px-8 py-3 rounded-lg">
              WhatsApp
            </a>
          </div>
        </article>
      </main>
      <Footer locale={locale} />
    </>
  );
}
