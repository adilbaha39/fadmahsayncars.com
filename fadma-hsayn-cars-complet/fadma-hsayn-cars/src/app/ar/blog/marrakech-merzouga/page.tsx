import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { pageMetadata } from "@/lib/seo";
import { localizedPath } from "@/lib/i18n";

const locale = "ar" as const;

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/blog/marrakech-merzouga",
  title: 'كراء سيارة مراكش-مرزوكة: اتجاه واحد',
  description: 'تحضّر كراء سيارة من مراكش إلى مرزوكة باتجاه واحد؟ تعرّف على المسار والمحطات والسيارة المناسبة ثم احجز بسهولة.',
  image: "/images/location-voiture-aeroport-maroc.webp",
});

export default function ArticlePage() {
  const lp = (p: string) => localizedPath(p, locale);
  return (
    <>
      <Navbar locale={locale} />
      <main className="mt-[70px]">
        <section className="bg-gradient-to-r from-[var(--blue)] to-[#0d1a3a] text-white py-16 px-4 md:px-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">كراء سيارة مراكش-مرزوكة: اتجاه واحد</h1>
          </div>
        </section>
        <article className="py-16 px-4 md:px-10 max-w-3xl mx-auto text-gray-700 space-y-5 leading-relaxed">
          <img src="/images/location-voiture-aeroport-maroc.webp" alt='كراء سيارة مراكش-مرزوكة: اتجاه واحد' className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg mb-8" />

          <p>
            هل تحلم بالوصول من مراكش إلى صحراء مرزوكة بحرية تامة؟ كراء سيارة غالباً حل مرن للاستمتاع بالمناظر والتوقف حيث تشاء والسفر على وتيرتك. كراء باتجاه واحد من مراكش إلى مرزوكة يسمح لك، عند توفر الشروط، بالانطلاق من مراكش وإرجاع السيارة في مرزوكة دون العودة لنقطة البداية. في هذا الدليل: كيف تحضّر الرحلة، تختار السيارة المناسبة، وتطلب عرضاً يناسب تواريخك.
          </p>
          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">من مراكش إلى مرزوكة بالسيارة: ما يجب معرفته</h2>
          <h3 className="text-lg font-semibold text-[var(--blue)]">المسافة والمسار</h3>
          <p>
            المسافة بين مراكش ومرزوكة تعتمد على المسار المختار والوقفات السياحية ونقاط الاستلام والإرجاع. مدة الرحلة تتغير حسب وتيرة القيادة والازدحام والطقس. يُفضّل التحقق من المسار قبل المغادرة وتأكيد التفاصيل مع الوكالة حسب التواريخ والسيارة والعقد.
          </p>
          <p>
            لتحضير المغادرة، راجع صفحة{" "}
            <Link href={lp("/location-voiture-marrakech")} className="text-[var(--red)] font-semibold hover:underline">كراء سيارات مراكش</Link>
            {" "}وصفحة{" "}
            <Link href={lp("/location-voiture-merzouga")} className="text-[var(--red)] font-semibold hover:underline">كراء سيارات مرزوكة</Link>.
          </p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">المحطات الرئيسية</h3>
          <p>
            رحلة برية بين مراكش ومرزوكة تتيح محطات مثل آيت بن حدو، ورزازات، وادي دادس، مضيق تودغا، أرفود ثم مرزوكة. ليست كلها إجبارية: المسار يجب أن يناسب وتيرتك والموسم وظروف سفرك.
          </p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">كيف تنظّم الرحلة؟</h3>
          <p>
            خطّط لاستراحات منتظمة، احجز بعض الإقامات مسبقاً واترك هامشاً في الجدول. حمّل خرائط دون اتصال وتحقق من الطقس قبل الانطلاق.
          </p>
          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">كراء باتجاه واحد مراكش–مرزوكة</h2>
          <p>
            <Link href={lp("/location-voiture-aller-simple")} className="text-[var(--red)] font-semibold hover:underline">الكراء باتجاه واحد</Link>
            {" "}يعني استلام السيارة في مراكش وإرجاعها في مرزوكة عند توفر العرض للتواريخ والطراز. الرسوم والشروط والتوفر يجب تأكيدها مع الوكالة قبل الحجز. راجع{" "}
            <Link href={lp("/conditions")} className="text-[var(--red)] font-semibold hover:underline">شروط الكراء</Link>.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-1">
            <li>مكان الاستلام بالضبط؛</li>
            <li>مكان الإرجاع بالضبط؛</li>
            <li>رسوم الاتجاه الواحد إن وُجدت؛</li>
            <li>الكيلومترات في العقد؛</li>
            <li>التأمين والتحمل؛</li>
            <li>مبلغ الوديعة؛</li>
            <li>أوقات الاستلام والإرجاع؛</li>
            <li>أي قيود على السيارة أو المسار.</li>
          </ul>
          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">أي سيارة تختار؟</h2>
          <p>
            سيارة صغيرة قد تكفي للطرق المعبدة مع أمتعة قليلة. السيدان أكثر راحة للمسافات. الـ SUV يوفّر مساحة ووضعية قيادة أعلى. ليس كل SUV دفع رباعي — تحقق من مواصفات الطراز. غالباً يُطلب{" "}
            <Link href={lp("/vehicules/dacia-duster")} className="text-[var(--red)] font-semibold hover:underline">داسيا داستر</Link>
            {" "}و{" "}
            <Link href={lp("/vehicules/hyundai-creta")} className="text-[var(--red)] font-semibold hover:underline">هيونداي كريتا</Link>
            {" "}و{" "}
            <Link href={lp("/vehicules/hyundai-tucson")} className="text-[var(--red)] font-semibold hover:underline">هيونداي توسان</Link>.
          </p>
          <p>
            القيادة على الكثبان أو بعض المسارات قد تكون ممنوعة أو غير مغطاة بالتأمين. لا تخرج عن الطرق المسموحة دون تأكيد واضح.
          </p>
          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">نصائح عملية</h2>
          <p>تحقق من الرخصة والهوية والعقد والتأمين. صوّر حالة السيارة قبل الانطلاق. خذ ماء واستراحات وخرائط دون اتصال.</p>
          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">كيف تحجز؟</h2>
          <ul className="list-disc list-inside space-y-2 ml-1">
            <li>تواريخ الاستلام والإرجاع؛</li>
            <li>مكان الاستلام في مراكش؛</li>
            <li>مكان الإرجاع في مرزوكة؛</li>
            <li>عدد المسافرين؛</li>
            <li>نوع السيارة؛</li>
            <li>وقت الاستلام المتوقع.</li>
          </ul>
          <div className="bg-gray-50 border rounded-xl p-4 text-sm space-y-1 my-4">
            <p>مرحباً، أرغب في كراء سيارة باتجاه واحد من مراكش إلى مرزوكة.</p>
            <p>التواريخ / الاستلام / الإرجاع / عدد المسافرين / نوع السيارة / الوقت:</p>
          </div>
          <p>
            راسلنا عبر{" "}
            <Link href={lp("/contact")} className="text-[var(--red)] font-semibold hover:underline">اتصل بنا</Link>
            {" "}أو واتساب.
          </p>
          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">أسئلة شائعة</h2>
          <h3 className="text-lg font-semibold text-[var(--blue)]">هل يمكن الاستلام في مراكش والإرجاع في مرزوكة؟</h3>
          <p>نعم عند توفر الكراء باتجاه واحد. الشروط والرسوم تُؤكَّد حسب التواريخ والسيارة والعقد.</p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">هل الاتجاه الواحد متاح لكل السيارات؟</h3>
          <p>ليس بالضرورة. بعض الطرازات لها شروط خاصة. أكّد التوفر مع الوكالة.</p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">هل يُسمح بالقيادة على الكثبان؟</h3>
          <p>قد تكون ممنوعة أو غير مؤمَّنة. راجع الشروط قبل المغادرة.</p>
          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">الخاتمة</h2>
          <p>
            كراء باتجاه واحد من مراكش إلى مرزوكة يمكن أن يسهّل رحلتك في جنوب المغرب. حضّر المسار واختر سيارة مناسبة وتحقق من الشروط قبل التأكيد. تواصل مع Fadma Hsayn Cars عبر واتساب لعرض يناسب تواريخك.
          </p>

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
