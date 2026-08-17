export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto w-full max-w-5xl px-6 py-12">
      <div className="flex flex-col items-center gap-2 border-t border-border pt-8 text-center text-[0.8rem] text-muted sm:flex-row sm:justify-between sm:text-left">
        <p>Miruo Lin · {year}</p>
        <p>
          Thanks for visiting! Source on{" "}
          <a
            href="https://github.com/miruomoo/miruolin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg transition-opacity hover:opacity-60"
          >
            GitHub ↗
          </a>
        </p>
      </div>
    </footer>
  );
}
