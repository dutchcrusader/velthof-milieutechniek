# Velthof Milieutechniek — Website Audit & Strategisch Plan

**Datum:** 2 juli 2026
**Auditor:** Studio Orange
**Website:** https://velthofmilieutechniek.nl
**Bedrijf:** Velthof Milieutechniek, Oldenzaal

---

## Executive Summary

Velthof Milieutechniek is een producent van RVS afvalpersen en aanverwante afvalverwerkingsmachines, gevestigd in Oldenzaal. Het bedrijf maakt sterke producten — roestvrijstalen persen, balenpersen, glasbrekers en shredders — maar de huidige website doet geen recht aan het vakmanschap. Het is een functionele WordPress/Divi-site die technisch oké is, maar visueel gedateerd en zonder overtuigende verkoopkracht.

**Kernproblemen:**
1. Visueel gedateerd — standaard Divi-look zonder industriële uitstraling
2. Geen "Over ons" pagina (404) — geen bedrijfsverhaal, geen vertrouwenopbouw
3. Producten worden slecht gepresenteerd — geen foto's van machines in actie, geen duidelijke specificaties
4. Meta description ontbreekt — onzichtbaar in Google
5. `user-scalable=0` op mobiel — slecht voor toegankelijkheid en SEO
6. Geen social proof, cases of referenties
7. Website ademt niet het niveau van de producten

**Kansen:**
- Sterk onderscheidend vermogen: Made in Holland, RVS, direct af fabriek
- Diverse productlijn (9 categorieën) met ruimte voor betere presentatie
- Markt van afvalverwerking groeit (duurzaamheid, recycling)
- Media Kanjers liet hem vallen — Niels is klaar om te schakelen

---

## 1. Bedrijfsprofiel & Propositie

### Over Velthof Milieutechniek

| Veld | Waarde |
|------|--------|
| Naam | Velthof Milieutechniek |
| Contactpersoon | Niels Velthof |
| Locatie | Waterwinweg 35, 7572 PD Oldenzaal |
| Telefoon | 06-30627623 |
| Email | info@velthofmilieutechniek.nl |
| Specialisatie | Ontwerp en productie van RVS afvalpersen |
| Productcategorieën | Afvalpersen, RVS persen, garbage compactors, balenpersen, occasions, afbindband, glasbrekers, bandversnipperaars, shredders |
| USP | Made in Holland, RVS vakmanschap, direct af fabriek, scherpe prijzen |

### Huidige website-structuur

| Pagina | Status |
|--------|--------|
| Home | ✅ Bestaat |
| Contact | ✅ Bestaat (met formulier) |
| Offertes aanvragen | ✅ Link in menu |
| Producten / Afval persen | ✅ Bestaat (VMT 1100, VMT 1300, Kliko pers) |
| Producten / RVS persen | ✅ Bestaat (VMT 4000, VMT 500) |
| Producten / Garbage compactor | ✅ Bestaat |
| Producten / Balenpersen | ✅ Bestaat |
| Producten / Occasions | ✅ Bestaat |
| Producten / Afbindband | ✅ Bestaat |
| Producten / Bottlenecker / Glasbreker | ✅ Bestaat |
| Producten / CBC Bandversnipperaar | ✅ Bestaat |
| Producten / Shredders | ✅ Bestaat |
| Over ons | 🔴 404 — bestaat niet |
| Producten (overzicht) | ⚠️ Minimaal |

---

## 2. Technische Audit

### 2.1 Platform & Infrastructuur

| Aspect | Bevinding | Status |
|--------|-----------|--------|
| CMS | WordPress (laatste versie) | ✅ Goed |
| Theme | Divi | ⚠️ Zwaar, veel bloat |
| Page builder | Divi Builder | ⚠️ Eigen systeem |
| HTTPS | Actief, geldig certificaat | ✅ Goed |
| Hosting | Apache/2 | ✅ Goed |
| Laadtijd | 0.064s (server) | ✅ Snel |
| Yoast SEO | v27.9, actief | ✅ Goed |

### 2.2 SEO-Technisch

