const kbtns = require('./keyboardButtons')

module.exports= {
  home: [
    [kbtns.home.films, kbtns.home.cinemas],
    [kbtns.home.favourite]
  ],
  film: [
    [kbtns.film.random],
    [kbtns.film.action, kbtns.film.comedy],
    [kbtns.back]
  ]
}