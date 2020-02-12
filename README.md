![Master Build Status](https://img.shields.io/badge/dynamic/json?color=blue&label=Build%20Status&query=%24%5B0%5D.state&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fsilleknarf%2Fcopyto.me%2Fstatuses%2Fmaster)

README
======

CopyTo.me is an application for sending things to yourself

Getting Started
===============

Set the environment variables in your profile:

    export AUTHENTICATION__GOOGLE__CLIENTID=
    export AUTHENTICATION__GOOGLE__CLIENTSECRET=
    export SENDGRIDKEY=
    export SENDGRIDUSER=

Run `docker-compose up` and then navigate to [https://localhost:5000](https://localhost:5000).
