
export interface CaseStudy {
    slug: string;
    clientName: string;
    title: string;
    services: string[];
    content: string;
    backlinks: { text: string, url: string }[];
  }
  
  export const caseStudies: CaseStudy[] = [
    {
      slug: "happy-mountain-nepal-seo-migration",
      clientName: "Happy Mountain Nepal",
      title: "Migration from WordPress to Neup.Sites: How We Managed the SEO Juice",
      services: ["Neup.Marketing", "Neup.Site"],
      content: `
        <p class="text-lg text-muted-foreground">Migrating a website is a high-stakes process, especially when years of SEO equity are on the line. For our client, Happy Mountain Nepal, moving from a legacy WordPress site to our modern Neup.Site platform was essential for performance and security. The primary challenge was ensuring that their search engine rankings not only remained intact but improved.</p>
        <h3 class="font-headline text-2xl font-bold mt-8 mb-4">The Challenge: Preserving SEO Authority</h3>
        <p>The original site had accumulated significant domain authority and rankings for key travel-related terms. A poorly executed migration could have resulted in broken links, lost metadata, and a significant drop in organic traffic, which would be devastating for a tourism-based business.</p>
        <h3 class="font-headline text-2xl font-bold mt-8 mb-4">Our Strategy: A Meticulous SEO-First Migration</h3>
        <ol class="list-decimal list-inside space-y-4 text-muted-foreground">
            <li><strong>URL Mapping & 301 Redirects:</strong> We began by crawling the entire old site to map every single URL. We then implemented permanent 301 redirects from every old URL to its new counterpart on the Neup.Site platform. This told search engines exactly where to find the moved content, ensuring a seamless transfer of "SEO juice."</li>
            <li><strong>Content and Metadata Transfer:</strong> Every piece of content, from meta titles and descriptions to image alt-tags, was carefully transferred. We used this opportunity to optimize metadata according to modern best practices, improving clarity and click-through rates.</li>
            <li><strong>Performance Optimization:</strong> Neup.Sites are built for speed. The new site's superior loading times provided an immediate SEO boost, as site speed is a critical ranking factor for Google.</li>
            <li><strong>Technical SEO Audit:</strong> Post-migration, we conducted a comprehensive technical SEO audit using tools like Google Search Console to identify and fix any crawl errors, broken links, or schema markup issues immediately.</li>
        </ol>
        <h3 class="font-headline text-2xl font-bold mt-8 mb-4">The Result: Growth and Stability</h3>
        <p>The migration was a success. Not only did <a href="https://happymountainnepal.com" target="_blank" rel="noopener noreferrer" class="text-primary underline">Happy Mountain Nepal</a> retain its existing rankings, but within three months, we observed a 15% increase in organic traffic thanks to improved performance and optimized on-page SEO. The new Neup.Site platform also gave them a secure, easy-to-manage foundation for future growth.</p>
      `,
      backlinks: [
        { text: "Visit Happy Mountain Nepal", url: "https://happymountainnepal.com" }
      ]
    },
    {
      slug: "bhattarai-deals-iphone-market-research",
      clientName: "Bhattarai Deals",
      title: "A Journey of Researching iPhone Sellers in Nepal",
      services: ["Neup.Marketing", "Neup.Site"],
      content: `
        <p class="text-lg text-muted-foreground">The market for iPhones in Nepal is crowded and fragmented. For <a href="https://bhattaraideals.com" target="_blank" rel="noopener noreferrer" class="text-primary underline">Bhattarai Deals</a>, a new entrant, carving out a space required a deep understanding of the competitive landscape. Our engagement began not with marketing, but with research.</p>
        <h3 class="font-headline text-2xl font-bold mt-8 mb-4">The Objective: Mapping the Competitive Landscape</h3>
        <p>We set out to answer key questions: Who are the major players? What are their pricing strategies? What value propositions do they offer? How do customers perceive them? Answering these was crucial to positioning Bhattarai Deals for success.</p>
        <h3 class="font-headline text-2xl font-bold mt-8 mb-4">Our Process: Data-Driven Market Analysis</h3>
        <ol class="list-decimal list-inside space-y-4 text-muted-foreground">
            <li><strong>Competitor Identification:</strong> We identified over 20 online and offline iPhone retailers in Nepal, from large authorized resellers to smaller Instagram-based stores.</li>
            <li><strong>Feature & Pricing Analysis:</strong> We created a comprehensive matrix comparing product ranges, pricing for different models, warranty policies, EMI facilities, and after-sales service offerings. This revealed gaps in the market, particularly around customer service and transparent pricing.</li>
            <li><strong>Customer Sentiment Analysis:</strong> Using social listening tools, we analyzed customer reviews and comments about existing sellers. We found common complaints related to non-authentic products, poor communication, and lack of reliable support.</li>
        </ol>
        <h3 class="font-headline text-2xl font-bold mt-8 mb-4">The Insight: Trust is the Missing Ingredient</h3>
        <p>Our research concluded that while many sold iPhones, very few had built a trusted brand. The opportunity for Bhattarai Deals was not to be the cheapest, but to be the most reliable. This insight shaped their entire brand strategy, from their tagline ("Genuine Products, Genuine Prices") to their investment in a professional website via Neup.Site and a customer-centric marketing strategy via Neup.Marketing.</p>
      `,
      backlinks: [
        { text: "Visit Bhattarai Deals", url: "https://bhattaraideals.com" }
      ]
    },
    {
      slug: "yes-tourism-nepal-dynamic-news-site",
      clientName: "Yes Tourism Nepal",
      title: "Developing a Dynamic News Site for Yes Tourism Nepal",
      services: ["Neup.Site"],
      content: `
        <p class="text-lg text-muted-foreground">In the competitive tourism industry, providing timely and relevant information is key to building authority and attracting customers. <a href="https://yestourismnepal.run.place" target="_blank" rel="noopener noreferrer" class="text-primary underline">Yes Tourism Nepal</a> needed more than just a static website; they needed a dynamic platform to share travel news, updates, and articles to engage potential travelers.</p>
        <h3 class="font-headline text-2xl font-bold mt-8 mb-4">The Goal: A Content-Driven Engagement Platform</h3>
        <p>The objective was to create a fast, modern, and easy-to-manage news section integrated directly into their main website. This would serve as a hub for SEO content, drive organic traffic, and establish Yes Tourism Nepal as a knowledgeable leader in the field.</p>
        <h3 class="font-headline text-2xl font-bold mt-8 mb-4">The Solution: A Headless CMS with Neup.Site</h3>
        <p>Using Neup.Site, we architected a solution that combined a high-performance frontend with a user-friendly headless Content Management System (CMS).</p>
        <ul class="list-disc list-inside space-y-4 text-muted-foreground">
            <li><strong>Blazing-Fast Frontend:</strong> The website is built with Next.js on the Neup.Site platform, ensuring incredibly fast load times, which is crucial for user experience and SEO.</li>
            <li><strong>Easy Content Management:</strong> The headless CMS allows the Yes Tourism Nepal team to easily write, edit, and publish articles without needing any technical knowledge. They can add images, format text, and schedule posts with an intuitive interface.</li>
            <li><strong>Fully Integrated:</strong> The news section is seamlessly integrated with their main tour packages, allowing for contextual cross-promotion. For example, an article about trekking in the Everest region can directly link to their Everest Base Camp trek package.</li>
            <li><strong>Scalable and Secure:</strong> Built on modern infrastructure, the site is secure from common web vulnerabilities and can handle large spikes in traffic as their audience grows.</li>
        </ul>
        <h3 class="font-headline text-2xl font-bold mt-8 mb-4">The Outcome: An SEO & Content Powerhouse</h3>
        <p>Today, the <a href="https://yestourismnepal.run.place" target="_blank" rel="noopener noreferrer" class="text-primary underline">Yes Tourism Nepal</a> website is not just a brochure for their services but a dynamic content platform that consistently attracts new organic traffic, builds trust with potential customers, and provides real value to travelers planning their next adventure in Nepal.</p>
      `,
      backlinks: [
        { text: "Visit Yes Tourism Nepal", url: "https://yestourismnepal.run.place" }
      ]
    }
  ];
  
  export const getCaseStudyBySlug = (slug: string) => {
    return caseStudies.find(study => study.slug === slug);
  }
  
  export const getAllCaseStudySlugs = () => {
    return caseStudies.map(study => ({ slug: study.slug }));
  }
  