| Aspect | Bevinding | Impact |
|--------|-----------|--------|
| Meta description | **Leeg op alle pagina's** | 🔴 Kritisch |
| H1-tags | Aanwezig (pagina-titels) | ✅ Goed |
| H2-structuur | Weinig diepgang | 🟡 Matig |
| Canonical URLs | WordPress-standaard | ✅ Goed |
| Open Graph tags | Aanwezig (Divi) | ✅ Goed |
| Schema.org | **Niet aanwezig** | 🟡 Matig |
| Sitemap.xml | WordPress-eigen sitemap | ✅ Goed |
| Alt-attributen | Aanwezig | ✅ Goed |
| Language tag | `lang="nl"` | ✅ Goed |
| URL-structuur | Schoon | ✅ Goed |
| `user-scalable=no` | **Aanwezig in viewport** | 🔴 Kritisch |

### 2.3 Performance

| Aspect | Bevinding |
|--------|-----------|
| Server-respons | Zeer snel (0.064s) |
| Afbeeldingen | Geen WebP, geen srcset — laden full-size |
| CSS/JS | 29 scripts geladen (Divi bloat) |
| Lazy loading | Niet actief |
| Caching | Server-side caching actief |
| Minimificatie | Niet actief |

### 2.4 Beveiliging & Privacy

| Aspect | Bevinding |
|--------|-----------|
| SSL/HTTPS | ✅ Actief |
| Cookiebanner | ⚠️ Niet zichtbaar |
| Privacyverklaring | ⚠️ Niet zichtbaar |
| Contactformulier | ✅ Aanwezig (8 velden) |

### 2.5 Mobiele Ervaring

| Aspect | Bevinding |
|--------|-----------|
| Viewport | ✅ Ingesteld, maar `user-scalable=no` |
| Responsive | ⚠️ Divi is responsive, maar afbeeldingen schalen niet mee (geen srcset) |
| Touch-targets | Navigatie oké, maar kleine knoppen |
| Mobiele CTA | Geen sticky contactknop of click-to-call |

---

## 3. UX & Design Analyse

### 3.1 Visueel Ontwerp

**Huidige look:** Standaard Divi. Witte achtergrond, blauwe accenten, generieke typografie. De site oogt functioneel maar mist elke industriële uitstraling.

**Probleem:** Een bedrijf dat RVS afvalpersen maakt — robuust, technisch, duurzaam — zou een website moeten hebben die dat uitstraalt. Nu voelt het als een generiek WordPress-template. De producten zijn sterker dan de website.

### 3.2 Homepage-analyse

**Opbouw:**
1. Header met logo + navigatie
2. Titel "VELTHOF MILIEUTECHNIEK, PRODUCENT VAN RVS AFVALPERSEN."
3. Korte bedrijfstekst + verwijzing naar scherpe prijzen
4. Link naar afbindband (sidebar)
5. Link naar bestellen omsnoeringsband (sidebar)

**Problemen:**
- Geen hero-image of visuele opening — alleen tekst
- Geen productfoto's op de homepage
- Geen CTA naar producten of contact (alleen tekstlink)
- Bedrijfstekst vermeldt "Haaksbergen" maar adres is Oldenzaal
- Sidebar met omsnoeringsband is storend op een B2B-site

### 3.3 Navigatie

| Menu-item | Doel | Probleem |
|-----------|------|----------|
| HOME | Introductie | Passief, geen waardepropositie |
| PRODUCTEN (dropdown) | Assortiment | 9 categorieën — goede structuur, slechte presentatie |
| CONTACT | Contactgegevens | Functioneel formulier |
| OFFERTE AANVRAGEN > | Leadgeneratie | Goede intentie, maar link naar contactformulier |

### 3.4 Productpagina's

**Sterke punten:**
- Logische categorisering (9 categorieën)
- RVS VMT 4000 heeft specificaties (afmetingen, gewicht, vermogen)
- Kliko Pers, VMT 1100, VMT 1300 hebben beschrijvingen

