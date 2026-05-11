import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enter Password — Connor O'Hearn",
  robots: { index: false, follow: false },
};

type SearchParams = {
  from?: string | string[];
  error?: string | string[];
};

function first(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) return value[0];
  return value;
}

export default function LoginPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const from = first(searchParams.from) ?? "/";
  const hasError = first(searchParams.error) === "1";

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-[#0f0f10] text-neutral-100 px-6">
      <div className="w-full max-w-sm">
        <div className="mb-10 text-center">
          <div className="font-serif text-2xl tracking-tight text-neutral-100">
            Connor O&apos;Hearn
          </div>
          <div
            className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500"
          >
            Private Portfolio
          </div>
        </div>

        <form
          action="/api/login"
          method="post"
          className="flex flex-col gap-4"
          autoComplete="off"
        >
          <input type="hidden" name="from" value={from} />
          <label className="sr-only" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter Password"
            autoFocus
            required
            className="w-full rounded-md bg-neutral-900/80 border border-neutral-800 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 px-4 py-3 text-base placeholder:text-neutral-500 transition-colors"
          />
          <button
            type="submit"
            className="w-full rounded-md bg-neutral-100 text-neutral-900 font-medium px-4 py-3 hover:bg-white transition-colors"
          >
            Continue
          </button>
          {hasError ? (
            <p className="text-sm text-red-400 text-center mt-1">
              Incorrect password. Try again.
            </p>
          ) : null}
        </form>
      </div>
    </main>
  );
}
