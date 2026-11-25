FROM europe-north1-docker.pkg.dev/cgr-nav/pull-through/nav.no/node:24-slim@sha256:280e46c2c673862721381e5d1b88eafe3c9a1326c00b69fa287f82383a631602

WORKDIR /usr/src/app

COPY ./dist ./dist

ENV HOST=0.0.0.0
ENV PORT=3000

CMD ["./dist/server/entry.mjs"]

EXPOSE $PORT
