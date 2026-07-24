export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  updatedAt?: string
  readTime: string
  metaTitle?: string
  content: string
  relatedService?: { title: string; href: string }
  image?: { src: string; alt: string }
}

export interface ProjectSeo {
  titleNo: string
  titleEn: string
  descNo: string
  descEn: string
  keywordsNo: string[]
  keywordsEn: string[]
  ogImage: string
  schemaName: string
  schemaDescription: string
  dateCreated: string
  schemaKeywords: string
  schemaLocation: string
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
  image?: { src: string; alt: string }
  seo?: ProjectSeo
  faqs?: { q: string; a: string }[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'trenger-ny-nettside-bergen',
    title: 'Trenger Bergen-bedriften din en ny nettside? 7 tegn på at det er på tide',
    excerpt: 'Er nettsiden din utdatert, treg eller usynlig på Google? Her er 7 tegn på at Bergen-bedriften din trenger en ny nettside – og hva du bør gjøre med det.',
    metaTitle: 'Trenger du ny nettside? 7 tegn for Bergen-bedrifter',
    category: 'Webdesign',
    date: '18. juli 2026',
    updatedAt: '2026-07-18',
    readTime: '7 min',
    relatedService: { title: 'Web design', href: '/tjenester/webdesign' },
    image: { src: '/blog/trenger-ny-nettside-bergen.png', alt: 'Illustrasjon av en sjekkliste med syv tegn på at en bedrift bør fornye nettsiden sin' },
    content: `
Kort svar: **hvis nettsiden din er treg, vanskelig å bruke på mobil, umulig å finne på Google eller aldri gir deg henvendelser – er det på tide med en ny.** De fleste bedriftsnettsider bør fornyes hvert tredje til femte år. Her er de syv tydeligste tegnene på at Bergen-bedriften din har vokst fra nettsiden sin – og hva du bør gjøre med hvert enkelt.

## 1. Den fungerer dårlig på mobil

Over 60 % av trafikken til lokale bedriftsnettsteder kommer fra mobil. Må besøkende zoome, dra sidelengs eller sikte på knapper som er for små, mister du dem – og Google rangerer mobilvennlige sider høyere. Test din egen side på telefonen akkurat nå: er det en behagelig opplevelse, eller en frustrerende en?

## 2. Den laster for tregt

53 % av mobilbrukere forlater en side som bruker mer enn tre sekunder på å laste. Sidehastighet er både en konverterings- og [rangeringsfaktor på Google](/tjenester/seo). Kjør siden din gjennom Google PageSpeed Insights – er mobilscoren under 50, taper du sannsynligvis kunder hver eneste dag.

## 3. Du finner den ikke på Google

Søker du på tjenesten din pluss «Bergen» og ikke dukker opp på første side, jobber ikke nettsiden for deg. Eldre nettsider mangler ofte det tekniske fundamentet – ren kode, riktig struktur og metadata – som skal til for å rangere lokalt. En ny, [SEO-optimalisert nettside i Bergen](/tjenester/webdesign) bygges med synlighet innebygd fra dag én.

## 4. Den gir deg ingen henvendelser

Har du trafikk, men telefonen ringer ikke og skjemaet står tomt? Da er problemet konvertering, ikke design. En nettside som selger har tydelig verditilbud, klare handlingsknapper og sosialt bevis. Vi har brutt ned nøyaktig hva som skiller en side som konverterer fra en som bare ser fin ut, i vår guide til [nettsiden som salgsmaskin](/blogg/webdesign-bergen-nettside-som-konverterer).

## 5. Du kan ikke oppdatere den selv

Må du ringe en utvikler for å endre en telefonnummer eller legge ut en nyhet, er nettsiden bygget på utdatert teknologi. Moderne nettsider har et brukervennlig redigeringssystem der du trygt endrer tekst og bilder selv – uten teknisk kunnskap og uten å risikere å ødelegge designet.

## 6. Designet ser utdatert ut

85 % av forbrukere sjekker en bedrifts nettside før de kjøper. Ser siden ut som den er fra 2015, overfører besøkende det inntrykket til bedriften din – uansett hvor god du faktisk er. Et moderne, profesjonelt design bygger tillit i løpet av de første sekundene.

## 7. Den speiler ikke bedriften din lenger

Har du fått nye tjenester, ny profil eller flyttet posisjon i markedet siden nettsiden ble laget? Da forteller den feil historie om hvem du er i dag. En nettside som er «uvokst» koster deg troverdighet hos akkurat de kundene du vil ha.

## Ny nettside eller oppgradering av den gamle?

Kjenner du deg igjen i **ett eller to** av punktene, er det ofte nok å fikse akkurat de tingene. Kjenner du deg igjen i **tre eller flere** – særlig tregt, ikke mobilvennlig og usynlig på Google samtidig – lønner det seg som regel å bygge nytt fra bunnen. Å lappe på et gammelt fundament blir fort dyrere enn å gjøre det riktig én gang.

Skal du bygge nytt, tar vår [steg-for-steg-guide til å lage en nettside](/blogg/lage-nettside-steg-for-steg-guide-2026) deg gjennom prosessen, og [prisoversikten for nettsider i Bergen](/blogg/nettside-pris-bergen) viser hva du kan forvente å betale. Er du usikker på hvem som skal gjøre jobben, hjelper [guiden til å velge riktig webbyrå](/blogg/webbyraa-bergen-guide) deg å stille de riktige spørsmålene.

## Hva nå?

Er du i tvil, start med en ærlig test: åpne nettsiden på mobil, ta tiden på hvor raskt den laster, og søk deg selv opp på Google. Svarene forteller deg som regel alt du trenger å vite.

Vil du ha en gratis, uforpliktende vurdering av din nåværende nettside? [Ta kontakt](/kontakt), så ser vi på den sammen og gir deg konkrete råd – enten det er en oppussing eller en helt [ny nettside i Bergen](/tjenester/webdesign) som skal til.

## Ofte stilte spørsmål

### Hvor ofte bør en bedrift bytte nettside?

Som en tommelfingerregel bør en bedriftsnettside fornyes hvert tredje til femte år. Teknologi, designtrender og Googles krav endrer seg raskt, og en side som var god for fem år siden er ofte utdatert i dag – både teknisk og visuelt.

### Bør jeg lage ny nettside eller oppgradere den gamle?

Kjenner du deg igjen i ett eller to av tegnene, holder det ofte å utbedre akkurat de tingene. Er det tre eller flere – for eksempel treg, ikke mobilvennlig og usynlig på Google samtidig – lønner det seg som regel å bygge nytt, fordi det å lappe på et gammelt fundament fort blir dyrere over tid.

### Hva koster en ny nettside i Bergen?

For en middels stor til stor bedriftsnettside fra et lokalt byrå ligger prisen typisk i området 35 000–120 000 kr, avhengig av omfang. Trenger du noe enklere, starter nettsider fra 15 000 kr. Vi har en egen prisoversikt som bryter ned hva som påvirker prisen for Bergen-markedet.

### Hvor lang tid tar det å lage en ny nettside?

En standard bedriftsnettside tar typisk tre til seks uker fra oppstart til lansering, avhengig av omfang og hvor raskt innholdet er på plass. Større nettsteder med nettbutikk eller mange sider tar lengre tid.
    `.trim(),
  },
  {
    slug: 'ai-automasjon-oppgaver-bergen',
    title: '5 oppgaver Bergen-bedrifter kan automatisere med AI i 2026',
    excerpt: 'Bruker du timer på e-post, oppfølging og manuell registrering? Her er 5 oppgaver Bergen-bedrifter kan automatisere med AI – og hva du faktisk sparer på det.',
    metaTitle: '5 oppgaver Bergen-bedrifter kan automatisere med AI',
    category: 'AI automasjon',
    date: '30. juni 2026',
    updatedAt: '2026-06-30',
    readTime: '7 min',
    relatedService: { title: 'AI-automasjon', href: '/tjenester/ai-automasjon' },
    image: { src: '/blog/ai-automasjon-oppgaver-bergen.png', alt: 'Illustrasjon av automatiserte arbeidsflyter og AI-drevne prosesser for bedrifter' },
    content: `
Kort svar: de fleste små og mellomstore bedrifter i Bergen kan spare **5–10 timer i uken** ved å automatisere fem rutineoppgaver – e-posthåndtering, kundechat, lead-registrering, booking og oppfølging. Du trenger ikke bytte ut folk; du frigjør dem fra arbeidet en maskin gjør raskere og mer konsekvent. Her er de fem, i den rekkefølgen vi anbefaler å ta dem.

## 1. Håndtering av innkommende henvendelser

De fleste bedrifter får de samme spørsmålene om og om igjen: åpningstider, pris, tilgjengelighet, «kan dere hjelpe med X?». Hver enkelt e-post er kjapp å svare på – men til sammen spiser de en hel arbeidsdag i uken.

**Det AI kan gjøre:** sortere innkommende e-post automatisk, svare på standardspørsmål med riktig informasjon, og videresende det som krever et menneske til rett person. Du svarer fortsatt personlig på det som betyr noe – maskinen tar resten.

**Hva du sparer:** typisk 3–5 timer i uken, og kundene får svar med en gang i stedet for neste dag.

## 2. AI-chatbot på nettsiden

En kunde som besøker nettsiden din klokka 21 og ikke får svar, er ofte en kunde du mister. En velbygd chatbot fanger opp spørsmålet, svarer på det den kan, og samler inn kontaktinfo til resten.

**Det AI kan gjøre:** svare på vanlige spørsmål døgnet rundt, kvalifisere besøkende, og booke møter eller sende leads rett inn i innboksen din – uten at du er pålogget.

**Hva du sparer:** færre tapte henvendelser utenom arbeidstid, og en lavere terskel for at folk tar kontakt i det hele tatt. En [profesjonell nettside i Bergen](/tjenester/webdesign) med en chatbot på toppen jobber for deg mens du sover.

## 3. Lead-kvalifisering og CRM-logging

Den manuelle jobben med å føre nye kontakter inn i et regneark eller CRM blir nesten alltid nedprioritert – og da forsvinner leads i sprekkene.

**Det AI kan gjøre:** automatisk logge hver henvendelse i CRM-et ditt (HubSpot, Pipedrive, Notion), berike den med tilgjengelig informasjon, og prioritere de heteste leadsene slik at du ringer riktig kunde først.

**Hva du sparer:** ingen tapte leads, og et CRM som faktisk er oppdatert uten at noen må vedlikeholde det.

## 4. Booking og avtalebehandling

Frem-og-tilbake-e-poster for å finne et møtetidspunkt er en klassisk tidstyv – og virker lite profesjonelt.

**Det AI kan gjøre:** la kunden booke direkte i kalenderen din (Calendly, Cal.com), sende automatiske bekreftelser og påminnelser, og håndtere ombooking uten at du løfter en finger.

**Hva du sparer:** færre no-shows, og slutt på e-postpingpongen rundt hvert eneste møte.

## 5. Oppfølging og e-postsekvenser

De fleste salg skjer i oppfølgingen – men oppfølging er nettopp det travle bedrifter glemmer. En kunde som ba om tilbud for to uker siden, blir aldri kontaktet igjen.

**Det AI kan gjøre:** sende automatiske, men personlige oppfølginger til riktig tid – etter et tilbud, etter et kjøp, eller for å vekke en kald lead til live igjen.

**Hva du sparer:** flere lukkede salg fra leads du allerede har betalt for å skaffe.

## Hvor bør du begynne?

Ikke automatiser alt på én gang. Start med oppgaven som stjeler mest tid og er enklest å beskrive som en serie trinn – ofte er det e-posthåndtering (punkt 1). En god tommelfingerregel: **kan du forklare oppgaven steg for steg til en ny ansatt, kan den automatiseres.**

## Hva koster det?

En enkel automasjon starter typisk fra 8 000 kr eks. mva som en engangskostnad. Mer komplekse flyter med AI-behandling, chatbot og flere systemintegrasjoner koster mer – men regnestykket er ofte enkelt: sparer du 5 timer i uken, er investeringen nedbetalt i løpet av få måneder. Se hvordan vi jobber med [AI-automasjon for Bergen-bedrifter](/tjenester/ai-automasjon), eller [ta en uforpliktende prat](/kontakt) om hvor du taper mest tid i dag.

## Ofte stilte spørsmål

### Hva er AI-automasjon for en bedrift?

AI-automasjon er systemer som utfører repetitive, regelbaserte oppgaver automatisk – som å svare på henvendelser, logge leads i CRM eller sende oppfølginger. Målet er ikke å erstatte ansatte, men å frigjøre tiden deres fra rutinearbeid.

### Hvilke oppgaver bør jeg automatisere først?

Begynn med oppgaven som tar mest tid og er enklest å beskrive steg for steg – for de fleste Bergen-bedrifter er det håndtering av innkommende e-post og henvendelser.

### Hva koster det å automatisere med AI?

En enkel automasjon starter fra rundt 8 000 kr eks. mva som engangskostnad. Prisen øker med kompleksiteten, men sparer du noen timer i uken, betaler løsningen seg selv raskt.

### Mister jeg den personlige kontakten med kundene?

Nei. Godt bygde automasjoner håndterer det rutinepregede og sender alt som krever en menneskelig vurdering videre til deg. Du får mer tid til de samtalene som faktisk betyr noe.
    `.trim(),
  },
  {
    slug: 'seo-eller-google-ads-bergen',
    title: 'SEO eller Google Ads: Hva lønner seg for Bergen-bedrifter i 2026?',
    excerpt: 'SEO gir varige resultater, Google Ads gir raske. Men hva passer din Bergen-bedrift? Vi sammenligner kostnad, tid og avkastning – og når du bør kombinere dem.',
    metaTitle: 'SEO eller Google Ads i Bergen? Slik velger du riktig',
    category: 'Markedsføring',
    date: '30. juni 2026',
    updatedAt: '2026-06-30',
    readTime: '8 min',
    relatedService: { title: 'Markedsføring', href: '/tjenester/markedsforing' },
    image: { src: '/blog/seo-eller-google-ads-bergen.png', alt: 'Illustrasjon som sammenligner organisk søk og betalt annonsering' },
    content: `
Kort svar: **Google Ads gir deg trafikk fra dag én, mens SEO bygger varig synlighet som koster mindre over tid.** For de fleste Bergen-bedrifter er ikke spørsmålet enten–eller, men *når* du bruker hva. Under går vi gjennom kostnad, tid til resultater og avkastning – og hvorfor de to ofte fungerer best sammen.

## SEO vs. Google Ads: den korte oversikten

| | SEO | Google Ads |
|---|---|---|
| Tid til første resultat | 3–6 måneder | Samme dag |
| Kostnadsmodell | Jevn investering i innhold og teknikk | Betaler per klikk, så lenge du annonserer |
| Effekt over tid | Vokser og varer | Stopper når budsjettet stopper |
| Tillit hos brukeren | Organiske treff får flest klikk | Mange hopper bevisst over annonser |
| Best egnet til | Langsiktig synlighet og lavere kostnad per kunde | Raske resultater, kampanjer og testing |

## Når SEO er det riktige valget

SEO – søkemotoroptimalisering – handler om å rangere organisk på Google uten å betale for hvert klikk. Det tar tid å bygge, men når du først rangerer, fortsetter trafikken å komme uten at du betaler per besøk.

SEO lønner seg best når:

- Du tenker langsiktig og vil bygge en synlighet som varer
- Bedriften din løser problemer folk aktivt googler («tannlege Bergen», «regnskapsfører Bergenhus»)
- Du vil ha lavere kostnad per kunde over tid
- Du har tålmodighet til å vente 3–6 måneder på full effekt

For lokale bedrifter er det som regel **lokal SEO** som gir mest igjen. Vil du forstå hvordan det fungerer i praksis, tar vår [komplette guide til lokal SEO i Bergen](/blogg/lokal-seo-bergen-guide-2025) deg gjennom stegene – eller les mer om hvordan vi jobber med [SEO for Bergen-bedrifter](/tjenester/seo).

## Når Google Ads gir mest

Google Ads (tidligere AdWords) er betalt annonsering der du byr på søkeord og betaler per klikk. Du kan være øverst på Google i løpet av en time – men kun så lenge du betaler.

Google Ads lønner seg best når:

- Du trenger resultater raskt – en lansering, en kampanje eller en sesong
- Du vil teste hvilke søkeord og budskap som konverterer før du satser på SEO
- Du selger noe med høy margin der ett salg dekker mange klikk
- Du vil dominere søk der SEO er tøff konkurranse på kort sikt

Vi har skrevet mer om [Google Ads for Bergen-bedrifter](/blogg/google-ads-bergen) – inkludert hva du realistisk kan forvente av avkastning.

## Hvorfor de fleste bør kombinere de to

I praksis er ikke SEO og Google Ads konkurrenter – de utfyller hverandre. Google Ads gir deg data og trafikk mens SEO-en modnes, og SEO senker den langsiktige kostnaden når annonsekronene blir dyre.

En typisk smart rekkefølge for en Bergen-bedrift:

1. **Start med Google Ads** for å få kunder inn med en gang og lære hvilke søkeord som faktisk konverterer.
2. **Bygg SEO parallelt** på de søkeordene som viser seg å være verdifulle.
3. **Trapp ned annonsebudsjettet** etter hvert som de organiske rangeringene tar over – og behold Ads kun der det fortsatt lønner seg.

## Hva koster det i Bergen?

Realistiske prisnivåer for det lokale markedet:

| Kanal | Typisk kostnad | Merk |
|---|---|---|
| Google Ads | 5 000 – 20 000 kr/mnd i mediebudsjett + byråhonorar | Du betaler så lenge annonsene kjører |
| SEO | Fra 4 500 kr/mnd | Effekten bygger seg opp og varer |

Det billigste alternativet er sjelden det beste. Både SEO og Ads krever kompetanse for å gi reell avkastning – men pengene jobber ulikt: med Ads leier du synlighet, med SEO eier du den.

## Vårt råd til Bergen-bedrifter

For de fleste små og mellomstore bedrifter i Bergen anbefaler vi å **anker på SEO for den langsiktige økonomien, og bruke Google Ads taktisk** der du trenger fart. Har du et stramt budsjett og må velge én ting først, vinner som regel SEO – fordi du bygger en eiendel i stedet for å leie trafikk.

Usikker på hva som passer din situasjon? Se hvordan vi tenker rundt [digital markedsføring i Bergen](/tjenester/markedsforing), eller [ta en uforpliktende prat](/kontakt) – vi gir deg et ærlig råd basert på målene dine, ikke hva som gir oss mest å gjøre.

## Ofte stilte spørsmål

### Hva er forskjellen på SEO og Google Ads?

SEO gir organisk synlighet på Google uten å betale per klikk, men tar tid å bygge. Google Ads er betalt annonsering som gir trafikk umiddelbart, men slutter å virke når du stopper å betale.

### Er SEO eller Google Ads billigst?

Google Ads har lavest startkostnad, men du betaler for hvert klikk så lenge annonsene kjører. SEO koster mer i starten, men gir lavere kostnad per kunde over tid fordi trafikken fortsetter uten løpende klikkbetaling.

### Hvor raskt ser jeg resultater?

Med Google Ads kan du få besøk og henvendelser samme dag annonsene går live. Med SEO ser de fleste Bergen-bedrifter synlig forbedring innen 3–6 måneder, og etablert lokal autoritet innen et år.

### Bør en liten Bergen-bedrift velge SEO eller Google Ads?

Har du begrenset budsjett, anbefaler vi som regel å prioritere lokal SEO for den langsiktige økonomien, og bruke Google Ads i korte perioder når du trenger raske resultater eller vil teste nye søkeord.
    `.trim(),
  },
  {
    slug: 'lage-nettside-steg-for-steg-guide-2026',
    title: 'Slik lager du en profesjonell nettside i 2026: en komplett steg-for-steg guide',
    excerpt: 'Skal du lage ny nettside? Slik går prosessen steg for steg – fra planlegging og innhold til webdesign, SEO og lansering. En praktisk guide for bedrifter.',
    metaTitle: 'Lage nettside: steg-for-steg guide 2026 | Frameflow',
    category: 'Webdesign',
    date: '19. juni 2026',
    updatedAt: '2026-06-19',
    readTime: '9 min',
    relatedService: { title: 'Web design', href: '/tjenester/webdesign' },
    image: { src: '/blog/lage-nettside-steg-for-steg-guide-2026.png', alt: 'Illustrasjon av stegene i å bygge en ny nettside, fra wireframe til ferdig design' },
    content: `
Å lage en nettside handler om langt mer enn å velge farger og skrive litt tekst. En profesjonell nettside bygges i en tydelig prosess: planlegging, innhold, webdesign, utvikling, SEO og lansering. Følger du de sju stegene under, ender du opp med en nettside som ser bra ut, laster raskt og faktisk gir bedriften din kunder – ikke bare en pen brosjyre ingen finner. Her er hele prosessen forklart steg for steg.

Usikker på om du i det hele tatt trenger en ny nettside? Se først [de 7 tegnene på at Bergen-bedriften din bør fornye nettsiden](/blogg/trenger-ny-nettside-bergen) – så vet du om du skal bygge nytt eller pusse opp det du har.

## Hva en nettside egentlig skal gjøre

Før du tegner en eneste knapp: en nettside er et verktøy, ikke et utstillingsvindu. Den skal hjelpe en besøkende med å forstå hva du tilbyr, stole på deg, og ta neste steg – ringe, sende skjema eller bestille. Godt webdesign er derfor balansen mellom form og funksjon: det skal se profesjonelt ut *og* lede besøkende mot en handling.

Det betyr at de viktigste avgjørelsene tas før designfasen. Hopper du rett til «hvordan skal den se ut», bygger du på løs grunn.

## Steg 1: Sett mål og kartlegg målgruppen

Start med ett spørsmål: hva skal nettsiden oppnå? Flere henvendelser, salg i nettbutikk, booking av timer, eller å bygge tillit til merkevaren? Målet styrer alt annet.

Kartlegg deretter hvem du snakker til. Hva googler de? Hvilke innvendinger har de før de kjøper? Jo bedre du kjenner målgruppen, jo lettere er det å skrive innhold og designe en nettside som treffer.

## Steg 2: Planlegg struktur og sidekart

Tegn opp hvilke sider nettsiden skal ha før du tenker på design. En typisk bedriftsnettside har en forside, en eller flere tjenestesider, en om-oss-side, referanser eller prosjekter, en blogg og en kontaktside.

God struktur er også god SEO: hver side bør ha ett tydelig tema og én søkeintensjon. Tjenestesider som er delt opp etter hva folk faktisk søker på – for eksempel egne sider for [webdesign](/tjenester/webdesign), [Webflow](/tjenester/webflow) og [SEO](/tjenester/seo) – rangerer bedre enn én rotete side som prøver å dekke alt.

## Steg 3: Skaff innhold før design

Innhold før design – ikke omvendt. Tekst, bilder og video bør være klart (eller i det minste skissert) før designet låses, slik at designet bygges rundt det faktiske innholdet.

- **Tekst:** Skriv for mennesker først, søkemotorer like etter. Svar på spørsmålene målgruppen faktisk har.
- **Bilder og video:** Profesjonelle, egne bilder bygger langt mer tillit enn generiske arkivbilder. Gode [foto- og videoproduksjoner](/tjenester/foto-og-videografi) løfter hele nettsiden.
- **Bevis:** Kundeomtaler, konkrete resultater og logoer du kan vise frem.

## Steg 4: Design som bygger tillit og konverterer

Nå – og først nå – kommer det visuelle. Godt webdesign følger merkevaren din, ikke en mal alle andre bruker. De viktigste prinsippene:

- Tydelig verditilbud øverst på siden, forståelig innen fem sekunder
- Én klar call-to-action som gjentas strategisk
- Mobil først – over 60 % av trafikken til de fleste bedriftsnettsteder kommer fra mobil
- Nok luft, lesbar typografi og en visuell hierarki som leder øyet

Vil du gå dypere i hva som skiller en nettside som selger fra en som bare ser fin ut, har vi skrevet om de [seks elementene i en nettside som konverterer](/blogg/webdesign-bergen-nettside-som-konverterer).

## Steg 5: Velg riktig plattform

Plattformen avgjør hvor rask, sikker og enkel nettsiden blir å eie. WordPress er fleksibelt, men krever løpende vedlikehold. Wix og Squarespace er enkle, men begrenser deg til maler og gir mindre kontroll på SEO. For de fleste bedrifter treffer [Webflow](/tjenester/webflow) midt i blinken: designfrihet og profesjonell kvalitet, uten plugins som ruster.

Usikker på valget? Vår [komplette guide til Webflow](/blogg/webflow-bergen) sammenligner alternativene grundig.

## Steg 6: Bygg inn SEO fra dag én

SEO er ikke noe du legger på til slutt – det er en del av selve fundamentet. Sørg for ren kode, rask lastetid, gjennomtenkt sidestruktur, unike metatitler og metabeskrivelser, alt-tekst på bilder og strukturert data.

For lokale bedrifter er lokal SEO ofte det som gir flest henvendelser. Vår [steg-for-steg-guide til lokal SEO](/blogg/lokal-seo-bergen-guide-2025) viser hvordan du kommer øverst på Google i ditt område uten å betale for annonser. En nettside som er [bygget for SEO fra starten](/tjenester/seo) er alltid billigere enn å reparere en som ikke er det.

## Steg 7: Test, lanser og følg opp

Før lansering: test nettsiden på mobil, nettbrett og desktop, sjekk at alle skjemaer og lenker fungerer, og kjør en hastighetstest i Google PageSpeed Insights – sikt mot en score over 80 på mobil.

Etter lansering er jobben ikke ferdig. Følg med på trafikk, juster innhold som ikke fungerer, og oppdater jevnlig. En nettside er et levende verktøy, ikke et engangsprosjekt. Se hvordan vi har jobbet med dette i [våre prosjekter](/prosjekter).

## Hva koster det å lage en nettside?

Prisen avhenger av omfang og hvem som bygger den – fra noen tusen for en ferdigmal til godt over 100 000 kr for en skreddersydd løsning fra et byrå. Vi har brutt ned alle prisnivåene i en egen [prisoversikt for nettsider](/blogg/nettside-pris-bergen).

## Bør du lage nettsiden selv eller bruke et byrå?

Å lage nettsiden selv kan fungere for en helt enkel side med lite på spill. Men skal nettsiden være en kilde til kunder, lønner det seg nesten alltid å bruke fagfolk – både for design, teknisk kvalitet og SEO. Velger du å hyre noen, gir vår [guide til å velge riktig webbyrå](/blogg/webbyraa-bergen-guide) deg spørsmålene du bør stille før du bestemmer deg.

## Vanlige spørsmål om å lage nettside

### Hvor lang tid tar det å lage en nettside?

En standard bedriftsnettside tar typisk 3–6 uker fra oppstart til lansering, avhengig av omfang og hvor raskt innhold er på plass. Større nettsider med nettbutikk eller mange sider tar lengre tid.

### Hva trenger jeg før vi starter?

Et tydelig mål, en idé om hvilke sider du trenger, og innhold – tekst, bilder og logo. Har du ikke alt klart, hjelper et godt byrå deg med å få det på plass underveis.

### Kan jeg oppdatere nettsiden selv etterpå?

Ja. På moderne plattformer som Webflow kan du trygt endre tekst og bilder selv i en brukervennlig redaktørmodus, uten teknisk kunnskap og uten å risikere å ødelegge designet.

### Hva koster det å lage en profesjonell nettside?

Hos et byrå starter en enklere skreddersydd bedriftsnettside fra 15 000 kr, mens middels store til store prosjekter typisk ligger i området 35 000–120 000 kr, avhengig av antall sider og funksjonalitet. Se den fullstendige [prisoversikten](/blogg/nettside-pris-bergen) for detaljer.

## Klar for å lage en ny nettside?

Nå kjenner du hele prosessen – fra mål og innhold til design, SEO og lansering. Vil du ha en nettside som er bygget riktig fra første steg, hjelper vi deg gjerne.

Les mer om hvordan vi jobber med [webdesign i Bergen](/tjenester/webdesign), eller [ta kontakt](/kontakt) for en uforpliktende prat om prosjektet ditt.
    `.trim(),
  },
  {
    slug: 'webflow-bergen',
    title: 'Webflow i Bergen: Komplett guide til fordeler, pris og prosess (2026)',
    excerpt: 'Vurderer du Webflow i Bergen? Her er hva Webflow er, fordelene for bedrifter, hva det koster – og hvordan vi bygger nettsider som rangerer i Google.',
    metaTitle: 'Webflow Bergen: guide, fordeler og pris 2026 | Frameflow',
    category: 'Webdesign',
    date: '8. juni 2026',
    updatedAt: '2026-06-08',
    readTime: '8 min',
    relatedService: { title: 'Webflow-utvikling', href: '/tjenester/webflow' },
    image: { src: '/blog/webflow-bergen.png', alt: 'Illustrasjon av nettsidedesign bygget i Webflow med wireframe-elementer' },
    content: `
Webflow er en moderne plattform for å bygge raske, designfrie og SEO-vennlige nettsider uten å gå på akkord med kvalitet. For en Bergen-bedrift gir Webflow en nettside som ser profesjonell ut, laster lynraskt og er enkel å oppdatere selv – uten sårbare plugins eller dyre lisenser. Her er alt du trenger å vite før du velger Webflow.

## Hva er Webflow?

Webflow er et visuelt verktøy for webutvikling som kombinerer designfrihet med ren, profesjonell kode. I motsetning til maler på Wix eller Squarespace bygges hver Webflow-nettside fritt – men uten at en utvikler må skrive HTML og CSS for hånd. Resultatet er en nettside med samme kvalitet som en skreddersydd løsning, levert raskere og rimeligere.

Plattformen inkluderer hosting på et globalt CDN, et innebygd CMS for blogg og innhold, og automatisk responsivt design for mobil, nettbrett og desktop. For deg som eier nettsiden betyr det færre bevegelige deler og mindre vedlikehold.

## Hvorfor velge Webflow for en Bergen-bedrift?

Webflow løser flere av problemene Bergen-bedrifter ofte møter med eldre WordPress-sider eller billige malløsninger:

- Lynrask lastetid – avgjørende for både brukeropplevelse og Google-rangering
- Ingen plugins som ruster, krasjer eller utgjør en sikkerhetsrisiko
- Du kan redigere tekst og bilder selv, uten å være redd for å ødelegge noe
- Ren kode og full kontroll på SEO-innstillinger fra dag én
- Designfrihet – nettsiden følger merkevaren din, ikke en mal alle andre bruker
- Sikker hosting inkludert, med automatisk SSL og backup

For en lokal bedrift som vil skille seg ut i et konkurranseutsatt marked, er kombinasjonen av profesjonelt design og teknisk ytelse vanskelig å matche.

## Webflow vs. WordPress vs. Wix

Valg av plattform avhenger av hva du prioriterer. Her er de viktigste forskjellene.

### WordPress

WordPress er fleksibelt og utbredt, men krever løpende vedlikehold: oppdateringer, plugin-konflikter og sikkerhetshull. Det fungerer godt for store, innholdstunge nettsteder med spesielle behov – men for de fleste Bergen-bedrifter blir det mer komplisert enn nødvendig.

### Wix og Squarespace

Disse er enkle å komme i gang med, men begrenser deg til maler og gir mindre kontroll på SEO og ytelse. Du eier i praksis ikke koden, og det blir vanskelig å vokse ut av plattformen senere.

### Webflow

Webflow treffer midt i blinken for de fleste bedrifter: designfrihet og profesjonell kvalitet som WordPress, men med enkelheten og vedlikeholdsfriheten til en lukket plattform. For en typisk bedriftsnettside i Bergen er det ofte det beste valget.

## Hva koster en Webflow-nettside i Bergen?

Prisen avhenger av omfang, antall sider og hvor skreddersydd designet skal være. Som en realistisk pekepinn på prisnivåene du møter:

- Enkel landingsside (én side): 15 000 – 30 000 kr
- Bedriftsnettside (5–8 sider): 30 000 – 70 000 kr
- Større nettside med CMS og blogg: 70 000 – 150 000 kr
- Webflow-lisens og hosting: ca. 200 – 500 kr/mnd avhengig av plan

Vil du ha et fullstendig bilde av hva en nettside koster i Bergen generelt, har vi skrevet en egen [prisguide for webdesign i Bergen](/blogg/hva-koster-webdesign-bergen-prisguide-2025) som går dypere inn i hva som påvirker prisen.

## Webflow og SEO – en sterk kombinasjon

Webflow er bygget med SEO i tankene. Du får full kontroll på metatitler, metabeskrivelser, alt-tekst, canonical-tagger og strukturert data – uten ekstra plugins. Kombinert med plattformens raske lastetid gir det et solid utgangspunkt for å rangere på søk som «webdesign Bergen» eller bransjespesifikke lokale søk.

Men plattformen alene rangerer ikke nettsiden din. Teknisk SEO må settes opp riktig, og innholdet må treffe hva folk faktisk søker etter. Det henger tett sammen med en gjennomtenkt [SEO-strategi for Bergen-bedrifter](/tjenester/seo) – og en [nettside som er bygget for å konvertere](/tjenester/webdesign) fra starten.

## Slik bygger vi Webflow-nettsider

Hos Frameflow følger vi en strukturert prosess som gir forutsigbarhet og resultater:

- Strategi og kartlegging av mål, målgruppe og søkeord
- Design tilpasset merkevaren din – ikke en mal
- Utvikling i Webflow med ren struktur og SEO innebygd
- Innhold, testing og kvalitetssikring på alle skjermstørrelser
- Lansering, opplæring og oppfølging så du kan drifte siden selv

Vi har bygget moderne, konverteringsfokuserte nettsider for kunder i både Norge og utlandet – se noen av dem blant [våre prosjekter](/prosjekter).

## Vanlige spørsmål om Webflow i Bergen

### Er Webflow bra for SEO?

Ja. Webflow gir ren kode, rask lastetid og full kontroll på metadata og strukturert data – alt som skal til for et godt SEO-fundament. Resultatene avhenger likevel av riktig oppsett og innhold.

### Kan jeg oppdatere Webflow-nettsiden selv?

Ja. Webflow har et brukervennlig CMS og en redaktørmodus der du trygt kan endre tekst og bilder uten teknisk kunnskap, og uten å risikere å ødelegge designet.

### Hva koster Webflow i måneden?

Selve plattformen koster typisk 200 – 500 kr/mnd avhengig av plan, inkludert hosting og SSL. Utviklingen av selve nettsiden er en separat engangskostnad.

### Bør jeg velge Webflow eller WordPress?

For de fleste Bergen-bedrifter er Webflow det enkleste valget: profesjonelt resultat uten løpende vedlikehold. WordPress passer best for store, komplekse nettsteder med spesielle integrasjoner.

## Klar for en Webflow-nettside i Bergen?

Webflow gir bedrifter i Bergen en nettside som er rask, sikker og enkel å eie – uten kompromiss på design eller synlighet i søk. Vil du vite om det passer for ditt prosjekt?

Les mer om vår [Webflow-utvikling i Bergen](/tjenester/webflow), eller [ta kontakt](/kontakt) for en uforpliktende prat. Skal du lage nettside fra bunnen, går vår [steg-for-steg guide til å lage en nettside](/blogg/lage-nettside-steg-for-steg-guide-2026) gjennom hele prosessen – og lurer du fortsatt på hvilken plattform som passer best, gir [vår guide til å velge webbyrå i Bergen](/blogg/webbyraa-bergen-guide) deg spørsmålene du bør stille før du bestemmer deg.
    `.trim(),
  },
  {
    slug: 'nettbutikk-bergen-ehandel',
    title: 'Nettbutikk i Bergen: Hva koster det å lage nettshop, og hvilken plattform bør du velge?',
    excerpt: 'E-handel vokser – men en nettbutikk som faktisk selger krever mer enn fin design. Hva Bergen-bedrifter bør vite om kostnader, plattformer og konvertering.',
    metaTitle: 'Nettbutikk i Bergen: Kostnader og plattformer for nettshop',
    category: 'Webdesign',
    date: '8. mai 2026',
    updatedAt: '2026-05-08',
    readTime: '8 min',
    relatedService: { title: 'Web design', href: '/tjenester/webdesign' },
    image: { src: '/blog/nettbutikk-bergen-ehandel.png', alt: 'Illustrasjon av en nettbutikk med produktkort og handlevogn-elementer' },
    content: `
## Nettbutikk i Bergen: muligheter og utfordringer

E-handel vokser i Norge – men mange Bergen-bedrifter undervurderer kompleksiteten. En nettbutikk er ikke bare en vanlig nettside med «Kjøp»-knapp. Det er logistikk, betaling, retur, skatt, lagerstyring og kundeservice – pluss selve nettstedet.

Likevel er mulighetene store. En Bergen-bedrift kan selge til hele landet – og verden – med riktig oppsett.

## Hva koster det å lage nettbutikk i Bergen?

Prisen avhenger av hvilken plattform du velger og hvor kompleks løsningen er:

| Type | Plattform | Pris |
|---|---|---|
| Enkel nettbutikk | Shopify / WooCommerce | 20 000–60 000 kr |
| Mellomskala | WooCommerce / Next.js | 60 000–150 000 kr |
| Fullskala e-handelsplattform | Skreddersydd | 150 000–500 000+ kr |

I tillegg kommer månedlige kostnader:
- Shopify: fra 299 kr/mnd
- WooCommerce-hosting: 500–3 000 kr/mnd
- Betalingsgebyr: 1,5–3 % per transaksjon (Vipps, Stripe, Klarna)

## De tre vanligste plattformene

### Shopify

**Beste for:** Enkel oppstart, ikke-tekniske eiere, produkter under 500 SKUs

Fordeler: Enkelt å bruke, rask oppsett, mange integrasjoner
Ulemper: Månedlig kostnad, transaksjonskostnader, begrenset tilpassing

### WooCommerce (WordPress)

**Beste for:** Bedrifter som allerede bruker WordPress, fleksibilitetsbehov

Fordeler: Svært fleksibelt, ingen transaksjonsgebyr til plattformen, store mengder plugins
Ulemper: Krever mer teknisk vedlikehold og sikkerhetsoppdateringer

### Skreddersydd (Next.js + headless)

**Beste for:** Unik funksjonalitet, høy ytelse, skalering

Fordeler: Full kontroll, beste ytelse, unik brukeropplevelse
Ulemper: Høyest initialkostnad, krever erfarne utviklere

## Hva Bergen-bedrifter glemmer å ta høyde for

**Moms og regnskapssystem**
25 % moms på de fleste varer. Sørg for at nettbutikken er koblet til et regnskapssystem som håndterer dette korrekt.

**Frakt og retur**
Norske netthandlere forventer rask levering og enkel retur. Kalkuler fraktkostnader i prisen – de fleste undervurderer dette kraftig.

**Mobiloptimalisering**
Over 65 % av norsk netthandel skjer på mobil. En nettbutikk som ikke er mobiloptimalisert, mister mer enn halvparten av kundene sine.

**Produktfoto**
Dårlige produktbilder er den viktigste enkeltårsaken til at folk ikke kjøper på nett. Invester i profesjonell produktfotografering – det betaler seg raskt.

**Betalingsalternativer**
Vipps er et must i Norge. I tillegg: Klarna (kjøp nå, betal senere), Stripe (kredittkort) og faktura for B2B.

## Lokal strategi for Bergen-nettbutikker

Mange Bergen-bedrifter gjør feilen å konkurrere nasjonalt fra dag én. En smartere strategi:

1. **Start lokalt** – Dominer «[produkt] Bergen» i Google med [lokal SEO](/tjenester/seo) og bygg opp anmeldelser
2. **Ekspander regionalt** – Vestland, Hordaland, Sogndal
3. **Gå nasjonalt** – Når lokal merkevare og anmeldelser er på plass

Lokalt salg er lettere å vinne, marginen er høyere (ingen nasjonal konkurranse), og du kan tilby gratis levering i Bergen som differensiator.

## Er nettbutikk riktig for din Bergen-bedrift?

Det lønner seg hvis:

✅ Du har produkter med god margin (over 40 %)
✅ Produktene er enkle å pakke og sende
✅ Du har ressurser til å håndtere kundeservice
✅ Det finnes et beviselig digitalt marked for produktene dine

Det lønner seg sjelden hvis:
❌ Marginene er under 20 % (frakt og betalingsgebyr spiser dem)
❌ Produktene er tunge, skjøre eller krever spesiell emballasje
❌ Du ikke har kapasitet til å håndtere returer og klager

Lurer du på hva en vanlig nettside koster til sammenligning? Se vår [prisoversikt for nettsider i Bergen](/blogg/nettside-pris-bergen). Vil du diskutere om nettbutikk er riktig for din bedrift? Se vår [webdesign-tjeneste i Bergen](/tjenester/webdesign) eller [ta kontakt](/kontakt) – vi hjelper Bergen-bedrifter med å ta de riktige digitale valgene.
`,
  },
  {
    slug: 'google-ads-bergen',
    title: 'Google Ads i Bergen: Er betalt annonsering verdt investeringen for lokale bedrifter?',
    excerpt: 'Google Ads gir Bergen-bedriften umiddelbar synlighet – men krever riktig strategi for å ikke brenne pengene. Hva du må vite om betalt annonsering lokalt.',
    metaTitle: 'Google Ads Bergen: Er betalt annonsering verdt det?',
    category: 'Markedsføring',
    date: '10. mai 2026',
    updatedAt: '2026-05-10',
    readTime: '7 min',
    relatedService: { title: 'SEO', href: '/tjenester/seo' },
    image: { src: '/blog/google-ads-bergen.png', alt: 'Illustrasjon av annonsekampanjer og betalt søk i Google Ads' },
    content: `
## Hva er Google Ads – og hvorfor bruker Bergen-bedrifter det?

Google Ads er Googles annonseringssystem der du betaler for å vises øverst i søkeresultatene for utvalgte søkeord. Når noen i Bergen søker «elektriker Bergen», kan din bedrift dukke opp på toppen – over alle organiske resultater.

Fordelen er umiddelbar synlighet. Mens SEO tar 3–6 måneder å bygge opp, kan Google Ads gi deg trafikk fra dag én.

## Hva koster Google Ads i Bergen?

Du betaler per klikk (Cost Per Click, CPC). Prisen varierer basert på konkurranse:

| Bransje | Estimert CPC |
|---|---|
| Tannlege, advokat | 40–150 kr |
| Rørlegger, elektriker | 20–80 kr |
| Restaurant, butikk | 5–25 kr |
| IT, webbyrå | 15–60 kr |

Med et budsjett på 5 000 kr/mnd og en CPC på 30 kr, får du omtrent 165 klikk. Er konverteringsraten din 10 %, gir det 16 leads. Er Google Ads lønnsomt? Det avhenger av hva en kunde er verdt for deg.

## Når er Google Ads smart for Bergen-bedrifter?

### ✅ Det gir god avkastning når:

- Du selger høyverdi-tjenester (tannlege, advokat, kjøkken, bad)
- Du trenger leads raskt – lansering, sesong, kampanje
- Du har spesifikke geografiske målgrupper i Bergen
- Organisk SEO er for konkurranseutsatt på kort sikt

### ❌ Det er dårlig investering når:

- Budsjettet er under 3 000 kr/mnd (for lite til å lære og optimalisere)
- Du selger lavmargiprodukter med lav CPC-toleranse
- Annonsene er ikke koblet til dedikerte landingssider
- Du mangler konverteringssporing

## De vanligste feilene Bergen-bedrifter gjør

**1. De sender trafikk til forsiden**
Forsiden din er ikke en landingsside. Kjøper du klikk for «rørlegger Bergenhus», skal besøkende landes på en side som handler om akkurat det – med tydelig kontaktskjema eller telefonnummer.

**2. De glemmer negative søkeord**
Uten negativliste betaler du for klikk fra folk som søker «rørlegger jobb Bergen» eller «gratis rørlegger Bergen». Negative søkeord er ren pengesparing.

**3. De måler klikk, ikke konverteringer**
«Vi fikk mange klikk» er ikke et resultat. Sett opp konverteringssporing i Google Ads og Google Analytics. Mål leads, samtaler og salg.

**4. For bredt geografisk målgruppe**
«Bergen» er ikke alltid presist nok. Vurder om du skal målrette mot spesifikke bydeler: Bergenhus, Fana, Åsane, Arna.

## Google Ads vs. SEO for Bergen-bedrifter

| | Google Ads | SEO |
|---|---|---|
| Synlighet | Umiddelbar | 3–6 måneder |
| Kostnad | Betaler per klikk | Tid og ressurser |
| Stopper du | Trafikk stopper | Trafikk fortsetter |
| Troverdighet | Merket «Annonse» | Organisk tillit |
| Beste for | Kortsiktig / lansering | Langsiktig vekst |

Den ideelle strategien for Bergen-bedrifter: bruk Google Ads for umiddelbar synlighet mens du bygger [SEO](/tjenester/seo) parallelt for langsiktig organisk vekst. Sørg for at annonseklikk lander på en [konverteringsoptimalisert nettside](/tjenester/webdesign) – ikke bare forsiden. Vil du ha en grundigere sammenligning av kostnad, tid og avkastning, har vi skrevet om [SEO eller Google Ads – hva som lønner seg](/blogg/seo-eller-google-ads-bergen).

## Hva bør du betale for Google Ads-hjelp?

- Kampanjeoppsett: 5 000–15 000 kr (engangspris)
- Månedlig administrasjon: 10–20 % av annonsjebudsjettet
- Minimumsbudsjett for å lære: 3 000–5 000 kr/mnd til Google

Vil du vite om Google Ads er riktig for din Bergen-bedrift? [Ta kontakt med Frameflow](/kontakt) – vi hjelper deg å se om tallene går opp.
`,
  },
  {
    slug: 'webbyraa-bergen-guide',
    title: 'Webbyrå i Bergen: Slik velger du riktig webbyrå for din bedrift i 2026',
    excerpt: 'Ikke alle webbyrå i Bergen er like. Her er spørsmålene du må stille – og hva som skiller et godt byrå fra et som bare leverer en pen nettside ingen finner.',
    metaTitle: 'Webbyrå i Bergen: Slik velger du riktig byrå i 2026',
    category: 'Webdesign',
    date: '12. mai 2026',
    updatedAt: '2026-05-12',
    readTime: '7 min',
    relatedService: { title: 'Web design', href: '/tjenester/webdesign' },
    image: { src: '/blog/webbyraa-bergen-guide.png', alt: 'Illustrasjon av søk og sammenligning av webbyråer basert på vurderinger, med ett verifisert valg fremhevet' },
    content: `
## Hva er egentlig forskjellen på webbyrå i Bergen?

Begrepet «webbyrå» dekker alt fra en frilanser som jobber deltid fra hybelen til et byrå med 50 ansatte og ti millioner i omsetning. Prisen kan variere fra 5 000 kr til 500 000 kr for det som tilsynelatende er samme produkt: en nettside.

Det finnes tre typer aktører i Bergen-markedet:

**Frilansere og enkeltpersonforetak** – Lavest pris, men begrenset kapasitet og ofte smalere kompetanse. Fungerer godt for enkle løsninger.

**Mellomstore byråer** – Typisk 2–10 ansatte med kompetanse innen design, utvikling og markedsføring. God balanse mellom pris og kvalitet.

**Store reklamebyrå** – Full pakke, men til en pris som sjelden forsvares av en SMB i Bergen.

## 7 spørsmål du MÅ stille et webbyrå

### 1. Hvem gjør faktisk jobben?

Noen byrå selger deg prosjektet og outsourcer deretter arbeidet. Be om å møte den personen som faktisk koder og designer siden din.

### 2. Har dere erfaring med Bergen-markedet?

Et byrå som forstår lokale søkeord («tannlege Bergenhus», «rørlegger Fana»), lokale konkurrenter og kundereiser i Bergen, leverer bedre resultater enn et byrå uten lokal kunnskap.

### 3. Er SEO inkludert, eller er det ekstrautstyr?

Mange byrå leverer en fin nettside som ingen finner på Google. Sørg for at teknisk [SEO](/tjenester/seo), sidetitler, metabeskrivelser og schema markup er inkludert – ikke solgt som tillegg etterpå.

### 4. Hva skjer etter lansering?

Hvem oppdaterer nettsiden? Hvem fikser sikkerhetsoppdateringer? Er det en supportavtale, eller er du på egenhånd?

### 5. Kan jeg se eksempler på resultater?

Det er lett å vise fine mockups i Figma. Be om faktiske prosjekter med målbare resultater – økt trafikk, økt omsetning, flere leads.

### 6. Hva er betalingsstrukturen?

Advarsel: et byrå som krever 80–100 % betaling i forkant, har lite incitament til å jobbe raskt. Standard er 30–50 % ved start, resten ved godkjent leveranse.

### 7. Hva eier jeg etter prosjektet?

Du bør eie domenet, hostingkontoen og kildekoden til nettsiden. Noen byrå låser deg inn på sin plattform – sjekk dette i kontrakten.

## Hva koster et webbyrå i Bergen i 2026?

| Løsning | Pris |
|---|---|
| Malbasert nettside (Wix/Squarespace) | 5 000–15 000 kr |
| WordPress-nettside med tilpassing | 15 000–45 000 kr |
| Skreddersydd nettside med SEO | 45 000–150 000 kr |
| Webapplikasjon / kompleks løsning | 100 000–500 000 kr |

Husk: billigst er sjelden billigst over tid. En nettside som ikke gir kunder, koster penger uansett hva du betalte for den.

## Lokalt vs. nasjonalt webbyrå

Det er fristende å velge et stort oslobyrå med imponerende referanser. Men for en Bergen-bedrift er det ofte bedre å jobbe med noen som:

- Kjenner Bergen-markedet og lokale søk
- Er tilgjengelig for et møte uten å fakturere reisekostnader
- Forstår bedriftskultur og kundereiser i Vestland

## Sjekkliste: Er webbyrået seriøst?

✅ Registrert i Brønnøysundregisteret med organisasjonsnummer
✅ Kan vise til faktiske referanser med navn og kontaktperson
✅ Tydelig prisstruktur og skriftlig kontrakt
✅ Inkluderer SEO som standard, ikke tillegg
✅ Leverer kode og design du eier fullt ut
✅ Har supportavtale etter lansering

Vil du ha en uforpliktende prat om hva slags nettside som passer din bedrift? Se vår [webdesign-tjeneste i Bergen](/tjenester/webdesign) – eller [ta kontakt](/kontakt) for en gratis prat. Vi leverer nettsider med [SEO](/tjenester/seo) innebygd fra dag én.
`,
  },
  {
    slug: 'lokal-seo-bergen-guide-2025',
    title: 'Lokal SEO i Bergen: Den komplette guiden til å rangere på Google i 2026',
    excerpt: 'Lær hvordan du får Bergen-bedriften din øverst på Google uten å betale for annonser. En steg-for-steg guide til lokal SEO som faktisk virker.',
    metaTitle: 'Slik rangerer du på Google i Bergen – guide til lokal SEO',
    category: 'SEO',
    date: '10. mars 2026',
    updatedAt: '2026-03-10',
    readTime: '9 min',
    relatedService: { title: 'SEO', href: '/tjenester/seo' },
    image: { src: '/blog/lokal-seo-bergen-guide-2025.png', alt: 'Illustrasjon av lokal søkemotoroptimalisering og Google-rangering' },
    content: `
## Hva er lokal SEO, og hvorfor er det viktig for Bergen-bedrifter?

Lokal SEO handler om å optimalisere din digitale tilstedeværelse slik at du dukker opp når folk i Bergen søker etter produkter eller tjenester du tilbyr. Når noen skriver «tannlege Bergen» eller «frisør Bergenhus» på Google, er det lokal SEO som bestemmer hvem som vises øverst.

For en Bergen-bedrift er dette gull verdt. Brukere som søker lokalt, har høy kjøpsintensjon – de leter aktivt etter noen å handle med akkurat nå.

## De viktigste elementene i lokal SEO

### 1. Google Business Profile

Dette er fundamentet for lokal SEO. Et komplett og oppdatert Google Business-profil øker sjansene dramatisk for å dukke opp i «Local Pack» – de tre bedriftene som vises øverst på Google med kart. Vil du gå i dybden, har vi laget en egen [steg-for-steg-guide til Google Business Profile](/blogg/google-my-business-bergen-guide).

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

Over 70 % av lokale søk skjer på mobil. Test siden din med PageSpeed Insights og sørg for en score over 80 på mobil. En [profesjonelt designet nettside optimalisert for mobil](/tjenester/webdesign) er fundamentet for god lokal SEO.

## Vanlige SEO-feil Bergen-bedrifter gjør

Mange bedrifter har metabeskrivelser uten å nevne Bergen – en enorm bortkastet mulighet. Ignorerte anmeldelser og inaktive Google-profiler er de to andre klassikerne.

## Resultater du kan forvente

Lokal SEO er en investering. Med konsekvent innsats kan du forvente synlig forbedring innen 3–6 måneder, og etablert lokal autoritet innen et år.

Har du spørsmål om [lokal SEO i Bergen](/tjenester/seo) for din Bergen-bedrift? Ta gjerne kontakt med oss for en gratis gjennomgang. Vurderer du å sette bort jobben i stedet, kan det være verdt å lese hva et [SEO-byrå i Bergen koster](/blogg/seo-byraa-bergen) før du bestemmer deg.
    `.trim(),
  },
  {
    slug: 'webdesign-bergen-nettside-som-konverterer',
    title: 'Konverteringsoptimalisering i Bergen: 6 elementer som gjør nettsiden din til en salgsmaskin',
    excerpt: 'En vakker nettside er ikke nok – den må konvertere. Se de 6 elementene som skiller en nettside som selger fra en som bare ser bra ut, for Bergen-bedrifter.',
    category: 'Webdesign',
    date: '5. mars 2026',
    updatedAt: '2026-03-05',
    readTime: '7 min',
    metaTitle: 'Nettside som konverterer: 6 elementer for Bergen-bedrifter',
    relatedService: { title: 'Web design', href: '/tjenester/webdesign' },
    image: { src: '/blog/webdesign-bergen-nettside-som-konverterer.png', alt: 'Illustrasjon av konverteringsoptimalisert nettsidedesign med tydelige call-to-action-elementer' },
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

53 % av mobile brukere forlater en side som bruker mer enn 3 sekunder å laste. Test siden din på Google PageSpeed Insights og sørg for en score over 80 på mobil. Husk: sidehastighet er også en viktig [SEO-rangeringsfaktor](/tjenester/seo).

### 5. Mobildesign som prioritet

Over 60 % av trafikken til de fleste lokale bedriftsnettsteder kommer fra mobil. Design for mobil først.

### 6. Lokal tillit

For Bergen-bedrifter: vis at dere er lokale. Inkluder adressen tydelig på siden, bilder fra Bergen, og omtale av lokale referanser.

## Hva en nettside bør koste i Bergen

Ferdigmaler: 5 000–15 000 kr. Frilanser: 15 000–50 000 kr. Lokalt byrå: 30 000–120 000 kr.

Vår anbefaling: ikke se på nettside som en kostnad, men som en investering. En nettside som genererer én ekstra kunde i måneden er raskt nedbetalt. For en full [prisoversikt for Bergen-markedet](/blogg/nettside-pris-bergen) og hvordan du [beregner avkastningen (ROI)](/blogg/hva-koster-webdesign-bergen-prisguide-2025) på en ny nettside, har vi egne guider.

Er du klar for å oppgradere din [digitale tilstedeværelse i Bergen](/tjenester/webdesign)? Vi tilbyr gratis konsultasjon der vi ser på din nåværende nettside og gir konkrete forbedringsforslag.
    `.trim(),
  },
  {
    slug: 'google-my-business-bergen-guide',
    title: 'Google Business Profile for Bergen-bedrifter: Den komplette optimeringsguiden',
    excerpt: 'Google Business Profile er det kraftigste gratisverktøyet for lokal synlighet. Lær hvordan du setter det opp riktig og dominerer lokale søk i Bergen.',
    category: 'SEO',
    date: '28. februar 2026',
    updatedAt: '2026-02-28',
    readTime: '8 min',
    metaTitle: 'Google Business Profile Bergen: Komplett optimeringsguide',
    relatedService: { title: 'SEO', href: '/tjenester/seo' },
    image: { src: '/blog/google-my-business-bergen-guide.png', alt: 'Illustrasjon av en Google Business Profile-bedriftsprofil' },
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

GBP er bare én brikke i det større bildet – se hele vår [guide til lokal SEO i Bergen](/blogg/lokal-seo-bergen-guide-2025) for å forstå hvordan delene henger sammen. Ta gjerne kontakt med Frameflow for en gratis gjennomgang av din [Google Business-profil og lokal SEO](/tjenester/seo). En solid [nettside i Bergen](/tjenester/webdesign) forsterker effekten av en optimalisert GBP-profil betraktelig.
    `.trim(),
  },
  {
    slug: 'nettside-pris-bergen',
    title: 'Hva koster en nettside i Bergen? Komplett prisoversikt for 2026',
    excerpt: 'Usikker på hva du bør betale for en ny nettside? Vi bryter ned prisene for Bergen-markedet – fra enkle nettsteder til skreddersydde løsninger.',
    category: 'Webdesign',
    date: '20. februar 2026',
    updatedAt: '2026-02-20',
    readTime: '6 min',
    metaTitle: 'Hva koster nettside i Bergen? Komplett prisoversikt 2026',
    relatedService: { title: 'Web design', href: '/tjenester/webdesign' },
    image: { src: '/blog/nettside-pris-bergen.png', alt: 'Illustrasjon av prisoversikt og nettsideelementer for bedriftsnettsider' },
    content: `
## Hvorfor varierer nettside-priser så mye?

«Hva koster en nettside?» er litt som å spørre «hva koster en bil?» Svaret er alt fra 50 000 til 2 millioner kroner. For Bergen-bedrifter er det viktig å forstå hva du faktisk betaler for.

## Prisoversikt: Nettsider i Bergen 2026

### Ferdigmaler og selvbetjening: 0–15 000 kr

Plattformer som Squarespace, Wix og WordPress.com lar deg lage en nettside selv. Begrenset tilpasning, dårligere ytelse og SEO enn skreddersydde løsninger – og du bruker mye av din egen tid.

### Frilanser: 15 000–45 000 kr

En freelance webdesigner i Bergen kan lage en brukbar nettside. Kvaliteten varierer enormt – sjekk referanser og portefølje nøye.

### Lokalt markedsføringsbyrå i Bergen: 35 000–120 000 kr

Her begynner nettsider å jobbe for deg. Inkluderer skreddersydd design, innebygd lokal SEO, konverteringsoptimalisert struktur og løpende support.

### Enterprise og e-handel: 100 000 kr+

Store e-handelssider, kundeportaler og komplekse webapplikasjoner.

## Hva påvirker prisen?

Antall sider, om du bruker mal eller skreddersydd design, funksjoner som booking og nettbutikk, og om innhold og tekst er inkludert.

## Hva er nettside-investeringen verdt?

Prisen forteller deg hva du betaler – men ikke hva du faktisk får tilbake. For å forstå hvordan du beregner avkastning og hvilke Bergen-bedrifter som typisk ser best ROI, se vår guide til [nettside-investering og ROI for Bergen-bedrifter](/blogg/hva-koster-webdesign-bergen-prisguide-2025).

Hos Frameflow inkluderer vi alltid strategisk gjennomgang, [skreddersydd webdesign](/tjenester/webdesign), [lokal SEO](/tjenester/seo), Google Analytics og 30 dagers gratis support etter lansering.
    `.trim(),
  },
  {
    slug: 'sosiale-medier-strategi-bergen-bedrifter',
    title: 'Sosiale medier for Bergen-bedrifter: Strategien som faktisk gir resultater i 2026',
    excerpt: 'Å poste tilfeldig på Instagram holder ikke lenger. Lær den sosiale medier-strategien som fungerer for lokale bedrifter i Bergen – med konkrete eksempler.',
    category: 'Sosiale medier',
    date: '12. februar 2026',
    updatedAt: '2026-02-12',
    readTime: '8 min',
    metaTitle: 'Sosiale medier Bergen: Strategi som faktisk gir resultater',
    relatedService: { title: 'Sosiale medier', href: '/tjenester/sosiale-medier' },
    image: { src: '/blog/sosiale-medier-strategi-bergen-bedrifter.png', alt: 'Illustrasjon av et sosiale medier-innlegg med engasjement, en sjekkliste og en vekstkurve' },
    content: `
## Virkeligheten om sosiale medier for lokale bedrifter

De fleste Bergen-bedrifter bruker sosiale medier feil. De poster sporadisk, uten strategi, og måler suksess i likes fremfor faktiske forespørsler. Godt nytt: med riktig tilnærming kan sosiale medier bli din mest kostnadseffektive markedsføringskanal.

## Hvilke plattformer bør Bergen-bedrifter prioritere?

### Instagram

Best for restauranter, kafeer, frisører, interiørbutikker og alle bransjer med visuelt appell. Bergen er en vakker by – og Instagram elsker vakre byer. Bruk hashtags som #Bergen, #BergenCity, #BergenNorway og bydel-tags. Lokale hashtags har langt høyere engasjement per post enn generelle.

### Facebook

Best for B2B-bedrifter, eiendom, håndverkere og bedrifter som henvender seg til 35+-segmentet. Facebook-grupper som «Bergen Næringsliv» er gull for lokal synlighet.

### TikTok

Vokser raskt i Bergen-markedet. En viral video kan gi tusenvis av visninger fra lokale brukere – organisk og gratis.

### LinkedIn

Best for B2B, konsulenter og alle som henvender seg til næringsliv og bedrifter.

## Innholdsstrategi som faktisk fungerer

80 % av innholdet skal gi verdi til følgerne. 20 % kan handle om deg og dine tilbud. Konsistens slår perfeksjon – det er bedre å poste tre ganger i uken konsekvent enn ti ganger én uke og ingenting de neste tre.

For Bergen-bedrifter: gjør det lokalt. Nevn Bergen, vis Bergen, tagg Bergen. Samarbeid med andre Bergen-bedrifter og tagg hverandre.

## Slik måler du resultater

Mål nettstedtrafikk fra sosiale medier, direkte meldinger og forespørsler, rekkevidde til Bergen-folk, og lenkeklikk til booking eller kontakt.

Ønsker du å overlate det til profesjonelle? Frameflow tilbyr [skreddersydde pakker for sosiale medier](/tjenester/sosiale-medier) til Bergen-bedrifter. For best effekt: kombiner sosiale medier med en sterk [merkevare og visuell identitet](/tjenester/branding) som gjør innholdet ditt umiskjennelig.
    `.trim(),
  },
  {
    slug: 'branding-bergen-bygg-merkevare-som-skiller-seg-ut',
    title: 'Branding i Bergen: Slik bygger du en merkevare som folk husker – og velger',
    excerpt: 'Sterk merkevarebygging er ikke forbeholdt storbyene. Se hvordan Bergen-bedrifter kan bygge en distinkt identitet som skiller dem ut i et lokalt marked.',
    category: 'Branding',
    date: '5. februar 2026',
    updatedAt: '2026-02-05',
    readTime: '7 min',
    metaTitle: 'Branding i Bergen: Bygg en merkevare som folk husker',
    relatedService: { title: 'Branding', href: '/tjenester/branding' },
    image: { src: '/blog/branding-bergen-bygg-merkevare-som-skiller-seg-ut.png', alt: 'Illustrasjon av logodesign, fargepalett og merkevareelementer' },
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

Frameflow tilbyr [skreddersydd branding](/tjenester/branding) for Bergen-bedrifter – fra logodesign til komplett merkevareidentitet. En sterk merkevare trenger en nettside som gjenspeiler den – se vår [webdesign-tjeneste i Bergen](/tjenester/webdesign).
    `.trim(),
  },
  {
    slug: 'foto-video-bedrifter-bergen',
    title: 'Profesjonell foto og video for Bergen-bedrifter: Hvorfor kvalitetsinnhold gir flere kunder',
    excerpt: 'Dårlige produktbilder og lavkvalitets-video koster deg kunder. Lær hvorfor Bergen-bedrifter som investerer i profesjonelt innhold vinner i markedet.',
    category: 'Foto & Video',
    date: '25. januar 2026',
    updatedAt: '2026-01-25',
    readTime: '6 min',
    metaTitle: 'Bedriftsfoto og video Bergen: Slik vinner du med innhold',
    relatedService: { title: 'Foto og video', href: '/tjenester/foto-og-videografi' },
    image: { src: '/blog/foto-video-bedrifter-bergen.png', alt: 'Illustrasjon av profesjonelt foto- og videoinnhold for bedrifter' },
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

Bergen som kulisse er en av de uunngåelige fordelene med å drive bedrift her. Vi utnytter Bryggen, fjellet og fjorden aktivt i vår [foto- og videoproduksjon](/tjenester/foto-og-videografi). Godt visuelt innhold er fundamentet for effektive [sosiale medier](/tjenester/sosiale-medier) og profesjonelt presenterte nettsider.
    `.trim(),
  },
  {
    slug: 'digital-markedsforing-bergen-5-kanaler-2025',
    title: 'Digital markedsføring i Bergen: De 5 viktigste kanalene for lokale bedrifter i 2026',
    excerpt: 'Med begrenset tid og budsjett må Bergen-bedrifter velge riktige markedsføringskanaler. Her er de fem som gir mest igjen for lokale Bergen-bedrifter.',
    category: 'Markedsføring',
    date: '15. januar 2026',
    updatedAt: '2026-01-15',
    readTime: '7 min',
    metaTitle: 'Digital markedsføring Bergen: De 5 viktigste kanalene',
    relatedService: { title: 'Sosiale medier', href: '/tjenester/sosiale-medier' },
    image: { src: '/blog/digital-markedsforing-bergen-5-kanaler-2025.png', alt: 'Illustrasjon av digitale markedsføringskanaler og kampanjeelementer' },
    content: `
## Ikke alle kanaler passer for alle Bergen-bedrifter

Det finnes dusinvis av digitale markedsføringskanaler. For en Bergen-bedrift med begrenset tid og budsjett er det avgjørende å velge riktig. Her er de fem kanalene som konsekvent gir best resultater for lokale Bergen-bedrifter.

## Kanal 1: Lokal SEO og Google Business Profile

Intet slår organisk trafikk fra Google for kostnadseffektivitet på lang sikt. Google Business Profile er gratis og gir umiddelbar lokal synlighet. Dette er fundamentet all annen digital markedsføring bør bygge på. Se hva som inngår i en profesjonell [SEO-pakke for Bergen-bedrifter](/tjenester/seo).

Hvem bør prioritere dette: Alle Bergen-bedrifter uten unntak.

## Kanal 2: Google Ads

Mens SEO tar tid, gir Google Ads umiddelbare resultater. Du betaler kun når noen klikker, og kan begrense visning til Bergen-postnumre og målrette mot folk som søker spesifikke tjenester akkurat nå.

Typisk budsjett i Bergen: 3 000–15 000 kr/mnd.

## Kanal 3: Instagram og Facebook

For Bergen-bedrifter med visuell appell er kombinasjonen ekstremt kraftig. Organiske innlegg bygger merkevare. Betalte annonser skalerer rekkevidden. Du kan målrette mot folk innenfor X kilometer fra adressen din.

## Kanal 4: E-postmarkedsføring

E-post har en gjennomsnittlig ROI på 3 600 %. De fleste Bergen-bedrifter samler ikke aktivt e-postadresser – noe som er en enorm tapt mulighet. Start enkelt: tilby verdi i bytte mot e-postadressen og send et nyhetsbrev månedlig.

## Kanal 5: Innholdsmarkedsføring og blogg

En blogg med SEO-optimaliserte artikler er en langsiktig maskin for gratis trafikk. En artikkel som rangerer på side 1 kan gi hundrevis av besøkende månedlig, år etter år, uten løpende annonsekostnader.

## Vår anbefaling for Bergen-bedrifter

Start med å optimalisere Google Business Profile og nettsiden, bygg e-postliste og vær konsekvent på 1–2 sosiale plattformer, test Google Ads, og bygg bloggen gradvis med kvalitetsartikler.

Lurer du på hvor du bør starte for din spesifikke bedrift? Se våre [tjenester for digital markedsføring i Bergen](/tjenester) eller kontakt Frameflow for en gratis strategisamtale.
    `.trim(),
  },
  {
    slug: 'hva-koster-webdesign-bergen-prisguide-2025',
    title: 'Nettside-investering i Bergen: Hva gir webdesign deg tilbake i ROI?',
    excerpt: 'En nettside er ikke en utgift – det er en investering. Vi viser Bergen-bedrifter hvordan de beregner ROI på webdesign og hva som faktisk driver avkastning.',
    category: 'Webdesign',
    date: '10. mars 2026',
    updatedAt: '2026-03-10',
    readTime: '6 min',
    metaTitle: 'Nettside ROI Bergen: Hva gir webdesign deg tilbake?',
    relatedService: { title: 'Web design', href: '/tjenester/webdesign' },
    image: { src: '/blog/hva-koster-webdesign-bergen-prisguide-2025.png', alt: 'Illustrasjon av nettsideinvestering og webdesignelementer med avkastningsfokus' },
    content: `
## Nettside som investering – ikke utgift

De fleste Bergen-bedrifter spør «hva koster en nettside?» – og vi har en egen [prisoversikt for nettsider i Bergen](/blogg/nettside-pris-bergen) som svarer på akkurat det. Men det riktige spørsmålet er ofte: «hva gir nettsiden meg tilbake?»

En nettside til 60 000 kr som genererer to nye kunder i måneden – hver verdt 5 000 kr – er nedbetalt på 6 måneder. Deretter tjener den penger hvert eneste år uten ekstra kostnad.

En nettside til 10 000 kr som ingen finner og ingen konverterer, er bare en utgift.

## Slik beregner du ROI på webdesign

**Formel:** (Nye kunder fra nettside × Verdi per kunde) ÷ Nettsidekostnad × 100

**Eksempel – Bergen håndverker:**
- Nettsidekostnad: 55 000 kr
- Gjennomsnittlig kundeorder: 12 000 kr
- Nye kunder per måned fra nettside: 2
- Månedlig inntekt fra nettside: 24 000 kr
- Nedbetalt på: 2,3 måneder
- Første år-ROI: over 5 000 %

Er nettsiden et godt kjøp? For de aller fleste Bergen-bedrifter: ja, hvis den er riktig bygget.

## Hva som faktisk driver avkastning fra nettsiden din

### 1. Søkemotorsynlighet (lokal SEO)

En nettside ingen finner er en nettside som ikke tjener penger. [Lokal SEO](/tjenester/seo) er det viktigste enkeltgrepet for å sikre at potensielle kunder faktisk havner på siden din.

Bergen-bedrifter som rangerer i topp 3 på Google for relevante søk, kan forvente 30–50 % av all lokal søketrafikk på det søkeordet – gratis, måned etter måned.

### 2. Konverteringsrate

Det nytter lite å drive trafikk til en side som ikke konverterer. En profesjonelt designet nettside med tydelig CTA, sosialt bevis og rask lastetid konverterer 3–8 % av besøkende til leads. En dårlig side konverterer 0,5–1 %. Vil du vite hva som faktisk driver konvertering, har vi brutt det ned i [seks elementer som gjør nettsiden til en salgsmaskin](/blogg/webdesign-bergen-nettside-som-konverterer).

Differansen er enorm: 100 besøkende per dag gir enten 5 eller 80 leads i måneden.

### 3. 24/7 salgsmaskin

Nettsiden jobber mens du sover. En god nettside erstatter mange timer med manuell salgs- og markedsaktivitet. Prislistene, kundeanmeldelsene, kontaktskjemaet – alt er tilgjengelig uten at du løfter en finger.

### 4. Tillit og troverdighet

85 % av forbrukere sjekker en bedrifts nettside før de kjøper. En profesjonell, rask og oppdatert nettside bygger tillit og øker sannsynligheten for at en potensiell Bergen-kunde faktisk tar kontakt.

## Hva er en realistisk tidshorisont for nedbetaling?

| Nettside-type | Typisk nedbetaling |
|---|---|
| Enkel frilanserside (20 000 kr) | 2–4 måneder |
| Profesjonell byrå-side (60 000 kr) | 3–8 måneder |
| E-handel / kompleks (150 000+ kr) | 6–18 måneder |

Dette forutsetter at nettsiden er SEO-optimalisert og designet for konvertering – ikke bare at den ser bra ut.

## Hvilke Bergen-bedrifter får best ROI på webdesign?

**Høyest ROI:**
- Håndverkere og servicebransjen (høy kundeorder, lokal søkeintensjon)
- Advokater, tannleger, regnskapsførere (høy margin, varige kundeforhold)
- B2B-bedrifter med lang salgssyklus (nettsiden bygger tillit over tid)

**Lavere ROI:**
- Bedrifter som allerede har full kapasitet og ikke kan ta imot flere kunder
- Bransjer uten lokal søkeetterspørsel på nett
- Bedrifter uten ressurser til å følge opp nye leads

## Vår anbefaling

Invester i en [nettside som er bygget for å rangere og konvertere](/tjenester/webdesign) – ikke bare se bra ut. En nettside uten SEO og konverteringsdesign er som et utstillingsvindu i en gate uten trafikk: vakker, men ulønnsom.

Hos Frameflow bygger vi nettsider der avkastning er målet fra dag én. [Ta kontakt](/kontakt) for en gratis gjennomgang av hva din Bergen-bedrift kan forvente i ROI fra en ny nettside.
    `.trim(),
  },
  {
    slug: 'beste-markedsforingsbyraa-bergen-2025',
    title: 'Markedsføringsbyrå i Bergen: Slik velger du riktig partner i 2026',
    excerpt: 'Ikke alle byråer i Bergen passer for alle bedrifter. Her er hva du bør se etter – og spørre om – når du velger markedsføringsbyrå i Bergen.',
    category: 'Markedsføring',
    date: '5. april 2026',
    updatedAt: '2026-04-05',
    readTime: '7 min',
    metaTitle: 'Markedsføringsbyrå Bergen: Slik velger du riktig partner',
    relatedService: { title: 'Tjenester', href: '/tjenester' },
    image: { src: '/blog/beste-markedsforingsbyraa-bergen-2025.png', alt: 'Illustrasjon av vekstresultater og kundeanmeldelser for et markedsføringsbyrå, med ett verifisert valg' },
    content: `
## Å velge riktig byrå er avgjørende

Bergen har et voksende marked av digitale byråer og frilanser. Valget du tar her kan ha stor innvirkning på veksten din – i begge retninger. Her er hva vi mener du bør se etter.

## 1. Spesialisering vs. bredde

Noen byråer er dypt spesialiserte (f.eks. kun SEO, kun Meta-annonser). Andre, som Frameflow, tilbyr helhetlige løsninger under ett tak – [webdesign](/tjenester/webdesign), [SEO](/tjenester/seo), [branding](/tjenester/branding), [foto](/tjenester/foto-og-videografi) og [sosiale medier](/tjenester/sosiale-medier). Spørsmålet er: hva trenger du mest?

Hvis du trenger en komplett digital tilstedeværelse bygget opp fra bunnen, er ett byrå som kan håndtere alt ofte mer effektivt enn å koordinere mellom fire leverandører.

## 2. Hvem gjør faktisk jobben?

Dette er et kritisk spørsmål. Mange byråer selger prosjektet via erfarne folk – og leverer via juniorer eller outsourcer arbeidet. Spør direkte: "Hvem vil jobbe på kontoen vår dag til dag?"

Hos Frameflow er svaret alltid: Ivan. Én person, full ansvarlighet.

## 3. Kjenner de Bergen-markedet?

Lokal kunnskap gir konkurransefortrinn. Et byrå som forstår Bergen-mentaliteten, vet hvilke kanaler som funker for lokale bedrifter, og har referanser fra Bergen-kunder, er verdt mer enn et oslobyrå som behandler Bergen som et generisk marked.

## 4. Transparente priser og tydelige leveranser

Unngå byråer som ikke kan gi deg et konkret tilbud uten ukesvis med "analyse". Et godt byrå skal kunne gi deg en fast pris og tydelige leveranser etter en innledende samtale.

## 5. Resultater – ikke aktivitet

Spør om konkrete resultater: Rangerer de nettsidene sine kunder på Google? Kan de vise til økt trafikk, leads eller salg? Aktivitet (antall innlegg, timer brukt) er ikke det samme som resultater.

## Hva Frameflow tilbyr Bergen-bedrifter

Vi er et lite byrå med én kontaktperson, fast pris, fornøyd garanti og dyp lokalkunnskap om Bergen. Vi tar på oss 2–3 nye prosjekter i måneden – og prioriterer bedrifter vi tror vi kan hjelpe til å vokse.

Se hva vi tilbyr på våre [tjenestesider](/tjenester), eller book en gratis samtale og se om vi passer for deg.
    `.trim(),
  },
  {
    slug: 'app-utvikling-pris-bergen-2026',
    title: 'Hva koster apputvikling i Bergen? Komplett prisguide 2026',
    excerpt: 'Prisen på en app varierer enormt – fra 45 000 kr for en MVP til 500 000+ for fullskala løsninger. Her er hva som påvirker prisen og hva du får for pengene.',
    category: 'App utvikling',
    date: '8. mai 2026',
    updatedAt: '2026-05-08',
    readTime: '8 min',
    relatedService: { title: 'App utvikling', href: '/tjenester/app-utvikling' },
    image: { src: '/blog/app-utvikling-pris-bergen-2026.png', alt: 'Illustrasjon av mobilapp-utvikling med skjermelementer og grensesnitt' },
    content: `
## Hva koster en app i Bergen?

Det korte svaret: mellom 45 000 og 500 000+ kr, avhengig av hva du vil bygge. Det lange svaret krever at vi ser på hva som faktisk driver prisen – og hva du bør forvente fra en seriøs leverandør.

Her er en realistisk prisoversikt for apputvikling i Bergen i 2026:

| Type løsning | Estimert pris |
|---|---|
| MVP / testversjon | 45 000 – 80 000 kr |
| Enkel mobilapp (iOS eller Android) | 80 000 – 150 000 kr |
| Mobilapp (iOS + Android) | 120 000 – 250 000 kr |
| Fullskala webapplikasjon | 150 000 – 400 000 kr |
| Kompleks plattform med integrasjoner | 300 000 – 800 000+ kr |

## Hva påvirker prisen på en app?

### 1. Antall funksjoner (scope)

Dette er den enkeltfaktoren som påvirker prisen mest. Hver funksjon krever design, utvikling, testing og vedlikehold. En app med brukerpålogging, betalingsintegrasjon, push-varslinger og admin-panel koster vesentlig mer enn én med én kjernefunksjon.

Tips: Start med én ting appen skal gjøre bedre enn noe annet. Det er MVP-filosofien, og den er akkurat like relevant i Bergen som i Silicon Valley.

### 2. iOS, Android eller begge?

Native apper (separat kodebase for iOS og Android) er dyrest, men gir best ytelse. Hybride rammeverk som React Native og Flutter lar deg bygge for begge plattformer fra én kodebase – og er derfor langt mer kostnadseffektive for de fleste Bergen-bedrifter.

Hos Frameflow bygger vi i React Native og Flutter for mobilapper, og Next.js for webapplikasjoner. Valget avhenger av hva som gir best resultat for ditt prosjekt.

### 3. Backend og integrasjoner

Trenger appen din en server, database, eller integrasjon mot et tredjepartssystem (betalingsløsning, CRM, booking-system)? Hvert integrasjonspunkt legger til tid og kostnad. Enkel backend kan koste 20 000–50 000 kr i tillegg.

### 4. Design og UX

En gjennomarbeidet brukeropplevelse er ikke gratis – og det er heller ikke billig å rette opp i dårlig UX etter lansering. God UX-design utgjør typisk 20–30 % av totalbudsjettet.

### 5. Hvem utvikler?

Prisene varierer enormt mellom:

- **Lavkost-leverandører (Øst-Europa, Asia):** 20–50 USD/t. Kan fungere for enkle prosjekter, men kommunikasjonsutfordringer og revisjoner spiser fort opp innsparingene.
- **Norske frilansere:** 800–1 400 kr/t. Fleksibelt, men du koordinerer selv.
- **Norske byråer:** 1 000–1 800 kr/t. Full prosjektstyring, men dyrere overhead.
- **Frameflow:** Fast pris per prosjekt. Du vet hva du betaler fra dag én.

## MVP – din beste investering

En MVP (Minimum Viable Product) er en testversjon med kun kjernefunksjonene. Hos Frameflow leverer vi en testbar MVP på 2–4 uker.

Fordelen? Du kan validere idéen med ekte brukere før du investerer 200 000 kr i full utvikling. Mange av Bergens mest vellykkede digitale produkter startet som en enkel MVP.

## Hva bør du be om i et tilbud?

Når du kontakter et apputviklingsbyrå i Bergen, bør tilbudet alltid inkludere:

- Fast pris (ikke timepris der sluttbeløpet er ukjent)
- Detaljert scope-beskrivelse
- Milepæler og leveransedatoer
- Hva som skjer etter lansering (support, vedlikehold)
- Hvem som eier koden (du bør alltid eie koden)

## Apputvikling i Bergen med Frameflow

Frameflow bygger skreddersydde apper for Bergen-bedrifter. Vi gir alltid fast pris, starter med MVP, og leverer kode du eier. Priser fra 45 000 kr.

Les mer om vår [apputvikling i Bergen](/tjenester/app-utvikling), eller ta kontakt for en gratis samtale om prosjektet ditt – du får et konkret prisestimat innen 24 timer. Mange app-prosjekter starter med et [nettsted som konverterer](/tjenester/webdesign) – vi tilbyr begge deler under ett tak.
    `.trim(),
  },
  {
    slug: 'seo-byraa-bergen',
    title: 'SEO-byrå i Bergen: Hva koster det og hva bør du forvente?',
    excerpt: 'Vurderer du å sette bort SEO-arbeidet? En uavhengig oversikt over priser, hva som gir resultater, og spørsmålene du bør stille før du signerer.',
    metaTitle: 'Hva koster et SEO-byrå i Bergen? Pris og forventninger 2026',
    category: 'SEO',
    date: '8. mai 2026',
    updatedAt: '2026-05-08',
    readTime: '7 min',
    relatedService: { title: 'SEO', href: '/tjenester/seo' },
    image: { src: '/blog/seo-byraa-bergen.png', alt: 'Illustrasjon av et SEO-byrås arbeid med søkemotoroptimalisering og rangering' },
    content: `
Vurderer du allerede å outsource SEO-arbeidet? Se hva som inngår i [Frameflows SEO-tjeneste i Bergen](/tjenester/seo) og få et konkret pristilbud – eller fortsett å lese for en uavhengig oversikt over hva du bør se etter i et byrå, uansett hvem du velger.

## Hva gjør et SEO-byrå i Bergen?

Et SEO-byrå hjelper bedriften din å rangere høyere på Google for søkeord potensielle kunder faktisk bruker. For Bergen-bedrifter handler dette primært om lokal SEO – å dukke opp når noen søker «[din tjeneste] Bergen».

En god SEO-pakke fra et Bergen-byrå dekker typisk:

- **Teknisk SEO:** Hastighet, mobiloptimalisering, strukturert data, canonical-tagger
- **On-page SEO:** Titler, metabeskrivelser, H1-struktur, intern lenkebygging
- **Innhold:** Bloggposter og landingssider rettet mot søkeord du vil rangere på
- **Lokal SEO:** Google Business Profile, NAP-konsistens, lokale sitering

## Hva koster SEO-tjenester i Bergen?

Her er et realistisk bilde av prisnivåene du vil møte:

| Tjenestenivå | Månedlig pris | Hva du får |
|---|---|---|
| Grunnleggende SEO | 2 000 – 4 000 kr/mnd | Teknisk oppsett, månedlig rapport |
| Standard SEO-pakke | 5 000 – 12 000 kr/mnd | Teknisk + innhold + rapportering |
| Fullservice SEO | 12 000 – 30 000 kr/mnd | Alt inkludert, tett oppfølging |
| Engangsoppsett | 8 000 – 25 000 kr | Teknisk SEO, ingen løpende arbeid |

Merk: Billigste alternativ er ikke alltid best. SEO som leverer reelle resultater krever tid og kompetanse – det finnes ingen snarvei.

## Hva skiller et godt SEO-byrå fra et dårlig?

### De gode:
- Viser deg faktiske rangeringer og trafikktall
- Forklarer hva de gjør og hvorfor
- Gir realistiske forventninger (SEO tar tid – typisk 3–6 måneder)
- Rapporterer på resultater, ikke bare aktivitet
- Eier ikke domenene dine eller holder deg «låst inne»

### De dårlige:
- Lover side 1 på Google innen 30 dager (urealistisk)
- Er vage om metodene sine
- Selger «100 backlinks» for billig pris (risikabelt)
- Rapporterer på «aktivitet» (antall timer, innlegg) fremfor resultater

## Lokal SEO vs. nasjonal SEO – hva trenger du?

For de fleste Bergen-bedrifter er **lokal SEO** den høyest-prioriterte investeringen – vil du gjøre mye av det selv, tar vår [komplette guide til lokal SEO](/blogg/lokal-seo-bergen-guide-2025) deg gjennom stegene. Det handler om å dominere søk som:

- «tannlege Bergen»
- «webdesign byrå Bergen»
- «regnskapsfører Bergenhus»
- «restaurant Sandviken»

Nasjonal SEO (konkurrere på søkeord uten by-navn) er langt vanskeligere og dyrere – og ofte unødvendig for lokale Bergen-bedrifter.

## Google Business Profile – det viktigste SEO-grepet du kan ta gratis

Før du betaler et SEO-byrå en krone: sørg for at Google Business Profile er 100 % komplett og oppdatert. Det er det enkeltgrepet som gir mest lokal synlighet for minst innsats – følg vår [optimeringsguide for Google Business Profile](/blogg/google-my-business-bergen-guide) for å gjøre det riktig.

Sjekkliste:
- Riktig kategori
- Oppdaterte åpningstider
- Profesjonelle bilder (minst 5–10)
- Svar på alle anmeldelser
- Legg inn Bergen i beskrivelsesteksten

## Hva Frameflow leverer

Hos Frameflow integrerer vi SEO i alt vi gjør – nettsider bygges med SEO fra dag én, ikke som ettertanke. Vi setter opp strukturert data, teknisk SEO og Google Search Console som standard på alle prosjekter.

Ønsker du en gjennomgang av SEO-situasjonen din? Les mer om vår [SEO-tjeneste i Bergen](/tjenester/seo), eller book en gratis samtale – vi ser raskt hva som kan forbedres. SEO og en [profesjonell nettside i Bergen](/tjenester/webdesign) henger tett sammen – vi bygger begge med synlighet fra dag én.
    `.trim(),
  },
  {
    slug: 'logo-design-bergen',
    title: 'Logo design i Bergen: Hva koster det og hva bør du forvente?',
    excerpt: 'Kjøperguide for Bergen-bedrifter: hva koster logodesign, hva bør leveransen inkludere, og hvilke spørsmål du MÅ stille designeren din.',
    category: 'Branding',
    date: '8. mai 2026',
    updatedAt: '2026-05-08',
    readTime: '6 min',
    relatedService: { title: 'Branding', href: '/tjenester/branding' },
    image: { src: '/blog/logo-design-bergen.png', alt: 'Illustrasjon av ulike logoalternativer og en prisoversikt for logodesign' },
    content: `
## Hva koster logo design i Bergen?

Logo design i Bergen varierer i pris fra noen hundre kroner (Fiverr) til 50 000+ kr for store merkevareprosjekter. Her er hva du realistisk sett kan forvente på ulike prisnivåer:

| Tjenestenivå | Pris | Hva du får |
|---|---|---|
| Billige plattformer (Fiverr etc.) | 500 – 3 000 kr | Generiske maler, ingen strategi, begrenset støtte |
| Frilanser | 5 000 – 15 000 kr | Tilpasset design, men varierende kvalitet |
| Bergen-byrå (basis) | 8 000 – 20 000 kr | Profesjonell prosess, brand guidelines, alle filformater |
| Bergen-byrå (fullservice) | 20 000 – 50 000+ kr | Komplett merkevarebygging, strategi og identitetssystem |

Hos Frameflow starter logodesign fra 8 000 kr eks. mva. og inkluderer alltid full leveranse i alle nødvendige formater.

## Hva bør en profesjonell logo inkludere?

Når du bestiller logo design fra en seriøs grafisk designer eller et byrå i Bergen, skal du alltid få:

### Logovariasjoner
- Horisontal og vertikal variant
- Med og uten bildetekst/tagline
- Lys og mørk versjon (for bruk på mørk bakgrunn)

### Filformater
- **SVG og AI:** Vektorfiler – skalerer uten kvalitetstap til enhver størrelse
- **PDF:** For trykkeri
- **PNG med transparent bakgrunn:** For nett og sosiale medier
- **JPG:** For enkel bruk

Hvis en designer ikke leverer SVG-filer, er det et rødt flagg.

### Brand guidelines
Et minimum av retningslinjer som viser:
- Godkjente farger med HEX, RGB og CMYK-koder
- Typografi (hvilke fonter som hører til merkevaren)
- Soner og mellomrom rundt logoen
- Hva du ikke skal gjøre med logoen

## Hva er forskjellen på logodesign og branding?

**Logo** er ett element – selve tegnet eller ordmerket.

**Branding** er helheten: logo, farger, typografi, tone of voice, visittkort, sosiale medier-maler, og retningslinjene som holder alt konsistent. En logo uten et system rundt seg mangler kraft.

For Bergen-bedrifter som nettopp har startet, er en god logo med basis brand guidelines det viktigste første steget. Etter hvert kan systemet bygges ut.

## Slik velger du riktig grafisk designer i Bergen

### Sjekk porteføljen
Se etter arbeid som ligner på din bransje og stil. Ber du om en logo for en tannlegeklinikk i Bergen, bør designeren ha erfaring med profesjonelle, tillitvekkende merkevarer.

### Spør om prosessen
En god designer starter alltid med spørsmål om bedriften din – hvem du er, hvem målgruppen er, og hva du vil formidle. Designere som hopper rett til skisser uten å forstå merkevaren, leverer sjelden det du trenger.

### Be om fast pris
Unngå timesprising på logodesign. Du vil vite hva du betaler før prosjektet starter.

### Sjekk hvem som eier filene
Du skal alltid eie alle logofiler og opphavsretten etter levering. Be om dette skriftlig.

## Grafisk designer Bergen – frilanser eller byrå?

**Frilanser:** Rimeligere, men varierende tilgjengelighet og support. Bra for enkle logoer uten behov for helhetlig identitet.

**Byrå (som Frameflow):** Mer komplett leveranse, langsiktig relasjon, kan hjelpe med alt fra logo til nettside og sosiale medier-maler i ett løp.

## Klar til å bestille logo i Bergen?

Nå vet du hva du bør se etter, hva du bør betale, og spørsmålene du skal stille. Neste steg er å finne riktig leverandør for deg.

Se hva [Frameflow tilbyr innen branding og logodesign](/tjenester/branding) – eller [ta kontakt](/kontakt) for å høre om vi passer for prosjektet ditt. Etter at logoen er på plass, er neste steg gjerne en [profesjonell nettside i Bergen](/tjenester/webdesign) som presenterer merkevaren din korrekt.
    `.trim(),
  },
]

