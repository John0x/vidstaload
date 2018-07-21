<p align="center">
  <img src="src/assets/img/header.png" alt="Sublime's custom image"/>
</p>

![Vidstaload-status](https://david-dm.org/john0x/vidstaload.svg) [![Known Vulnerabilities](https://snyk.io/test/github/john0x/vidstaload/badge.svg)](https://snyk.io/test/github/john0x/vidstaload)

# Vidstaload PWA

Vidstaload is a progressiv web app made to test out [Stencil](https://github.com/ionic-team/stencil) and the new [Ionic V4](https://github.com/ionic-team/ionic). It let's you download videos from instagram with native web technologies. It's installable as an app on major devices and reaches high scores on Lighthouse (duh).

Live demo: http://vidstaload.com

**Techologies in use**:
* [Stencil](https://github.com/ionic-team/stencil) as a web component compiler and framework in general
* [PostCss](https://postcss.org/)
* [Ionic V4](https://github.com/ionic-team/ionic)
* [Ionic V4 Router](https://github.com/ionic-team/ionic/tree/master/core/src/components/router)
* [TSLint](https://github.com/palantir/tslint)

**Features**:
* Pre-rendering and SSR (stencil currently has problems with it though, due to the shadow dom)
* Installable as an app on all major devices
* Offline usable (in theory, cause instagram downloader...)
* Extremely lightweight thanks to Stencil