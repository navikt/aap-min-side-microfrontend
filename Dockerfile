FROM europe-north1-docker.pkg.dev/cgr-nav/pull-through/nav.no/node:24-slim@sha256:fd5e006982da7e8322ce3fe85dbfb131974c6056d865af8edcb14aec5a2e9a19

WORKDIR /usr/src/app

COPY ./dist ./dist

ENV HOST=0.0.0.0
ENV PORT=3000

CMD ["./dist/server/entry.mjs"]

EXPOSE $PORT
