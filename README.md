This workspace demonstrates the problem with async thunks and ordering of mutation requests.

Clone and install repo:

```
git clone https://github.com/jaysoo/async-thunk-example.git async-thunk-example
cd async-thunk-example
yarn install
```

Run dev server:

```
yarn start
```

Then browse to http://localhost:4200 to see the app running.

## Run the example with ordering issue

To run app with the ordering issue, go back to the `e783fdd` revision.

```
git checkout e783fdd
yarn start
```

Then checkout `master` again to see the fix.

```
git checkout master
yarn start
```

The revision that fixes the issue is this one:

https://github.com/jaysoo/async-thunk-example/commit/7d8207b135a51841d066afe0a3428793631fc015
