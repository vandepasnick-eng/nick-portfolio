import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Nicholas Van De Pas",
  description: "Get in touch — LinkedIn or email.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-20 pt-24">
      <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
        Contact
      </h1>
      <p className="mt-4 text-text-secondary">
        Want to work together, collaborate on something, or just say hi? I&apos;m always open
        to interesting conversations.
      </p>

      <div className="mt-10 space-y-6">
        <a
          href="https://www.linkedin.com/in/nicholas-van-de-pas-b0538a134/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-lg border border-border p-5 transition-colors hover:border-accent hover:bg-accent-light"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-light">
            <span className="text-lg font-bold text-accent">in</span>
          </div>
          <div>
            <p className="font-medium">LinkedIn</p>
            <p className="text-sm text-text-secondary">
              Connect with me on LinkedIn
            </p>
          </div>
        </a>

        <a
          href="https://nicholasvandepas.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-lg border border-border p-5 transition-colors hover:border-accent hover:bg-accent-light"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-light">
            <span className="text-lg font-bold text-accent">NV</span>
          </div>
          <div>
            <p className="font-medium">NZ Web Design for Trades</p>
            <p className="text-sm text-text-secondary">
              My web design business — nicholasvandepas.com
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
