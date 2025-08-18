export default function FloatingWA() {
  const msg = encodeURIComponent('שלום רועי! אשמח לתאם שיעור :)');
  const url = `https://wa.me/972549480190?text=${msg}`;

  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        aria-label="פתח וואטסאפ לתיאום מהיר"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 px-4 py-3 rounded-2xl shadow-lg bg-[#25D366] text-white hover:scale-[1.03] active:scale-[0.99] transition"
      >
        <span className="text-xl">🟢</span>
        <span className="hidden sm:inline font-semibold">וואטסאפ • תיאום מהיר</span>
      </a>

      {/* Tooltip עדין במובייל/דסקטופ */}
      <style jsx>{`
        a:hover::after {
          content: 'דברו איתי עכשיו';
          position: absolute;
          right: 0;
          bottom: 56px;
          white-space: nowrap;
          background: rgba(0,0,0,.75);
          color: #fff;
          font-size: 12px;
          padding: 6px 10px;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
}
