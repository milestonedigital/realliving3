import { Link } from "wouter";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center py-20">
      <div className="container text-center">
        <div
          className="font-display text-8xl lg:text-9xl font-bold mb-4"
          style={{ color: "oklch(0.93 0.04 183)" }}
        >
          404
        </div>
        <h1 className="font-display text-3xl lg:text-4xl font-bold text-forest mb-4">
          Page Not Found
        </h1>
        <p className="font-body text-base text-muted-foreground leading-relaxed mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            <Home className="w-4 h-4" />
            Go to Homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-outline"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}
