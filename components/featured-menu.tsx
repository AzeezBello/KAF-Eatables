import { ArrowRight } from "lucide-react";
import { products } from "@/lib/products";
import { ProductCard } from "./product-card";
import { Container, Eyebrow, LinkButton } from "./ui";

/** Home page teaser: the most popular items with a link to the full menu. */
export function FeaturedMenu() {
  const featured = products.filter((p) => p.popular).slice(0, 4);
  return (
    <section className="bg-paper py-14 sm:py-20" aria-labelledby="featured-heading">
      <Container>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>Customer favourites</Eyebrow>
            <h2 id="featured-heading" className="mt-2 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              Start with the favourites.
            </h2>
            <p className="mt-3 max-w-md text-ink/60">The items people order again and again. Add them here or browse the full menu.</p>
          </div>
          <LinkButton href="/menu" variant="ink" className="self-start sm:self-auto">
            Full menu <ArrowRight size={16} aria-hidden="true" />
          </LinkButton>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
