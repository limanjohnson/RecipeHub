import Button from "@/components/Button";

export default function HomePage() {
  return (
    <div className="flex-col gap-8 p-8">
      <section>
        <h1 className="font-bold text-4xl">Welcome to RecipeHub</h1>
        <p>Create, share, and discover recipes from home cooks everywhere.</p>
        <div className="mt-4 flex flex-row gap-4">
          <Button variant="primary" href="/recipes">Browse Recipes</Button>
          <Button variant="secondary" href="/register">Get Started</Button>
        </div>
      </section>

      <section className="mt-16">
        <h2>Featured Recipes</h2>
        {/* TODO: Fetch and display recent recipes */}
        <p>Coming soon...</p>
      </section>
    </div>
  );
}