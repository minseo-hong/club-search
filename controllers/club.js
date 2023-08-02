const fs = require("fs");

let clubs = [];

fs.readFile('./data/clubs.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  clubs = JSON.parse(data);
});

exports.getHome = (req, res, next) => {
  res.render('pages/home.ejs', { pageName: 'home', navActive: 'home' });
}

exports.getClubList = (req, res, next) => {
  const department = req.params.department;
  const searchedClubs = clubs.filter((club) => club.department === department);

  res.render('pages/list', {
    clubs: searchedClubs, pageName: `${department}-list`, navActive: department
  });
}

exports.getClub = (req, res) => {
  const clubId = Number(req.params.id);
  const club = clubs.find((club) => club.id === clubId);

  if (club) {
    res.render('pages/detail', { club, pageName: 'detail', 
      navActive: club.department });
  } else {
    res.status(404).send("The club is not found");
  }
}
