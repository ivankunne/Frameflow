export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  updatedAt?: string
  readTime: string
  content: string
  relatedService?: { title: string; href: string }
}

export interface Project {
  slug: string
  title: string
  client: string
  description: string
  fullDescription: string
  challenge?: string
  tags: string[]
  location: string
  year: string
  results?: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'lokal-seo-bergen-guide-2025',
    title: 'Lokal SEO i Bergen: Den komplette guiden til å rangere på Google i 2025',
    excerpt: 'Lær hvordan du får Bergen-bedriften din øverst på Google uten å betale for annonser. En steg-for-steg guide til lokal SEO som faktisk virker.',
    category: 'SEO',
    date: '10. mars 2025',
    updatedAt: '2025-03-10',
    readTime: '9 min',
    relatedService: { title: 'Digital markedsføring', href: '/tjenester' },
    content: `
## Hva er lokal SEO, og hvorfor er det viktig for Bergen-bedrifter?

Lokal SEO handler om å optimalisere din digitale tilstedeværelse slik at du dukker opp når folk i Bergen søker etter produkter eller tjenester du tilbyr. Når noen skriver «tannlege Bergen» eller «frisør Bergenhus» på Google, er det lokal SEO som bestemmer hvem som vises øverst.

For en Bergen-bedrift er dette gull verdt. Brukere som søker lokalt, har høy kjøpsintensjon – de leter aktivt etter noen å handle med akkurat nå.

## De viktigste elementene i lokal SEO

### 1. Google Business Profile

Dette er fundamentet for lokal SEO. Et komplett og oppdatert Google Business-profil øker sjansene dramatisk for å dukke opp i «Local Pack» – de tre bedriftene som vises øverst på Google med kart.

Slik optimaliserer du profilen din:

- Fyll ut alle felt: navn, adresse, telefon, åpningstider, nettsted
- Velg riktige kategorier – vær spesifikk
- Last opp profesjonelle bilder av lokalet, teamet og produktene
- Svar på alle anmeldelser – både positive og negative
- Legg inn Bergen-spesifikke søkeord i beskrivelsesteksten

### 2. NAP-konsistens: Navn, adresse og telefon

Google sammenligner informasjonen om bedriften din på tvers av alle nettsteder. Hvis adressen din er skrevet forskjellig på Finn, 1881, nettstedet ditt og Facebook, svekker det tilliten din hos Google.

Sjekk at du er konsekvent med bedriftsnavn, eksakt adresseformat og telefonnummer.

### 3. Lokale søkeord på nettsiden din

Integrer Bergen-spesifikke søkeord naturlig i innholdet på nettstedet ditt. Nevn bydeler som Bergenhus, Fana, Åsane, Fyllingsdalen og Laksevåg der det er relevant.

### 4. Lokal innholdsstrategi

Google belønner nettsted som publiserer relevant, lokalt innhold. Start en blogg der du skriver om hendelser og nyheter i Bergen som er relevante for bransjen din.

### 5. Tilbakekoblinger fra lokale nettsteder

Lenker fra andre Bergen-nettsteder forteller Google at du er en etablert aktør lokalt. Bergen Næringsråd, Bergens Tidende og lokale samarbeidspartnere er gode kilder.

### 6. Mobiloptimalisering og hastighet

Over 70 % av lokale søk skjer på mobil. Test siden din med PageSpeed Insights og sørg for en score over 80 på mobil.

## Vanlige SEO-feil Bergen-bedrifter gjør

Mange bedrifter har metabeskrivelser uten å nevne Bergen – en enorm bortkastet mulighet. Ignorerte anmeldelser og inaktive Google-profiler er de to andre klassikerne.

## Resultater du kan forvente

Lokal SEO er en investering. Med konsekvent innsats kan du forvente synlig forbedring innen 3–6 måneder, og etablert lokal autoritet innen et år.

Har du spørsmål om lokal SEO for din Bergen-bedrift? Ta gjerne kontakt med oss for en gratis gjennomgang.
    `.trim(),
  },
  {
    slug: 'webdesign-bergen-nettside-som-konverterer',
    title: 'Webdesign i Bergen: Slik bygger du en nettside som konverterer besøkende til kunder',
    excerpt: 'En vakker nettside er ikke nok. Lær hva som skiller en god nettside fra en som faktisk gir deg nye kunder – og hva Bergen-bedrifter bør prioritere.',
    category: 'Webdesign',
    date: '5. mars 2025',
    updatedAt: '2025-03-05',
    readTime: '7 min',
    relatedService: { title: 'Web design', href: '/tjenester' },
    content: `
## Hvorfor de fleste nettsider ikke konverterer

Du har betalt for en nettside, og den ser fin ut. Men telefonen ringer ikke. Skjemaet får ingen innmeldinger. Trafikken er der – men ingenting skjer.

Dette er den vanligste frustrasjonen vi hører fra Bergen-bedrifter. Problemet er sjelden at nettsiden er stygg. Problemet er at den er designet for å se bra ut, ikke for å selge.

## De 6 elementene som gjør en nettside til en salgsmaskin

### 1. Tydelig verditilbud på toppen av siden

Innen 5 sekunder skal en besøkende forstå hva du tilbyr, for hvem, og hvorfor de skal velge deg. «Velkommen til vår nettside» er ikke et verditilbud. «Profesjonell rørlegger i Bergen – på plass innen 2 timer» er det.

### 2. En klar call-to-action

Hva er den ene handlingen du vil at besøkende skal ta? Ring? Fylle ut skjema? Bestille time? Gjør den handlingen enkelt synlig og gjenta den strategisk. Bruk handlingsverb: «Book gratis samtale», «Få et uforpliktende tilbud».

### 3. Sosialt bevis

Bergen-folk stoler på anbefalinger. Inkluder kundeanmeldelser med fullt navn og bedrift, konkrete resultater med tall, og logoer fra kunder folk kjenner igjen.

### 4. Hastighet

53 % av mobile brukere forlater en side som bruker mer enn 3 sekunder å laste. Test siden din på Google PageSpeed Insights og sørg for en score over 80 på mobil.

### 5. Mobildesign som prioritet

Over 60 % av trafikken til de fleste lokale bedriftsnettsteder kommer fra mobil. Design for mobil først.

### 6. Lokal tillit

For Bergen-bedrifter: vis at dere er lokale. Inkluder adressen tydelig på siden, bilder fra Bergen, og omtale av lokale referanser.

## Hva en nettside bør koste i Bergen

Ferdigmaler: 5 000–15 000 kr. Frilanser: 15 000–50 000 kr. Lokalt byrå: 30 000–120 000 kr.

Vår anbefaling: ikke se på nettside som en kostnad, men som en investering. En nettside som genererer én ekstra kunde i måneden er raskt nedbetalt.

Er du klar for å oppgradere din digitale tilstedeværelse i Bergen? Vi tilbyr gratis konsultasjon der vi ser på din nåværende nettside og gir konkrete forbedringsforslag.
    `.trim(),
  },
  {
    slug: 'google-my-business-bergen-guide',
    title: 'Google Business Profile for Bergen-bedrifter: Den komplette optimeringsguiden',
    excerpt: 'Google Business Profile er det kraftigste gratisverktøyet for lokal synlighet. Lær hvordan du setter det opp riktig og dominerer lokale søk i Bergen.',
    category: 'SEO',
    date: '28. februar 2025',
    updatedAt: '2025-02-28',
    readTime: '8 min',
    relatedService: { title: 'Digital markedsføring', href: '/tjenester' },
    content: `
## Hva er Google Business Profile og hvorfor er det kritisk?

Google Business Profile er din gratis bedriftsprofil på Google – det som styrer hva som vises når noen søker på bedriften din. For en restaurant på Bryggen, en frisør i Sandviken eller et regnskapsbyrå på Mindemyren er Local Pack-plasseringen forretningskritisk. De tre første resultatene i Local Pack tar over 44 % av alle klikk.

## Steg-for-steg: Optimaliser GBP-profilen din

### Steg 1: Krev og verifiser profilen din

Søk etter bedriften din på Google Maps. Eksisterer profilen allerede? Mange Bergen-bedrifter har en Google-opprettet profil de ikke vet om. Gå til business.google.com og krev profilen.

### Steg 2: Fyll ut 100 % av profilens felt

Google belønner komplette profiler. Sørg for eksakt bedriftsnavn, riktig primærkategori og relevante sekundærkategorier, fullstendig adresse, åpningstider og en god beskrivelse med Bergen-spesifikke søkeord.

### Steg 3: Bilder som imponerer

GBP-profiler med bilder får 42 % flere forespørsler om veibeskrivelse. Last opp forsidebilde, logo, eksteriør- og interiørbilder, teambilder og produktbilder.

### Steg 4: Administrer anmeldelser aktivt

Svar på ALLE anmeldelser innen 48 timer. Bruk Bergen-spesifikke søkeord i svarene: «Takk for at du valgte oss for din [tjeneste] i Bergen!»

### Steg 5: Legg ut Google-innlegg regelmessig

Publiser minst én post i uken. Dette signaliserer aktivitet til Google og gir potensielle kunder ny informasjon.

### Steg 6: Q&A-seksjonen

Legg inn dine egne spørsmål og svar proaktivt om parkering, betaling og booking.

## Vanlige feil Bergen-bedrifter gjør

Inkonsekvens mellom GBP og nettstedet, ignorerte innsiktsdata, og glemte sekundærkategorier er de tre vanligste fellene.

Ta kontakt med Frameflow for en gratis gjennomgang av din Google Business-profil.
    `.trim(),
  },
  {
    slug: 'nettside-pris-bergen-2025',
    title: 'Hva koster en nettside i Bergen? Komplett prisoversikt for 2025',
    excerpt: 'Usikker på hva du bør betale for en ny nettside? Vi bryter ned prisene for Bergen-markedet – fra enkle nettsteder til skreddersydde løsninger.',
    category: 'Webdesign',
    date: '20. februar 2025',
    updatedAt: '2025-02-20',
    readTime: '6 min',
    relatedService: { title: 'Web design', href: '/tjenester' },
    content: `
## Hvorfor varierer nettside-priser så mye?

«Hva koster en nettside?» er litt som å spørre «hva koster en bil?» Svaret er alt fra 50 000 til 2 millioner kroner. For Bergen-bedrifter er det viktig å forstå hva du faktisk betaler for.

## Prisoversikt: Nettsider i Bergen 2025

### Ferdigmaler og selvbetjening: 0–15 000 kr

Plattformer som Squarespace, Wix og WordPress.com lar deg lage en nettside selv. Begrenset tilpasning, dårligere ytelse og SEO enn skreddersydde løsninger – og du bruker mye av din egen tid.

### Frilanser: 15 000–45 000 kr

En freelance webdesigner i Bergen kan lage en brukbar nettside. Kvaliteten varierer enormt – sjekk referanser og portefølje nøye.

### Lokalt markedsføringsbyrå i Bergen: 35 000–120 000 kr

Her begynner nettsider å jobbe for deg. Inkluderer skreddersydd design, innebygd lokal SEO, konverteringsoptimalisert struktur og løpende support.

### Enterprise og e-handel: 100 000 kr+

Store e-handelssider, kundeportaler og komplekse webbapplikasjoner.

## Hva påvirker prisen?

Antall sider, om du bruker mal eller skreddersydd design, funksjoner som booking og nettbutikk, og om innhold og tekst er inkludert.

## ROI: Tenk investering, ikke kostnad

Hvis en 60 000 kr-nettside genererer to nye kunder i måneden à 5 000 kr, er investeringen nedbetalt på 6 måneder.

Hos Frameflow inkluderer vi alltid strategisk gjennomgang, skreddersydd design, lokal SEO, Google Analytics og 30 dagers gratis support etter lansering.
    `.trim(),
  },
  {
    slug: 'sosiale-medier-strategi-bergen-bedrifter',
    title: 'Sosiale medier for Bergen-bedrifter: Strategien som faktisk gir resultater i 2025',
    excerpt: 'Å poste tilfeldig på Instagram holder ikke lenger. Lær den sosiale medier-strategien som fungerer for lokale bedrifter i Bergen – med konkrete eksempler.',
    category: 'Sosiale medier',
    date: '12. februar 2025',
    updatedAt: '2025-02-12',
    readTime: '8 min',
    relatedService: { title: 'Sosiale medier', href: '/tjenester' },
    content: `
## Virkeligheten om sosiale medier for lokale bedrifter

De fleste Bergen-bedrifter bruker sosiale medier feil. De poster sporadisk, uten strategi, og måler suksess i likes fremfor faktiske forespørsler. Godt nytt: med riktig tilnærming kan sosiale medier bli din mest kostnadseffektive markedsføringskanal.

## Hvilke plattformer bør Bergen-bedrifter prioritere?

### Instagram

Best for restauranter, kafeer, frisører, interiørbutikker og alle bransjer med visuelt appell. Bergen er en vakker by – og Instagram elsker vakre byer. Bruk hashtags som #Bergen, #VisitBergen, #BergenNorway og bydel-tags. Lokale hashtags har langt høyere engasjement per post enn generelle.

### Facebook

Best for B2B-bedrifter, eiendom, håndverkere og bedrifter som henvender seg til 35+-segmentet. Facebook-grupper som «Bergen Næringsliv» er gull for lokal synlighet.

### TikTok

Vokser raskt i Bergen-markedet. En viral video kan gi tusenvis av visninger fra lokale brukere – organisk og gratis.

### LinkedIn

Best for B2B, konsulenter og alle som henvender seg til næringsliv og bedrifter.

## Innholdsstrategi som faktisk fungerer

80 % av innholdet skal gi verdi til følgerne. 20 % kan handle om deg og dine tilbud. Konsistens slår perfektion – det er bedre å poste tre ganger i uken konsekvent enn ti ganger én uke og ingenting de neste tre.

For Bergen-bedrifter: gjør det lokalt. Nevn Bergen, vis Bergen, tagg Bergen. Samarbeid med andre Bergen-bedrifter og tagg hverandre.

## Slik måler du resultater

Mål nettstedtrafikk fra sosiale medier, direkte meldinger og forespørsler, rekkevidde til Bergen-folk, og lenkeklikk til booking eller kontakt.

Ønsker du å overlate det til profesjonelle? Frameflow tilbyr skreddersydde pakker for sosiale medier til Bergen-bedrifter.
    `.trim(),
  },
  {
    slug: 'branding-bergen-bygg-merkevare-som-skiller-seg-ut',
    title: 'Branding i Bergen: Slik bygger du en merkevare som folk husker – og velger',
    excerpt: 'Sterk merkevarebygging er ikke forbeholdt storbyene. Se hvordan Bergen-bedrifter kan bygge en distinkt identitet som skiller dem ut i et lokalt marked.',
    category: 'Branding',
    date: '5. februar 2025',
    updatedAt: '2025-02-05',
    readTime: '7 min',
    relatedService: { title: 'Branding', href: '/tjenester' },
    content: `
## Hva er egentlig branding?

Branding er ikke bare en fin logo. Det er summen av alle inntrykk folk har av bedriften din: hvordan dere ser ut, snakker, oppfører dere og behandler kundene.

For en Bergen-bedrift betyr sterk branding at når noen tenker «jeg trenger en [din tjeneste]», er det din bedrift som dukker opp i hodet deres.

## Merkevarebygging i Bergen: Hva som fungerer lokalt

Bergen har en sterk lokal kultur og stolthet. Bedrifter som omfavner dette vinner i markedet. Spør deg selv: hva er det bergenske ved din bedrift? Lokal forankring, kjennskap til markedet, lokale leverandører – alt dette er verdifulle differensiatorer.

Sterk branding betyr at kunden opplever det samme inntrykket enten de ser annonsen din på Instagram, besøker nettsiden, åpner pakken eller møter deg personlig.

## De fem elementene i en profesjonell visuell identitet

### 1. Logo

En god logo er skalerbar, tidløs, distinkt og fleksibel. Ser like bra ut på visittkort som på vegg-skilt.

### 2. Fargepalett

For Bergen: blå og grønn toner assosieres med hav og fjell. Varm gull signaliserer tradisjoner og håndverk. Velg 2–3 primærfarger og hold deg til dem konsekvent.

### 3. Typografi

Skrifttyper sier mye om personligheten til en merkevare. En advokatfirma i Bergen bør ikke bruke samme skrifttype som en trendy kafe i Nygårdsparken.

### 4. Tone of voice

Hvordan snakker dere? Formelt? Uformelt? Direkte? Bestem dette og vær konsekvent i alle kanaler.

### 5. Bildestil

Et konsistent bildespråk forsterker merkevareopplevelsen på tvers av alle flater.

## Hva koster profesjonell branding i Bergen?

Logodesign: 5 000–20 000 kr. Komplett visuell identitet: 20 000–60 000 kr. Full branding inkl. strategi: 50 000–150 000 kr.

Frameflow tilbyr skreddersydd branding for Bergen-bedrifter – fra logodesign til komplett merkevareidentitet.
    `.trim(),
  },
  {
    slug: 'foto-video-bedrifter-bergen',
    title: 'Profesjonell foto og video for Bergen-bedrifter: Hvorfor kvalitetsinnhold gir flere kunder',
    excerpt: 'Dårlige produktbilder og lavkvalitets-video koster deg kunder. Lær hvorfor Bergen-bedrifter som investerer i profesjonelt visuelt innhold vinner i markedet.',
    category: 'Foto & Video',
    date: '25. januar 2025',
    updatedAt: '2025-01-25',
    readTime: '6 min',
    relatedService: { title: 'Foto og video', href: '/tjenester' },
    content: `
## Bildet som koster deg kunder

Vi ser det daglig: en Bergen-bedrift med et fantastisk produkt, fremstilt med kornete mobilbilder tatt i dårlig lys. Potensielle kunder danner seg et inntrykk på sekunder – og et uskarpt profilbilde sender ett signal: uprofesjonelt.

## Tallene lyver ikke

Innlegg med profesjonelle bilder får 6x mer engasjement på LinkedIn. Video på landingssider øker konverteringsraten med opptil 80 %. GBP-profiler med bilder får 42 % flere forespørsler om veibeskrivelse.

## Typer foto og video vi produserer for Bergen-bedrifter

### Bedriftsfotografering

Portrettbilder av teamet, arbeidsmiljø-bilder og generelle profil-bilder for nettsider og sosiale medier.

### Produktfotografering

Produkter på hvit bakgrunn for netthandel, livsstilsbilder i kontekst og detaljbilder.

### Bedriftsfilm

Fortell historien om bedriften din på 60–90 sekunder. Perfekt for hjemmeside, LinkedIn og annonser.

### Sosiale medier-innhold

Konsistent innhold produsert i bulk – bilder og videoer for 1–3 måneders publisering på én produksjonsdag.

### Drone-fotografering

Bergen er utrolig vakker sett ovenfra. Drone-bilder gir et unikt perspektiv som løfter enhver Bergen-bedrifts presentasjon.

## Priser i Bergen

Halvdags bedriftsfotografering: 4 000–8 000 kr. Bedriftsfilm (60–90 sek): 12 000–30 000 kr. Månedlig innholdsproduksjon: 3 000–8 000 kr/mnd.

Bergen som kulisse er en av de uunngåelige fordelene med å drive bedrift her. Vi utnytter Bryggen, fjellet og fjorden aktivt i vår innholdsproduksjon.
    `.trim(),
  },
  {
    slug: 'digital-markedsforing-bergen-5-kanaler-2025',
    title: 'Digital markedsføring i Bergen: De 5 viktigste kanalene for lokale bedrifter i 2025',
    excerpt: 'Med begrenset tid og budsjett må Bergen-bedrifter velge riktige markedsføringskanaler. Her er de fem som gir mest igjen for lokale bedrifter i dagens marked.',
    category: 'Markedsføring',
    date: '15. januar 2025',
    updatedAt: '2025-01-15',
    readTime: '7 min',
    relatedService: { title: 'Digital markedsføring', href: '/tjenester' },
    content: `
## Ikke alle kanaler passer for alle Bergen-bedrifter

Det finnes dusinvis av digitale markedsføringskanaler. For en Bergen-bedrift med begrenset tid og budsjett er det avgjørende å velge riktig. Her er de fem kanalene som konsekvent gir best resultater for lokale Bergen-bedrifter.

## Kanal 1: Lokal SEO og Google Business Profile

Intet slår organisk trafikk fra Google for kostnadseffektivitet på lang sikt. Google Business Profile er gratis og gir umiddelbar lokal synlighet. Dette er fundamentet all annen digital markedsføring bør bygge på.

Hvem bør prioritere dette: Alle Bergen-bedrifter uten unntak.

## Kanal 2: Google Ads

Mens SEO tar tid, gir Google Ads umiddelbare resultater. Du betaler kun når noen klikker, og kan begrense visning til Bergen-postnumre og målrette mot folk som søker spesifikke tjenester akkurat nå.

Typisk budsjett i Bergen: 3 000–15 000 kr/mnd.

## Kanal 3: Instagram og Facebook

For Bergen-bedrifter med visuelt appell er kombinasjonen ekstremt kraftig. Organiske innlegg bygger merkevare. Betalte annonser skalerer rekkevidden. Du kan målrette mot folk innenfor X kilometer fra adressen din.

## Kanal 4: E-postmarkedsføring

E-post har en gjennomsnittlig ROI på 3 600 %. De fleste Bergen-bedrifter samler ikke aktivt e-postadresser – noe som er en enorm tapt mulighet. Start enkelt: tilby verdi i bytte mot e-postadressen og send et nyhetsbrev månedlig.

## Kanal 5: Innholdsmarkedsføring og blogg

En blogg med SEO-optimaliserte artikler er en langsiktig maskin for gratis trafikk. En artikkel som rangerer på side 1 kan gi hundrevis av besøkende månedlig, år etter år, uten løpende annonsekostnader.

## Vår anbefaling for Bergen-bedrifter

Start med å optimalisere Google Business Profile og nettsiden, bygg e-postliste og vær konsekvent på 1–2 sosiale plattformer, test Google Ads, og bygg bloggen gradvis med kvalitetsartikler.

Lurer du på hvor du bør starte for din spesifikke bedrift? Kontakt Frameflow for en gratis strategisamtale.
    `.trim(),
  },
]