**Zwakke punten:**
- **Geen productfoto's** (alleen beschrijvende tekst)
- Geen video's van machines in actie
- Geen duidelijke productvergelijking
- PDF-downloads aanwezig maar niet prominent
- Geen "Offerte aanvragen" per product
- Specificaties alleen bij VMT 4000, niet bij andere producten

### 3.5 Contactpagina

**Inhoud:** Bedrijf*, Naam*, Adres*, Postcode*, Woonplaats*, Telefoon*, E-mailadres*, Uw bericht* + kaart.

**Pluspunten:**
- Formulier met alle benodigde velden
- Google Maps embed

**Verbeterpunten:**
- Geen afdelingsselectie
- Geen directe offerte-aanvraag
- Geen openingstijden

---

## 4. Content & SEO Analyse

### 4.1 Content-kwaliteit

| Pagina | Woordenaantal | Kwaliteit |
|--------|---------------|-----------|
| Home | ~80 | Kort, functioneel |
| Afval persen | ~100 | Goede beschrijving, maar geen diepgang |
| RVS persen | ~50 | Minimaal |
| Contact | ~10 | Puur informatief |

**Probleem:** Te weinig content voor B2B-SEO. Geen diepgang over:
- Het productieproces (RVS-laswerk, engineering)
- Kwaliteit en materialen (roestvrij staal, duurzaamheid)
- Voordelen van een pers (kostenbesparing, ruimte, milieu)
- Cases en toepassingen per sector
- Bedrijfsgeschiedenis (wie is Niels, waarom RVS?)

### 4.2 Zoekwoordkansen

Huidige site scoort niet op belangrijke B2B-zoektermen zoals:
- "RVS afvalpers kopen"
- "afvalpers fabrikant Nederland"
- "afval verwerken met pers"
- "balenpers papier karton"
- "glasbreker machine"
- "shredder afval"
- "garbage compactor Nederland"

### 4.3 Contentgaten

- **Geen "Over ons"** — het belangrijkste vertrouwenselement ontbreekt
- **Geen blog of kennisbank** — geen uitleg over afvalvermindering, ROI, branches
- **Geen video's** — een pers in actie is vele malen overtuigender dan tekst
- **Geen cases of referenties** — wie gebruikt zijn persen? Wat besparen ze?
- **Geen downloadbare catalogus**

---

## 5. Concurrentie-analyse

### 5.1 Directe concurrenten

**Orwak (Zweden/SULO Group)** — www.orwak.com
- Zeer professionele, internationale website
- Ruim productaanbod: verticale persen, compactoren, balenpersen
- Sterke contentmarketing: nieuws, cases, video's
- Maar: internationaal concern, geen persoonlijke service
- Velthof kan winnen op: **lokale aanwezigheid, RVS specialisme, made in Holland**

**Bramidan (Denemarken)** — www.bramidan.com
- Strakke B2B-site met uitstekende productpresentatie
- Sinds 1975, Deense kwaliteit
- Categorieën: vertical/horizontal balers, compactoren
- Maar: groothandelsprijs, geen maatwerk
- Velthof kan winnen op: **maatwerk, RVS, flexibiliteit, direct contact**

**Husmann (Duitsland)**
- Afvalpersen en compactoren
- Technisch sterk, Duitse markt
- Traditionele website
- Velthof kan winnen op: **scherpe prijzen, korte lijnen, Nederlandse markt**

### 5.2 Conclusie

Velthof concurreert niet op schaal met Orwak of Bramidan. Zijn kracht is:

- **Lokaal & bereikbaar** — Oldenzaal, direct contact met Niels
- **Specialistisch** — RVS is zijn ding, geen standaard-metaal
- **Maatwerk** — niet alleen catalogusproducten
- **Made in Holland** — kwaliteit, korte lijnen, trots
- **Prijs** — direct af fabriek, geen tussenhandel

De website moet die boodschap uitstralen: geen kopie van grote jongens, maar een trotse, nuchtere Nederlandse maker.

---

## 6. Strategische Aanbevelingen

### Fase 1: Quick Wins (Week 1-2)

