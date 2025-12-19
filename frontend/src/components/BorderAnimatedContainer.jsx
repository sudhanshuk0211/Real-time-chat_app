const BorderAnimatedContainer = ({ children }) => {
  return (
    <div className="border-animated-wrapper h-full">
      <div className="border-animated-glow" aria-hidden />
      <div className="border-animated-inner">
        <div className="relative z-10 h-full rounded-3xl p-[1px]">
          <div className="h-full rounded-3xl bg-slate-950/70 border border-slate-800/70 shadow-2xl">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorderAnimatedContainer;

