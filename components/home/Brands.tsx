export function Brands() {
  return (
    <section className="w-full bg-primary/10 py-12">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-primary-foreground mb-8">
          Why Shop With Phool Butey Nepal?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-xl">Handmade</h3>
            <p className="text-muted-foreground mt-2">
              Each product is handmade with love and care by skilled artisans.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Worldwide Shipping</h3>
            <p className="text-muted-foreground mt-2">
              We offer worldwide shipping to bring our products to your doorstep.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Easy Exchange</h3>
            <p className="text-muted-foreground mt-2">
              We offer easy exchanges within 3 days of receiving your order.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
