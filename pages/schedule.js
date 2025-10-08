import Head from 'next/head';
import { useEffect } from 'react';
import SubjectLayout from '../components/SubjectLayout'; // שימוש בקומפוננטת הבסיס המעוצבת שלנו

export default function SchedulePage() {
  // --- תיקון כאן ---
  // הדבקנו את קוד ההטמעה שלך ישירות לתוך המשתנה, כפי שהוא צריך להיות.
  const calendlyEmbedCode = `
    <!-- Calendly inline widget begin -->
    <div class="calendly-inline-widget" data-url="https://calendly.com/roadam11/meet-with-me" style="min-width:320px;height:700px;"></div>
    <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
    <!-- Calendly inline widget end -->
  `;

  useEffect(() => {
    document.documentElement.setAttribute('dir', 'rtl');
  }, []);

  return (
    <>
      <Head>
        <title>קביעת שיעור אונליין | RoieTutor</title>
        <meta name="description" content="בחרו מועד פנוי וקבעו שיעור פרטי בזום או פרונטלי ישירות דרך היומן. פשוט, מהיר ונוח." />
      </Head>

      <SubjectLayout
        title="תיאום שיעור אונליין"
        subtitle="בחרו את המועד המתאים לכם מהשעות הפנויות ביומן. לאחר הקביעה, תקבלו אישור למייל והשיעור יתווסף אוטומטית ליומן שלכם."
        icon="📅"
        gradient="from-sky-200/40 to-blue-100/0 dark:from-sky-500/10 dark:to-transparent"
        accent="#0ea5e9"
      >
        {/* כאן אנו מטמיעים את היומן של Calendly */}
        <div 
          className="calendly-container" 
          dangerouslySetInnerHTML={{ __html: calendlyEmbedCode }}
        />
        
        <style jsx>{`
          .calendly-container :global(.calendly-inline-widget) {
            min-width: 320px;
            height: 700px;
            border-radius: 1.5rem; /* עיגול פינות כמו באתר */
            overflow: hidden;
            border: 1px solid rgba(0,0,0,0.1);
          }
        `}</style>
      </SubjectLayout>
    </>
  );
}

