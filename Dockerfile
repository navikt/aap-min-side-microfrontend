FROM europe-north1-docker.pkg.dev/cgr-nav/pull-through/nav.no/node:24-slim@sha256:aac5628279f4407df0cd72acc565e0efb16cb28c51d2f724526141ea18efed18

WORKDIR /usr/src/app

COPY ./dist ./dist

ENV HOST=0.0.0.0
ENV PORT=3000

CMD ["./dist/server/entry.mjs"]

EXPOSE $PORT
