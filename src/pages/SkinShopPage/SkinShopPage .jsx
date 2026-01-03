// src/pages/SkinShopPage.jsx
// ========================================
// SKIN SHOP PAGE - Product Store
// ========================================

import { useState } from "react";
import { Section, Container, SectionHeader, Button } from "../../components/ui";
import shopData, { getProductsByCategory } from "../../data/shopData";

const SkinShopPage = () => {
  const { hero, categories, cta } = shopData;
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = getProductsByCategory(activeCategory);

  return (
    <main id="main-content" className="relative bg-background">
      {/* ====================
          1. HERO SECTION
      ==================== */}
      <Section
        background="transparent"
        padding="large"
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          {hero.image.src && !hero.image.placeholder?.show ? (
            <>
              <img
                src={hero.image.src}
                alt={hero.image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
            </>
          ) : (
            <div
              className={`absolute inset-0 bg-gradient-to-br ${hero.image.placeholder.gradient}`}
            />
          )}
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center py-12 lg:py-20">
            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white tracking-[0.3em] uppercase text-xs font-medium mb-6 rounded-full border border-white/30">
              {hero.badge}
            </span>
            <h1 className="backdrop-blur-xl bg-white/30 p-7 rounded-xl text-4xl">
              {hero.title}
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              {hero.description}
            </p>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </Section>

      {/* ====================
          2. CATEGORY FILTERS
      ==================== */}
      <Section background="white" padding="small">
        <Container>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  px-6 py-3 rounded-full font-body text-sm font-medium
                  transition-all duration-300 ease-out
                  ${
                    activeCategory === category.id
                      ? "bg-primary text-white shadow-md scale-105"
                      : "bg-surface text-text-secondary hover:bg-primary-50 hover:text-primary"
                  }
                `}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="text-center mt-6">
            <p className="text-sm text-text-muted">
              {filteredProducts.length} product
              {filteredProducts.length !== 1 ? "s" : ""}
            </p>
          </div>
        </Container>
      </Section>

      {/* ====================
          3. PRODUCTS GRID
      ==================== */}
      <Section background="white" padding="default">
        <Container>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="group card card-hover p-0 overflow-hidden"
                  style={{
                    animation: "slideUp 0.5s ease-out backwards",
                    animationDelay: `${index * 0.05}s`,
                  }}
                >
                  {/* Badge */}
                  {/* {product.badge && (
                    <div className="absolute top-3 left-3 px-2 py-1 bg-primary text-white text-xs font-semibold uppercase tracking-wide rounded-full z-10">
                      {product.badge}
                    </div>
                  )} */}

                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden bg-surface">
                    <img
                      src={product.image.src}
                      alt={product.image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 space-y-2">
                    {/* Brand */}
                    <div className="text-xs text-text-muted uppercase tracking-wider">
                      {product.brand}
                    </div>

                    {/* Name */}
                    <h3 className="font-display text-base text-text-primary group-hover:text-primary transition-colors line-clamp-2">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-text-muted line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Price & Size */}
                    <div className="flex items-baseline justify-between pt-2">
                      <span className="text-xl font-display text-primary">
                        ${product.price}
                      </span>
                      <span className="text-xs text-text-muted">
                        {product.size}
                      </span>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="w-full mt-3 px-4 py-2 bg-primary-50 text-primary text-sm font-medium rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-text-muted text-lg">
                No products found in this category.
              </p>
            </div>
          )}
        </Container>
      </Section>

      {/* ====================
          4. WHY SHOP WITH US
      ==================== */}
      <Section background="surface" padding="default">
        <Container>
          <SectionHeader
            title="Why Shop With Us?"
            description="Experience the Radina difference."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: "shield",
                title: "Medical-Grade",
                description: "Professional quality products",
              },
              {
                icon: "check",
                title: "Expert Curated",
                description: "Selected by our professionals",
              },
              {
                icon: "truck",
                title: "Fast Delivery",
                description: "Quick shipping to your door",
              },
              {
                icon: "support",
                title: "Expert Support",
                description: "Skincare advice included",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="text-center"
                style={{
                  animation: "slideUp 0.5s ease-out backwards",
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-lg text-text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ====================
          5. CTA SECTION
      ==================== */}
      <Section background="primary" padding="default">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl text- mb-4">{cta.title}</h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              {cta.description}
            </p>
            <Button
              to={cta.buttonLink}
              variant="secondary"
              size="large"
              className="mx-auto"
            >
              {cta.buttonText}
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default SkinShopPage;
