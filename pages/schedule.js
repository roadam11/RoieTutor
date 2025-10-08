import Head from 'next/head';
import { useEffect } from 'react';
import SubjectLayout from '../components/SubjectLayout'; // שימוש בקומפוננטת הבסיס המעוצבת שלנו

export default function SchedulePage() {
 <!-- Calendly inline widget begin -->
<div class="calendly-inline-widget" data-url="https://calendly.com/roadam11/meet-with-me" style="min-width:320px;height:700px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
<!-- Calendly inline widget end -->
  const calendlyEmbedCode = `
    <!-- Calendly inline widget begin -->
    <div class="calendly-inline-widget" data-url="https://calendly.com/your-username/your-event" style="min-width:320px;height:700px;"></div>
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
        {/* Calendly דורש את הסקריפט הזה כדי לעבוד */}
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </Head>

      <SubjectLayout
        title="תיאום שיעור אונליין"
        subtitle="בחרו את המועד המתאים לכם מהשעות הפנויות ביומן. לאחר הקביעה, תקבלו אישור למייל והשיעור יתווסף אוטומטית ליומן שלכם."
        icon="📅"
        gradient="from-sky-200/40 to-blue-100/0 dark:from-sky-500/10 dark:to-transparent"
        accent="#0ea5e9"
      >
        {/* כאן אנו מטמיעים את היומן של Calendly.
          אנו משתמשים ב-dangerouslySetInnerHTML כדי להכניס HTML ישירות. 
          זה בטוח במקרה הזה כי הקוד מגיע ממקור אמין (Calendly).
        */}
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
```

**הסבר חשוב:** שים לב לשורה `dangerouslySetInnerHTML`. בריאקט, זו הדרך הסטנדרטית להכניס קטע HTML חיצוני לתוך עמוד. השם ה"מפחיד" שלה נועד להזכיר למפתחים להשתמש בה רק עם תוכן ממקורות שהם סומכים עליהם, כמו Calendly.

---

### **שלב 5: קישור לעמוד החדש מהאתר**

העמוד שלנו מוכן, אבל אף אחד לא יכול להגיע אליו. עלינו לעדכן את הכפתורים הראשיים באתר כך שיפנו לעמוד החדש.

**מה לעשות:**
1.  פתח לעריכה את הקובץ `pages/index.js`.
2.  מצא את ה-`<header>` (התפריט העליון) ושנה את הקישור של הכפתור הראשי:

    **החלף את השורה הזו:**
    ```html
    <a href="#quick" className="hidden md:inline-block ...">קבעו שיעור ניסיון</a>
    ```
    **בשורה הזו:**
    ```html
    <a href="/schedule" className="hidden md:inline-block ...">קביעת שיעור אונליין</a>
    ```

3.  נעדכן גם את הקישורים האחרים. למשל, בקומפוננטה `Hero.js`, חפש את הכפתור הראשי ושנה גם אותו:

    **החלף את השורה הזו:**
    ```html
    <a href="#quick" className="px-5 py-3 ...">קבעו שיעור ניסיון עכשיו</a>
    ```
    **בשורה הזו:**
    ```html
    <a href="/schedule" className="px-5 py-3 ...">קביעת שיעור אונליין</a>
    
