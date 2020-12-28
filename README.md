# Github Trending APP

This is a sample app mimicking github's trending page.

### Homepage - [https://trifiasco.github.io/trifiasco-github-trending-app/](https://trifiasco.github.io/trifiasco-github-trending-app/)

## Limitations

1. `Star` button functionality isn't implemented. It requires `oAuth` token to perform a `put` action. For now it's not implemented.
2. As this app is not using any authentication method, so the rate limit is very limited. As a result fetching `contributors` may throw a `rate limit exceeded error`. In this case opening the app from an incognito window or a hard refresh after a while would be a temporary solution.
