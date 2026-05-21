FROM europe-north1-docker.pkg.dev/cgr-nav/pull-through/nav.no/node:24-slim@sha256:900057ceb12740ee3819576dc1090e23a3da4dac5daccf1a0bface1bb8b1b347

WORKDIR /usr/src/app

COPY ./dist ./dist

ENV HOST=0.0.0.0
ENV PORT=3000

CMD ["./dist/server/entry.mjs"]

EXPOSE $PORT
