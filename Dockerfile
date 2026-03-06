FROM europe-north1-docker.pkg.dev/cgr-nav/pull-through/nav.no/node:24-slim@sha256:430c21e345cf5a6f6172926add792597551b5f5b1d7c658c578adeec86c800e0

WORKDIR /usr/src/app

COPY ./dist ./dist
COPY ./node_modules ./node_modules

ENV HOST=0.0.0.0
ENV PORT=3000

CMD ["./dist/server/entry.mjs"]

EXPOSE $PORT
