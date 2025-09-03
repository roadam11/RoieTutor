export default function ValueStrip() {
  return (
    <div className="mb-10 rounded-2xl bg-gradient-to-r from-white/80 to-white/50 dark:from-white/5 dark:to-white/5 backdrop-blur ring-1 ring-tealBrand/20 p-5">
      <p className="text-slate-800 dark:text-slate-200">
        כל שיעור כולל: <span className="font-semibold">סיכומי שיעור מותאמים</span>, <span className="font-semibold">ליווי בין שיעורים</span> לשאלות קצרות (וואטסאפ/מייל), ו<span className="font-semibold">תכנית תרגול</span> לפי היעד.
      </p>
      <p className="mt-1 text-sm text-tealBrand font-semibold">שיעור ניסיון בזום — 50% הנחה.</p>
    </div>
  );
}
