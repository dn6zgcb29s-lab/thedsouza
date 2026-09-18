export default function CurrentlyBuilding() {
  return (
    <article
      aria-labelledby="currently-building-heading"
      className="mb-12 border border-sky-400/30 border-l-2 bg-slate-950/70 p-6 sm:p-8"
    >
      <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
        <span
          aria-hidden="true"
          className="h-2 w-2 shrink-0 rounded-full bg-sky-400"
        />
        <span>Currently building</span>
      </div>

      <h3
        id="currently-building-heading"
        className="mt-5 text-2xl font-bold leading-tight text-white sm:text-3xl"
      >
        Something new is taking shape.
      </h3>

      <p className="mt-5 break-words font-mono text-lg font-medium text-sky-300 sm:text-xl">
        thebharattalent.com
      </p>

      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
        A new digital platform is being built from the ground up to explore a
        better way for talent and opportunity to connect. Development is
        underway, with more to be revealed as the product matures.
      </p>

      <p className="mt-6 text-sm font-medium text-slate-400">
        Private build • More to come
      </p>
    </article>
  );
}
