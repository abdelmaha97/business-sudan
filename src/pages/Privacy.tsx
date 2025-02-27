import { Footer } from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-40 bg-[#003979] relative overflow-hidden mt-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230055b3' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.1
        }} />
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <h1 className="text-3xl font-bold text-white text-center max-w-2xl">سياسة الخصوصية</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16 max-w-4xl mx-auto">
          <div className="space-y-10 text-right">
            <section>
              <p className="text-gray-700 leading-relaxed">
                نرحب بكم في نافذة التنمية والاستثمار، حيث نلتزم بحماية خصوصية زوارنا ومستخدمينا. تهدف هذه السياسة إلى توضيح كيفية جمع واستخدام وحماية المعلومات الشخصية عند استخدام موقعنا الإلكتروني. من خلال استخدامك لموقعنا، فإنك توافق على الممارسات الموضحة في هذه السياسة.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">جمع المعلومات</h2>
              <p className="text-gray-700 mb-4">نقوم بجمع المعلومات الشخصية بطرق متعددة، بما في ذلك على سبيل المثال لا الحصر:</p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">المعلومات التي تقدمها مباشرة:</h3>
                  <p className="text-gray-700">عند إنشاء حساب مستخدم، أو تقديم طلب خدمة إلكترونية، أو التواصل معنا عبر نموذج الاتصال، أو الاشتراك في النشرة الإخبارية.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">المعلومات التي يتم جمعها تلقائيًا:</h3>
                  <p className="text-gray-700">عند زيارة موقعنا، قد نقوم بجمع بيانات غير شخصية مثل عنوان IP، نوع المتصفح، نظام التشغيل، الصفحات التي تزورها، وتوقيت الزيارات.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">ملفات تعريف الارتباط (Cookies):</h3>
                  <p className="text-gray-700">نستخدم ملفات تعريف الارتباط لتحسين تجربة المستخدم، وتحليل أنماط الاستخدام، وتخصيص المحتوى.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">استخدام المعلومات</h2>
              <p className="text-gray-700 mb-4">نستخدم المعلومات التي نجمعها للأغراض التالية:</p>
              <ul className="list-disc list-inside space-y-2 mr-6 text-gray-700">
                <li>تقديم وتحسين الخدمات الإلكترونية المقدمة عبر الموقع.</li>
                <li>معالجة الطلبات والرد على الاستفسارات والتواصل معك بشأن الخدمات.</li>
                <li>إرسال التحديثات، والإشعارات، والمعلومات ذات الصلة.</li>
                <li>تحليل بيانات الاستخدام بهدف تحسين تجربة المستخدم.</li>
                <li>الامتثال للمتطلبات القانونية والتنظيمية.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">مشاركة المعلومات</h2>
              <p className="text-gray-700 mb-4">نحن نحترم خصوصيتك ولا نقوم ببيع أو تأجير معلوماتك الشخصية لطرف ثالث. قد نشارك معلوماتك في الحالات التالية:</p>
              <ul className="list-disc list-inside space-y-2 mr-6 text-gray-700">
                <li>مع الجهات الحكومية المختصة عند الضرورة للامتثال للقوانين واللوائح المعمول بها.</li>
                <li>مع مزودي الخدمات الذين يساعدوننا في تشغيل الموقع وتقديم الخدمات، مع ضمان التزامهم بمعايير الأمان والخصوصية.</li>
                <li>لحماية الحقوق عند الحاجة للكشف عن المعلومات لحماية حقوقنا القانونية أو تنفيذ السياسات الخاصة بنا.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">حماية المعلومات</h2>
              <p className="text-gray-700 leading-relaxed">
                نتخذ التدابير الأمنية المناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به، أو التعديل، أو الإفصاح، أو الإتلاف. تتضمن هذه التدابير استخدام تقنيات التشفير، وضوابط الوصول، والتدقيق المستمر لضمان حماية البيانات.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">حقوق المستخدمين</h2>
              <p className="text-gray-700 mb-4">لديك حقوق معينة تتعلق بمعلوماتك الشخصية، والتي تشمل:</p>
              <ul className="list-disc list-inside space-y-2 mr-6 text-gray-700">
                <li>حق الوصول: يمكنك طلب الوصول إلى المعلومات الشخصية التي نحتفظ بها عنك.</li>
                <li>حق التعديل: يمكنك طلب تصحيح أي معلومات غير دقيقة أو غير مكتملة.</li>
                <li>حق الحذف: يمكنك طلب حذف بياناتك الشخصية، وفقًا للأنظمة والسياسات المعمول بها.</li>
                <li>حق الاعتراض: يمكنك الاعتراض على استخدام بياناتك في بعض الحالات.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">ملفات تعريف الارتباط والتتبع</h2>
              <p className="text-gray-700 leading-relaxed">
                يستخدم موقعنا ملفات تعريف الارتباط وتقنيات مماثلة لتحسين التجربة، وتقديم محتوى مخصص، وجمع بيانات تحليلية. يمكنك ضبط إعدادات المتصفح لرفض ملفات تعريف الارتباط، ولكن قد يؤثر ذلك على بعض وظائف الموقع.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">روابط المواقع الخارجية</h2>
              <p className="text-gray-700 leading-relaxed">
                قد يحتوي موقعنا على روابط لمواقع أخرى. نحن غير مسؤولين عن ممارسات الخصوصية أو محتوى تلك المواقع، ونشجعك على مراجعة سياسات الخصوصية الخاصة بها.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">تحديث سياسة الخصوصية</h2>
              <p className="text-gray-700 leading-relaxed">
                قد نقوم بتحديث هذه السياسة من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة، وسنقوم بإخطارك بأي تغييرات جوهرية وفقًا للأنظمة المعمول بها.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">التواصل</h2>
              <p className="text-gray-700 leading-relaxed">
                في حال وجود أي استفسارات تتعلق بسياسة الخصوصية، يمكنكم التواصل معنا عبر قنوات الاتصال المتاحة على الموقع.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                باستخدامك لهذا الموقع، فإنك توافق على سياسة الخصوصية المذكورة أعلاه.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
