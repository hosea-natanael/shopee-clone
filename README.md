This is a Shopee clone made with NextJS 15 and TailwindCSS 3.4. This is a non functional clone for its purpose is to show how it was made from the ground up given a design.

# Demo
You can check out the application running live on a VPS from this link [https://shopee-clone.hosean.my.id](https://shopee-clone.hosean.my.id).

# Run on local machine
Be sure to have docker and docker compose on your local machine. [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/).

Copy the `.env.example` file to a `.env` file and change its environment to suit your local needs.

Run the docker compose file and let it run for couple minutes.
```bash
docker compose up -d
```

Now your local app can be access according to your specified .env file.

# Goals
- Basic Next JS implementation (SSR, Client Side, Navigation, API End Point, etc)
- TailwindCSS usage
- Complex React interaction and animation such as Carousel and Flash countdown
- Home page, Login page, Register page and Product page