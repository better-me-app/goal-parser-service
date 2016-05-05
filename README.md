# goal-parser-service

Parses goals from plaintext into a set of goal objects.

## Using the server

Post a plain text set of goals to the service, e.g:

```
Don't smoke
5k jog each week
5 fruit and veg each day
```

The service will reply with a set of goal objects, with a 'best guess' for the frequency:

```json
[
	{	goal: "Don't smoke",
		frequency: "daily"
	},
	{	goal: "5k jog each week",
		frequency: "weekly"
	},
	{	goal: "5 fruit and veg each day",
		frequency: "daily"
	},
]
```

As an example, curl the service like this:


```
curl --data "don't smoke" -H "Content-Type: text/plain" localhost:3000/parse
```

## Running the code

`npm start` runs the code, production ready.
`npm test` runs all tests.
`npm run watch` runs the code, watching for changes.
`npm run debug` runs the code, watching for changes and initiates a debugger.