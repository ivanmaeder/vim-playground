# Vim Playground

## Local configuration
Create a `.env` file with:

| Variable        | Value                                                                      |
|-----------------|----------------------------------------------------------------------------|
| CERT_PATH       | _Path to local SSL/TLS cert files (e.g., `${HOME}/.vim_playground/certs`)_ |
| HOST            | localhost                                                                  |
| PRODUCTION_HOST | _Production host domain name_                                              |
| NODE_ENV        | development                                                                |

Create a self-signed SSL/TLS certificate by running `bin/certs.sh`.

