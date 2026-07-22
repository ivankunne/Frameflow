export type AISeoContent = {
  meta: {
    title: string
    description: string
    ogTitle: string
    ogImageTitle: string
    ogImageLabel: string
    ogAlt: string
    canonical: string
  }
  label: string
  title: string
  description: string
  longDescription: string
  includes: string[]
  process: { step: string; title: string; description: string }[]
  relatedServices: { title: string; href: string }[]
  pricingFrom: string
  faqs: { q: string; a: string }[]
  definitions: { aiSeoTerm: string; aiSeo: string; geoTerm: string; geo: string; aeoTerm: string; aeo: string }
  howSearchChanged: { title: string; body: string; engines: string[] }
  comparison: { dimension: string; traditional: string; aiSearch: string }[]
  framework: { number: string; title: string; description: string }[]
}

export const aiSeo: Record<'no' | 'en', AISeoContent> = {
  no: {
    meta: {
      title: 'AI SEO & GEO – bli sitert av ChatGPT og Google AI | Frameflow',
      description: 'AI SEO og Generative Engine Optimization fra Frameflow: entitets-SEO, strukturert data og innholdsstrategi som gjør bedriften synlig i ChatGPT, Perplexity og Google AI Overviews. Fra 6 500 kr/mnd.',
      ogTitle: 'AI SEO & GEO – bli sitert av ChatGPT og Google AI | Frameflow',
      ogImageTitle: 'AI SEO & GEO',
      ogImageLabel: 'AI SEO',
      ogAlt: 'AI SEO og Generative Engine Optimization – Frameflow',
      canonical: 'https://www.frameflow.no/tjenester/ai-seo',
    },
    label: 'Tjeneste',
    title: 'AI SEO og Generative Engine Optimization',
    description: 'Bli merkevaren AI-søkemotorene anbefaler. Vi bygger entitets-SEO, strukturert data og innhold som gjør at ChatGPT, Perplexity, Gemini og Google AI Overviews siterer bedriften din – ikke bare rangerer den blant ti blå lenker.',
    longDescription: 'AI SEO – også kalt Generative Engine Optimization (GEO) – handler om å strukturere nettsiden og innholdet ditt slik at språkmodeller kan forstå, stole på og sitere det når de svarer på et spørsmål. Det bygger videre på klassisk SEO, men legger til et lag av entitetssignaler, strukturert data og semantisk klarhet som AI-systemer er avhengige av for å hente og gjengi informasjon korrekt. Hos Frameflow kombinerer vi teknisk SEO, Schema.org-implementering og en innholdsstrategi bygget rundt reelle spørsmål – slik at både Google, ChatGPT og Perplexity finner, forstår og anbefaler bedriften din.',
    includes: [
      'AI SEO-revisjon av teknisk grunnmur og entitetssignaler',
      'Implementering av Schema.org og strukturert data',
      'Entitets-SEO og Knowledge Graph-optimalisering',
      'Innholdsstrategi bygget på topical authority',
      'Semantisk SEO og answer-first innholdsstruktur',
      'Intern lenkebygging etter pillar-og-cluster-modell',
      'Optimalisering for Google AI Overviews',
      'Synlighetsarbeid mot ChatGPT, Perplexity og Gemini',
      'Digital PR og autoritetsbygging (sameAs-signaler)',
      'AI-synlighetsrapportering – hvem siterer deg, og hvor',
      'Løpende overvåking og iterasjon',
    ],
    process: [
      { step: '01', title: 'Kartlegging', description: 'Vi kartlegger hvordan ChatGPT, Perplexity og Google AI Overviews i dag omtaler – eller overser – bedriften din, og hvilke spørsmål målgruppen faktisk stiller AI-assistenter.' },
      { step: '02', title: 'Revisjon', description: 'Vi gjennomgår teknisk SEO, strukturert data, entitetssignaler og innholdsarkitektur opp mot det AI-systemer krever for å hente og sitere informasjon riktig.' },
      { step: '03', title: 'Strategi', description: 'Vi bygger en prioritert plan for entitets-SEO, emneklynger og innhold som svarer direkte på reelle spørsmål – forankret i forretningsmålene dine.' },
      { step: '04', title: 'Implementering', description: 'Vi implementerer strukturert data, retter tekniske avvik, bygger om innhold til answer-first-format og styrker interne lenker mellom relaterte sider.' },
      { step: '05', title: 'Måling', description: 'Vi sporer om og hvordan bedriften din siteres i AI-genererte svar, i tillegg til klassiske rangeringer, trafikk og synlighet i Search Console.' },
      { step: '06', title: 'Kontinuerlig forbedring', description: 'AI-modellene oppdateres løpende, og det bør strategien også gjøre. Vi justerer innhold og signaler etter hva som faktisk driver siteringer.' },
    ],
    relatedServices: [
      { title: 'SEO', href: '/tjenester/seo' },
      { title: 'Markedsføring', href: '/tjenester/markedsforing' },
      { title: 'AI Automasjon', href: '/tjenester/ai-automasjon' },
    ],
    pricingFrom: '6 500 kr/mnd',
    faqs: [
      { q: 'Hva er AI SEO?', a: 'AI SEO er arbeidet med å gjøre nettsiden og innholdet ditt forståelig, troverdig og siterbart for AI-drevne søk og svartjenester som ChatGPT, Perplexity, Gemini og Google AI Overviews. Der klassisk SEO optimaliserer for rangering i en liste med lenker, optimaliserer AI SEO for å bli valgt ut som selve kilden til svaret.' },
      { q: 'Hva er Generative Engine Optimization (GEO)?', a: 'GEO er en bredere betegnelse for AI SEO, hentet fra forskning på hvordan generative AI-systemer velger og siterer kilder. Begrepene brukes ofte om hverandre – GEO understreker at målgruppen nå kan være en språkmodell like gjerne som en person som scroller gjennom søkeresultater.' },
      { q: 'Rangerer ChatGPT nettsider slik Google gjør?', a: 'Ikke direkte. ChatGPT genererer svar basert på treningsdata og – når det søker – på sanntidsresultater det henter og oppsummerer. Det finnes ingen synlig rangeringsliste, men sidene som blir hentet, forstått og sitert oftest er de med tydelig struktur, sterke entitetssignaler og innhold som direkte svarer på spørsmålet som stilles.' },
      { q: 'Kan AI faktisk anbefale bedriften min?', a: 'Ja, forutsatt at AI-systemet har grunnlag for å gjøre det. Det krever at bedriften din er godt beskrevet på nettsiden, i strukturert data og på tvers av troverdige kilder som viser hvem dere er, hva dere leverer og hvorfor dere er relevante for spørsmålet som stilles.' },
      { q: 'Hvor lang tid tar AI SEO?', a: 'De første tekniske forbedringene – strukturert data, entitetssignaler, tydeligere sidestruktur – kan gi synlige endringer i AI-svar innen 4–8 uker. Å bygge reell topical authority og et bredt siteringsgrunnlag på tvers av flere AI-motorer tar typisk 3–6 måneder, på samme måte som med klassisk SEO.' },
      { q: 'Hvordan er AI SEO forskjellig fra tradisjonell SEO?', a: 'Tradisjonell SEO optimaliserer for at en lenke skal rangere høyt i søkeresultatene. AI SEO optimaliserer for at innholdet ditt skal bli forstått, hentet ut og gjengitt korrekt i et generert svar – der brukeren ikke nødvendigvis besøker siden selv. De to overlapper mye teknisk, men prioriterer forskjellig: klart språk, definisjoner, strukturert data og entitetsklarhet veier tyngre i AI SEO enn i klassisk rangeringsarbeid.' },
      { q: 'Hva er entitets-SEO (Entity SEO)?', a: 'Entitets-SEO handler om å gjøre det utvetydig for søkemotorer og AI-systemer hvem og hva bedriften din er – som en egen, gjenkjennelig entitet i stedet for en samling nøkkelord. Det gjøres gjennom konsistent navn, adresse og telefon på tvers av kilder, strukturert data med stabile @id-verdier, og en Organization-entitet som lenkes til fra alle relevante profiler.' },
      { q: 'Betyr strukturert data (schema) noe for AI-synlighet?', a: 'Ja – strukturert data er noe av det viktigste enkelttiltaket for AI-synlighet. Schema.org-markup som Organization, Service, FAQPage og BreadcrumbList gir AI-systemer en maskinlesbar beskrivelse av innholdet, i stedet for at de må tolke det fra ren tekst. Det reduserer risikoen for feiltolkning og øker sjansen for korrekt sitering.' },
      { q: 'Hva er Google AI Overviews?', a: 'Google AI Overviews er AI-genererte sammendrag som vises øverst i søkeresultatene for mange søk, og som svarer på spørsmålet direkte – med kilder listet under. Å bli en av kildene krever ofte sterkere semantisk struktur og tydeligere svar enn det som trengs for en vanlig topp-3-plassering.' },
      { q: 'Hvordan måler dere AI-synlighet?', a: 'Vi sjekker jevnlig hvordan bedriften din omtales og siteres på tvers av ChatGPT, Perplexity, Gemini og Google AI Overviews for spørsmål i din bransje, kombinert med klassiske signaler som Search Console-data, strukturert data-validering og indekseringsstatus. Du får en månedlig rapport som viser utviklingen.' },
      { q: 'Hva er Answer Engine Optimization (AEO)?', a: 'AEO er en undergruppe av AI SEO som fokuserer spesifikt på å bli valgt som svaret på et konkret spørsmål – typisk i FAQ-bokser, framhevede utdrag og AI-genererte direktesvar. Klare, konsise definisjoner og strukturerte spørsmål-og-svar-seksjoner er kjernen i AEO-arbeid.' },
      { q: 'Trenger jeg fortsatt tradisjonell SEO?', a: 'Ja. AI SEO bygger på – og erstatter ikke – teknisk SEO, gode Core Web Vitals og relevant innhold. De aller fleste AI-systemer henter fortsatt informasjon fra godt rangerte, godt strukturerte nettsider. Å ignorere klassisk SEO for å satse alt på AI svekker begge deler.' },
      { q: 'Hva koster AI SEO?', a: 'AI SEO fra Frameflow starter fra 6 500 kr/mnd eks. mva. Prisen avhenger av hvor mye teknisk arbeid som kreves innledningsvis, samt omfanget av innholds- og entitetsarbeidet. Du får alltid et fast månedlig tilbud uten skjulte kostnader.' },
      { q: 'Passer AI SEO for en liten bedrift i Bergen?', a: 'Ja – ofte enda bedre enn for store aktører. AI-systemer verdsetter tydelig, spesifikk og godt strukturert informasjon fremfor generisk markedsføringstekst, noe som gir mindre, nisjefokuserte bedrifter en reell mulighet til å bli sitert foran større konkurrenter med svakere entitetssignaler.' },
    ],
    definitions: {
      aiSeoTerm: 'AI SEO',
      aiSeo: 'Arbeidet med å gjøre innholdet ditt forståelig, troverdig og siterbart for AI-drevne søke- og svartjenester – ikke bare søkbart for tradisjonelle indekseringsroboter.',
      geoTerm: 'GEO (Generative Engine Optimization)',
      geo: 'En bredere fagbetegnelse for AI SEO, hentet fra forskning på hvordan generative AI-modeller velger ut og siterer kilder når de setter sammen et svar.',
      aeoTerm: 'AEO (Answer Engine Optimization)',
      aeo: 'En mer spisset disiplin innenfor AI SEO: å strukturere innhold – definisjoner, FAQ, konsise svar – slik at det blir valgt som selve svaret på et konkret spørsmål.',
    },
    howSearchChanged: {
      title: 'Slik er søk endret',
      body: 'I klassisk søk skriver du et spørsmål, får ti blå lenker, og velger selv hvilken side du stoler mest på. I AI-drevet søk stiller brukeren spørsmålet til en modell – Google AI Overviews, ChatGPT, Perplexity, Gemini, Claude eller Copilot – som leser flere kilder, vurderer dem, og formulerer ett samlet svar. Nettsiden din trenger ikke lenger bare rangere høyt. Den må være strukturert slik at en maskin kan hente ut riktig informasjon, stole på at den er korrekt, og gjengi den uten å forvrenge budskapet.',
      engines: ['Google AI Overviews', 'ChatGPT', 'Perplexity', 'Gemini', 'Claude', 'Microsoft Copilot'],
    },
    comparison: [
      { dimension: 'Mål', traditional: 'Rangere høyest mulig blant ti blå lenker', aiSearch: 'Bli valgt ut som kilden bak et generert svar' },
      { dimension: 'Suksessmål', traditional: 'Klikk, posisjon og organisk trafikk', aiSearch: 'Siteringer og direkte anbefalinger i AI-svar' },
      { dimension: 'Innholdsformat', traditional: 'Lange artikler optimalisert for søkeord', aiSearch: 'Konsise, selvstendige svar med klare definisjoner' },
      { dimension: 'Struktur', traditional: 'Overskriftshierarki for lesbarhet', aiSearch: 'Semantisk HTML og strukturert data en maskin kan tolke direkte' },
      { dimension: 'Autoritet', traditional: 'Backlinker fra relevante domener', aiSearch: 'Entitetskonsistens på tvers av kilder (sameAs, NAP, Knowledge Graph)' },
      { dimension: 'Tidshorisont', traditional: 'Gradvis rangeringsvekst over måneder', aiSearch: 'Kan endre seg raskt når modeller oppdateres eller re-trenes' },
      { dimension: 'Målgruppe', traditional: 'En person som klikker seg videre til siden', aiSearch: 'En språkmodell som oppsummerer på brukerens vegne' },
    ],
    framework: [
      { number: '01', title: 'Teknisk SEO', description: 'Rask, mobilvennlig og krypbar nettside er fortsatt fundamentet. AI-systemer som ikke får indeksert eller rendret siden din kan heller ikke sitere den.' },
      { number: '02', title: 'Entitetsoptimalisering', description: 'Vi gjør bedriften din til en tydelig, gjenkjennelig entitet – konsistent navngitt og beskrevet på tvers av nettsiden, Google Business Profile, sosiale profiler og bransjekataloger.' },
      { number: '03', title: 'Strukturert data', description: 'Schema.org-markup som Organization, Service, FAQPage og BreadcrumbList gir AI-systemer en maskinlesbar versjon av innholdet, slik at de slipper å gjette.' },
      { number: '04', title: 'Innholdsstrategi', description: 'Innhold bygget rundt reelle spørsmål kundene dine stiller – ikke søkeord de statistisk sett bruker, men problemene de faktisk prøver å løse.' },
      { number: '05', title: 'Semantisk SEO', description: 'Vi strukturerer setninger og avsnitt slik at betydningen er utvetydig for en språkmodell – klare definisjoner, konsistent terminologi og svar som står på egne ben.' },
      { number: '06', title: 'Knowledge Graph-signaler', description: 'sameAs-lenker, konsistent NAP-informasjon og et velfylt Organization-schema kobler bedriften din til Googles og andre AI-systemers entitetsgraf.' },
      { number: '07', title: 'Digital PR', description: 'Omtaler fra troverdige, relevante kilder styrker både klassisk autoritet og AI-systemers tillit til at informasjonen om deg er korrekt.' },
      { number: '08', title: 'Autoritetsbygging', description: 'Ekte fagkunnskap, forfatteromtaler og dokumentert erfaring signaliserer at innholdet ditt er en pålitelig kilde å sitere fra – ikke en anonym markedsføringstekst.' },
      { number: '09', title: 'Emneklynger', description: 'Pillar-og-cluster-strukturen samler alt du vet om et tema på en måte AI-systemer kan følge – og som viser dybde, ikke bare bredde.' },
      { number: '10', title: 'Optimalisering for AI-sitering', description: 'Vi tester og justerer hvordan sider faktisk gjengis i ChatGPT, Perplexity og Google AI Overviews, og retter det som hindrer korrekt sitering.' },
      { number: '11', title: 'Overvåking og iterasjon', description: 'AI-modeller endrer seg fortløpende. Vi sjekker jevnlig hvordan bedriften din omtales på tvers av motorene, og justerer strategien etter det.' },
    ],
  },
  en: {
    meta: {
      title: 'AI SEO & GEO – get cited by ChatGPT and Google AI | Frameflow',
      description: 'AI SEO and Generative Engine Optimization from Frameflow: entity SEO, structured data and content strategy that make your business visible in ChatGPT, Perplexity and Google AI Overviews. From NOK 6,500/mo.',
      ogTitle: 'AI SEO & GEO – get cited by ChatGPT and Google AI | Frameflow',
      ogImageTitle: 'AI SEO & GEO',
      ogImageLabel: 'AI SEO',
      ogAlt: 'AI SEO and Generative Engine Optimization – Frameflow',
      canonical: 'https://www.frameflow.no/en/services/ai-seo',
    },
    label: 'Service',
    title: 'AI SEO and Generative Engine Optimization',
    description: 'Become the brand AI search engines recommend. We build the entity SEO, structured data and content that make ChatGPT, Perplexity, Gemini and Google AI Overviews cite your business — not just rank it among ten blue links.',
    longDescription: 'AI SEO — also called Generative Engine Optimization (GEO) — is the work of structuring your website and content so language models can understand, trust and cite it when answering a question. It builds on classic SEO but adds a layer of entity signals, structured data and semantic clarity that AI systems rely on to retrieve and reproduce information correctly. At Frameflow we combine technical SEO, Schema.org implementation and a content strategy built around real questions — so Google, ChatGPT and Perplexity alike can find, understand and recommend your business.',
    includes: [
      'AI SEO audit of technical foundation and entity signals',
      'Schema.org and structured data implementation',
      'Entity SEO and Knowledge Graph optimisation',
      'Content strategy built on topical authority',
      'Semantic SEO and answer-first content structure',
      'Internal linking under a pillar-and-cluster model',
      'Optimisation for Google AI Overviews',
      'Visibility work across ChatGPT, Perplexity and Gemini',
      'Digital PR and authority building (sameAs signals)',
      'AI visibility reporting — who cites you, and where',
      'Ongoing monitoring and iteration',
    ],
    process: [
      { step: '01', title: 'Discovery', description: 'We map how ChatGPT, Perplexity and Google AI Overviews currently describe — or overlook — your business, and what questions your audience actually asks AI assistants.' },
      { step: '02', title: 'Audit', description: 'We review technical SEO, structured data, entity signals and content architecture against what AI systems need to retrieve and cite information correctly.' },
      { step: '03', title: 'Strategy', description: 'We build a prioritised plan for entity SEO, topical clusters and content that answers real questions directly — grounded in your business goals.' },
      { step: '04', title: 'Implementation', description: 'We implement structured data, fix technical issues, rebuild content into answer-first format and strengthen internal links between related pages.' },
      { step: '05', title: 'Measurement', description: 'We track whether and how your business is cited in AI-generated answers, alongside classic rankings, traffic and Search Console visibility.' },
      { step: '06', title: 'Continuous improvement', description: 'AI models are updated continuously, and the strategy should be too. We adjust content and signals based on what actually drives citations.' },
    ],
    relatedServices: [
      { title: 'SEO', href: '/tjenester/seo' },
      { title: 'Marketing', href: '/tjenester/markedsforing' },
      { title: 'AI Automation', href: '/tjenester/ai-automasjon' },
    ],
    pricingFrom: 'NOK 6,500/mo',
    faqs: [
      { q: 'What is AI SEO?', a: 'AI SEO is the work of making your website and content understandable, trustworthy and citable for AI-driven search and answer engines like ChatGPT, Perplexity, Gemini and Google AI Overviews. Where classic SEO optimises for ranking in a list of links, AI SEO optimises for being chosen as the source behind the answer itself.' },
      { q: 'What is Generative Engine Optimization (GEO)?', a: 'GEO is a broader term for AI SEO, drawn from research into how generative AI systems select and cite sources. The terms are often used interchangeably — GEO emphasises that the audience can now be a language model just as often as a person scrolling through search results.' },
      { q: 'Does ChatGPT rank websites the way Google does?', a: 'Not directly. ChatGPT generates answers based on training data and, when it searches, on real-time results it retrieves and summarises. There is no visible ranking list, but the pages retrieved, understood and cited most often are the ones with clear structure, strong entity signals and content that directly answers the question being asked.' },
      { q: 'Can AI actually recommend my business?', a: 'Yes, provided the AI system has grounds to do so. That requires your business to be clearly described on your website, in structured data, and across credible sources that show who you are, what you deliver, and why you are relevant to the question being asked.' },
      { q: 'How long does AI SEO take?', a: 'The first technical improvements — structured data, entity signals, clearer page structure — can produce visible changes in AI answers within 4–8 weeks. Building genuine topical authority and a broad citation footprint across multiple AI engines typically takes 3–6 months, similar to classic SEO.' },
      { q: 'How is AI SEO different from traditional SEO?', a: 'Traditional SEO optimises for a link to rank highly in search results. AI SEO optimises for your content to be understood, extracted and reproduced correctly in a generated answer — where the user may never visit the page itself. The two overlap heavily on the technical side, but prioritise differently: clear language, definitions, structured data and entity clarity carry more weight in AI SEO than in classic ranking work.' },
      { q: 'What is Entity SEO?', a: 'Entity SEO is about making it unambiguous to search engines and AI systems who and what your business is — as a distinct, recognisable entity rather than a collection of keywords. It is done through consistent name, address and phone information across sources, structured data with stable @id values, and an Organization entity linked to from every relevant profile.' },
      { q: 'Does structured data (schema) matter for AI visibility?', a: 'Yes — structured data is one of the single most important levers for AI visibility. Schema.org markup such as Organization, Service, FAQPage and BreadcrumbList gives AI systems a machine-readable description of your content instead of forcing them to infer it from plain text. That reduces the risk of misinterpretation and increases the chance of correct citation.' },
      { q: 'What are Google AI Overviews?', a: 'Google AI Overviews are AI-generated summaries shown at the top of search results for many queries, answering the question directly with sources listed underneath. Becoming one of those sources often requires stronger semantic structure and clearer answers than a normal top-3 ranking needs.' },
      { q: 'How do you measure AI visibility?', a: 'We regularly check how your business is described and cited across ChatGPT, Perplexity, Gemini and Google AI Overviews for questions relevant to your industry, combined with classic signals such as Search Console data, structured data validation and indexing status. You receive a monthly report showing the trend.' },
      { q: 'What is Answer Engine Optimization (AEO)?', a: 'AEO is a subset of AI SEO focused specifically on being chosen as the answer to a concrete question — typically in FAQ boxes, featured snippets and AI-generated direct answers. Clear, concise definitions and structured question-and-answer sections are the core of AEO work.' },
      { q: 'Do I still need traditional SEO?', a: 'Yes. AI SEO builds on — and does not replace — technical SEO, solid Core Web Vitals and relevant content. Most AI systems still retrieve information from well-ranked, well-structured websites. Ignoring classic SEO to bet everything on AI weakens both.' },
      { q: 'How much does AI SEO cost?', a: 'AI SEO from Frameflow starts from NOK 6,500/mo excl. VAT. The price depends on how much technical work is required upfront, plus the scope of content and entity work. You always get a fixed monthly quote with no hidden costs.' },
      { q: 'Does AI SEO work for a small business?', a: 'Yes — often even better than for large players. AI systems value clear, specific and well-structured information over generic marketing copy, giving smaller, niche-focused businesses a real chance to be cited ahead of larger competitors with weaker entity signals.' },
    ],
    definitions: {
      aiSeoTerm: 'AI SEO',
      aiSeo: 'The work of making your content understandable, trustworthy and citable for AI-driven search and answer engines — not just searchable for traditional indexing crawlers.',
      geoTerm: 'GEO (Generative Engine Optimization)',
      geo: 'A broader term for AI SEO, drawn from research into how generative AI models select and cite sources when composing an answer.',
      aeoTerm: 'AEO (Answer Engine Optimization)',
      aeo: 'A more focused discipline within AI SEO: structuring content — definitions, FAQs, concise answers — so it gets chosen as the answer to a specific question.',
    },
    howSearchChanged: {
      title: 'How search has changed',
      body: 'In classic search, you type a question, get ten blue links, and choose which page to trust yourself. In AI-driven search, the user asks a model — Google AI Overviews, ChatGPT, Perplexity, Gemini, Claude or Copilot — which reads several sources, weighs them, and composes one combined answer. Your website no longer just needs to rank highly. It needs to be structured so a machine can extract the right information, trust that it is accurate, and reproduce it without distorting the message.',
      engines: ['Google AI Overviews', 'ChatGPT', 'Perplexity', 'Gemini', 'Claude', 'Microsoft Copilot'],
    },
    comparison: [
      { dimension: 'Goal', traditional: 'Rank as high as possible among ten blue links', aiSearch: 'Be selected as the source behind a generated answer' },
      { dimension: 'Success metric', traditional: 'Clicks, position and organic traffic', aiSearch: 'Citations and direct recommendations in AI answers' },
      { dimension: 'Content format', traditional: 'Long articles optimised for keywords', aiSearch: 'Concise, self-contained answers with clear definitions' },
      { dimension: 'Structure', traditional: 'Heading hierarchy for readability', aiSearch: 'Semantic HTML and structured data a machine can parse directly' },
      { dimension: 'Authority', traditional: 'Backlinks from relevant domains', aiSearch: 'Entity consistency across sources (sameAs, NAP, Knowledge Graph)' },
      { dimension: 'Timeline', traditional: 'Gradual ranking growth over months', aiSearch: 'Can shift quickly when models are updated or retrained' },
      { dimension: 'Audience', traditional: 'A person who clicks through to the page', aiSearch: 'A language model summarising on the user’s behalf' },
    ],
    framework: [
      { number: '01', title: 'Technical SEO', description: 'A fast, mobile-friendly, crawlable website is still the foundation. AI systems that cannot index or render your site cannot cite it either.' },
      { number: '02', title: 'Entity optimisation', description: 'We turn your business into a clear, recognisable entity — consistently named and described across your website, Google Business Profile, social profiles and industry directories.' },
      { number: '03', title: 'Structured data', description: 'Schema.org markup such as Organization, Service, FAQPage and BreadcrumbList gives AI systems a machine-readable version of your content, so they don’t have to guess.' },
      { number: '04', title: 'Content strategy', description: 'Content built around the real questions your customers ask — not keywords they statistically use, but the problems they are actually trying to solve.' },
      { number: '05', title: 'Semantic SEO', description: 'We structure sentences and paragraphs so meaning is unambiguous to a language model — clear definitions, consistent terminology and answers that stand on their own.' },
      { number: '06', title: 'Knowledge Graph signals', description: 'sameAs links, consistent NAP information and a well-populated Organization schema connect your business to Google’s and other AI systems’ entity graphs.' },
      { number: '07', title: 'Digital PR', description: 'Mentions from credible, relevant sources strengthen both classic authority and AI systems’ confidence that information about you is accurate.' },
      { number: '08', title: 'Authority building', description: 'Genuine expertise, author bylines and documented experience signal that your content is a reliable source to cite from — not anonymous marketing copy.' },
      { number: '09', title: 'Topical clusters', description: 'The pillar-and-cluster structure gathers everything you know about a topic in a way AI systems can follow — demonstrating depth, not just breadth.' },
      { number: '10', title: 'AI citation optimisation', description: 'We test and adjust how pages are actually reproduced in ChatGPT, Perplexity and Google AI Overviews, and fix what prevents correct citation.' },
      { number: '11', title: 'Monitoring and iteration', description: 'AI models change continuously. We regularly check how your business is described across engines, and adjust strategy accordingly.' },
    ],
  },
}
