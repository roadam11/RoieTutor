import Head from 'next/head';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SubjectLayout from '../components/SubjectLayout';

// --- אייקונים חדשים לשלבים ---
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);
const FormIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
);
const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);

// --- קומפוננטה משודרגת להצגת שלבי התהליך ---
function ScheduleStepsTimeline() {
    const steps = [
        { icon: <CalendarIcon />, title: "בחרו מועד", description: "עיינו ביומן ובחרו את היום והשעה הנוחים לכם ביותר מהזמנים הפנויים." },
        { icon: <FormIcon />, title: "מלאו פרטים", description: "הזינו את שמכם, כתובת המייל שלכם, וענו על מספר שאלות קצרות שיעזרו לי להתכונן לשיעור." },
        { icon: <CheckIcon />, title: "קבלו אישור", description: "זהו! תקבלו אישור הזמנה למייל עם כל הפרטים, והשיעור ישוריין אוטומטית ביומן של שנינו." }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="relative space-y-8"
        >
            {/* הקו האנכי שמחבר בין השלבים */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-700"></div>

            {steps.map((step, index) => (
                <motion.div key={index} variants={itemVariants} className="relative flex flex-col items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-tealBrand text-white z-10 ring-8 ring-white dark:ring-ink">
                        {step.icon}
                    </div>
                    <div className="text-center mt-4">
                        <h3 className="font-bold text-xl">{step.title}</h3>
                        <p className="text-slate-600 dark:text-slate-300 max-w-xs">{step.description}</p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}


export default function SchedulePage() {
  const [isLoading, setIsLoading] = useState(true);

  const calendlyEmbedCode = `
    <div 
      class="calendly-inline-widget" 
      data-url="https://calendly.com/roadam11/meet-with-me" 
      style="min-width:320px;height:700px;"
    ></div>
  `;

  useEffect(() => {
    document.documentElement.setAttribute('dir', 'rtl');
    
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
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

        <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12">איך זה עובד? שלוש פעולות פשוטות</h2>
            <div className="max-w-md mx-auto">
              <ScheduleStepsTimeline />
            </div>
        </div>
      </SubjectLayout>
    </>
  );
}

