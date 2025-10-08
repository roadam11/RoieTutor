import Head from 'next/head';
import { useEffect, useState } from 'react';
import SubjectLayout from '../components/SubjectLayout';

// קומפוננטה קטנה להצגת שלבי התהליך
function ScheduleStep({ number, title, description }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-tealBrand text-white flex items-center justify-center font-bold">
        {number}
      </div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-slate-600 dark:text-slate-300">{description}</p>
      </div>
    </div>
  );
}

export default function SchedulePage() {
  const [isLoading, setIsLoading] = useState(true);

  // קוד ההטמעה של Calendly
  const calendlyEmbedCode = `
    <div 
      class="calendly-inline-widget" 
      data-url="https://calendly.com/roadam11/meet-with-me" 
      style="min-width:320px;height:700px;"
    ></div>
  `;

  useEffect(() => {
    document.documentElement.setAttribute('dir', 'rtl');
    
    // טעינת הסקריפט של Calendly
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      // ברגע שהסקריפט נטען, אנו מניחים שהווידג'ט יתחיל להופיע
      // נאפשר לו עוד שנייה "להתבשל" לפני שמסתירים את הטעינה
      setTimeout(() => setIsLoading(false), 1000);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <title>קביעת שיעור אונליין | RoieTutor</title>
        <meta name="description" content="בחרו מועד פנוי וקבעו שיעור פרטי בזום או פרונטלי ישירות דרך היומן. פשוט, מהיר ונוח." />
      </Head>

      <SubjectLayout
        title="תיאום שיעור אונליין"
        subtitle="בחרו את המועד המתאים לכם מהשעות הפנויות ביומן. התהליך פשוט, מהיר ומאובטח."
        icon="📅"
        gradient="from-sky-200/40 to-blue-100/0 dark:from-sky-500/10 dark:to-transparent"
        accent="#0ea5e9"
      >
        <div className="relative rounded-2xl p-6 bg-white/70 dark:bg-white/5 backdrop-blur ring-1 ring-black/10 dark:ring-white/10">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/50 dark:bg-ink/50 backdrop-blur-sm z-10 rounded-2xl">
              <div className="text-center">
                <div className="w-8 h-8 border-4 border-tealBrand border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="mt-2 font-semibold">טוען את היומן...</p>
              </div>
            </div>
          )}
          <div dangerouslySetInnerHTML={{ __html: calendlyEmbedCode }} />
        </div>

        <div className="mt-12">
            <h2 className="text-2xl font-bold text-center mb-8">איך זה עובד? שלוש خطوات פשוטות</h2>
            <div className="space-y-6 max-w-2xl mx-auto">
                <ScheduleStep 
                    number="1"
                    title="בחרו מועד"
                    description="עיינו ביומן ובחרו את היום והשעה הנוחים לכם ביותר מהזמנים הפנויים."
                />
                <ScheduleStep 
                    number="2"
                    title="מלאו פרטים"
                    description="הזינו את שמכם, כתובת המייל שלכם, וענו על מספר שאלות קצרות שיעזרו לי להתכונן לשיעור."
                />
                <ScheduleStep 
                    number="3"
                    title="קבלו אישור"
                    description="זהו! תקבלו אישור הזמנה למייל עם כל הפרטים, והשיעור ישוריין אוטומטית ביומן של שנינו."
                />
            </div>
        </div>
      </SubjectLayout>
    </>
  );
}

