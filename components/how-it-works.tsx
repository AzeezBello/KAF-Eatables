import { MessageCircle, ShoppingBag, UtensilsCrossed } from "lucide-react";
import { Container, Eyebrow } from "./ui";

const steps = [
  { icon: ShoppingBag, title: "Pick your food", text: "Browse the menu and add what you want. No account, no app." },
  { icon: MessageCircle, title: "Send it on WhatsApp", text: "Your order opens as a ready-made message. Add your name and address." },
  { icon: UtensilsCrossed, title: "We cook and deliver", text: "We confirm the total, cook fresh and deliver or have it ready for pickup." },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-14 sm:py-20" aria-labelledby="how-heading">
      <Container>
        <div className="text-center">
          <Eyebrow>How it works</Eyebrow>
          <h2 id="how-heading" className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            Three steps. Zero hassle.
          </h2>
        </div>
        <ol className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-6">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="relative rounded-3xl bg-paper p-6 ring-1 ring-ink/5">
              <span className="absolute right-5 top-4 text-5xl font-black text-gold/25" aria-hidden="true">
                {i + 1}
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-gold">
                <Icon size={22} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-black">{title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-ink/60">{text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
