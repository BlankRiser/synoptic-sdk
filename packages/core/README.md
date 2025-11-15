<p align="center">
  <h1 align="center">Synoptic API SDK</h1>
  <p align="center">
   A fully type-safe TypeScript SDK for integrating and consuming Synoptic Data Services API in modern JavaScript and TypeScript projects.
    <br/>
    by <a href="https://x.com/blank_riser">@blank_riser</a>
  </p>
</p>

> [!NOTE]
> This is an unofficial SDK and currently in early development. Please report any issues or feature requests on the [GitHub Issues Page](https://github.com/BlankRiser/synoptic-sdk/issues).

## Features

- Full TypeScript type safety (Type Inference & Type Guards)
- Coverage for core Synoptic Weather API endpoints and data services
- Typed error handling and API response validation

## Authentication

The Synoptic API requires an API key on every request. You can obtain your API key from your [Synoptic Data Customer](https://customer.synopticdata.com/credentials/) dashboard.

- Pass your API key when instantiating `Synoptic`.
- The SDK automatically handles credential injection on every API call.

## Basic usage

### Simple

```ts
import { Synoptic } from "@devhaven/synoptic-sdk";

const synoptic = new Synoptic({
  token: process.env.SYNOPTIC_TOKEN!,
});
```

### Change base url

```ts
import { Synoptic } from "@devhaven/synoptic-sdk";

const synoptic = new Synoptic({
  baseUrl: "https://api.synopticdata.com/v2"
  token: process.env.SYNOPTIC_TOKEN!,
});
```

### Modify request lifecycle

Synoptic SDK internally uses [ky](https://github.com/sindresorhus/ky) and benefits from it's features. We can utilize `hooks` that allow modifications during the request lifecycle. Hook functions may be async and are run serially.

```ts
import { Synoptic } from "@devhaven/synoptic-sdk";

const synoptic = new Synoptic({
    token: process.env.SYNOPTIC_TOKEN,
    options: {
      hooks: {
        // Modify request right before it is sent.
        beforeRequest: [
          (request, options, { retryCount }) => {
            // Only set default headers on initial request, not on retries
            if (retryCount === 0) {
              request.headers.set("custom-header", "custom-header-value");
            }
          },
        ],
        // Read or modify the response
        afterResponse: [
          (request, options, response) => {
            // You could log a specific endpoint
            if(request.url.includes("/latest")){
              logger.info(response);
            }

            // or create a new response
            return new Response({
              success: false,
              error: "station not found",
              data: response
            }, { status: 200 });

          },
        ],
        // Modify HTTPError before it's thrown
        beforeError: [
            async error => {
                const { response } = error;
                if (response) {
                    const body = await response.json();
                    error.name = 'SynopticError';
                    error.message = `${body.message} (${response.status})`;
                }

                return error;
            },

            // Or show different message based on retry count
            (error, { retryCount }) => {
                if (retryCount === error.options.retry.limit) {
                    error.message = `${error.message} (failed after ${retryCount} retries)`;
                }

                return error;
            }
        ]
        beforeRetry: [
          async ({ request, options, error, retryCount }) => {
            const token = await ky("https://example.com/refresh-token");
            request.headers.set("Authorization", `token ${token}`);
          },
        ],
      },
    },
  });
```

### Fetching data

```ts
import { Synoptic } from "@devhaven/synoptic-sdk";

const synoptic = new Synoptic({
  baseUrl: "https://api.synopticdata.com/v2"
  token: process.env.SYNOPTIC_TOKEN!,
});

const response = await synoptic.latest({
			stid: "wbb",
			vars: "air_temp,wind_speed",
			within: "60",
			complete: "1",
			fields: "stid,name",
});
```

## Links

- [Official Synoptic Data Docs](https://docs.synopticdata.com/services/)
- [Issues & Feature Requests](https://github.com/BlankRiser/synoptic-sdk/issues)
