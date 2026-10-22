import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { pageMetadata } from "@/lib/seo";

const PAGE_URL = "https://fadmahsayncars.com/ar/blog/marrakech-merzouga";
const TITLE = "كراء سيارة مراكش–مرزوكة: دليل الاتجاه الواحد";
const DESCRIPTION =
  "تخطط لكراء باتجاه واحد من مراكش إلى مرزوكة؟ المسار، اختيار السيارة، الشروط ونصائح الحجز مع Fadma Hsayn Cars.";

export const metadata: Metadata = pageMetadata({
  locale: "ar",
  path: "/blog/marrakech-merzouga",
  title: TITLE,
  description: DESCRIPTION,
  image: "/images/location-voiture-aeroport-maroc.webp",
});

const faqItems = [
  { q: "هل يمكن الكراء في مراكش والإرجاع في مرزوكة؟", a: "نعم، قد يكون كراء باتجاه واحد. الإمكانية والرسوم والشروط حسب التواريخ والسيارة والعقد — أكّد مع الوكالة قبل الحجز." },
  { q: "أي سيارة لرحلة مراكش–مرزوكة؟", a: "حضرية أو سيدان أو SUV حسب الركاب والأمتعة والطرق. غالباً تُفضَّل SUV للجنوب. اطلب نصيحة الوكالة." },
  { q: "هل الاتجاه الواحد متاح لكل السيارات؟", a: "ليس دائماً. التوفر حسب الأسطول والجدول. أكّد قبل الحجز." },
  { q: "كم تكلفة التوصيل في مطار مراكش؟", a: "توصيل مطار مراكش المنارة بـ 1200 درهم." },
  { q: "ماذا أرسل عبر واتساب؟", a: "التواريخ، مكان الاستلام والإرجاع، عدد المسافرين، نوع السيارة والوقت المفضل." },
];

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: TITLE,
    description: DESCRIPTION,
    image: "https://fadmahsayncars.com/images/location-voiture-aeroport-maroc.webp",
    author: { "@type": "Organization", name: "Fadma Hsayn Cars" },
    publisher: { "@type": "Organization", name: "Fadma Hsayn Cars", logo: { "@type": "ImageObject", url: "https://fadmahsayncars.com/images/logo-fadma-hsayn-cars.webp" } },
    mainEntityOfPage: PAGE_URL,
    inLanguage: "ar",
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <Navbar locale="ar" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="mt-[70px]">
        <section className="bg-gradient-to-r from-[var(--blue)] to-[#0d1a3a] text-white py-16 px-4 md:px-10">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb items={[
              { name: "الرئيسية", url: "https://fadmahsayncars.com/ar" },
              { name: "المدونة", url: "https://fadmahsayncars.com/ar/blog" },
              { name: "مراكش ← مرزوكة", url: PAGE_URL },
            ]} />
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">{TITLE}</h1>
            <p className="text-lg text-white/90 max-w-2xl">المسار، اختيار السيارة والكراء باتجاه واحد بين مراكش ومرزوكة.</p>
          </div>
        </section>

        <article className="py-16 px-4 md:px-10 max-w-3xl mx-auto text-gray-700 space-y-5 leading-relaxed">
          <div className="mb-8">
            <img src="/images/location-voiture-aeroport-maroc.webp" alt="كراء سيارة مراكش مرزوكة" className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg" />
          </div>

          <p>
            تحلم بربط مراكش بصحراء مرزوكة بحرية تامة؟ كراء سيارة غالباً الحل الأكثر مرونة للاستمتاع بالمناظر والتوقف حيث تشاء والسفر بإيقاعك. الكراء باتجاه واحد من مراكش إلى مرزوكة يتيح لك البدء في مراكش وإرجاع السيارة في مرزوكة دون العودة لنقطة البداية — عندما تسمح الشروط. هذا الدليل يشرح كيفية تحضير الرحلة واختيار السيارة وطلب عرض يناسب تواريخك.
          </p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">مراكش إلى مرزوكة بالسيارة: ما يجب معرفته</h2>
          <h3 className="text-lg font-semibold text-[var(--blue)]">المسافة والمسار</h3>
          <p>المسافة بين مراكش ومرزوكة حسب المسار والتوقفات ونقاط الاستلام والإرجاع. مدة القيادة غالباً يوم كامل مع الاستراحات. خطط للقيادة نهاراً وتجنب الاستعجال في الجبال أو الصحراء.</p>
          <p>المسارات الشائعة تعبر الأطلس الكبير والجنوب (مثلاً عبر ورزازات ووديان درعة أو زيز حسب المسار). تحقق دائماً من حالة الطرق والطقس قبل الانطلاق.</p>

          <h3 className="text-lg font-semibold text-[var(--blue)]">لماذا كراء سيارة لهذه الرحلة؟</h3>
          <p>السيارة تمنحك حرية التوقف عند القصبات والمناظر والقرى. مقارنة بحافلة بمواعيد ثابتة، تختار إيقاعك. الكراء باتجاه واحد (مراكش ← مرزوكة) يجنب إرجاع السيارة لنقطة البداية إن واصلت الإقامة في الصحراء.</p>
          <p>النقل الخاص مع سائق يبقى بديلاً إن فضّلت عدم القيادة. أي رسوم للإرجاع في مدينة أخرى والشروط والتوفر يجب تأكيدها مع الوكالة قبل الحجز.</p>

          <h3 className="text-lg font-semibold text-[var(--blue)]">شروط يجب التحقق منها قبل الحجز</h3>
          <p>قبل تأكيد كراء باتجاه واحد، تحقق من:</p>
          <ul className="list-disc list-inside space-y-2 ml-1">
            <li>مكان الاستلام بالضبط؛</li>
            <li>مكان الإرجاع بالضبط؛</li>
            <li>أي رسوم إرجاع في مدينة أخرى؛</li>
            <li>شروط الكيلومترات في العقد؛</li>
            <li>التأمين وأي تحمل؛</li>
            <li>مبلغ الوديعة؛</li>
            <li>أوقات الاستلام والإرجاع؛</li>
            <li>أي قيود على السيارة أو المسار.</li>
          </ul>
          <p>
            للاطلاع على القواعد، راجع{" "}
            <Link href="/ar/conditions" className="text-[var(--red)] font-semibold hover:underline">شروط الكراء</Link>
            {" "}واطلب تأكيداً واضحاً قبل الحجز.
          </p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">أي سيارة لمراكش–مرزوكة؟</h2>
          <h3 className="text-lg font-semibold text-[var(--blue)]">حضرية أو سيدان</h3>
          <p>السيارة الحضرية قد تناسب طرقاً معبّدة غالباً مع أمتعة خفيفة وعدد محدود من المسافرين. السيدان توفر راحة ومساحة أكبر للمسافات الطويلة.</p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">SUV: راحة وتعدد استخدامات</h3>
          <p>غالباً تُفضَّل SUV (مثل داسيا داستر أو هيونداي كريتا أو توسان) لطرق الجنوب والاقتراب من مرزوكة. ارتفاع أكبر ومساحة تساعد مع الأمتعة. أكّد مع الوكالة إن كانت المسارات أو الكثبان مسموحة للطراز المختار.</p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">خيارات عائلية و7 مقاعد</h3>
          <p>للمجموعات الأكبر، سيارة 7 مقاعد مثل داسيا جوغر قد تناسب عند التوفر. احجز مبكراً في الموسم المرتفع.</p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">كراء باتجاه واحد مراكش ← مرزوكة</h2>
          <h3 className="text-lg font-semibold text-[var(--blue)]">كيف يعمل؟</h3>
          <p>تستلم في مراكش (المطار أو نقطة متفق عليها) وترجع في مرزوكة عند الوكالة. توصيل مطار مراكش المنارة بـ 1200 درهم. الوكالة الرئيسية في مرزوكة. قد يُطبق مكمل للاتجاه الواحد حسب التواريخ والسيارة.</p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">لمن يناسب؟</h3>
          <p>مثالي إن هبطت في مراكش وقدت نحو الصحراء وأقمت في مرزوكة دون العودة شمالاً بنفس السيارة. مفيد أيضاً لرحلات الجنوب المنتهية عند إرغ شبي.</p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">نصائح عملية</h2>
          <h3 className="text-lg font-semibold text-[var(--blue)]">الوثائق والوديعة</h3>
          <p>رخصة سارية منذ سنتين على الأقل؛ تُقبل الرخصة الوطنية للأجانب. وديعة 20 000 درهم (نقد أو شيك أو بطاقة) تُسترجع إن لم يُلاحظ ضرر. تأمين مشمول؛ كيلومترات غير محدودة وفق الشروط. إلغاء مجاني حتى 48 ساعة قبل الاستلام.</p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">الوقود والراحة والسلامة</h3>
          <p>املأ الخزان في المدن الكبرى. خطط لاستراحات. قد بحذر في الجبال وتجنب القيادة ليلاً قدر الإمكان. احترم قوانين السير.</p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">كيف تطلب عرض سعر؟</h2>
          <h3 className="text-lg font-semibold text-[var(--blue)]">معلومات جهّزها</h3>
          <p>أرسل: تاريخ ومكان الاستلام، تاريخ ومكان الإرجاع، عدد المسافرين، نوع السيارة، ووقت وصول الرحلة إن احتجت توصيل المطار.</p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">مثال رسالة واتساب</h3>
          <div className="bg-gray-50 border rounded-xl p-5 text-sm whitespace-pre-line">
            {`مرحبا، أرغب في كراء باتجاه واحد من مراكش إلى مرزوكة.
التواريخ: ...
الاستلام: مطار مراكش / المدينة
الإرجاع: مرزوكة
المسافرون: ...
السيارة: SUV / سيدان / ...`}
          </div>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">أسئلة شائعة</h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-5 shadow-sm bg-white">
                <h3 className="text-lg font-semibold text-[var(--blue)]">{item.q}</h3>
                <p className="mt-2">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-[var(--blue)] to-[#0d1a3a] text-white rounded-2xl text-center">
            <h2 className="text-2xl font-extrabold mb-3">مستعد لتخطيط مراكش ← مرزوكة؟</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">تواصل مع Fadma Hsayn Cars عبر واتساب للتحقق من الشروط والسيارات المتوفرة وعرض لتواريخك.</p>
            <a href="https://wa.me/212661371670" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[var(--red)] text-white font-bold px-8 py-3 rounded-lg">
              اطلب عرضاً عبر واتساب <i className="fa-brands fa-whatsapp text-xl" />
            </a>
          </div>
        </article>
      </main>
      <Footer locale="ar" />
      <a href="https://wa.me/212661371670" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center text-2xl shadow-lg" aria-label="WhatsApp">
        <i className="fa-brands fa-whatsapp" />
      </a>
    </>
  );
}
