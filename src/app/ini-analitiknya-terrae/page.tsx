import Footer from "@/components/footer";

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Section: Analytics */}
      <section className="py-24 space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Website Analytics
          </h1>
          <p className="text-gray-600 text-lg">
            Insights from Vercel Analytics — last 30 days (as of July 15, 2025)
          </p>
        </div>

        {/* Grafik 1: Visitors, Page Views, Bounce Rate */}
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <img
            src="/images/analytics1.png"
            alt="Visitors, Page Views, Bounce Rate"
            className="mx-auto max-w-3xl w-full rounded-xl border border-black/10 shadow-sm"
          />
        </div>

        {/* Grafik 2: Referrers */}
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-semibold">Top Referrers</h2>
          <img
            src="/images/analytics2.png"
            alt="Referrers"
            className="mx-auto max-w-3xl w-full rounded-xl border border-black/10 shadow-sm"
          />
        </div>

        {/* Grafik 3: Countries */}
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-semibold">Visitors by Country</h2>
          <img
            src="/images/analytics3.png"
            alt="Countries"
            className="mx-auto max-w-3xl w-full rounded-xl border border-black/10 shadow-sm"
          />
        </div>

        {/* Grafik 4: Devices */}
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-semibold">Devices</h2>
          <img
            src="/images/analytics4.png"
            alt="Devices"
            className="mx-auto max-w-3xl w-full rounded-xl border border-black/10 shadow-sm"
          />
        </div>

        {/* Grafik 5: Operating Systems */}
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-semibold">Operating Systems</h2>
          <img
            src="/images/analytics5.png"
            alt="Operating Systems"
            className="mx-auto max-w-3xl w-full rounded-xl border border-black/10 shadow-sm"
          />
        </div>
      </section>

      {/* Section: Footer */}
      <section>
        <Footer />
      </section>
    </main>
  );
}
