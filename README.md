# aap-min-side-microfrontend

AAP microfrontend som brukes på Min Side. Viser kun et enkelt infokort som med grunnleggende informasjon tilknyttet AAP-sak.

Brukes av [TMS Min Side](https://github.com/navikt/tms-min-side). Mer info om hvordan det fungerer kan du finne her:
[TMS Microfrontend SSR](https://tms-docs.nav.no/microfrontends/microfrontend-ssr/)

Microfrontenden er lastet opp i Nav sin CDN. Les mer på [nais/CDN](https://doc.nais.io/services/cdn/)

# Kom i gang

1. Bygg `aap-min-side-microfrontend` ved å kjøre `npm run build`
2. Start appen lokalt ved å kjøre `npm run dev`
3. Appen nås på http://localhost:3000

# Henvendelser

Spørsmål knyttet til koden eller prosjektet kan stilles som issues her på github.

## For NAV-ansatte

Interne henvendelser kan sendes via Slack i kanalen #team-personbruker.

# Autentisering mot Github package registry

For å kunne kjøre `npm install` lokalt må du logge inn på Github package registry. Lag et Personal Access Token (PAT) på
github og eksporter den via feks .zshrc eller .bashrc som NPM_AUTH_TOKEN.