export const projects: Project[] = [
  {
    slug: 'bergen-bakeri',
    title: 'Bergen Bakeri',
    client: 'Bergen Bakeri',
    description: 'Nettside og Instagram-strategi for lokal bakeri i Bergen – henvendelser doblet seg på 30 dager',
    fullDescription:
      'Bergen Bakeri er en lokal Bergen-favoritt som trengte en sterk digital tilstedeværelse for å nå ut til flere kunder. Vi leverte ny nettside og en strukturert Instagram-strategi som forankret merkevaren visuelt og økte henvendelsene betraktelig.',
    challenge: 'Bakeriet hadde ingen nettside og ujevn tilstedeværelse på sosiale medier. Potensielle kunder fant dem ikke digitalt, og de mistet trafikk til konkurrenter med sterkere online synlighet.',
    tags: ['Web design', 'Sosiale medier'],
    location: 'Bergen, Norge',
    year: '2025',
    results: [
      'Antall henvendelser doblet seg på 30 dager',
      '890 nye Instagram-følgere på 3 måneder',
      'Konsistent visuell identitet på tvers av kanaler',
    ],
  },
  {
    slug: 'nordic-fit',
    title: 'Nordic Fit',
    client: 'Nordic Fit',
    description: 'Komplett brandingpakke og nettside for treningssenter i Bergen – fra logo til lansering på 2 uker',
    fullDescription:
      'Nordic Fit er et treningssenter i Bergen som trengte en komplett merkevare fra bunnen av. Vi leverte logo, fargepalett, typografi, brand guidelines og nettside – alt koordinert og klart for lansering innen 2 uker.',
    challenge: 'Nytt treningssenter uten noen form for visuell identitet eller digital tilstedeværelse. De trengte alt på kort tid for å treffe lanseringsdatoen.',
    tags: ['Branding', 'Web design'],
    location: 'Bergen, Norge',
    year: '2025',
    results: [
      'Komplett brandingpakke levert på 2 uker',
      'Logo, fargepalett, typografi og brand guidelines',
      'Nettside live til planlagt åpningsdato',
    ],
  },
  {
    slug: 'ho-orbit',
    title: 'h-orbit',
    client: 'h-orbit',
    description: 'Musikk-plattform for artister – dele musikk, samarbeid og events',
    fullDescription:
      'h-orbit er en musikk-plattform designet for emerging artists. Vi bygde en intuitiv app hvor musikere kan dele sin musikk, finne samarbeidsmuligheter med andre artister, oppdage events og musikk-relaterte muligheter – alt på ett sted.',
    challenge: 'Unge musikere manglet en sentralisert plass for å dele sin musikk, finne samarbeid og oppdage relevante events. De måtte bruke flere plattformer (SoundCloud, Instagram, email) og mistet ofte muligheter.',
    tags: ['App utvikling'],
    location: 'Bergen, Norge',
    year: '2026',
    results: [
      '2000+ artister på plattformen',
      '500+ samarbeidsprosjekter startet',
      '98% app uptime og stabilitet',
      '1000+ events descobret per måned',
    ],
  },
  {
    slug: 'artadent',
    title: 'Artadent',
    client: 'Artadent',
    description: 'Webdesign for tannlege i Bergen med optimalisert SEO for toppen av Google',
    fullDescription:
      'Artadent er en tannlegepraksis i Bergen som trengte en moderne nettside som reflekterte profesjonaliteten deres og tiltrakk nye pasienter. Vi bygde en rask, konverteringsfokusert nettside med innebygd SEO fra dag én.',
    challenge: 'Praksisen hadde ingen digital tilstedeværelse og mistet pasienter til konkurrenter som rangerte øverst på Google for lokale søk.',
    tags: ['Web design', 'SEO'],
    location: 'Bergen, Norge',
    year: '2025',
    results: [
      'Rangerer i topp 10 for "tannlege Bergen" på Google',
      'Økt organisk trafikk med 140% de første 3 månedene',
      'Merkbar økning i nye pasientforespørsler via nettsiden',
    ],
  },
  {
    slug: 'marbesa-project-94',
    title: 'Marbesa Project 94',
    client: 'Marbesa Project 94',
    description: 'Webdesign for et luksus eiendomsprosjekt i Marbella, Spania',
    fullDescription:
      'Marbesa Project 94 er et eksklusivt luksus-eiendomsprosjekt i Marbella. Vi skapte en nettside som formidler det høye prisnivået og den eksklusive livsstilen prosjektet representerer, med fokus på internasjonal målgruppe.',
    challenge: 'Et nytt luksusprosjekt uten digital identitet, som skulle appellere til et kresent internasjonalt marked med høye forventninger til estetikk.',
    tags: ['Web design', 'Branding'],
    location: 'Marbella, Spania',
    year: '2025',
    results: [
      'Luksusestetikk som matcher prosjektets posisjonering',
      'Flerspråklig design for internasjonal målgruppe',
      'Høy konverteringsrate på visningsforespørsler',
    ],
  },
  {
    slug: 'gv-rentals',
    title: 'GV Rentals',
    client: 'GV Rentals',
    description: 'Webdesign og sosiale medier innhold for utleiebyrå i Marbella',
    fullDescription:
      'GV Rentals er et utleiebyrå i Marbella som trengte en sterk digital tilstedeværelse. Vi leverte både nettside og løpende sosiale medier innhold – en blanding av eiendomsvisninger, lifestyle innhold og lokale tips.',
    challenge: 'Uten nettsted og sosiale medier gikk potensielle leietakere til konkurrenter. Byrået hadde ingen konsistent visuell identitet på tvers av kanaler.',
    tags: ['Web design', 'Sosiale medier'],
    location: 'Marbella, Spania',
    year: '2025',
    results: [
      'Betydelig høyere engasjement på sosiale medier',
      'Økt bookingrate etter ny nettside',
      'Konsistent visuell identitet på alle kanaler',
    ],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
