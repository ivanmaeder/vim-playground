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

# Production configuration
1. If it doesn't exist, create a [non-root user with sudo access](https://www.digitalocean.com/community/tutorials/how-to-create-a-new-sudo-enabled-user-on-ubuntu-18-04-quickstart)
2. Add the public key from your computer to the new user's `~/.ssh/authorized_keys file`
3. Before logging out, check that you can SSH with the new user
4. [Install Docker](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository)

Download a SSL/TLS certificate:

```bash
sudo docker run -it --rm --name certbot \
  -v "/etc/letsencrypt:/etc/letsencrypt" \
  -v "/var/lib/letsencrypt:/var/lib/letsencrypt" \
  -p 80:80 \
  certbot/certbot \
  --standalone \
  --domains <PRODUCTION_HOST> \
  certonly
 ```

(To renew the certificate, run `sudo docker compose stop proxy`, the above command, then `sudo docker compose start proxy`.)

To access the repo, create a key from the new server and set it up as a GitHub [deploy key](https://docs.github.com/en/developers/overview/managing-deploy-keys#deploy-keys).

Clone the repository. In the repository root folder, create a `.env` file with:

| Variable        | Value                                  |
|-----------------|----------------------------------------|
| CERT_PATH       | /etc/letsencrypt/live/$PRODUCTION_HOST |
| HOST            | $PRODUCTION_HOST                       |
| PRODUCTION_HOST | _Production host domain name_          |
| NODE_ENV        | production                             |