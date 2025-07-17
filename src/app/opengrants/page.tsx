export default function OpenGrants() {
  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">OpenGrants</h1>
        <p className="text-xl mb-6 opacity-90">Transform Your Grants Data Into Intelligence</p>
        <p className="text-lg mb-8 max-w-3xl mx-auto opacity-80">
          The open source grants stack that helps grant programs unlock real-time analytics, streamline reporting, and reduce risk—while improving decision making and coordination across the broader funding ecosystem.
        </p>
        <p className="mb-8 opacity-70">
          Built by DAOstar, OpenGrants is data infrastructure powered by structured metadata from DAOIP-5, the leading open data schema for Web3 grants, and supported by a robust data lake hosted by Open Source Observer.
        </p>
      </section>

      <div className="section-divider"></div>

      {/* Problem Statement */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why OpenGrants?</h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto text-center opacity-80">
          Billions in Web3 grant capital have been distributed—yet many ecosystems still struggle to measure performance, prevent waste, and learn from each other.
        </p>
        
        <div className="research-card-outlay">
          <div className="bp4-card p-8 hover:bg-card-bg-hover transition-colors">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Unified, Verifiable Data</h3>
            <p className="opacity-80">Common metadata fields across leading platforms for structured, interoperable records.</p>
          </div>
          
          <div className="bp4-card p-8 hover:bg-card-bg-hover transition-colors">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Analytics & Reporting Tools</h3>
            <p className="opacity-80">Dashboards, benchmarks, and APIs that reveal patterns, flag risks, and highlight impact.</p>
          </div>
          
          <div className="bp4-card p-8 hover:bg-card-bg-hover transition-colors">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Open Data Infrastructure</h3>
            <p className="opacity-80">A continually updated, open-source data warehouse aggregating funding activity across Web3.</p>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Partnerships */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Trusted Partners</h2>
        <div className="research-card-outlay">
          <div className="bp4-card p-6 text-center hover:bg-card-bg-hover transition-colors">
            <h3 className="text-xl font-semibold mb-2">Stellar Community Fund</h3>
            <p className="opacity-80">Grant tracking and program benchmarking through the DAOIP-5 API</p>
          </div>
          <div className="bp4-card p-6 text-center hover:bg-card-bg-hover transition-colors">
            <h3 className="text-xl font-semibold mb-2">Open Source Observer</h3>
            <p className="opacity-80">Efficient data aggregation using OpenGrants ETL & OSO data lake</p>
          </div>
          <div className="bp4-card p-6 text-center hover:bg-card-bg-hover transition-colors">
            <h3 className="text-xl font-semibold mb-2">Funding the Commons</h3>
            <p className="opacity-80">Projects built on OpenGrants infrastructure showcase cross-program insights</p>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Target Audience */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Who It's For</h2>
        <div className="research-card-outlay">
          <div className="bp4-card p-8 hover:bg-card-bg-hover transition-colors">
            <h3 className="text-xl font-semibold mb-4">Grant Program Leads</h3>
            <p className="opacity-80">Optimize grant performance with real-time dashboards. Use shared ETL & analysis pipelines to cut reporting costs and cycle times.</p>
          </div>
          <div className="bp4-card p-8 hover:bg-card-bg-hover transition-colors">
            <h3 className="text-xl font-semibold mb-4">Grantees</h3>
            <p className="opacity-80">Reuse previous applications across platforms. Present verified impact across multiple programs.</p>
          </div>
          <div className="bp4-card p-8 hover:bg-card-bg-hover transition-colors">
            <h3 className="text-xl font-semibold mb-4">Data Scientists & Analysts</h3>
            <p className="opacity-80">Hand off your ugly data munging tasks. Tap into the most comprehensive open dataset for Web3 grants.</p>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Pricing */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-4">Choose Your Plan</h2>
        <p className="text-center opacity-70 mb-12">Select the service tier that best fits your needs</p>
        
        <div className="research-card-outlay">
          {/* Basic Plan */}
          <div className="bp4-card p-8 hover:bg-card-bg-hover transition-colors">
            <h3 className="text-2xl font-bold mb-2">Basic</h3>
            <div className="text-3xl font-bold mb-6 text-blue-600">$10,000</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Setup & data migration
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Two annual benchmark reports
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                1 year of API access & data lake support
              </li>
            </ul>
            <button className="bp4-button w-full py-3 rounded-lg font-semibold">
              Get Started
            </button>
          </div>

          {/* Advanced Plan */}
          <div className="bp4-card p-8 hover:bg-card-bg-hover transition-colors border-2 border-primary-color">
            <div className="text-center mb-4">
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">Most Popular</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Advanced</h3>
            <div className="text-3xl font-bold mb-6 text-primary-color">$25,000</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Everything in Basic
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Custom dashboards & insights
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Strategic consulting & advanced integration
              </li>
            </ul>
            <button className="bp4-button w-full py-3 rounded-lg font-semibold">
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bp4-card p-8 hover:bg-card-bg-hover transition-colors">
            <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
            <div className="text-3xl font-bold mb-6 text-purple-600">Custom</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Fully managed data integration
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Priority support & analytics customization
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Coordination layers across grant portfolios
              </li>
            </ul>
            <button className="bp4-button w-full py-3 rounded-lg font-semibold">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* CTA Section */}
      <section className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Grants Process?</h2>
        <p className="text-lg mb-8 opacity-90 max-w-3xl mx-auto">Join the network of leading Web3 grant platforms and push the frontier of transparent, efficient funding.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="bp4-button px-8 py-3 rounded-lg font-semibold">
            Book a Demo
          </button>
          <button className="bp4-button secondary px-8 py-3 rounded-lg font-semibold">
            Join the Network
          </button>
        </div>
        
        <div className="text-center">
          <p className="text-sm opacity-75 mb-2">Questions? Get in touch with our team</p>
          <div className="flex justify-center space-x-4">
            <a href="mailto:sam@daostar.org" className="text-white hover:text-primary-color transition-colors">
              sam@daostar.org
            </a>
            <span className="opacity-50">•</span>
            <a href="mailto:josh.davila@daostar.org" className="text-white hover:text-primary-color transition-colors">
              josh.davila@daostar.org
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}