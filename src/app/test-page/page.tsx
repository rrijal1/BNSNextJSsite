import CTASection from "@/app/components/CTASection";
import Button from "@/app/components/Button";

export default function TestPage() {
  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Brand Styling Test Page</h1>

      {/* Text Color Styles */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Text Colors</h2>
        <div className="space-y-4">
          <p className="text-4xl text-brandBlue">
            This is the primary brand blue color.
          </p>
          <p className="text-2xl text-brandRed">
            This is the primary brand red color.
          </p>
          <p className="text-xl text-brandGrey">
            This is the brand grey color.
          </p>
          <p className="text-2xl text-brandWhite bg-gray-800 p-2">
            This is the brand white color.
          </p>
        </div>
      </section>

      {/* Button Styles */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
        <main className="flex flex-wrap justify-center gap-4">
          <Button variant="primary" size="md">
            Primary
          </Button>
          <Button variant="secondary" size="lg">
            Secondary
          </Button>
          <Button variant="tertiary" size="sm">
            Tertiary
          </Button>
          <Button variant="outline" size="md">
            Outline
          </Button>
        </main>
      </section>

      {/* CTA Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">CTA Section</h2>
        <CTASection />
      </section>
    </main>
  );
}
