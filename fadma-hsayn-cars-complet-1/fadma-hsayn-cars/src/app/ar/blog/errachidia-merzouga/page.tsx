import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { pageMetadata } from "@/lib/seo";

const PAGE_URL = "https://fadmahsayncars.com/ar/blog/errachidia-merzouga";
const TITLE = "كراء سيارة الرشيدية–مرزوكة: المطار والصحراء";
const DESCRIPTION =
  "اكتر سيارة من مطار الرشيدية إلى مرزوكة: المسار، الاتجاه الواحد، توصيل 500 درهم ونصائح عملية مع Fadma Hsayn Cars.";

export const metadata: Metadata = pageMetadata({
  locale: "ar",
  path: "/blog/errachidia-merzouga",
  title: TITLE,
  description: DESCRIPTION,
  image: "/images/location-voiture-errachidia.webp",
});

const faqItems = [
  { q: "هل يمكن الاستلام في مطار الرشيدية والإرجاع في مرزوكة؟", a: "نعم حسب التوفر. خيار اتجاه واحد شائع. أكّد الرسوم والأوقات مع الوكالة." },
  { q: "كم تكلفة التوصيل في مطار الرشيدية؟", a: "توصيل المطار في الرشيدية بـ 500 درهم." },
  { q: "كم تستغرق الرحلة من الرشيدية إلى مرزوكة؟", a: "غالباً حوالي ساعتين حسب التوقفات والظروف. فضّل القيادة نهاراً." },
  { q: "أي سيارة للرشيدية–مرزوكة؟", a: "غالباً تُفضَّل SUV؛ الحضرية والسيدان قد تناسب الطرق المعبّدة. اسأل الوكالة لتواريخك." },
  { q: "ماذا أرسل على واتساب؟", a: "رقم الرحلة ووقت الوصول، تواريخ الكراء، مكان الإرجاع، المسافرون ونوع السيارة." },
];

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: TITLE,
    description: DESCRIPTION,
    image: "https://fadmahsayncars.com/images/location-voiture-errachidia.webp",
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
              { name: "الرشيدية ← مرزوكة", url: PAGE_URL },
            ]} />
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">{TITLE}</h1>
            <p className="text-lg text-white/90 max-w-2xl">استلام المطار، الطريق نحو الصحراء وخيارات الاتجاه الواحد.</p>
          </div>
        </section>

        <article className="py-16 px-4 md:px-10 max-w-3xl mx-auto text-gray-700 space-y-5 leading-relaxed">
          <div className="mb-8">
            <img src="/images/location-voiture-errachidia.webp" alt="كراء سيارة الرشيدية مرزوكة" className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg" />
          </div>
          <p>مطار الرشيدية (مولاي علي الشريف) بوابة عملية نحو مرزوكة وإرغ شبي. كراء سيارة عند الوصول يتيح لك بلوغ الكثبان بإيقاعك والتوقف في القرى دون الاعتماد على نقل جماعي فقط. تقدم Fadma Hsayn Cars التوصيل في المطار وخيار الإرجاع في مرزوكة عندما تسمح الشروط.</p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">الرشيدية إلى مرزوكة بالسيارة</h2>
          <h3 className="text-lg font-semibold text-[var(--blue)]">المسار والمدة</h3>
          <p>الطريق من الرشيدية نحو مرزوكة مسار جنوبي كلاسيكي. مدة القيادة غالباً حوالي ساعتين حسب التوقفات والطقس. فضّل النهار وتحقق من الظروف قبل الانطلاق.</p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">توصيل المطار</h3>
          <p>توصيل مطار الرشيدية بـ 500 درهم. أرسل رقم الرحلة ووقت الوصول لتنظيم التسليم بسلاسة.</p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">لماذا هذا الخيار؟</h3>
          <p>الهبوط في الرشيدية يقصّر الوصول للصحراء مقارنة بالقيادة من مراكش في نفس اليوم. مع سيارة كراء تحافظ على استقلاليتك حول إرغ شبي.</p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">اتجاه واحد الرشيدية ← مرزوكة</h2>
          <h3 className="text-lg font-semibold text-[var(--blue)]">كيف يعمل؟</h3>
          <p>استلام في الرشيدية (المطار أو المدينة) وإرجاع في الوكالة الرئيسية بمرزوكة. التوفر حسب التواريخ والسيارة. قد يُطبق مكمل — اطلب تأكيداً كتابياً (واتساب) قبل الحجز.</p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">شروط للتحقق</h3>
          <ul className="list-disc list-inside space-y-2 ml-1">
            <li>نقاط الاستلام والإرجاع؛</li>
            <li>رسوم توصيل المطار (500 درهم)؛</li>
            <li>الوديعة (20 000 درهم)؛</li>
            <li>التأمين والكيلومترات؛</li>
            <li>أي مكمل اتجاه واحد؛</li>
            <li>قواعد الإلغاء (مجاني حتى 48 ساعة قبل).</li>
          </ul>
          <p><Link href="/ar/conditions" className="text-[var(--red)] font-semibold hover:underline">شروط الكراء</Link></p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">أي سيارة؟</h2>
          <p>غالباً تُقدَّر سيارات SUV (داستر، كريتا، توسان…) لطرق الجنوب. الحضرية والسيدان قد تناسب مسارات معبّدة. للعائلات اسأل عن 7 مقاعد عند التوفر.</p>

          <h2 className="text-xl font-bold text-[var(--blue)] pt-4">معلومات عملية</h2>
          <h3 className="text-lg font-semibold text-[var(--blue)]">الوثائق</h3>
          <p>رخصة سارية منذ سنتين على الأقل. تُقبل الرخصة الوطنية للأجانب. بطاقة أو جواز مطلوب. الدفع نقداً أو بالبطاقة.</p>
          <h3 className="text-lg font-semibold text-[var(--blue)]">مثال واتساب</h3>
          <div className="bg-gray-50 border rounded-xl p-5 text-sm whitespace-pre-line">
            {`مرحبا، أهبط في مطار الرشيدية وأريد كراء نحو مرزوكة.
الرحلة: ...
وقت الوصول: ...
التواريخ: ...
الإرجاع: مرزوكة
المسافرون: ...
السيارة: ...`}
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
            <h2 className="text-2xl font-extrabold mb-3">تهبط في الرشيدية؟</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">تواصل مع Fadma Hsayn Cars عبر واتساب لتأكيد التوفر وتوصيل المطار والشروط نحو مرزوكة.</p>
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