export const projects: Project[] = [
  {
    slug: 'h-orbit',
    title: 'h-orbit',
    client: 'h-orbit',
    description: 'Musikkplattform for artister – dele musikk, samarbeid og arrangementer',
    fullDescription:
      'h-orbit er en musikkplattform designet for spirende artister. Vi bygde en intuitiv app hvor musikere kan dele musikken sin, finne samarbeidsmuligheter med andre artister, oppdage arrangementer og musikkrelaterte muligheter – alt på ett sted.',
    challenge: 'Unge musikere manglet en sentralisert plass for å dele musikken sin, finne samarbeid og oppdage relevante arrangementer. De måtte bruke flere plattformer (SoundCloud, Instagram, e-post) og mistet ofte muligheter.',
    tags: ['App utvikling', 'Branding'],
    location: 'Amsterdam, Nederland',
    year: '2026',
    results: [
      '2000+ artister på plattformen',
      '500+ samarbeidsprosjekter startet',
      '98% app uptime og stabilitet',
      '1000+ arrangementer oppdaget per måned',
    ],
    image: {
      src: '/h-orbit-bento-english-fullbleed.png',
      alt: 'h-orbit-dashboard: avspilling av «Night Light», artist-statistikk med 96 412 månedlige lyttere, artistprofil for Nova Vlecht og kommende arrangementer',
    },
    seo: {
      titleNo: 'h-orbit – Musikkplattform for artister | Frameflow',
      titleEn: 'h-orbit – Music platform for artists | Frameflow',
      descNo: 'Frameflow bygde h-orbit, en musikkplattform som samler artister og fans. Brukt av 150+ team-medlemmer og 5000+ daglige interaksjoner.',
      descEn: 'Frameflow built h-orbit, a music platform connecting artists with fans. Used by 150+ team members with 5000+ daily interactions.',
      keywordsNo: ['h-orbit', 'musikkplattform', 'app utvikling Bergen', 'Frameflow'],
      keywordsEn: ['h-orbit', 'music platform app', 'app development Bergen', 'Frameflow'],
      ogImage: 'https://www.frameflow.no/og?title=h-orbit+%E2%80%93+Musikkplattform+for+artister&label=App+utvikling',
      schemaName: 'h-orbit – Musikkplattform for artister',
      schemaDescription: 'En musikkplattform som samler artister og fans på ett sted.',
      dateCreated: '2025',
      schemaKeywords: 'App utvikling, Branding, React, Full-stack, musikk, artister',
      schemaLocation: 'Bergen, Norge',
    },
    faqs: [
      { q: 'Hva er h-orbit?', a: 'h-orbit er en musikkplattform for artister, bygget av Frameflow. Plattformen lar musikere dele musikken sin, finne samarbeidspartnere og oppdage arrangementer – alt på ett sted.' },
      { q: 'Hvilke tjenester leverte Frameflow til h-orbit?', a: 'Frameflow sto for app utvikling og branding av h-orbit, fra idé til lansert plattform.' },
      { q: 'Hvilke resultater har h-orbit oppnådd?', a: 'h-orbit har over 2000 artister på plattformen, 500+ samarbeidsprosjekter startet, 98% app-oppetid og over 1000 arrangementer oppdaget per måned.' },
      { q: 'Hvor er h-orbit basert?', a: 'h-orbit er basert i Amsterdam, Nederland. Frameflow har base i Bergen, men jobber like gjerne med kunder i resten av Norge og internasjonalt.' },
    ],
  },
  {
    slug: 'sportsbytte',
    title: 'Sportsbytte',
    client: 'Sportsbytte',
    description: 'Webdesign og branding for norsk platform for kjøp, salg og bytte av brukt sportsutstyr',
    fullDescription:
      'Sportsbytte er en norsk plattform for kjøp, salg og bytte av brukt sportsutstyr. Plattformen trengte en moderne nettside og sterk visuell identitet som appellerte til sportsinteresserte nordmenn og forenklet prosessen med å finne og tilby utstyr.',
    challenge: 'Plattformen manglet en profesjonell digital tilstedeværelse som reflekterte ambisjonene til en nasjonal markedsplass. Den eksisterende løsningen var utdatert og konverterte dårlig – potensielle brukere fant ikke frem til tilbudene.',
    tags: ['Web design', 'Branding', 'SEO'],
    location: 'Norge',
    year: '2026',
    results: [
      'Moderne og konverteringsfokusert nettside lansert',
      'Tydelig visuell identitet og brand guidelines levert',
      'Markant økning i brukerregistreringer etter lansering',
    ],
    image: {
      src: '/sportsbytte-bento-norsk-fullbleed.png',
      alt: 'Sportsbytte-dashboard: utvalgt annonse for skøyteski, miljøeffekt med 967 videresolgte varer, Bergen Skiklubb-klubbprofil og utstyrsutforskning',
    },
    seo: {
      titleNo: 'Sportsbytte – Webdesign og branding for norsk bytteplatform | Frameflow',
      titleEn: 'Sportsbytte – Web design and branding for Norwegian sports marketplace | Frameflow',
      descNo: 'Frameflow skapte ny nettside og visuell identitet for Sportsbytte, Norges plattform for kjøp, salg og bytte av brukt sportsutstyr.',
      descEn: 'Frameflow created a new website and visual identity for Sportsbytte, Norway\'s platform for buying, selling and trading used sports equipment.',
      keywordsNo: ['Sportsbytte', 'sportsutstyr plattform', 'webdesign Norge', 'Frameflow'],
      keywordsEn: ['Sportsbytte', 'sports marketplace Norway', 'web design Norway', 'Frameflow'],
      ogImage: 'https://www.frameflow.no/og?title=Sportsbytte+%E2%80%93+Webdesign+og+branding&label=Web+design',
      schemaName: 'Sportsbytte – Webdesign og branding for norsk bytteplatform',
      schemaDescription: 'Ny nettside og visuell identitet for Sportsbytte – plattformen for kjøp, salg og bytte av brukt sportsutstyr i Norge.',
      dateCreated: '2025',
      schemaKeywords: 'Web design, Branding, SEO, sportsbytte, brukt sportsutstyr, Norge',
      schemaLocation: 'Bergen, Norge',
    },
    faqs: [
      { q: 'Hva er Sportsbytte?', a: 'Sportsbytte er en norsk plattform for kjøp, salg og bytte av brukt sportsutstyr. Frameflow bygget en ny nettside og visuell identitet for plattformen.' },
      { q: 'Hvilke tjenester leverte Frameflow til Sportsbytte?', a: 'Frameflow leverte webdesign, branding og SEO for Sportsbytte – en komplett digital relansering av plattformen.' },
      { q: 'Hvilke resultater fikk Sportsbytte etter relanseringen?', a: 'Sportsbytte fikk en moderne, konverteringsfokusert nettside, en tydelig visuell identitet med brand guidelines, og en markant økning i brukerregistreringer etter lansering.' },
      { q: 'Hvor er Sportsbytte basert?', a: 'Sportsbytte opererer i Norge. Frameflow er basert i Bergen og jobber med kunder i hele landet.' },
    ],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