**Doel:** Technische tekortkomingen oplossen en basis op orde krijgen.

| # | Actie | Impact |
|---|-------|--------|
| 1.1 | Schrijf meta descriptions voor alle pagina's | 🔴 Kritisch |
| 1.2 | Verwijder `user-scalable=no` uit viewport | 🟡 Matig |
| 1.3 | Voeg srcset toe aan afbeeldingen of gebruik WebP | 🟡 Matig |
| 1.4 | Maak een "Over ons" pagina met bedrijfsverhaal | 🔴 Kritisch |
| 1.5 | Optimaliseer afbeeldingen (lazy loading) | 🟡 Matig |
| 1.6 | Zet een cookiebanner (Complianz / Cookiebot) | 🟡 Matig |
| 1.7 | Voeg gestructureerde data toe (Schema.org LocalBusiness) | 🟡 Matig |

### Fase 2: Conversie & Design (Week 3-6)

**Doel:** De website laten voelen als het bedrijf dat hij is.

| # | Actie | Impact |
|---|-------|--------|
| 2.1 | **Nieuw design** — industriële look & feel met RVS-esthetiek | 🔴 Kritisch |
| 2.2 | Producten centraal met professionele foto's en specificaties | 🔴 Kritisch |
| 2.3 | Video's van persen in actie op productpagina's | 🔴 Kritisch |
| 2.4 | "Offerte aanvragen" per product (directe leadgeneratie) | 🔴 Kritisch |
| 2.5 | "Over ons" uitbreiden met werkplaats, Niels zijn verhaal | 🟡 Matig |
| 2.6 | Mobiele ervaring verbeteren (click-to-call, sticky CTA) | 🟡 Matig |
| 2.7 | Sidebar met omsnoeringsband herplaatsen of verwijderen | 🟣 Laag |

### Fase 3: Groei & Content (Maand 2-4)

**Doel:** Online zichtbaarheid uitbouwen en vertrouwen winnen.

| # | Actie | Impact |
|---|-------|--------|
| 3.1 | Start een blog/kennisbank over afvalvermindering | 🟡 Matig |
| 3.2 | Publiceer cases (wie gebruikt persen, wat besparen ze) | 🔴 Kritisch |
| 3.3 | Optimaliseer voor B2B-zoekwoorden | 🟡 Matig |
| 3.4 | Bouw een eenvoudige offerteflow in het formulier | 🔴 Kritisch |
| 3.5 | Overweeg meertaligheid (Engels/Duits voor export) | 🟡 Matig |

---

## 7. Conclusie

Velthof Milieutechniek heeft een solide basis: goede producten, een duidelijke niche (RVS, Made in Holland) en een markt die groeit (duurzaamheid, recycling, afvalreductie). De website is op dit moment een afspiegeling van een bedrijf dat te druk was met produceren om online professioneel over te komen.

De prioriteiten zijn:
1. **Technische basis herstellen** — meta descriptions, user-scalable, Over ons pagina
2. **Producten laten zien** — goede foto's, specificaties, video's
3. **Het verhaal vertellen** — wie is Niels, waarom RVS, waarom Made in Holland
4. **Conversie mogelijk maken** — offerteflow per product, duidelijke CTA's

Het doel is een website die net zo robuust en overtuigend is als de persen die hij verkoopt.

---

## Bijlage A: Huidige productcategorieën

1. AFVAL PERSEN — VMT 1100, VMT 1300, Kliko Pers VMT 240/360
2. RVS PERSEN — VMT 4000 (Stainless Steel Compactor), VMT 500
3. GARBAGE COMPACTOR
4. BALENPERSEN / PAPIER-KARTON
5. OCCASIONS (tweedehands)
6. AFBINDBAND
7. BOTTLENECKER / GLASBREKER
8. CBC BANDVERSNIPPERAAR
9. SCHREDDERS

## Bijlage B: Huidige technische specificaties

- CMS: WordPress (Divi theme)
- Hosting: Apache/2
- SSL: Actief
- SEO: Yoast v27.9
- Laadtijd: 0.064s
- Sitemap: WordPress-eigen
