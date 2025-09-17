# aap-min-side-microfrontend-vitets

Kan brukes som utgangspunkt for å opprette nye mikrofrontends i Min Side.

# Tilpass repo-et

1. Søk etter og erstatt aap-min-side-microfrontend med det som skal være navnet på den nye appen.
2. Legg til appen i [nais/frontend-plattform](https://github.com/nais/frontend-plattform/blob/main/teams.tfvars).
3. Sett inn riktig team navn i nais.yaml og under cdn-upload i workflowen.
4. Kommenter inn upload-dev og upload-prod i workflowen.

Mikfrontenden blir lastet opp til nav sin CDN ved push til main og har et manifest som deployes til Nais.

# Kom i gang

1. Bygg aap-min-side-microfrontend ved å kjøre npm run build
2. Start appen lokalt ved å kjøre npm run dev
3. Appen nås på http://localhost:3000

# Henvendelser

Spørsmål knyttet til koden eller prosjektet kan stilles som issues her på github.

## For NAV-ansatte

Interne henvendelser kan sendes via Slack i kanalen #team-personbruker.

# Autentisering mot Github package registry

For å kunne kjøre `npm install` lokalt må du logge inn på Github package registry. Lag et Personal Access Token (PAT) på github og eksporter den via feks .zshrc eller .bashrc som NPM_AUTH_TOKEN.
