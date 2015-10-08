# [ Meteor Issue  #5387 ]( https://github.com/meteor/meteor/issues/5387 )

### Meteor imply by context?
▾ packages/  
-- ▸ meteor-lib/ **(3)**  
-- ▸ meteor-umbrella-that-loads-ecmascript/ **(1)**  
-- ▸ meteor-uses-ecmascript-by-implying/ **(2)**


> What happens is that on a package-only architecture I use an `umbrella`
package(1) that `imply`'es `ecmascript`, then I have a package(2) that uses ES6
code **without** declaring that uses `ecmascript`. A third package(3) does use
the _implied_ `ecmascript` from (1) and also the package (2) that uses ES6 code.
The third package (3) is the unique added to `.meteor/packages`.

> It works when running on `development` mode but breaks on `production`. While
running on `development` mode the code doesn't need to minified, and I guess
`ecmascript` is implied by context. On production, the code is being parsed
during minification considering ES6 only if `ecmascript` is a direct dependency
or implied directly by a package, but not when running in a context that
`ecmascript` exists.

Check with:

* Works!
```
$ meteor
```

* Don't work!
```
$ meteor --production
```
