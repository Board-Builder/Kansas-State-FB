/* School config — Kansas State. Everything school-specific lives in this file.
   The app itself (app.js) is school-agnostic.
   Staff: 2026 K-State football staff under HC Collin Klein (source: WIBW 12/26/25). */

/* Seed board: 2027 commits + 2027/2028 offer board (247Sports, pulled 8/14/26) */
const _SEED_PROSPECTS = [
  {
    "id": "ks27-01",
    "name": "Joshua Vilmael",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 100,
    "status": "COMMITTED",
    "school": {
      "name": "Fort Bend Travis",
      "address": "Richmond, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/15/26 · 6-2.5 / 186 · 247 rating 90 · Listed: CB",
    "links": {
      "s247": "https://247sports.com/Player/joshua-vilmael-46159055/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "ks27-02",
    "name": "Cooper Ohnmacht",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 101,
    "status": "COMMITTED",
    "school": {
      "name": "Great Bend",
      "address": "Great Bend, KS"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/7/26 · 6-0 / 185 · 247 rating 90 · Listed: S",
    "links": {
      "s247": "https://247sports.com/Player/cooper-ohnmacht-46157307/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "ks27-03",
    "name": "Bra'jon Melancon",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 102,
    "status": "COMMITTED",
    "school": {
      "name": "North Iberville",
      "address": "Rosedale, LA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/13/26 · 6-0 / 170 · 247 rating 89 · Listed: CB",
    "links": {
      "s247": "https://247sports.com/Player/brajon-melancon-46165745/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "ks27-04",
    "name": "Dawayne Jones",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2027,
    "grade": null,
    "order": 103,
    "status": "COMMITTED",
    "school": {
      "name": "Booker T. Washington",
      "address": "Tulsa, OK"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 4/28/26 · 6-3 / 265 · 247 rating 89 · Listed: DL",
    "links": {
      "s247": "https://247sports.com/Player/dawayne-jones-46147331/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "ks27-05",
    "name": "Ben Hynek",
    "jersey": "—",
    "positionGroup": "TE",
    "classYear": 2027,
    "grade": null,
    "order": 104,
    "status": "COMMITTED",
    "school": {
      "name": "Stanley",
      "address": "Stanley, ND"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 4/20/26 · 6-6 / 240 · 247 rating 89 · Listed: TE",
    "links": {},
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "ks27-06",
    "name": "Colton McComb",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 105,
    "status": "COMMITTED",
    "school": {
      "name": "Edmond Memorial",
      "address": "Edmond, OK"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 4/4/26 · 6-2 / 200 · 247 rating 89 · Listed: LB",
    "links": {
      "s247": "https://247sports.com/Player/colton-mccomb-46155703/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "ks27-07",
    "name": "Cameron Kruse",
    "jersey": "—",
    "positionGroup": "QB",
    "classYear": 2027,
    "grade": null,
    "order": 106,
    "status": "COMMITTED",
    "school": {
      "name": "Page",
      "address": "Franklin, TN"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 4/28/26 · 6-2 / 195 · 247 rating 88 · Listed: QB",
    "links": {
      "s247": "https://247sports.com/Player/cameron-kruse-46162966/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "ks27-08",
    "name": "Sedrick Marsh",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 107,
    "status": "COMMITTED",
    "school": {
      "name": "Waxahachie",
      "address": "Waxahachie, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/10/26 · 6-5 / 230 · 247 rating 88 · Listed: Edge",
    "links": {
      "s247": "https://247sports.com/Player/sedrick-marsh-46158719/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "ks27-09",
    "name": "Finn Walker",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2027,
    "grade": null,
    "order": 108,
    "status": "COMMITTED",
    "school": {
      "name": "Conroe Oak Ridge",
      "address": "Conroe, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/24/26 · 6-6 / 245 · 247 rating 88 · Listed: DL",
    "links": {
      "s247": "https://247sports.com/Player/finn-walker-46159175/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "ks27-10",
    "name": "Joseph Graves",
    "jersey": "—",
    "positionGroup": "DT",
    "classYear": 2027,
    "grade": null,
    "order": 109,
    "status": "COMMITTED",
    "school": {
      "name": "Booker T. Washington",
      "address": "Tulsa, OK"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/18/26 · 6-2 / 310 · 247 rating 87 · Listed: DL",
    "links": {
      "s247": "https://247sports.com/Player/joseph-graves-46151690/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "ks27-11",
    "name": "Brooklyn Maxey",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 110,
    "status": "COMMITTED",
    "school": {
      "name": "Carrollwood Day",
      "address": "Tampa, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/17/26 · 6-2 / 215 · 247 rating 87 · Listed: ATH",
    "links": {
      "s247": "https://247sports.com/Player/brooklyn-maxey-46164107/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "ks27-12",
    "name": "Laron Baker Jr.",
    "jersey": "—",
    "positionGroup": "WR_SLOT",
    "classYear": 2027,
    "grade": null,
    "order": 111,
    "status": "COMMITTED",
    "school": {
      "name": "East St. Louis",
      "address": "East St. Louis, IL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/23/26 · 5-10 / 172 · 247 rating 87 · Listed: WR",
    "links": {
      "s247": "https://247sports.com/Player/laron-baker-jr-46145802/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "ks27-13",
    "name": "Ashton Stark",
    "jersey": "—",
    "positionGroup": "WR_SLOT",
    "classYear": 2027,
    "grade": null,
    "order": 112,
    "status": "COMMITTED",
    "school": {
      "name": "Lutcher",
      "address": "Lutcher, LA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/17/26 · 5-9.5 / 158 · 247 rating 87 · Listed: WR",
    "links": {
      "s247": "https://247sports.com/Player/ashton-stark-46164266/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "ks27-14",
    "name": "Correll Buckhalter Jr.",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2027,
    "grade": null,
    "order": 113,
    "status": "COMMITTED",
    "school": {
      "name": "Liberty Christian",
      "address": "Argyle, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/7/26 · 5-10 / 185 · 247 rating 87 · Listed: RB",
    "links": {
      "s247": "https://247sports.com/Player/correll-buckhalter-jr-46155810/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "ks27-15",
    "name": "London Goggans",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 114,
    "status": "COMMITTED",
    "school": {
      "name": "Grayson",
      "address": "Loganville, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/3/26 · 6-0 / 180 · 247 rating 87 · Listed: S",
    "links": {
      "s247": "https://247sports.com/Player/london-goggans-46157831/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "ks27-16",
    "name": "David Rushing",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2027,
    "grade": null,
    "order": 115,
    "status": "COMMITTED",
    "school": {
      "name": "Salpointe Catholic",
      "address": "Tucson, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 4/20/26 · 6-0.5 / 165 · 247 rating 87 · Listed: WR",
    "links": {
      "s247": "https://247sports.com/Player/david-rushing-46159969/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "ks27-17",
    "name": "Logan Davis",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 116,
    "status": "COMMITTED",
    "school": {
      "name": "Fort Bend Ridge Point",
      "address": "Missouri City, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 5/31/26 · 6-0 / 180 · 247 rating 87 · Listed: CB",
    "links": {
      "s247": "https://247sports.com/Player/logan-davis-46167116/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "ks27-18",
    "name": "Brayden Harris",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 117,
    "status": "COMMITTED",
    "school": {
      "name": "Jackson",
      "address": "Jackson, MO"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 5/31/26 · 6-5.5 / 270 · 247 rating 87 · Listed: OT",
    "links": {
      "s247": "https://247sports.com/Player/brayden-harris-46158709/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "ks27-19",
    "name": "Jalen Price",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 118,
    "status": "COMMITTED",
    "school": {
      "name": "Cedar Hill",
      "address": "Cedar Hill, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/24/26 · 6-3 / 250 · 247 rating 86 · Listed: Edge",
    "links": {
      "s247": "https://247sports.com/Player/jalen-price-46162633/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "ks27-20",
    "name": "Jeron Allen II",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 119,
    "status": "COMMITTED",
    "school": {
      "name": "Cedar Hill",
      "address": "Cedar Hill, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/15/26 · 6-3 / 240 · 247 rating 86 · Listed: Edge",
    "links": {
      "s247": "https://247sports.com/Player/jeron-allen-ii-46159086/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "ks27-21",
    "name": "Bryson Dossett",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 120,
    "status": "COMMITTED",
    "school": {
      "name": "Fort Bend Ridge Point",
      "address": "Missouri City, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 5/22/26 · 5-10 / 170 · 247 rating 86 · Listed: S",
    "links": {
      "s247": "https://247sports.com/Player/bryson-dossett-46150553/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "ks27-22",
    "name": "Anitoni Tahi",
    "jersey": "—",
    "positionGroup": "DT",
    "classYear": 2027,
    "grade": null,
    "order": 121,
    "status": "COMMITTED",
    "school": {
      "name": "Basha",
      "address": "Chandler, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 4/29/26 · 6-2 / 312 · 247 rating 86 · Listed: DL",
    "links": {
      "s247": "https://247sports.com/Player/anitoni-tahi-46151438/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "ks27-23",
    "name": "Jack Clayborne",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 122,
    "status": "COMMITTED",
    "school": {
      "name": "Northeastern Oklahoma A&M",
      "address": "Miami, OK"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 4/26/26 · 6-8 / 330 · 247 rating 86 · Listed: OT",
    "links": {
      "s247": "https://247sports.com/Player/jack-clayborne-46161414/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "ks27-24",
    "name": "George Murray III",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 123,
    "status": "COMMITTED",
    "school": {
      "name": "Apalachee",
      "address": "Winder, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/2/26 · 5-10 / 175 · 247 rating 85 · Listed: CB",
    "links": {
      "s247": "https://247sports.com/Player/george-murray-iii-46166998/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "ks27-25",
    "name": "Kelvin Eiwo",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 124,
    "status": "COMMITTED",
    "school": {
      "name": "The Colony",
      "address": "The Colony, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 5/31/26 · 6-3 / 305 · 247 rating 85 · Listed: IOL",
    "links": {
      "s247": "https://247sports.com/Player/kelvin-eiwo-46150508/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "ks27-26",
    "name": "Giacamo SanFilippo",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 125,
    "status": "COMMITTED",
    "school": {
      "name": "Bishop Moore Catholic",
      "address": "Orlando, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 4/19/26 · 6-1 / 224 · 247 rating 85 · Listed: LB",
    "links": {
      "s247": "https://247sports.com/Player/giacamo-sanfilippo-46165251/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "ks27-27",
    "name": "Canaan Smith",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 126,
    "status": "COMMITTED",
    "school": {
      "name": "Prestonwood Christian",
      "address": "Plano, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 3/16/26 · 6-2 / 295 · 247 rating 84 · Listed: IOL",
    "links": {
      "s247": "https://247sports.com/Player/canaan-smith-46165295/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-001",
    "name": "Jake Nawrot",
    "jersey": "—",
    "positionGroup": "QB",
    "classYear": 2027,
    "grade": null,
    "order": 300,
    "status": "ELSEWHERE",
    "school": {
      "name": "John Hersey",
      "address": "Arlington Heights, IL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 200 · 247 rating 94 · Listed: QB · 247 lists commitment: Kentucky",
    "links": {
      "s247": "https://247sports.com/Player/jake-nawrot-46154682/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-002",
    "name": "Will Mencl",
    "jersey": "—",
    "positionGroup": "QB",
    "classYear": 2027,
    "grade": null,
    "order": 301,
    "status": "ELSEWHERE",
    "school": {
      "name": "Chandler",
      "address": "Chandler, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 200 · 247 rating 94 · Listed: QB · 247 lists commitment: Oregon",
    "links": {
      "s247": "https://247sports.com/Player/will-mencl-46156781/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-003",
    "name": "Kavian Bryant",
    "jersey": "—",
    "positionGroup": "QB",
    "classYear": 2027,
    "grade": null,
    "order": 302,
    "status": "ELSEWHERE",
    "school": {
      "name": "Palestine Westwood",
      "address": "Palestine, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2.5 / 190 · 247 rating 93 · Listed: QB · 247 lists commitment: Texas Tech",
    "links": {
      "s247": "https://247sports.com/Player/kavian-bryant-46145096/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-004",
    "name": "Colton Nussmeier",
    "jersey": "—",
    "positionGroup": "QB",
    "classYear": 2027,
    "grade": null,
    "order": 303,
    "status": "ELSEWHERE",
    "school": {
      "name": "Archbishop Rummel",
      "address": "Metairie, LA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3.5 / 195 · 247 rating 90 · Listed: QB · 247 lists commitment: Georgia",
    "links": {
      "s247": "https://247sports.com/Player/colton-nussmeier-46146658/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-005",
    "name": "Braylen Warren",
    "jersey": "—",
    "positionGroup": "QB",
    "classYear": 2027,
    "grade": null,
    "order": 304,
    "status": "ELSEWHERE",
    "school": {
      "name": "Omaha Westside",
      "address": "Omaha, NE"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 205 · 247 rating 90 · Listed: QB · 247 lists commitment: Missouri",
    "links": {
      "s247": "https://247sports.com/Player/braylen-warren-46152790/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-006",
    "name": "Blake Roskopf",
    "jersey": "—",
    "positionGroup": "QB",
    "classYear": 2027,
    "grade": null,
    "order": 305,
    "status": "ELSEWHERE",
    "school": {
      "name": "Desert Edge",
      "address": "Goodyear, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 235 · 247 rating 90 · Listed: QB · 247 lists commitment: Washington",
    "links": {
      "s247": "https://247sports.com/Player/blake-roskopf-46155022/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-007",
    "name": "Carson White",
    "jersey": "—",
    "positionGroup": "QB",
    "classYear": 2027,
    "grade": null,
    "order": 306,
    "status": "ELSEWHERE",
    "school": {
      "name": "Iowa Colony",
      "address": "Iowa Colony, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 207 · 247 rating 89 · Listed: QB · 247 lists commitment: Oklahoma State",
    "links": {
      "s247": "https://247sports.com/Player/carson-white-46143662/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-008",
    "name": "Dane Weber",
    "jersey": "—",
    "positionGroup": "QB",
    "classYear": 2027,
    "grade": null,
    "order": 307,
    "status": "ELSEWHERE",
    "school": {
      "name": "Chaparral",
      "address": "Temecula, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0.5 / 220 · 247 rating 88 · Listed: QB · 247 lists commitment: California",
    "links": {
      "s247": "https://247sports.com/Player/dane-weber-46155270/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-009",
    "name": "Kael Snyder",
    "jersey": "—",
    "positionGroup": "QB",
    "classYear": 2027,
    "grade": null,
    "order": 308,
    "status": "ELSEWHERE",
    "school": {
      "name": "Perry",
      "address": "Gilbert, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2.5 / 200 · 247 rating 87 · Listed: QB · 247 lists commitment: Boise State",
    "links": {
      "s247": "https://247sports.com/Player/kael-snyder-46150670/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-010",
    "name": "DJ Hunter",
    "jersey": "—",
    "positionGroup": "QB",
    "classYear": 2027,
    "grade": null,
    "order": 309,
    "status": "ELSEWHERE",
    "school": {
      "name": "Buford",
      "address": "Buford, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 190 · 247 rating 87 · Listed: QB · 247 lists commitment: James Madison",
    "links": {
      "s247": "https://247sports.com/Player/dj-hunter-46150725/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-011",
    "name": "Brayden Santibanez",
    "jersey": "—",
    "positionGroup": "QB",
    "classYear": 2027,
    "grade": null,
    "order": 310,
    "status": "ELSEWHERE",
    "school": {
      "name": "Collierville",
      "address": "Collierville, TN"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2.5 / 205 · 247 rating 85 · Listed: QB · 247 lists commitment: Iowa",
    "links": {
      "s247": "https://247sports.com/Player/brayden-santibanez-46165172/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-012",
    "name": "Gary Walker",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2027,
    "grade": null,
    "order": 311,
    "status": "ELSEWHERE",
    "school": {
      "name": "Creekside",
      "address": "Fairburn, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 200 · 247 rating 91 · Listed: RB · 247 lists commitment: Clemson",
    "links": {
      "s247": "https://247sports.com/Player/gary-walker-46163000/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-013",
    "name": "CaDarius McMiller",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2027,
    "grade": null,
    "order": 312,
    "status": "ELSEWHERE",
    "school": {
      "name": "Tyler High",
      "address": "Tyler, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 196 · 247 rating 90 · Listed: RB · 247 lists commitment: Oregon",
    "links": {
      "s247": "https://247sports.com/Player/cadarius-mcmiller-46144140/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-014",
    "name": "Daylon Gordon",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2027,
    "grade": null,
    "order": 313,
    "status": "ELSEWHERE",
    "school": {
      "name": "Wylie",
      "address": "Wylie, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-9 / 195 · 247 rating 90 · Listed: RB · 247 lists commitment: Texas State",
    "links": {
      "s247": "https://247sports.com/Player/daylon-gordon-46157348/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-015",
    "name": "Ty Keys",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2027,
    "grade": null,
    "order": 314,
    "status": "ELSEWHERE",
    "school": {
      "name": "Poplarville",
      "address": "Poplarville, MS"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 190 · 247 rating 90 · Listed: RB · 247 lists commitment: Miami",
    "links": {
      "s247": "https://247sports.com/Player/ty-keys-46145046/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-016",
    "name": "Kingston Miles",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2027,
    "grade": null,
    "order": 315,
    "status": "ELSEWHERE",
    "school": {
      "name": "St. Mary's",
      "address": "St. Louis, MO"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 195 · 247 rating 90 · Listed: RB · 247 lists commitment: Missouri",
    "links": {
      "s247": "https://247sports.com/Player/kingston-miles-46157912/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-017",
    "name": "Amarri Irvin",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2027,
    "grade": null,
    "order": 316,
    "status": "ELSEWHERE",
    "school": {
      "name": "IMG Academy",
      "address": "Bradenton, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 220 · 247 rating 89 · Listed: RB · 247 lists commitment: Virginia Tech",
    "links": {
      "s247": "https://247sports.com/Player/amarri-irvin-46142805/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-018",
    "name": "Javian Jones-Priest",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2027,
    "grade": null,
    "order": 317,
    "status": "ELSEWHERE",
    "school": {
      "name": "Arlington Martin",
      "address": "Arlington, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-10 / 194 · 247 rating 89 · Listed: RB · 247 lists commitment: Virginia Tech",
    "links": {
      "s247": "https://247sports.com/Player/javian-jones-priest-46159699/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-019",
    "name": "Aymaud Sykes",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2027,
    "grade": null,
    "order": 318,
    "status": "ELSEWHERE",
    "school": {
      "name": "Grant",
      "address": "Dry Prong, LA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-10 / 175 · 247 rating 88 · Listed: RB · 247 lists commitment: Tulane",
    "links": {
      "s247": "https://247sports.com/Player/aymaud-sykes-46165391/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-020",
    "name": "Noah Roberts",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2027,
    "grade": null,
    "order": 319,
    "status": "ELSEWHERE",
    "school": {
      "name": "Basha",
      "address": "Chandler, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-11 / 200 · 247 rating 88 · Listed: RB · 247 lists commitment: Texas",
    "links": {
      "s247": "https://247sports.com/Player/noah-roberts-46151437/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-021",
    "name": "Jayshon Gibson",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2027,
    "grade": null,
    "order": 320,
    "status": "ELSEWHERE",
    "school": {
      "name": "Richland",
      "address": "North Richland Hills, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-9 / 185 · 247 rating 88 · Listed: RB · 247 lists commitment: UCLA",
    "links": {
      "s247": "https://247sports.com/Player/jayshon-gibson-46150802/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-022",
    "name": "Tylek Lewis",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2027,
    "grade": null,
    "order": 321,
    "status": "ELSEWHERE",
    "school": {
      "name": "Zachary",
      "address": "Zachary, LA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 210 · 247 rating 88 · Listed: RB · 247 lists commitment: Syracuse",
    "links": {
      "s247": "https://247sports.com/Player/tylek-lewis-46145110/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-023",
    "name": "Triston Willis",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2027,
    "grade": null,
    "order": 322,
    "status": "ELSEWHERE",
    "school": {
      "name": "C.E. King",
      "address": "Houston, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-9 / 195 · 247 rating 88 · Listed: RB · 247 lists commitment: Georgia Tech",
    "links": {
      "s247": "https://247sports.com/Player/triston-willis-46153677/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-024",
    "name": "Arwin Jackson",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2027,
    "grade": null,
    "order": 323,
    "status": "ELSEWHERE",
    "school": {
      "name": "Miami Carol City",
      "address": "Opa Locka, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-10 / 170 · 247 rating 87 · Listed: RB · 247 lists commitment: Appalachian State",
    "links": {
      "s247": "https://247sports.com/Player/arwin-jackson-46146895/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-025",
    "name": "TJ Lewis",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2027,
    "grade": null,
    "order": 324,
    "status": "ELSEWHERE",
    "school": {
      "name": "Bolingbrook",
      "address": "Bolingbrook, IL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 215 · 247 rating 87 · Listed: RB · 247 lists commitment: Oklahoma State",
    "links": {
      "s247": "https://247sports.com/Player/tj-lewis-46155479/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-026",
    "name": "Taye Reich",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2027,
    "grade": null,
    "order": 325,
    "status": "ELSEWHERE",
    "school": {
      "name": "Moorhead",
      "address": "Moorhead, MN"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-10 / 200 · 247 rating 87 · Listed: RB · 247 lists commitment: Minnesota",
    "links": {
      "s247": "https://247sports.com/Player/taye-reich-46150424/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-027",
    "name": "Victor Scott",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2027,
    "grade": null,
    "order": 326,
    "status": "ELSEWHERE",
    "school": {
      "name": "Lancaster",
      "address": "Lancaster, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-11 / 195 · 247 rating 87 · Listed: RB · 247 lists commitment: North Texas",
    "links": {
      "s247": "https://247sports.com/Player/victor-scott-46145117/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-028",
    "name": "Jeremiah Stonewall",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2027,
    "grade": null,
    "order": 327,
    "status": "OFFERED",
    "school": {
      "name": "Grayson",
      "address": "Loganville, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 185 · 247 rating 86 · Listed: RB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/jeremiah-stonewall-46153370/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-029",
    "name": "Mikel Stephen",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2027,
    "grade": null,
    "order": 328,
    "status": "ELSEWHERE",
    "school": {
      "name": "Lipscomb Academy",
      "address": "Nashville, TN"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-10 / 185 · 247 rating 86 · Listed: RB · 247 lists commitment: Duke",
    "links": {
      "s247": "https://247sports.com/Player/mikel-stephen-46151588/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-030",
    "name": "Kylonn Haynie",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2027,
    "grade": null,
    "order": 329,
    "status": "OFFERED",
    "school": {
      "name": "Omaha Central",
      "address": "Omaha, NE"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-10 / 200 · 247 rating 86 · Listed: RB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/kylonn-haynie-46148733/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-031",
    "name": "Mason Ball",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2027,
    "grade": null,
    "order": 330,
    "status": "ELSEWHERE",
    "school": {
      "name": "Jacksonville",
      "address": "Jacksonville, AR"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-11.5 / 185 · 247 rating 86 · Listed: RB · 247 lists commitment: Kentucky",
    "links": {
      "s247": "https://247sports.com/Player/mason-ball-46155652/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-032",
    "name": "Jamarin Simmons",
    "jersey": "—",
    "positionGroup": "WR_SLOT",
    "classYear": 2027,
    "grade": null,
    "order": 331,
    "status": "ELSEWHERE",
    "school": {
      "name": "Amos P. Godby",
      "address": "Tallahassee, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-11 / 165 · 247 rating 98 · Listed: WR · 247 lists commitment: Clemson",
    "links": {
      "s247": "https://247sports.com/Player/jamarin-simmons-46150455/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-033",
    "name": "Eric McFarland III",
    "jersey": "—",
    "positionGroup": "WR_SLOT",
    "classYear": 2027,
    "grade": null,
    "order": 332,
    "status": "ELSEWHERE",
    "school": {
      "name": "IMG Academy",
      "address": "Bradenton, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-8 / 177 · 247 rating 94 · Listed: WR · 247 lists commitment: Texas A&M",
    "links": {
      "s247": "https://247sports.com/Player/eric-mcfarland-iii-46148083/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-034",
    "name": "Briceson Thrower Jr.",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2027,
    "grade": null,
    "order": 333,
    "status": "ELSEWHERE",
    "school": {
      "name": "North Forney",
      "address": "Forney, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 185 · 247 rating 91 · Listed: WR · 247 lists commitment: Texas",
    "links": {
      "s247": "https://247sports.com/Player/briceson-thrower-jr-46155048/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-035",
    "name": "Tre Moore",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2027,
    "grade": null,
    "order": 334,
    "status": "ELSEWHERE",
    "school": {
      "name": "Pflugerville Weiss",
      "address": "Pflugerville, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 200 · 247 rating 90 · Listed: WR · 247 lists commitment: Washington",
    "links": {
      "s247": "https://247sports.com/Player/tre-moore-46143523/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-036",
    "name": "Quentin Burrell",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2027,
    "grade": null,
    "order": 335,
    "status": "ELSEWHERE",
    "school": {
      "name": "Mount Carmel",
      "address": "Chicago, IL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 200 · 247 rating 90 · Listed: WR · 247 lists commitment: Michigan",
    "links": {
      "s247": "https://247sports.com/Player/quentin-burrell-46139675/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-037",
    "name": "Julian Caldwell",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2027,
    "grade": null,
    "order": 336,
    "status": "ELSEWHERE",
    "school": {
      "name": "Argyle",
      "address": "Argyle, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 185 · 247 rating 90 · Listed: WR · 247 lists commitment: Texas Tech",
    "links": {
      "s247": "https://247sports.com/Player/julian-caldwell-46151294/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-038",
    "name": "Jabari Watkins",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2027,
    "grade": null,
    "order": 337,
    "status": "ELSEWHERE",
    "school": {
      "name": "Thomas County Central",
      "address": "Thomasville, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 185 · 247 rating 90 · Listed: WR · 247 lists commitment: Arkansas",
    "links": {
      "s247": "https://247sports.com/Player/jabari-watkins-46154730/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-039",
    "name": "Dontay Tyson",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2027,
    "grade": null,
    "order": 338,
    "status": "ELSEWHERE",
    "school": {
      "name": "Peoria",
      "address": "Peoria, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 190 · 247 rating 90 · Listed: WR · 247 lists commitment: Washington",
    "links": {
      "s247": "https://247sports.com/Player/dontay-tyson-46151181/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-040",
    "name": "Trey Haralson",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2027,
    "grade": null,
    "order": 339,
    "status": "ELSEWHERE",
    "school": {
      "name": "Tyler High",
      "address": "Tyler, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 180 · 247 rating 89 · Listed: WR · 247 lists commitment: SMU",
    "links": {
      "s247": "https://247sports.com/Player/trey-haralson-46144141/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-041",
    "name": "Jaiden Kelly-Murray",
    "jersey": "—",
    "positionGroup": "WR_SLOT",
    "classYear": 2027,
    "grade": null,
    "order": 340,
    "status": "ELSEWHERE",
    "school": {
      "name": "Oceanside Collegiate Academy",
      "address": "Mount Pleasant, SC"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-10 / 170 · 247 rating 89 · Listed: WR · 247 lists commitment: Colorado",
    "links": {
      "s247": "https://247sports.com/Player/jaiden-kelly-murray-46151857/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-042",
    "name": "Jordan Christie",
    "jersey": "—",
    "positionGroup": "WR_SLOT",
    "classYear": 2027,
    "grade": null,
    "order": 341,
    "status": "ELSEWHERE",
    "school": {
      "name": "Southwest DeKalb",
      "address": "Decatur, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-11 / 190 · 247 rating 89 · Listed: WR · 247 lists commitment: Liberty",
    "links": {
      "s247": "https://247sports.com/Player/jordan-christie-46151855/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-043",
    "name": "Taurean Rawlins",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2027,
    "grade": null,
    "order": 342,
    "status": "ELSEWHERE",
    "school": {
      "name": "Mount Vernon Presbyterian",
      "address": "Atlanta, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 175 · 247 rating 89 · Listed: WR · 247 lists commitment: Georgia",
    "links": {
      "s247": "https://247sports.com/Player/taurean-rawlins-46164019/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-044",
    "name": "Jeremiah Douglas",
    "jersey": "—",
    "positionGroup": "WR_SLOT",
    "classYear": 2027,
    "grade": null,
    "order": 343,
    "status": "ELSEWHERE",
    "school": {
      "name": "Crandall",
      "address": "Crandall, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-11 / 170 · 247 rating 88 · Listed: WR · 247 lists commitment: Vanderbilt",
    "links": {
      "s247": "https://247sports.com/Player/jeremiah-douglas-46145101/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-045",
    "name": "Jaden Baldwin",
    "jersey": "—",
    "positionGroup": "WR_SLOT",
    "classYear": 2027,
    "grade": null,
    "order": 344,
    "status": "ELSEWHERE",
    "school": {
      "name": "Basha",
      "address": "Chandler, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-11.5 / 180 · 247 rating 88 · Listed: WR · 247 lists commitment: Pittsburgh",
    "links": {
      "s247": "https://247sports.com/Player/jaden-baldwin-46145701/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-046",
    "name": "Jaiden Fields",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2027,
    "grade": null,
    "order": 345,
    "status": "ELSEWHERE",
    "school": {
      "name": "Hutto",
      "address": "Hutto, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 200 · 247 rating 88 · Listed: WR · 247 lists commitment: Oklahoma",
    "links": {
      "s247": "https://247sports.com/Player/jaiden-fields-46156704/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-047",
    "name": "Kobe Haynes",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2027,
    "grade": null,
    "order": 346,
    "status": "ELSEWHERE",
    "school": {
      "name": "Whitney",
      "address": "Whitney, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 205 · 247 rating 88 · Listed: WR · 247 lists commitment: TCU",
    "links": {
      "s247": "https://247sports.com/Player/kobe-haynes-46150053/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-048",
    "name": "Kyron Brown",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2027,
    "grade": null,
    "order": 347,
    "status": "ELSEWHERE",
    "school": {
      "name": "Amarillo Palo Duro",
      "address": "Amarillo, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 185 · 247 rating 88 · Listed: WR · 247 lists commitment: Texas",
    "links": {
      "s247": "https://247sports.com/Player/kyron-brown-46165287/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-049",
    "name": "Brock Burrus",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2027,
    "grade": null,
    "order": 348,
    "status": "ELSEWHERE",
    "school": {
      "name": "Kell",
      "address": "Marietta, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 190 · 247 rating 87 · Listed: WR · 247 lists commitment: West Virginia",
    "links": {
      "s247": "https://247sports.com/Player/brock-burrus-46154520/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-050",
    "name": "Antayvious Ellis",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2027,
    "grade": null,
    "order": 349,
    "status": "ELSEWHERE",
    "school": {
      "name": "Millard South",
      "address": "Omaha, NE"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 175 · 247 rating 87 · Listed: WR · 247 lists commitment: Nebraska",
    "links": {
      "s247": "https://247sports.com/Player/antayvious-ellis-46142374/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-051",
    "name": "Brody Knowles",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2027,
    "grade": null,
    "order": 350,
    "status": "ELSEWHERE",
    "school": {
      "name": "Southlake Carroll",
      "address": "Southlake, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 190 · 247 rating 87 · Listed: WR · 247 lists commitment: Illinois",
    "links": {
      "s247": "https://247sports.com/Player/brody-knowles-46153338/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-052",
    "name": "Trey Smith",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2027,
    "grade": null,
    "order": 351,
    "status": "ELSEWHERE",
    "school": {
      "name": "Williams Field",
      "address": "Gilbert, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 165 · 247 rating 87 · Listed: WR · 247 lists commitment: Arizona",
    "links": {
      "s247": "https://247sports.com/Player/trey-smith-46155030/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-053",
    "name": "Donovan McNabb Jr.",
    "jersey": "—",
    "positionGroup": "WR_SLOT",
    "classYear": 2027,
    "grade": null,
    "order": 352,
    "status": "ELSEWHERE",
    "school": {
      "name": "Brophy College Preparatory",
      "address": "Phoenix, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-10 / 160 · 247 rating 87 · Listed: WR · 247 lists commitment: UNLV",
    "links": {
      "s247": "https://247sports.com/Player/donovan-mcnabb-jr-46150805/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-054",
    "name": "Austin Coles",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2027,
    "grade": null,
    "order": 353,
    "status": "ELSEWHERE",
    "school": {
      "name": "St. Thomas Aquinas",
      "address": "Fort Lauderdale, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 195 · 247 rating 87 · Listed: WR · 247 lists commitment: Kentucky",
    "links": {
      "s247": "https://247sports.com/Player/austin-coles-46154221/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-055",
    "name": "Jackson Coleman",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2027,
    "grade": null,
    "order": 354,
    "status": "ELSEWHERE",
    "school": {
      "name": "Valor Christian",
      "address": "Littleton, CO"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 185 · 247 rating 87 · Listed: WR · 247 lists commitment: Notre Dame",
    "links": {
      "s247": "https://247sports.com/Player/jackson-coleman-46156590/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-056",
    "name": "Maliek Brown",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2027,
    "grade": null,
    "order": 355,
    "status": "ELSEWHERE",
    "school": {
      "name": "Tyler Chapel Hill",
      "address": "Tyler, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 185 · 247 rating 87 · Listed: WR · 247 lists commitment: Kansas",
    "links": {
      "s247": "https://247sports.com/Player/maliek-brown-46158921/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-057",
    "name": "Braylon Deal",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2027,
    "grade": null,
    "order": 356,
    "status": "ELSEWHERE",
    "school": {
      "name": "Garland Naaman Forest",
      "address": "Garland, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 185 · 247 rating 87 · Listed: WR · 247 lists commitment: TCU",
    "links": {
      "s247": "https://247sports.com/Player/braylon-deal-46161629/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-058",
    "name": "Roscoe Hayes",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2027,
    "grade": null,
    "order": 357,
    "status": "ELSEWHERE",
    "school": {
      "name": "Westlake",
      "address": "Atlanta, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 170 · 247 rating 86 · Listed: WR · 247 lists commitment: West Virginia",
    "links": {
      "s247": "https://247sports.com/Player/roscoe-hayes-46147294/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-059",
    "name": "Zy Tassin",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2027,
    "grade": null,
    "order": 358,
    "status": "ELSEWHERE",
    "school": {
      "name": "Crestview",
      "address": "Crestview, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 190 · 247 rating 86 · Listed: WR · 247 lists commitment: Wake Forest",
    "links": {
      "s247": "https://247sports.com/Player/zy-tassin-46150338/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-060",
    "name": "Jordan Donahoo",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2027,
    "grade": null,
    "order": 359,
    "status": "ELSEWHERE",
    "school": {
      "name": "Oviedo",
      "address": "Oviedo, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 185 · 247 rating 86 · Listed: WR · 247 lists commitment: Ohio State",
    "links": {
      "s247": "https://247sports.com/Player/jordan-donahoo-46164180/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-061",
    "name": "Trysten Shaw",
    "jersey": "—",
    "positionGroup": "WR_SLOT",
    "classYear": 2027,
    "grade": null,
    "order": 360,
    "status": "ELSEWHERE",
    "school": {
      "name": "Mansfield Timberview",
      "address": "Arlington, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-10 / 160 · 247 rating 86 · Listed: WR · 247 lists commitment: Tulsa",
    "links": {
      "s247": "https://247sports.com/Player/trysten-shaw-46155778/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-062",
    "name": "Jordan Walley",
    "jersey": "—",
    "positionGroup": "WR_SLOT",
    "classYear": 2027,
    "grade": null,
    "order": 361,
    "status": "ELSEWHERE",
    "school": {
      "name": "D'Iberville",
      "address": "D'Iberville, MS"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-9 / 160 · 247 rating 86 · Listed: WR · 247 lists commitment: Minnesota",
    "links": {
      "s247": "https://247sports.com/Player/jordan-walley-46164108/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-063",
    "name": "Derrick Martin",
    "jersey": "—",
    "positionGroup": "WR_SLOT",
    "classYear": 2027,
    "grade": null,
    "order": 362,
    "status": "ELSEWHERE",
    "school": {
      "name": "Lewisville",
      "address": "Lewisville, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-9 / 170 · unrated · Listed: WR · 247 lists commitment: Missouri State",
    "links": {
      "s247": "https://247sports.com/Player/derrick-martin-46153280/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-064",
    "name": "Khalil Ferguson",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2027,
    "grade": null,
    "order": 363,
    "status": "OFFERED",
    "school": {
      "name": "Loudoun Sports Academy",
      "address": "Leesburg, VA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 190 · unrated · Listed: WR · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/khalil-ferguson-46166629/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-065",
    "name": "Jacob Lockett",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2027,
    "grade": null,
    "order": 364,
    "status": "ELSEWHERE",
    "school": {
      "name": "Blue Valley",
      "address": "Stilwell, KS"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 170 · unrated · Listed: WR · 247 lists commitment: Old Dominion",
    "links": {
      "s247": "https://247sports.com/Player/jacob-lockett-46147871/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-066",
    "name": "Gavin Brown",
    "jersey": "—",
    "positionGroup": "WR_SLOT",
    "classYear": 2027,
    "grade": null,
    "order": 365,
    "status": "OFFERED",
    "school": {
      "name": "Queen Creek",
      "address": "Queen Creek, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-10 / 150 · unrated · Listed: WR · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/gavin-brown-46151849/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-067",
    "name": "Kaeden Penny",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 366,
    "status": "ELSEWHERE",
    "school": {
      "name": "Bixby",
      "address": "Bixby, OK"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 280 · 247 rating 98 · Listed: OT · 247 lists commitment: Oklahoma",
    "links": {
      "s247": "https://247sports.com/Player/kaeden-penny-46151261/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-068",
    "name": "Kennedy Brown",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 367,
    "status": "ELSEWHERE",
    "school": {
      "name": "Kingwood",
      "address": "Kingwood, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 285 · 247 rating 94 · Listed: OT · 247 lists commitment: Texas A&M",
    "links": {
      "s247": "https://247sports.com/Player/kennedy-brown-46152521/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-069",
    "name": "Jake Hildebrand",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 368,
    "status": "ELSEWHERE",
    "school": {
      "name": "Basha",
      "address": "Chandler, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5.5 / 311 · 247 rating 93 · Listed: OT · 247 lists commitment: Arizona State",
    "links": {
      "s247": "https://247sports.com/Player/jake-hildebrand-46150822/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-070",
    "name": "Cooper Hackett",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 369,
    "status": "ELSEWHERE",
    "school": {
      "name": "Fort Gibson",
      "address": "Fort Gibson, OK"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-6.5 / 250 · 247 rating 92 · Listed: OT · 247 lists commitment: Oklahoma",
    "links": {
      "s247": "https://247sports.com/Player/cooper-hackett-46156728/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-071",
    "name": "Niko Kampas",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 370,
    "status": "ELSEWHERE",
    "school": {
      "name": "NFL Academy",
      "address": "London, EN"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-7.5 / 294 · 247 rating 90 · Listed: OT · 247 lists commitment: Tennessee",
    "links": {
      "s247": "https://247sports.com/Player/niko-kampas-46159217/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-072",
    "name": "Jackson Roper",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 371,
    "status": "ELSEWHERE",
    "school": {
      "name": "Cherry Creek",
      "address": "Englewood, CO"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 305 · 247 rating 90 · Listed: OT · 247 lists commitment: UCLA",
    "links": {
      "s247": "https://247sports.com/Player/jackson-roper-46153223/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-073",
    "name": "Timi Aliu",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 372,
    "status": "ELSEWHERE",
    "school": {
      "name": "Locust Grove",
      "address": "Locust Grove, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 295 · 247 rating 90 · Listed: OT · 247 lists commitment: Nebraska",
    "links": {
      "s247": "https://247sports.com/Player/timi-aliu-46161065/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-074",
    "name": "Mason Halliman",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 373,
    "status": "ELSEWHERE",
    "school": {
      "name": "Lincoln-Way East",
      "address": "Frankfort, IL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3.5 / 275 · 247 rating 89 · Listed: OT · 247 lists commitment: Illinois",
    "links": {
      "s247": "https://247sports.com/Player/mason-halliman-46155221/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-075",
    "name": "Mason Joshua",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 374,
    "status": "ELSEWHERE",
    "school": {
      "name": "Forney",
      "address": "Forney, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 268 · 247 rating 89 · Listed: OT · 247 lists commitment: Arizona",
    "links": {
      "s247": "https://247sports.com/Player/mason-joshua-46161064/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-076",
    "name": "Benjamin Lowther",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 375,
    "status": "ELSEWHERE",
    "school": {
      "name": "Peoria Centennial",
      "address": "Peoria, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-7 / 335 · 247 rating 88 · Listed: OT · 247 lists commitment: Stanford",
    "links": {
      "s247": "https://247sports.com/Player/benjamin-lowther-46149593/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-077",
    "name": "Tye Kennedy",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 376,
    "status": "ELSEWHERE",
    "school": {
      "name": "Mountain View",
      "address": "Mesa, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 270 · 247 rating 88 · Listed: OT · 247 lists commitment: Washington",
    "links": {
      "s247": "https://247sports.com/Player/tye-kennedy-46162261/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-078",
    "name": "Matt Erickson",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 377,
    "status": "ELSEWHERE",
    "school": {
      "name": "Millard North",
      "address": "Omaha, NE"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-8 / 280 · 247 rating 88 · Listed: OT · 247 lists commitment: Nebraska",
    "links": {
      "s247": "https://247sports.com/Player/matt-erickson-46150898/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-079",
    "name": "Reed Gerken",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 378,
    "status": "ELSEWHERE",
    "school": {
      "name": "Perrysburg",
      "address": "Perrysburg, OH"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 305 · 247 rating 88 · Listed: OT · 247 lists commitment: Kentucky",
    "links": {
      "s247": "https://247sports.com/Player/reed-gerken-46148203/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-080",
    "name": "Hudson Ingalsbe",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 379,
    "status": "ELSEWHERE",
    "school": {
      "name": "White Plains",
      "address": "Anniston, AL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-6 / 277 · 247 rating 88 · Listed: OT · 247 lists commitment: North Carolina",
    "links": {
      "s247": "https://247sports.com/Player/hudson-ingalsbe-46165472/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-081",
    "name": "Josiah Wallace",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 380,
    "status": "ELSEWHERE",
    "school": {
      "name": "Glenbard West",
      "address": "Glen Ellyn, IL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-8 / 300 · 247 rating 88 · Listed: OT · 247 lists commitment: Northwestern",
    "links": {
      "s247": "https://247sports.com/Player/josiah-wallace-46158394/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-082",
    "name": "Corey Laga",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 381,
    "status": "ELSEWHERE",
    "school": {
      "name": "Lemont",
      "address": "Lemont, IL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 250 · 247 rating 88 · Listed: OT · 247 lists commitment: Vanderbilt",
    "links": {
      "s247": "https://247sports.com/Player/corey-laga-46162587/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-083",
    "name": "Koen Hinzman",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 382,
    "status": "ELSEWHERE",
    "school": {
      "name": "Hudson Area",
      "address": "Hudson, MI"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-7 / 285 · 247 rating 87 · Listed: OT · 247 lists commitment: Iowa State",
    "links": {
      "s247": "https://247sports.com/Player/koen-hinzman-46164004/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-084",
    "name": "RJ Clem",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 383,
    "status": "ELSEWHERE",
    "school": {
      "name": "Logansport",
      "address": "Logansport, IN"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-6 / 265 · 247 rating 87 · Listed: OT · 247 lists commitment: Wake Forest",
    "links": {
      "s247": "https://247sports.com/Player/rj-clem-46159574/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-085",
    "name": "Teagan Parizek",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 384,
    "status": "ELSEWHERE",
    "school": {
      "name": "Hendersonville",
      "address": "Hendersonville, TN"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-6 / 295 · 247 rating 87 · Listed: OT · 247 lists commitment: Arkansas",
    "links": {
      "s247": "https://247sports.com/Player/teagan-parizek-46167345/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-086",
    "name": "Tyson Ross",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 385,
    "status": "ELSEWHERE",
    "school": {
      "name": "Andover",
      "address": "Andover, KS"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3.5 / 285 · 247 rating 87 · Listed: OT · 247 lists commitment: Oklahoma",
    "links": {
      "s247": "https://247sports.com/Player/tyson-ross-46161904/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-087",
    "name": "Caleb Siler",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 386,
    "status": "ELSEWHERE",
    "school": {
      "name": "Gunter",
      "address": "Gunter, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-8 / 290 · 247 rating 87 · Listed: OT · 247 lists commitment: Northwestern",
    "links": {
      "s247": "https://247sports.com/Player/caleb-siler-46163939/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-088",
    "name": "Joseph Hamer",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 387,
    "status": "ELSEWHERE",
    "school": {
      "name": "Lakeville South",
      "address": "Lakeville, MN"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-6 / 295 · 247 rating 86 · Listed: OT · 247 lists commitment: Minnesota",
    "links": {
      "s247": "https://247sports.com/Player/joseph-hamer-46158419/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-089",
    "name": "Jaylen Hill",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 388,
    "status": "ELSEWHERE",
    "school": {
      "name": "Lanett",
      "address": "Lanett, AL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 295 · 247 rating 86 · Listed: OT · 247 lists commitment: Missouri",
    "links": {
      "s247": "https://247sports.com/Player/jaylen-hill-46162004/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-090",
    "name": "Ty Greene",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 389,
    "status": "ELSEWHERE",
    "school": {
      "name": "Houston Stratford",
      "address": "Houston, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-6 / 290 · 247 rating 86 · Listed: OT · 247 lists commitment: TCU",
    "links": {
      "s247": "https://247sports.com/Player/ty-greene-46164276/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-091",
    "name": "Gavin Ericson-Staton",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 390,
    "status": "ELSEWHERE",
    "school": {
      "name": "Montini Catholic",
      "address": "Lombard, IL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 270 · 247 rating 86 · Listed: OT · 247 lists commitment: Illinois",
    "links": {
      "s247": "https://247sports.com/Player/gavin-ericson-staton-46159091/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-092",
    "name": "Sonny Mullen",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 391,
    "status": "ELSEWHERE",
    "school": {
      "name": "Troy",
      "address": "Troy, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-6 / 280 · 247 rating 86 · Listed: OT · 247 lists commitment: Oklahoma State",
    "links": {
      "s247": "https://247sports.com/Player/sonny-mullen-46166839/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-093",
    "name": "Brendan Meaney",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 392,
    "status": "ELSEWHERE",
    "school": {
      "name": "Janesville",
      "address": "Janesville, IA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-6 / 260 · 247 rating 85 · Listed: OT · 247 lists commitment: Wake Forest",
    "links": {
      "s247": "https://247sports.com/Player/brendan-meaney-46162080/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-094",
    "name": "Zyion Wesley",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 393,
    "status": "ELSEWHERE",
    "school": {
      "name": "Edna Karr",
      "address": "New Orleans, LA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 275 · 247 rating 85 · Listed: OT · 247 lists commitment: Mississippi State",
    "links": {
      "s247": "https://247sports.com/Player/zyion-wesley-46156279/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-095",
    "name": "Jonathan Toney",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 394,
    "status": "ELSEWHERE",
    "school": {
      "name": "West Laurens",
      "address": "Dublin, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-6 / 268 · 247 rating 85 · Listed: OT · 247 lists commitment: Memphis",
    "links": {
      "s247": "https://247sports.com/Player/jonathan-toney-46159660/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-096",
    "name": "Henry Frazier",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 395,
    "status": "ELSEWHERE",
    "school": {
      "name": "Rogers",
      "address": "Rogers, AR"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 290 · 247 rating 85 · Listed: OT · 247 lists commitment: Arkansas",
    "links": {
      "s247": "https://247sports.com/Player/henry-frazier-46165568/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-097",
    "name": "Nick Vecrumba",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 396,
    "status": "ELSEWHERE",
    "school": {
      "name": "Brownsburg",
      "address": "Brownsburg, IN"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 285 · 247 rating 85 · Listed: OT · 247 lists commitment: Kansas",
    "links": {
      "s247": "https://247sports.com/Player/nick-vecrumba-46155677/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-098",
    "name": "Avery Timms",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 397,
    "status": "ELSEWHERE",
    "school": {
      "name": "Killeen",
      "address": "Killeen, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 290 · 247 rating 82 · Listed: OT · 247 lists commitment: North Texas",
    "links": {
      "s247": "https://247sports.com/Player/avery-timms-46153299/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-099",
    "name": "Brandon Hebert",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 398,
    "status": "ELSEWHERE",
    "school": {
      "name": "North Shore",
      "address": "Houston, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-6 / 282 · unrated · Listed: OT · 247 lists commitment: Princeton",
    "links": {
      "s247": "https://247sports.com/Player/brandon-hebert-46164605/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-100",
    "name": "Peyton Miller",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 399,
    "status": "ELSEWHERE",
    "school": {
      "name": "Anna",
      "address": "Anna, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 290 · 247 rating 91 · Listed: IOL · 247 lists commitment: Florida",
    "links": {
      "s247": "https://247sports.com/Player/peyton-miller-46144299/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-101",
    "name": "Kyler Kuhn",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 400,
    "status": "ELSEWHERE",
    "school": {
      "name": "St. Pius X",
      "address": "Kansas City, MO"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 280 · 247 rating 90 · Listed: IOL · 247 lists commitment: Missouri",
    "links": {
      "s247": "https://247sports.com/Player/kyler-kuhn-46155294/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-102",
    "name": "Gus Corsair",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 401,
    "status": "ELSEWHERE",
    "school": {
      "name": "Hays",
      "address": "Hays, KS"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2.5 / 285 · 247 rating 90 · Listed: IOL · 247 lists commitment: Oregon",
    "links": {
      "s247": "https://247sports.com/Player/gus-corsair-46150698/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-103",
    "name": "Will Slagle",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 402,
    "status": "ELSEWHERE",
    "school": {
      "name": "Grinnell",
      "address": "Grinnell, IA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 280 · 247 rating 89 · Listed: IOL · 247 lists commitment: Iowa State",
    "links": {
      "s247": "https://247sports.com/Player/will-slagle-46151966/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-104",
    "name": "Keyon Hemphill-Woods",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 403,
    "status": "ELSEWHERE",
    "school": {
      "name": "Columbus",
      "address": "Columbus, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 275 · 247 rating 89 · Listed: IOL · 247 lists commitment: Texas",
    "links": {
      "s247": "https://247sports.com/Player/keyon-hemphill-woods-46154227/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-105",
    "name": "DaJohn Yarborough",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 404,
    "status": "ELSEWHERE",
    "school": {
      "name": "Basha",
      "address": "Chandler, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 340 · 247 rating 89 · Listed: IOL · 247 lists commitment: California",
    "links": {
      "s247": "https://247sports.com/Player/dajohn-yarborough-46155167/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-106",
    "name": "Jaiden Thompson",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 405,
    "status": "ELSEWHERE",
    "school": {
      "name": "Rockmart",
      "address": "Rockmart, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 290 · 247 rating 88 · Listed: IOL · 247 lists commitment: Georgia Tech",
    "links": {
      "s247": "https://247sports.com/Player/jaiden-thompson-46149614/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-107",
    "name": "Lincoln Mageo",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 406,
    "status": "ELSEWHERE",
    "school": {
      "name": "Oceanside",
      "address": "Oceanside, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 280 · 247 rating 88 · Listed: IOL · 247 lists commitment: Michigan",
    "links": {
      "s247": "https://247sports.com/Player/lincoln-mageo-46147045/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-108",
    "name": "Barrett Kitrell",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 407,
    "status": "ELSEWHERE",
    "school": {
      "name": "Ashland-Greenwood",
      "address": "Ashland, NE"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 270 · 247 rating 88 · Listed: IOL · 247 lists commitment: Nebraska",
    "links": {
      "s247": "https://247sports.com/Player/barrett-kitrell-46161834/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-109",
    "name": "Dylan Mota",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 408,
    "status": "ELSEWHERE",
    "school": {
      "name": "St. Patrick",
      "address": "Chicago, IL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-7 / 270 · 247 rating 88 · Listed: IOL · 247 lists commitment: Minnesota",
    "links": {
      "s247": "https://247sports.com/Player/dylan-mota-46164183/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-110",
    "name": "Shavezz Dixon",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 409,
    "status": "ELSEWHERE",
    "school": {
      "name": "Lee County",
      "address": "Leesburg, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 325 · 247 rating 87 · Listed: IOL · 247 lists commitment: North Carolina",
    "links": {
      "s247": "https://247sports.com/Player/shavezz-dixon-46154743/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-111",
    "name": "Bryson Hurt",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 410,
    "status": "ELSEWHERE",
    "school": {
      "name": "Gainesville",
      "address": "Gainesville, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 300 · 247 rating 87 · Listed: IOL · 247 lists commitment: NC State",
    "links": {
      "s247": "https://247sports.com/Player/bryson-hurt-46152642/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-112",
    "name": "Aidan Ray",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 411,
    "status": "ELSEWHERE",
    "school": {
      "name": "Plano West",
      "address": "Plano, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5.5 / 300 · 247 rating 87 · Listed: IOL · 247 lists commitment: UCLA",
    "links": {
      "s247": "https://247sports.com/Player/aidan-ray-46167108/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-113",
    "name": "Stephan Hicks Jr.",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 412,
    "status": "ELSEWHERE",
    "school": {
      "name": "Cibolo Steele",
      "address": "Cibolo, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 295 · 247 rating 87 · Listed: IOL · 247 lists commitment: Duke",
    "links": {
      "s247": "https://247sports.com/Player/stephan-hicks-jr-46166032/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-114",
    "name": "Reis Russell",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 413,
    "status": "ELSEWHERE",
    "school": {
      "name": "Valor Christian",
      "address": "Littleton, CO"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3.5 / 290 · 247 rating 87 · Listed: IOL · 247 lists commitment: Washington",
    "links": {
      "s247": "https://247sports.com/Player/reis-russell-46145499/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-115",
    "name": "Tristan Dare",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 414,
    "status": "ELSEWHERE",
    "school": {
      "name": "Southlake Carroll",
      "address": "Southlake, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3.5 / 290 · 247 rating 87 · Listed: IOL · 247 lists commitment: Missouri",
    "links": {
      "s247": "https://247sports.com/Player/tristan-dare-46146325/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-116",
    "name": "Bryce Vigness",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 415,
    "status": "ELSEWHERE",
    "school": {
      "name": "Papillion-La Vista",
      "address": "Papillion, NE"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 285 · 247 rating 87 · Listed: IOL · 247 lists commitment: North Dakota State",
    "links": {
      "s247": "https://247sports.com/Player/bryce-vigness-46159815/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-117",
    "name": "Nico Ramos",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 416,
    "status": "ELSEWHERE",
    "school": {
      "name": "American Heritage",
      "address": "Plantation, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5.5 / 320 · 247 rating 86 · Listed: IOL · 247 lists commitment: Syracuse",
    "links": {
      "s247": "https://247sports.com/Player/nico-ramos-46163809/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-118",
    "name": "Luke Injaychock",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 417,
    "status": "ELSEWHERE",
    "school": {
      "name": "Nazareth Academy",
      "address": "La Grange Park, IL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 285 · 247 rating 86 · Listed: IOL · 247 lists commitment: Missouri",
    "links": {
      "s247": "https://247sports.com/Player/luke-injaychock-46154262/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-119",
    "name": "Jayden Mack",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 418,
    "status": "OFFERED",
    "school": {
      "name": "Hutto",
      "address": "Hutto, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 340 · 247 rating 86 · Listed: IOL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/jayden-mack-46149670/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-120",
    "name": "Jackson Cook",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 419,
    "status": "ELSEWHERE",
    "school": {
      "name": "Austin Westlake",
      "address": "Austin, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2.5 / 290 · 247 rating 86 · Listed: IOL · 247 lists commitment: Texas",
    "links": {
      "s247": "https://247sports.com/Player/jackson-cook-46154645/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-121",
    "name": "Will Endicott",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 420,
    "status": "ELSEWHERE",
    "school": {
      "name": "Prosper",
      "address": "Prosper, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 275 · 247 rating 86 · Listed: IOL · 247 lists commitment: South Carolina",
    "links": {
      "s247": "https://247sports.com/Player/will-endicott-46160366/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-122",
    "name": "Jordan Carraway",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 421,
    "status": "OFFERED",
    "school": {
      "name": "Forney",
      "address": "Forney, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 320 · 247 rating 84 · Listed: IOL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/jordan-carraway-46145097/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-123",
    "name": "Abdus Kone",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 422,
    "status": "ELSEWHERE",
    "school": {
      "name": "North Shore",
      "address": "Houston, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 315 · 247 rating 84 · Listed: IOL · 247 lists commitment: Maryland",
    "links": {
      "s247": "https://247sports.com/Player/abdus-kone-46159210/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-124",
    "name": "Aiden Williams",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 423,
    "status": "ELSEWHERE",
    "school": {
      "name": "Duncanville",
      "address": "Duncanville, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3.5 / 290 · 247 rating 83 · Listed: IOL · 247 lists commitment: Texas State",
    "links": {
      "s247": "https://247sports.com/Player/aiden-williams-46145123/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-125",
    "name": "Joshua Shaw Jr.",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 424,
    "status": "ELSEWHERE",
    "school": {
      "name": "Immaculate Conception",
      "address": "Elmhurst, IL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 300 · unrated · Listed: IOL · 247 lists commitment: Northern Illinois",
    "links": {
      "s247": "https://247sports.com/Player/joshua-shaw-jr-46165358/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-126",
    "name": "Wilder Brasher",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 425,
    "status": "ELSEWHERE",
    "school": {
      "name": "Rabun Gap-Nacoochee",
      "address": "Rabun Gap, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 280 · unrated · Listed: IOL · 247 lists commitment: UConn",
    "links": {
      "s247": "https://247sports.com/Player/wilder-brasher-46146935/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-127",
    "name": "David Folorunsho",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2027,
    "grade": null,
    "order": 426,
    "status": "ELSEWHERE",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 280 · 247 rating 94 · Listed: DL · 247 lists commitment: Notre Dame",
    "links": {
      "s247": "https://247sports.com/Player/david-folorunsho-46158874/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-128",
    "name": "Zane Rowe",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2027,
    "grade": null,
    "order": 427,
    "status": "ELSEWHERE",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4.5 / 265 · 247 rating 92 · Listed: DL · 247 lists commitment: Oregon",
    "links": {
      "s247": "https://247sports.com/Player/zane-rowe-46139730/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-129",
    "name": "Alifeleti Tuihalamaka",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2027,
    "grade": null,
    "order": 428,
    "status": "ELSEWHERE",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 260 · 247 rating 91 · Listed: DL · 247 lists commitment: USC",
    "links": {
      "s247": "https://247sports.com/Player/alifeleti-tuihalamaka-46149194/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-130",
    "name": "Sam LeJeune",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2027,
    "grade": null,
    "order": 429,
    "status": "ELSEWHERE",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 280 · 247 rating 91 · Listed: DL · 247 lists commitment: Florida State",
    "links": {
      "s247": "https://247sports.com/Player/sam-lejeune-46150692/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-131",
    "name": "Luke Starcevic",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2027,
    "grade": null,
    "order": 430,
    "status": "ELSEWHERE",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 250 · 247 rating 91 · Listed: DL · 247 lists commitment: Clemson",
    "links": {
      "s247": "https://247sports.com/Player/luke-starcevic-46149472/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-132",
    "name": "Brayden Parks",
    "jersey": "—",
    "positionGroup": "DT",
    "classYear": 2027,
    "grade": null,
    "order": 431,
    "status": "ELSEWHERE",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 305 · 247 rating 91 · Listed: DL · 247 lists commitment: Notre Dame",
    "links": {
      "s247": "https://247sports.com/Player/brayden-parks-46146752/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-133",
    "name": "John Archer",
    "jersey": "—",
    "positionGroup": "DT",
    "classYear": 2027,
    "grade": null,
    "order": 432,
    "status": "ELSEWHERE",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 315 · 247 rating 91 · Listed: DL · 247 lists commitment: South Carolina",
    "links": {
      "s247": "https://247sports.com/Player/john-archer-46146916/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-134",
    "name": "Ezekiel Ayangbile",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2027,
    "grade": null,
    "order": 433,
    "status": "ELSEWHERE",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 265 · 247 rating 90 · Listed: DL · 247 lists commitment: Miami",
    "links": {
      "s247": "https://247sports.com/Player/ezekiel-ayangbile-46146266/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-135",
    "name": "Santana Harvey",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2027,
    "grade": null,
    "order": 434,
    "status": "ELSEWHERE",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3.5 / 230 · 247 rating 90 · Listed: DL · 247 lists commitment: Clemson",
    "links": {
      "s247": "https://247sports.com/Player/santana-harvey-46155183/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-136",
    "name": "David Hill",
    "jersey": "—",
    "positionGroup": "DT",
    "classYear": 2027,
    "grade": null,
    "order": 435,
    "status": "ELSEWHERE",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 300 · 247 rating 90 · Listed: DL · 247 lists commitment: Wisconsin",
    "links": {
      "s247": "https://247sports.com/Player/david-hill-46154801/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-137",
    "name": "K'Adrian Redmond",
    "jersey": "—",
    "positionGroup": "DT",
    "classYear": 2027,
    "grade": null,
    "order": 436,
    "status": "ELSEWHERE",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 305 · 247 rating 90 · Listed: DL · 247 lists commitment: Texas Tech",
    "links": {
      "s247": "https://247sports.com/Player/kadrian-redmond-46150263/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-138",
    "name": "Eli Diane",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2027,
    "grade": null,
    "order": 437,
    "status": "ELSEWHERE",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 275 · 247 rating 90 · Listed: DL · 247 lists commitment: Minnesota",
    "links": {
      "s247": "https://247sports.com/Player/eli-diane-46155226/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-139",
    "name": "Nehemiah Ombati",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2027,
    "grade": null,
    "order": 438,
    "status": "ELSEWHERE",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 275 · 247 rating 89 · Listed: DL · 247 lists commitment: Nebraska",
    "links": {
      "s247": "https://247sports.com/Player/nehemiah-ombati-46159743/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-140",
    "name": "Antwan McKoy",
    "jersey": "—",
    "positionGroup": "DT",
    "classYear": 2027,
    "grade": null,
    "order": 439,
    "status": "ELSEWHERE",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 295 · 247 rating 89 · Listed: DL · 247 lists commitment: Georgia",
    "links": {
      "s247": "https://247sports.com/Player/antwan-mckoy-46157504/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-141",
    "name": "Jaderian Jones",
    "jersey": "—",
    "positionGroup": "DT",
    "classYear": 2027,
    "grade": null,
    "order": 440,
    "status": "ELSEWHERE",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 300 · 247 rating 89 · Listed: DL · 247 lists commitment: California",
    "links": {
      "s247": "https://247sports.com/Player/jaderian-jones-46149545/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-142",
    "name": "Dami Sowunmi",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2027,
    "grade": null,
    "order": 441,
    "status": "ELSEWHERE",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 260 · 247 rating 89 · Listed: DL · 247 lists commitment: Missouri",
    "links": {
      "s247": "https://247sports.com/Player/dami-sowunmi-46158117/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-143",
    "name": "Jason Johnson",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2027,
    "grade": null,
    "order": 442,
    "status": "ELSEWHERE",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 280 · 247 rating 89 · Listed: DL · 247 lists commitment: Texas",
    "links": {
      "s247": "https://247sports.com/Player/jason-johnson-46162588/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-144",
    "name": "De'Voun Kendrick",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2027,
    "grade": null,
    "order": 443,
    "status": "ELSEWHERE",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 275 · 247 rating 88 · Listed: DL · 247 lists commitment: Florida",
    "links": {
      "s247": "https://247sports.com/Player/devoun-kendrick-46158317/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-145",
    "name": "Maleek Lee",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2027,
    "grade": null,
    "order": 444,
    "status": "ELSEWHERE",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 270 · 247 rating 88 · Listed: DL · 247 lists commitment: Georgia Tech",
    "links": {
      "s247": "https://247sports.com/Player/maleek-lee-46159084/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-146",
    "name": "Keilan Neal",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2027,
    "grade": null,
    "order": 445,
    "status": "OFFERED",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 280 · 247 rating 88 · Listed: DL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/keilan-neal-46153392/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-147",
    "name": "Marcellus Young Casario",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2027,
    "grade": null,
    "order": 446,
    "status": "ELSEWHERE",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-6 / 260 · 247 rating 88 · Listed: DL · 247 lists commitment: Georgia",
    "links": {
      "s247": "https://247sports.com/Player/marcellus-young-casario-46159925/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-148",
    "name": "Jesiah Fields",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2027,
    "grade": null,
    "order": 447,
    "status": "ELSEWHERE",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3.5 / 250 · 247 rating 87 · Listed: DL · 247 lists commitment: Louisville",
    "links": {
      "s247": "https://247sports.com/Player/jesiah-fields-46155882/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-149",
    "name": "Khing Thibodeaux",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2027,
    "grade": null,
    "order": 448,
    "status": "OFFERED",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 260 · 247 rating 87 · Listed: DL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/khing-thibodeaux-46148678/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-150",
    "name": "Stevan Thornton III",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2027,
    "grade": null,
    "order": 449,
    "status": "OFFERED",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 200 · 247 rating 87 · Listed: DL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/stevan-thornton-iii-46164070/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-151",
    "name": "Markius Woods",
    "jersey": "—",
    "positionGroup": "DT",
    "classYear": 2027,
    "grade": null,
    "order": 450,
    "status": "ELSEWHERE",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 305 · 247 rating 87 · Listed: DL · 247 lists commitment: Boston College",
    "links": {
      "s247": "https://247sports.com/Player/markius-woods-46165935/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-152",
    "name": "Darrien Neal",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2027,
    "grade": null,
    "order": 451,
    "status": "ELSEWHERE",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1.5 / 285 · 247 rating 86 · Listed: DL · 247 lists commitment: TCU",
    "links": {
      "s247": "https://247sports.com/Player/darrien-neal-46148173/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-153",
    "name": "Errol Demontagnac",
    "jersey": "—",
    "positionGroup": "DT",
    "classYear": 2027,
    "grade": null,
    "order": 452,
    "status": "ELSEWHERE",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 290 · 247 rating 86 · Listed: DL · 247 lists commitment: Nebraska",
    "links": {
      "s247": "https://247sports.com/Player/errol-demontagnac-46155802/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-154",
    "name": "Khyren Haywood",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2027,
    "grade": null,
    "order": 453,
    "status": "ELSEWHERE",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 260 · 247 rating 86 · Listed: DL · 247 lists commitment: Texas Tech",
    "links": {
      "s247": "https://247sports.com/Player/khyren-haywood-46142211/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-155",
    "name": "Eli Thornton",
    "jersey": "—",
    "positionGroup": "DT",
    "classYear": 2027,
    "grade": null,
    "order": 454,
    "status": "ELSEWHERE",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 315 · 247 rating 86 · Listed: DL · 247 lists commitment: Arkansas",
    "links": {
      "s247": "https://247sports.com/Player/eli-thornton-46163675/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-156",
    "name": "Corey Randolph",
    "jersey": "—",
    "positionGroup": "DT",
    "classYear": 2027,
    "grade": null,
    "order": 455,
    "status": "ELSEWHERE",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 305 · 247 rating 86 · Listed: DL · 247 lists commitment: Boston College",
    "links": {
      "s247": "https://247sports.com/Player/corey-randolph-46159113/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-157",
    "name": "Gage Geyer",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2027,
    "grade": null,
    "order": 456,
    "status": "ELSEWHERE",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 270 · 247 rating 86 · Listed: DL · 247 lists commitment: Minnesota",
    "links": {
      "s247": "https://247sports.com/Player/gage-geyer-46162137/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-158",
    "name": "Charles Nance",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2027,
    "grade": null,
    "order": 457,
    "status": "ELSEWHERE",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 280 · 247 rating 86 · Listed: DL · 247 lists commitment: Western Michigan",
    "links": {
      "s247": "https://247sports.com/Player/charles-nance-46161500/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-159",
    "name": "Kaleb Exume",
    "jersey": "—",
    "positionGroup": "DT",
    "classYear": 2027,
    "grade": null,
    "order": 458,
    "status": "ELSEWHERE",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 310 · 247 rating 85 · Listed: DL · 247 lists commitment: Boston College",
    "links": {
      "s247": "https://247sports.com/Player/kaleb-exume-46149458/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-160",
    "name": "Zarius Matavao",
    "jersey": "—",
    "positionGroup": "DT",
    "classYear": 2027,
    "grade": null,
    "order": 459,
    "status": "ELSEWHERE",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 297 · 247 rating 85 · Listed: DL · 247 lists commitment: Texas Tech",
    "links": {
      "s247": "https://247sports.com/Player/zarius-matavao-46167688/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-161",
    "name": "Brenham Cherne",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2027,
    "grade": null,
    "order": 460,
    "status": "ELSEWHERE",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 270 · 247 rating 84 · Listed: DL · 247 lists commitment: Wake Forest",
    "links": {
      "s247": "https://247sports.com/Player/brenham-cherne-46165509/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-162",
    "name": "Johnnie Fitzgerald III",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2027,
    "grade": null,
    "order": 461,
    "status": "ELSEWHERE",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 285 · 247 rating 83 · Listed: DL · 247 lists commitment: North Texas",
    "links": {
      "s247": "https://247sports.com/Player/johnnie-fitzgerald-iii-46152066/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-163",
    "name": "Seth Kidd",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2027,
    "grade": null,
    "order": 462,
    "status": "OFFERED",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 280 · 247 rating 83 · Listed: DL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/seth-kidd-46169132/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-164",
    "name": "Zion Thornton",
    "jersey": "—",
    "positionGroup": "DT",
    "classYear": 2027,
    "grade": null,
    "order": 463,
    "status": "OFFERED",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 290 · unrated · Listed: DL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/zion-thornton-46161639/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-165",
    "name": "Taccofah Lewis",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2027,
    "grade": null,
    "order": 464,
    "status": "OFFERED",
    "school": {
      "name": "(HS not listed)",
      "address": "--"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 288 · unrated · Listed: DL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/taccofah-lewis-46132860/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-166",
    "name": "Cameron Hall",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 465,
    "status": "ELSEWHERE",
    "school": {
      "name": "Mansfield Summit",
      "address": "Arlington, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 235 · 247 rating 94 · Listed: Edge · 247 lists commitment: Texas",
    "links": {
      "s247": "https://247sports.com/Player/cameron-hall-46157610/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-167",
    "name": "Uhila Wolfgramm",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 466,
    "status": "ELSEWHERE",
    "school": {
      "name": "Maple Mountain",
      "address": "Spanish Fork, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 245 · 247 rating 93 · Listed: Edge · 247 lists commitment: BYU",
    "links": {
      "s247": "https://247sports.com/Player/uhila-wolfgramm-46152619/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-168",
    "name": "Prince Goldsby",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 467,
    "status": "ELSEWHERE",
    "school": {
      "name": "Blue Springs South",
      "address": "Blue Springs, MO"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 205 · 247 rating 92 · Listed: Edge · 247 lists commitment: Ohio State",
    "links": {
      "s247": "https://247sports.com/Player/prince-goldsby-46162471/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-169",
    "name": "Marvin Nguetsop",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 468,
    "status": "ELSEWHERE",
    "school": {
      "name": "St. Thomas More",
      "address": "Oakdale, CT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-7.5 / 268 · 247 rating 90 · Listed: Edge · 247 lists commitment: Ole Miss",
    "links": {
      "s247": "https://247sports.com/Player/marvin-nguetsop-46159737/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-170",
    "name": "Ifeanyi Emedobi",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 469,
    "status": "ELSEWHERE",
    "school": {
      "name": "Northrop",
      "address": "Fort Wayne, IN"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1.5 / 210 · 247 rating 89 · Listed: Edge · 247 lists commitment: Michigan",
    "links": {
      "s247": "https://247sports.com/Player/ifeanyi-emedobi-46162249/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-171",
    "name": "Juelz Batiste",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 470,
    "status": "ELSEWHERE",
    "school": {
      "name": "Edna Karr",
      "address": "New Orleans, LA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 230 · 247 rating 89 · Listed: Edge · 247 lists commitment: Ole Miss",
    "links": {
      "s247": "https://247sports.com/Player/juelz-batiste-46161309/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-172",
    "name": "Tommy Riordan",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 471,
    "status": "ELSEWHERE",
    "school": {
      "name": "Hinsdale Central",
      "address": "Hinsdale, IL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 240 · 247 rating 89 · Listed: Edge · 247 lists commitment: Iowa",
    "links": {
      "s247": "https://247sports.com/Player/tommy-riordan-46154685/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-173",
    "name": "T.K. Cunningham",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 472,
    "status": "ELSEWHERE",
    "school": {
      "name": "Basha",
      "address": "Chandler, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 230 · 247 rating 89 · Listed: Edge · 247 lists commitment: Purdue",
    "links": {
      "s247": "https://247sports.com/Player/tk-cunningham-46130530/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-174",
    "name": "Keysan Taylor",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 473,
    "status": "ELSEWHERE",
    "school": {
      "name": "Guilford",
      "address": "Rockford, IL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3.5 / 230 · 247 rating 89 · Listed: Edge · 247 lists commitment: Ole Miss",
    "links": {
      "s247": "https://247sports.com/Player/keysan-taylor-46159687/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-175",
    "name": "Chris Kasky",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 474,
    "status": "ELSEWHERE",
    "school": {
      "name": "Nazareth Academy",
      "address": "La Grange Park, IL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4.5 / 225 · 247 rating 89 · Listed: Edge · 247 lists commitment: Missouri",
    "links": {
      "s247": "https://247sports.com/Player/chris-kasky-46147938/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-176",
    "name": "Clarence Johnson Jr.",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 475,
    "status": "ELSEWHERE",
    "school": {
      "name": "Cretin Derham Hall",
      "address": "Saint Paul, MN"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 225 · 247 rating 89 · Listed: Edge · 247 lists commitment: Kansas",
    "links": {
      "s247": "https://247sports.com/Player/clarence-johnson-jr-46163112/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-177",
    "name": "Jaylen Mercer",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 476,
    "status": "ELSEWHERE",
    "school": {
      "name": "Princeton",
      "address": "Cincinnati, OH"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 230 · 247 rating 88 · Listed: Edge · 247 lists commitment: Kentucky",
    "links": {
      "s247": "https://247sports.com/Player/jaylen-mercer-46145741/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-178",
    "name": "Jaxon Holly",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 477,
    "status": "ELSEWHERE",
    "school": {
      "name": "Roswell",
      "address": "Roswell, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3.5 / 225 · 247 rating 88 · Listed: Edge · 247 lists commitment: Florida State",
    "links": {
      "s247": "https://247sports.com/Player/jaxon-holly-46149514/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-179",
    "name": "Adriel Rojas",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 478,
    "status": "ELSEWHERE",
    "school": {
      "name": "North Forsyth",
      "address": "Cumming, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4.5 / 220 · 247 rating 88 · Listed: Edge · 247 lists commitment: Duke",
    "links": {
      "s247": "https://247sports.com/Player/adriel-rojas-46158454/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-180",
    "name": "Samuel Nelson",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 479,
    "status": "ELSEWHERE",
    "school": {
      "name": "Bryant",
      "address": "Bryant, AR"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 225 · 247 rating 88 · Listed: Edge · 247 lists commitment: Oklahoma",
    "links": {
      "s247": "https://247sports.com/Player/samuel-nelson-46163732/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-181",
    "name": "Troy Mailo",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 480,
    "status": "ELSEWHERE",
    "school": {
      "name": "Mullen",
      "address": "Denver, CO"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 252 · 247 rating 88 · Listed: Edge · 247 lists commitment: Stanford",
    "links": {
      "s247": "https://247sports.com/Player/troy-mailo-46147113/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-182",
    "name": "Darin Graham",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 481,
    "status": "ELSEWHERE",
    "school": {
      "name": "Mount Carmel",
      "address": "Chicago, IL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 218 · 247 rating 88 · Listed: Edge · 247 lists commitment: Wisconsin",
    "links": {
      "s247": "https://247sports.com/Player/darin-graham-46162053/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-183",
    "name": "Brody Pfannenstiel",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 482,
    "status": "ELSEWHERE",
    "school": {
      "name": "Hoisington",
      "address": "Hoisington, KS"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 225 · 247 rating 87 · Listed: Edge · 247 lists commitment: Wisconsin",
    "links": {
      "s247": "https://247sports.com/Player/brody-pfannenstiel-46159291/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-184",
    "name": "Ty Tautolo",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 483,
    "status": "OFFERED",
    "school": {
      "name": "Lake Stevens",
      "address": "Lake Stevens, WA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 240 · 247 rating 87 · Listed: Edge · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/ty-tautolo-46145956/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-185",
    "name": "Bryson Phoenix",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 484,
    "status": "ELSEWHERE",
    "school": {
      "name": "Alexandria",
      "address": "Alexandria, LA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 225 · 247 rating 87 · Listed: Edge · 247 lists commitment: Texas State",
    "links": {
      "s247": "https://247sports.com/Player/bryson-phoenix-46161501/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-186",
    "name": "Dominic Letlow",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 485,
    "status": "ELSEWHERE",
    "school": {
      "name": "Cardinal Mooney",
      "address": "Youngstown, OH"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3.5 / 230 · 247 rating 87 · Listed: Edge · 247 lists commitment: Pittsburgh",
    "links": {
      "s247": "https://247sports.com/Player/dominic-letlow-46149240/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-187",
    "name": "Olayiwola Taiwo",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 486,
    "status": "ELSEWHERE",
    "school": {
      "name": "Lovejoy",
      "address": "Hampton, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 225 · 247 rating 87 · Listed: Edge · 247 lists commitment: Georgia",
    "links": {
      "s247": "https://247sports.com/Player/olayiwola-taiwo-46162419/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-188",
    "name": "Brian DeMoss",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 487,
    "status": "OFFERED",
    "school": {
      "name": "Simeon",
      "address": "Chicago, IL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 210 · 247 rating 86 · Listed: Edge · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/brian-demoss-46153531/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-189",
    "name": "Owen Roberts",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 488,
    "status": "ELSEWHERE",
    "school": {
      "name": "York",
      "address": "Elmhurst, IL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 230 · 247 rating 86 · Listed: Edge · 247 lists commitment: Purdue",
    "links": {
      "s247": "https://247sports.com/Player/owen-roberts-46161919/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-190",
    "name": "Caleb Jordan",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 489,
    "status": "ELSEWHERE",
    "school": {
      "name": "Basha",
      "address": "Chandler, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 220 · 247 rating 83 · Listed: Edge · 247 lists commitment: Nevada",
    "links": {
      "s247": "https://247sports.com/Player/caleb-jordan-46159788/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-191",
    "name": "Xzavier Pfister",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 490,
    "status": "ELSEWHERE",
    "school": {
      "name": "Brookwood",
      "address": "Snellville, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 230 · unrated · Listed: Edge · 247 lists commitment: Arkansas State",
    "links": {
      "s247": "https://247sports.com/Player/xzavier-pfister-46164665/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-192",
    "name": "Jhadyn Nelson",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 491,
    "status": "ELSEWHERE",
    "school": {
      "name": "Langham Creek",
      "address": "Houston, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 221 · 247 rating 94 · Listed: LB · 247 lists commitment: Texas Tech",
    "links": {
      "s247": "https://247sports.com/Player/jhadyn-nelson-46164194/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-193",
    "name": "Roman Igwebuike",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 492,
    "status": "ELSEWHERE",
    "school": {
      "name": "Mount Carmel",
      "address": "Chicago, IL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 220 · 247 rating 91 · Listed: LB · 247 lists commitment: Notre Dame",
    "links": {
      "s247": "https://247sports.com/Player/roman-igwebuike-46154637/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-194",
    "name": "Kobe Rhymes",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 493,
    "status": "ELSEWHERE",
    "school": {
      "name": "North Kansas City",
      "address": "Kansas City, MO"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 220 · 247 rating 90 · Listed: LB · 247 lists commitment: Missouri",
    "links": {
      "s247": "https://247sports.com/Player/kobe-rhymes-46154822/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-195",
    "name": "Tate Wallace",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 494,
    "status": "ELSEWHERE",
    "school": {
      "name": "Regina",
      "address": "Iowa City, IA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 230 · 247 rating 90 · Listed: LB · 247 lists commitment: Minnesota",
    "links": {
      "s247": "https://247sports.com/Player/tate-wallace-46144698/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-196",
    "name": "Case Alexander",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 495,
    "status": "ELSEWHERE",
    "school": {
      "name": "Washington High",
      "address": "Washington, OK"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 215 · 247 rating 89 · Listed: LB · 247 lists commitment: Penn State",
    "links": {
      "s247": "https://247sports.com/Player/case-alexander-46152524/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-197",
    "name": "David Parson",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 496,
    "status": "ELSEWHERE",
    "school": {
      "name": "Douglas County",
      "address": "Douglasville, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 225 · 247 rating 89 · Listed: LB · 247 lists commitment: Ole Miss",
    "links": {
      "s247": "https://247sports.com/Player/david-parson-46158397/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-198",
    "name": "Gavin Stecker",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 497,
    "status": "ELSEWHERE",
    "school": {
      "name": "Bettendorf",
      "address": "Bettendorf, IA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 192 · 247 rating 89 · Listed: LB · 247 lists commitment: Iowa",
    "links": {
      "s247": "https://247sports.com/Player/gavin-stecker-46153320/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-199",
    "name": "Keiran Govan",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 498,
    "status": "ELSEWHERE",
    "school": {
      "name": "Republic",
      "address": "Republic, MO"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 200 · 247 rating 89 · Listed: LB · 247 lists commitment: Missouri",
    "links": {
      "s247": "https://247sports.com/Player/keiran-govan-46165447/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-200",
    "name": "Aston Whiteside",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 499,
    "status": "ELSEWHERE",
    "school": {
      "name": "Burleson Centennial",
      "address": "Burleson, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 205 · 247 rating 89 · Listed: LB · 247 lists commitment: Texas A&M",
    "links": {
      "s247": "https://247sports.com/Player/aston-whiteside-46157574/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-201",
    "name": "Ellis McGaskin",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 500,
    "status": "ELSEWHERE",
    "school": {
      "name": "Williamson",
      "address": "Mobile, AL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 205 · 247 rating 88 · Listed: LB · 247 lists commitment: Florida",
    "links": {
      "s247": "https://247sports.com/Player/ellis-mcgaskin-46144257/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-202",
    "name": "Drew Williams",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 501,
    "status": "ELSEWHERE",
    "school": {
      "name": "Sequoyah",
      "address": "Canton, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 200 · 247 rating 88 · Listed: LB · 247 lists commitment: Kentucky",
    "links": {
      "s247": "https://247sports.com/Player/drew-williams-46159930/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-203",
    "name": "Braylon Williams",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 502,
    "status": "ELSEWHERE",
    "school": {
      "name": "Arlington Lamar",
      "address": "Arlington, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 220 · 247 rating 88 · Listed: LB · 247 lists commitment: SMU",
    "links": {
      "s247": "https://247sports.com/Player/braylon-williams-46144825/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-204",
    "name": "Aaron Williams",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 503,
    "status": "ELSEWHERE",
    "school": {
      "name": "Fort Bend Ridge Point",
      "address": "Missouri City, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 200 · 247 rating 88 · Listed: LB · 247 lists commitment: North Carolina",
    "links": {
      "s247": "https://247sports.com/Player/aaron-williams-46157576/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-205",
    "name": "Blake Betton",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 504,
    "status": "ELSEWHERE",
    "school": {
      "name": "Shakopee",
      "address": "Shakopee, MN"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 200 · 247 rating 88 · Listed: LB · 247 lists commitment: Penn State",
    "links": {
      "s247": "https://247sports.com/Player/blake-betton-46155301/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-206",
    "name": "Cade Haug",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 505,
    "status": "ELSEWHERE",
    "school": {
      "name": "Katy",
      "address": "Katy, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 220 · 247 rating 88 · Listed: LB · 247 lists commitment: SMU",
    "links": {
      "s247": "https://247sports.com/Player/cade-haug-46145106/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-207",
    "name": "Theo Wilson",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 506,
    "status": "ELSEWHERE",
    "school": {
      "name": "Armwood",
      "address": "Seffner, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2.5 / 230 · 247 rating 88 · Listed: LB · 247 lists commitment: North Carolina",
    "links": {
      "s247": "https://247sports.com/Player/theo-wilson-46152659/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-208",
    "name": "Jake Godfree",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 507,
    "status": "ELSEWHERE",
    "school": {
      "name": "North Gwinnett",
      "address": "Suwanee, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-11 / 218 · 247 rating 87 · Listed: LB · 247 lists commitment: NC State",
    "links": {
      "s247": "https://247sports.com/Player/jake-godfree-46147136/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-209",
    "name": "Marshaun Ivy",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 508,
    "status": "ELSEWHERE",
    "school": {
      "name": "Cardinal Ritter College Prep",
      "address": "St. Louis, MO"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 215 · 247 rating 87 · Listed: LB · 247 lists commitment: Arizona State",
    "links": {
      "s247": "https://247sports.com/Player/marshaun-ivy-46149424/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-210",
    "name": "Eli Harris",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 509,
    "status": "ELSEWHERE",
    "school": {
      "name": "Grayson",
      "address": "Loganville, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 200 · 247 rating 87 · Listed: LB · 247 lists commitment: Nebraska",
    "links": {
      "s247": "https://247sports.com/Player/eli-harris-46152990/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-211",
    "name": "Kason Clayborne",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 510,
    "status": "ELSEWHERE",
    "school": {
      "name": "Sioux City East",
      "address": "Sioux City, IA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 225 · 247 rating 87 · Listed: LB · 247 lists commitment: Minnesota",
    "links": {
      "s247": "https://247sports.com/Player/kason-clayborne-46161151/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-212",
    "name": "Noah Renes",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 511,
    "status": "ELSEWHERE",
    "school": {
      "name": "Niceville",
      "address": "Niceville, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 225 · 247 rating 86 · Listed: LB · 247 lists commitment: Georgia Tech",
    "links": {
      "s247": "https://247sports.com/Player/noah-renes-46149588/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-213",
    "name": "Rome Ewell",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 512,
    "status": "ELSEWHERE",
    "school": {
      "name": "Springtown",
      "address": "Springtown, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 210 · 247 rating 86 · Listed: LB · 247 lists commitment: Arizona",
    "links": {
      "s247": "https://247sports.com/Player/rome-ewell-46157683/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-214",
    "name": "Bryce Breeden",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 513,
    "status": "ELSEWHERE",
    "school": {
      "name": "Bridge City",
      "address": "Bridge City, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 205 · 247 rating 86 · Listed: LB · 247 lists commitment: Arkansas",
    "links": {
      "s247": "https://247sports.com/Player/bryce-breeden-46157612/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-215",
    "name": "Sean Rice",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 514,
    "status": "ELSEWHERE",
    "school": {
      "name": "St. Laurence",
      "address": "Evergreen Park, IL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 210 · 247 rating 86 · Listed: LB · 247 lists commitment: Illinois",
    "links": {
      "s247": "https://247sports.com/Player/sean-rice-46162165/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-216",
    "name": "Broncs Baker",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 515,
    "status": "ELSEWHERE",
    "school": {
      "name": "Stansbury",
      "address": "Tooele, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 215 · 247 rating 85 · Listed: LB · 247 lists commitment: West Virginia",
    "links": {
      "s247": "https://247sports.com/Player/broncs-baker-46155019/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-217",
    "name": "Nathan Jones",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 516,
    "status": "ELSEWHERE",
    "school": {
      "name": "Desert Edge",
      "address": "Goodyear, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 230 · 247 rating 85 · Listed: LB · 247 lists commitment: Wisconsin",
    "links": {
      "s247": "https://247sports.com/Player/nathan-jones-46159165/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-218",
    "name": "Kei'Shjuan Telfair",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 517,
    "status": "ELSEWHERE",
    "school": {
      "name": "Euclid",
      "address": "Euclid, OH"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 160 · 247 rating 92 · Listed: CB · 247 lists commitment: Penn State",
    "links": {
      "s247": "https://247sports.com/Player/keishjuan-telfair-46153238/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-219",
    "name": "Daniel Yebit",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 518,
    "status": "ELSEWHERE",
    "school": {
      "name": "Yukon",
      "address": "Yukon, OK"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 180 · 247 rating 91 · Listed: CB · 247 lists commitment: TCU",
    "links": {
      "s247": "https://247sports.com/Player/daniel-yebit-46164727/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-220",
    "name": "Kameron Roberson",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 519,
    "status": "ELSEWHERE",
    "school": {
      "name": "Cy Springs",
      "address": "Cypress, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 185 · 247 rating 91 · Listed: CB · 247 lists commitment: Houston",
    "links": {
      "s247": "https://247sports.com/Player/kameron-roberson-46158879/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-221",
    "name": "Jerry Outhouse Jr.",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 520,
    "status": "ELSEWHERE",
    "school": {
      "name": "North Crowley",
      "address": "Fort Worth, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0.5 / 180 · 247 rating 91 · Listed: CB · 247 lists commitment: UCLA",
    "links": {
      "s247": "https://247sports.com/Player/jerry-outhouse-jr-46145113/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-222",
    "name": "Brandon Sherrard",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 521,
    "status": "ELSEWHERE",
    "school": {
      "name": "Shadow Creek",
      "address": "Pearland, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 180 · 247 rating 90 · Listed: CB · 247 lists commitment: Texas",
    "links": {
      "s247": "https://247sports.com/Player/brandon-sherrard-46155809/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-223",
    "name": "Evan Via",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 522,
    "status": "ELSEWHERE",
    "school": {
      "name": "Ladue Horton Watkins",
      "address": "St. Louis, MO"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-11 / 175 · 247 rating 90 · Listed: CB · 247 lists commitment: Stanford",
    "links": {
      "s247": "https://247sports.com/Player/evan-via-46159600/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-224",
    "name": "Kamil Loud",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 523,
    "status": "ELSEWHERE",
    "school": {
      "name": "Bishop Gorman",
      "address": "Las Vegas, NV"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0.5 / 170 · 247 rating 90 · Listed: CB · 247 lists commitment: California",
    "links": {
      "s247": "https://247sports.com/Player/kamil-loud-46153753/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-225",
    "name": "Montre Jackson",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 524,
    "status": "ELSEWHERE",
    "school": {
      "name": "Garland Lakeview Centennial",
      "address": "Garland, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 180 · 247 rating 90 · Listed: CB · 247 lists commitment: Texas",
    "links": {
      "s247": "https://247sports.com/Player/montre-jackson-46147419/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-226",
    "name": "Taelyn Mayo",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 525,
    "status": "ELSEWHERE",
    "school": {
      "name": "Lewisville",
      "address": "Lewisville, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3.5 / 185 · 247 rating 90 · Listed: CB · 247 lists commitment: Ole Miss",
    "links": {
      "s247": "https://247sports.com/Player/taelyn-mayo-46142231/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-227",
    "name": "Blake Jenkins",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 526,
    "status": "ELSEWHERE",
    "school": {
      "name": "Katy Tompkins",
      "address": "Katy, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1.5 / 185 · 247 rating 90 · Listed: CB · 247 lists commitment: Michigan",
    "links": {
      "s247": "https://247sports.com/Player/blake-jenkins-46160118/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-228",
    "name": "Aidyn Wiggins",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 527,
    "status": "ELSEWHERE",
    "school": {
      "name": "Byrnes",
      "address": "Duncan, SC"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 183 · 247 rating 89 · Listed: CB · 247 lists commitment: Auburn",
    "links": {
      "s247": "https://247sports.com/Player/aidyn-wiggins-46165273/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-229",
    "name": "Chase Johnson",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 528,
    "status": "ELSEWHERE",
    "school": {
      "name": "Emanuel County Institute",
      "address": "Twin City, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-10 / 150 · 247 rating 89 · Listed: CB · 247 lists commitment: Virginia Tech",
    "links": {
      "s247": "https://247sports.com/Player/chase-johnson-46151739/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-230",
    "name": "MJ Burnett",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 529,
    "status": "ELSEWHERE",
    "school": {
      "name": "Walton",
      "address": "Marietta, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 202 · 247 rating 89 · Listed: CB · 247 lists commitment: Georgia Tech",
    "links": {
      "s247": "https://247sports.com/Player/mj-burnett-46158522/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-231",
    "name": "Bryce Woods",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 530,
    "status": "ELSEWHERE",
    "school": {
      "name": "Woodward Academy",
      "address": "College Park, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 175 · 247 rating 88 · Listed: CB · 247 lists commitment: Virginia Tech",
    "links": {
      "s247": "https://247sports.com/Player/bryce-woods-46154505/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-232",
    "name": "Kamauri Whitfield",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 531,
    "status": "ELSEWHERE",
    "school": {
      "name": "The First Academy",
      "address": "Orlando, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-10.5 / 185 · 247 rating 88 · Listed: CB · 247 lists commitment: Florida",
    "links": {
      "s247": "https://247sports.com/Player/kamauri-whitfield-46154635/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-233",
    "name": "Mikyal Davis",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 532,
    "status": "ELSEWHERE",
    "school": {
      "name": "Desert Edge",
      "address": "Goodyear, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-11 / 170 · 247 rating 88 · Listed: CB · 247 lists commitment: Oklahoma",
    "links": {
      "s247": "https://247sports.com/Player/mikyal-davis-46149592/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-234",
    "name": "Trenton Blaylock",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 533,
    "status": "ELSEWHERE",
    "school": {
      "name": "Atascocita",
      "address": "Humble, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 175 · 247 rating 88 · Listed: CB · 247 lists commitment: Oklahoma",
    "links": {
      "s247": "https://247sports.com/Player/trenton-blaylock-46146999/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-235",
    "name": "Elijajuan Houston",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 534,
    "status": "ELSEWHERE",
    "school": {
      "name": "North Crowley",
      "address": "Fort Worth, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-11 / 175 · 247 rating 88 · Listed: CB · 247 lists commitment: Arizona State",
    "links": {
      "s247": "https://247sports.com/Player/elijajuan-houston-46152705/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-236",
    "name": "Jaden Bibbs",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 535,
    "status": "ELSEWHERE",
    "school": {
      "name": "Coppell",
      "address": "Coppell, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-10 / 165 · 247 rating 88 · Listed: CB · 247 lists commitment: Utah",
    "links": {
      "s247": "https://247sports.com/Player/jaden-bibbs-46160858/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-237",
    "name": "Brandon Allen Jr.",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 536,
    "status": "ELSEWHERE",
    "school": {
      "name": "Westlake",
      "address": "Atlanta, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 175 · 247 rating 88 · Listed: CB · 247 lists commitment: Mississippi State",
    "links": {
      "s247": "https://247sports.com/Player/brandon-allen-jr-46159628/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-238",
    "name": "Dolph McDonald",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 537,
    "status": "OFFERED",
    "school": {
      "name": "Morton",
      "address": "Morton, MS"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 160 · 247 rating 87 · Listed: CB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/dolph-mcdonald-46148876/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-239",
    "name": "Carl Jones Jr.",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 538,
    "status": "ELSEWHERE",
    "school": {
      "name": "Tampa Catholic",
      "address": "Tampa, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 155 · 247 rating 87 · Listed: CB · 247 lists commitment: Wake Forest",
    "links": {
      "s247": "https://247sports.com/Player/carl-jones-jr-46162126/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-240",
    "name": "Dhillon McGee",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 539,
    "status": "ELSEWHERE",
    "school": {
      "name": "DeSoto",
      "address": "DeSoto, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0.5 / 175 · 247 rating 87 · Listed: CB · 247 lists commitment: Penn State",
    "links": {
      "s247": "https://247sports.com/Player/dhillon-mcgee-46140684/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-241",
    "name": "Noah Gillespie",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 540,
    "status": "ELSEWHERE",
    "school": {
      "name": "Broken Arrow",
      "address": "Broken Arrow, OK"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-11 / 175 · 247 rating 87 · Listed: CB · 247 lists commitment: TCU",
    "links": {
      "s247": "https://247sports.com/Player/noah-gillespie-46155580/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-242",
    "name": "Silas Nuckles",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 541,
    "status": "OFFERED",
    "school": {
      "name": "Buford",
      "address": "Buford, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 175 · 247 rating 87 · Listed: CB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/silas-nuckles-46162214/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-243",
    "name": "Nazir Pitchford",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 542,
    "status": "ELSEWHERE",
    "school": {
      "name": "Palmetto",
      "address": "Palmetto, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 175 · 247 rating 86 · Listed: CB · 247 lists commitment: North Carolina",
    "links": {
      "s247": "https://247sports.com/Player/nazir-pitchford-46157930/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-244",
    "name": "Otha Thomas IV",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 543,
    "status": "OFFERED",
    "school": {
      "name": "Pine Forest",
      "address": "Pensacola, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 170 · 247 rating 86 · Listed: CB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/otha-thomas-iv-46151891/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-245",
    "name": "David Coleman Jr.",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 544,
    "status": "ELSEWHERE",
    "school": {
      "name": "Evans",
      "address": "Orlando, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 165 · 247 rating 86 · Listed: CB · 247 lists commitment: Bowling Green",
    "links": {
      "s247": "https://247sports.com/Player/david-coleman-jr-46146582/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-246",
    "name": "Logan Debose",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 545,
    "status": "ELSEWHERE",
    "school": {
      "name": "Houston St. Thomas",
      "address": "Houston, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-11 / 175 · 247 rating 86 · Listed: CB · 247 lists commitment: Houston",
    "links": {
      "s247": "https://247sports.com/Player/logan-debose-46166541/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-247",
    "name": "Alex Patton",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 546,
    "status": "ELSEWHERE",
    "school": {
      "name": "Cibolo Steele",
      "address": "Cibolo, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-10 / 165 · 247 rating 86 · Listed: CB · 247 lists commitment: Duke",
    "links": {
      "s247": "https://247sports.com/Player/alex-patton-46137071/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-248",
    "name": "Cordaro Parham",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 547,
    "status": "ELSEWHERE",
    "school": {
      "name": "Jefferson",
      "address": "Jefferson, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 178 · 247 rating 86 · Listed: CB · 247 lists commitment: Michigan State",
    "links": {
      "s247": "https://247sports.com/Player/cordaro-parham-46166948/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-249",
    "name": "Kayden Battle",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 548,
    "status": "ELSEWHERE",
    "school": {
      "name": "McEachern",
      "address": "Powder Springs, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-11 / 170 · 247 rating 86 · Listed: CB · 247 lists commitment: Pittsburgh",
    "links": {
      "s247": "https://247sports.com/Player/kayden-battle-46165005/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-250",
    "name": "Johnny McNeil",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 549,
    "status": "ELSEWHERE",
    "school": {
      "name": "St. Pius X-St. Matthias Academy",
      "address": "Downey, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 160 · 247 rating 86 · Listed: CB · 247 lists commitment: Oregon State",
    "links": {
      "s247": "https://247sports.com/Player/johnny-mcneil-46158457/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-251",
    "name": "Jett Watson",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 550,
    "status": "ELSEWHERE",
    "school": {
      "name": "Grayson",
      "address": "Loganville, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 160 · 247 rating 86 · Listed: CB · 247 lists commitment: Boston College",
    "links": {
      "s247": "https://247sports.com/Player/jett-watson-46149847/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-252",
    "name": "Larry Morgan III",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 551,
    "status": "ELSEWHERE",
    "school": {
      "name": "West Boca Raton",
      "address": "Boca Raton, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-11 / 165 · 247 rating 86 · Listed: CB · 247 lists commitment: South Florida",
    "links": {
      "s247": "https://247sports.com/Player/larry-morgan-iii-46148056/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-253",
    "name": "Jewellz Tapp",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 552,
    "status": "ELSEWHERE",
    "school": {
      "name": "John Curtis",
      "address": "River Ridge, LA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-11.5 / 165 · 247 rating 86 · Listed: CB · 247 lists commitment: TCU",
    "links": {
      "s247": "https://247sports.com/Player/jewellz-tapp-46167367/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-254",
    "name": "Shahariam Thurston",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 553,
    "status": "ELSEWHERE",
    "school": {
      "name": "Arlington Lamar",
      "address": "Arlington, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 175 · 247 rating 85 · Listed: CB · 247 lists commitment: Iowa State",
    "links": {
      "s247": "https://247sports.com/Player/shahariam-thurston-46157580/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-255",
    "name": "Nasim Eason",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 554,
    "status": "ELSEWHERE",
    "school": {
      "name": "Higley",
      "address": "Gilbert, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 160 · 247 rating 85 · Listed: CB · 247 lists commitment: Arizona State",
    "links": {
      "s247": "https://247sports.com/Player/nasim-eason-46154554/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-256",
    "name": "Rilee Drew",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 555,
    "status": "ELSEWHERE",
    "school": {
      "name": "Grayson",
      "address": "Loganville, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-10 / 168 · 247 rating 85 · Listed: CB · 247 lists commitment: Wake Forest",
    "links": {
      "s247": "https://247sports.com/Player/rilee-drew-46150244/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-257",
    "name": "Noah Willis",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 556,
    "status": "ELSEWHERE",
    "school": {
      "name": "Blessed Trinity Catholic",
      "address": "Roswell, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 170 · 247 rating 85 · Listed: CB · 247 lists commitment: Cincinnati",
    "links": {
      "s247": "https://247sports.com/Player/noah-willis-46166432/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-258",
    "name": "Raymon McKneely",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 557,
    "status": "OFFERED",
    "school": {
      "name": "Hinds C.C.",
      "address": "Raymond, MS"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 185 · 247 rating 84 · Listed: CB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/raymon-mckneely-46163838/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-259",
    "name": "Bryson Ford",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 558,
    "status": "OFFERED",
    "school": {
      "name": "North Gwinnett",
      "address": "Suwanee, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 180 · unrated · Listed: CB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/bryson-ford-46163824/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-260",
    "name": "Cameron Goodwin",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 559,
    "status": "OFFERED",
    "school": {
      "name": "McArthur",
      "address": "Hollywood, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 175 · unrated · Listed: CB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/cameron-goodwin-46163518/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-261",
    "name": "Tristan Anderson",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 560,
    "status": "OFFERED",
    "school": {
      "name": "Mississippi Gulf Coast C.C.",
      "address": "Perkinston, MS"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 195 · unrated · Listed: CB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/tristan-anderson-46141287/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-262",
    "name": "Jonivan Edwards",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 561,
    "status": "OFFERED",
    "school": {
      "name": "Pearl River C.C.",
      "address": "Poplarville, MS"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 185 · unrated · Listed: CB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/jonivan-edwards-46169318/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-263",
    "name": "Cooper Witten",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 562,
    "status": "ELSEWHERE",
    "school": {
      "name": "Liberty Christian",
      "address": "Argyle, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1.5 / 220 · 247 rating 94 · Listed: S · 247 lists commitment: Oklahoma",
    "links": {
      "s247": "https://247sports.com/Player/cooper-witten-46150577/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-264",
    "name": "Semaj Stanford",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 563,
    "status": "ELSEWHERE",
    "school": {
      "name": "Broken Arrow",
      "address": "Broken Arrow, OK"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-11 / 180 · 247 rating 94 · Listed: S · 247 lists commitment: Oregon",
    "links": {
      "s247": "https://247sports.com/Player/semaj-stanford-46146499/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-265",
    "name": "Tory Pittman III",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 564,
    "status": "ELSEWHERE",
    "school": {
      "name": "Millard North",
      "address": "Omaha, NE"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 189 · 247 rating 93 · Listed: S · 247 lists commitment: Nebraska",
    "links": {
      "s247": "https://247sports.com/Player/tory-pittman-iii-46139694/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-266",
    "name": "KJ Caldwell",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 565,
    "status": "ELSEWHERE",
    "school": {
      "name": "Parkview",
      "address": "Lilburn, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 176 · 247 rating 91 · Listed: S · 247 lists commitment: NC State",
    "links": {
      "s247": "https://247sports.com/Player/kj-caldwell-46155996/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-267",
    "name": "Tavares Harrington",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 566,
    "status": "ELSEWHERE",
    "school": {
      "name": "Mount Carmel",
      "address": "Chicago, IL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 175 · 247 rating 90 · Listed: S · 247 lists commitment: Michigan",
    "links": {
      "s247": "https://247sports.com/Player/tavares-harrington-46155142/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-268",
    "name": "Jeremiah Proctor",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 567,
    "status": "ELSEWHERE",
    "school": {
      "name": "Gainesville",
      "address": "Gainesville, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 210 · 247 rating 90 · Listed: S · 247 lists commitment: Pittsburgh",
    "links": {
      "s247": "https://247sports.com/Player/jeremiah-proctor-46156908/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-269",
    "name": "Darrell Mattison",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 568,
    "status": "ELSEWHERE",
    "school": {
      "name": "Morgan Park",
      "address": "Chicago, IL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0.5 / 160 · 247 rating 90 · Listed: S · 247 lists commitment: Ole Miss",
    "links": {
      "s247": "https://247sports.com/Player/darrell-mattison-46158983/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-270",
    "name": "Jaylen Scott",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 569,
    "status": "ELSEWHERE",
    "school": {
      "name": "Williamson",
      "address": "Mobile, AL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 165 · 247 rating 90 · Listed: S · 247 lists commitment: Oklahoma",
    "links": {
      "s247": "https://247sports.com/Player/jaylen-scott-46154318/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-271",
    "name": "Jayden Anding",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 570,
    "status": "ELSEWHERE",
    "school": {
      "name": "Ruston",
      "address": "Ruston, LA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-11 / 175 · 247 rating 90 · Listed: S · 247 lists commitment: LSU",
    "links": {
      "s247": "https://247sports.com/Player/jayden-anding-46152579/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-272",
    "name": "Jalen Welch",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 571,
    "status": "ELSEWHERE",
    "school": {
      "name": "Grayson",
      "address": "Loganville, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 190 · 247 rating 89 · Listed: S · 247 lists commitment: Syracuse",
    "links": {
      "s247": "https://247sports.com/Player/jalen-welch-46160368/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-273",
    "name": "Kailib Dillard",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 572,
    "status": "ELSEWHERE",
    "school": {
      "name": "Jenks",
      "address": "Jenks, OK"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 175 · 247 rating 88 · Listed: S · 247 lists commitment: Florida",
    "links": {
      "s247": "https://247sports.com/Player/kailib-dillard-46159825/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-274",
    "name": "Kennedy Green",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 573,
    "status": "ELSEWHERE",
    "school": {
      "name": "Douglas County",
      "address": "Douglasville, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 195 · 247 rating 88 · Listed: S · 247 lists commitment: Mississippi State",
    "links": {
      "s247": "https://247sports.com/Player/kennedy-green-46153115/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-275",
    "name": "Alex Scott",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 574,
    "status": "ELSEWHERE",
    "school": {
      "name": "Toombs County",
      "address": "Lyons, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-10.5 / 180 · 247 rating 88 · Listed: S · 247 lists commitment: NC State",
    "links": {
      "s247": "https://247sports.com/Player/alex-scott-46157719/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-276",
    "name": "Charles Roberts",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 575,
    "status": "ELSEWHERE",
    "school": {
      "name": "IMG Academy",
      "address": "Bradenton, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 180 · 247 rating 88 · Listed: S · 247 lists commitment: Maryland",
    "links": {
      "s247": "https://247sports.com/Player/charles-roberts-46143570/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-277",
    "name": "Jaden Walk-Green",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 576,
    "status": "ELSEWHERE",
    "school": {
      "name": "Corona Centennial",
      "address": "Corona, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-11 / 188 · 247 rating 88 · Listed: S · 247 lists commitment: Washington",
    "links": {
      "s247": "https://247sports.com/Player/jaden-walk-green-46154955/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-278",
    "name": "Marvin Joseph",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 577,
    "status": "ELSEWHERE",
    "school": {
      "name": "Baton Rouge Central",
      "address": "Baton Rouge, LA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-11 / 205 · 247 rating 87 · Listed: S · 247 lists commitment: Houston",
    "links": {
      "s247": "https://247sports.com/Player/marvin-joseph-46158643/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-279",
    "name": "Jabarri Lofton",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 578,
    "status": "ELSEWHERE",
    "school": {
      "name": "East St. Louis",
      "address": "East St. Louis, IL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 200 · 247 rating 87 · Listed: S · 247 lists commitment: Missouri",
    "links": {
      "s247": "https://247sports.com/Player/jabarri-lofton-46159927/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-280",
    "name": "James Roberson",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 579,
    "status": "ELSEWHERE",
    "school": {
      "name": "Allen",
      "address": "Allen, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 195 · 247 rating 87 · Listed: S · 247 lists commitment: Wisconsin",
    "links": {
      "s247": "https://247sports.com/Player/james-roberson-46157609/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-281",
    "name": "Braiden Graves",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 580,
    "status": "ELSEWHERE",
    "school": {
      "name": "Bridgeland",
      "address": "Cypress, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 190 · 247 rating 87 · Listed: S · 247 lists commitment: Kansas",
    "links": {
      "s247": "https://247sports.com/Player/braiden-graves-46157607/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-282",
    "name": "Savoy Guidry",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 581,
    "status": "ELSEWHERE",
    "school": {
      "name": "Holy Cross",
      "address": "New Orleans, LA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 180 · 247 rating 87 · Listed: S · 247 lists commitment: Stanford",
    "links": {
      "s247": "https://247sports.com/Player/savoy-guidry-46157640/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-283",
    "name": "Julian Elzey",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 582,
    "status": "ELSEWHERE",
    "school": {
      "name": "Brookwood",
      "address": "Snellville, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 190 · 247 rating 87 · Listed: S · 247 lists commitment: Georgia Tech",
    "links": {
      "s247": "https://247sports.com/Player/julian-elzey-46154562/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-284",
    "name": "Jameer Cantrell",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 583,
    "status": "ELSEWHERE",
    "school": {
      "name": "Buford",
      "address": "Buford, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-10 / 175 · 247 rating 87 · Listed: S · 247 lists commitment: Arkansas",
    "links": {
      "s247": "https://247sports.com/Player/jameer-cantrell-46151806/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-285",
    "name": "Tavon Bolden",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 584,
    "status": "ELSEWHERE",
    "school": {
      "name": "Atascocita",
      "address": "Humble, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 190 · 247 rating 86 · Listed: S · 247 lists commitment: Houston",
    "links": {
      "s247": "https://247sports.com/Player/tavon-bolden-46161017/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-286",
    "name": "Hayden Dixon",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 585,
    "status": "OFFERED",
    "school": {
      "name": "Creekside",
      "address": "Fairburn, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-9.5 / 175 · 247 rating 85 · Listed: S · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/hayden-dixon-46158536/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-287",
    "name": "Will Caston",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 586,
    "status": "ELSEWHERE",
    "school": {
      "name": "Fayetteville",
      "address": "Fayetteville, AR"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 205 · 247 rating 85 · Listed: S · 247 lists commitment: Arkansas",
    "links": {
      "s247": "https://247sports.com/Player/will-caston-46160190/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-288",
    "name": "Luke Stevens",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 587,
    "status": "ELSEWHERE",
    "school": {
      "name": "Fort Worth Christian",
      "address": "North Richland Hills, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 180 · 247 rating 85 · Listed: S · 247 lists commitment: Arizona",
    "links": {
      "s247": "https://247sports.com/Player/luke-stevens-46166897/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-289",
    "name": "Kesler Jenkins",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 588,
    "status": "OFFERED",
    "school": {
      "name": "Pearl River C.C.",
      "address": "Poplarville, MS"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-11 / 175 · unrated · Listed: S · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/kesler-jenkins-46143429/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-290",
    "name": "Tyler Bush",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 589,
    "status": "ELSEWHERE",
    "school": {
      "name": "North Crowley",
      "address": "Fort Worth, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 177 · unrated · Listed: S · 247 lists commitment: UTRGV",
    "links": {
      "s247": "https://247sports.com/Player/tyler-bush-46163585/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-291",
    "name": "Trevionn Morton",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 590,
    "status": "OFFERED",
    "school": {
      "name": "Hinds C.C.",
      "address": "Raymond, MS"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 200 · unrated · Listed: S · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/trevionn-morton-46148215/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-292",
    "name": "Gabriel Osborne Jr.",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 591,
    "status": "ELSEWHERE",
    "school": {
      "name": "Mustang",
      "address": "Mustang, OK"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 180 · 247 rating 98 · Listed: ATH · 247 lists commitment: Oklahoma",
    "links": {
      "s247": "https://247sports.com/Player/gabriel-osborne-jr-46159790/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-293",
    "name": "A'mir Sears",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 592,
    "status": "ELSEWHERE",
    "school": {
      "name": "Miami Columbus",
      "address": "Miami, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 178 · 247 rating 98 · Listed: ATH · 247 lists commitment: Miami",
    "links": {
      "s247": "https://247sports.com/Player/amir-sears-46151570/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-294",
    "name": "Myson Johnson-Cook",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 593,
    "status": "ELSEWHERE",
    "school": {
      "name": "East St. Louis",
      "address": "East St. Louis, IL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 235 · 247 rating 94 · Listed: ATH · 247 lists commitment: Auburn",
    "links": {
      "s247": "https://247sports.com/Player/myson-johnson-cook-46143247/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-295",
    "name": "Bode Sparrow",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 594,
    "status": "ELSEWHERE",
    "school": {
      "name": "Davis",
      "address": "Kaysville, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 195 · 247 rating 93 · Listed: ATH · 247 lists commitment: Oklahoma",
    "links": {
      "s247": "https://247sports.com/Player/bode-sparrow-46143770/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-296",
    "name": "Israel Hammons",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 595,
    "status": "ELSEWHERE",
    "school": {
      "name": "Choctaw",
      "address": "Choctaw, OK"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 225 · 247 rating 91 · Listed: ATH · 247 lists commitment: Oklahoma State",
    "links": {
      "s247": "https://247sports.com/Player/israel-hammons-46164012/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-297",
    "name": "Chris Harris Jr.",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 596,
    "status": "ELSEWHERE",
    "school": {
      "name": "Lee's Summit West",
      "address": "Lee's Summit, MO"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 175 · 247 rating 90 · Listed: ATH · 247 lists commitment: Missouri",
    "links": {
      "s247": "https://247sports.com/Player/chris-harris-jr-46161018/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-298",
    "name": "Landon Blum",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 597,
    "status": "ELSEWHERE",
    "school": {
      "name": "Woodbine",
      "address": "Woodbine, IA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 200 · 247 rating 90 · Listed: ATH · 247 lists commitment: Penn State",
    "links": {
      "s247": "https://247sports.com/Player/landon-blum-46149188/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-299",
    "name": "Karece Hoyt",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 598,
    "status": "ELSEWHERE",
    "school": {
      "name": "Frisco Lone Star",
      "address": "Frisco, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 200 · 247 rating 90 · Listed: ATH · 247 lists commitment: Baylor",
    "links": {
      "s247": "https://247sports.com/Player/karece-hoyt-46144142/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-300",
    "name": "Jai Jones",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 599,
    "status": "ELSEWHERE",
    "school": {
      "name": "Chandler",
      "address": "Chandler, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 175 · 247 rating 90 · Listed: ATH · 247 lists commitment: Wisconsin",
    "links": {
      "s247": "https://247sports.com/Player/jai-jones-46150626/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-301",
    "name": "Krew Jones",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 600,
    "status": "ELSEWHERE",
    "school": {
      "name": "Orem",
      "address": "Orem, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4.5 / 233 · 247 rating 90 · Listed: ATH · 247 lists commitment: Oklahoma",
    "links": {
      "s247": "https://247sports.com/Player/krew-jones-46143771/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-302",
    "name": "Lawrence Britt",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 601,
    "status": "ELSEWHERE",
    "school": {
      "name": "Lausanne Collegiate School",
      "address": "Memphis, TN"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 178 · 247 rating 90 · Listed: ATH · 247 lists commitment: Missouri",
    "links": {
      "s247": "https://247sports.com/Player/lawrence-britt-46154473/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-303",
    "name": "JJ Brown",
    "jersey": "—",
    "positionGroup": "DT",
    "classYear": 2027,
    "grade": null,
    "order": 602,
    "status": "ELSEWHERE",
    "school": {
      "name": "Parkview",
      "address": "Lilburn, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 300 · 247 rating 90 · Listed: ATH · 247 lists commitment: Clemson",
    "links": {
      "s247": "https://247sports.com/Player/jj-brown-46161034/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-304",
    "name": "Brayden Tyson",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 603,
    "status": "ELSEWHERE",
    "school": {
      "name": "Brookwood",
      "address": "Snellville, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 235 · 247 rating 90 · Listed: ATH · 247 lists commitment: South Carolina",
    "links": {
      "s247": "https://247sports.com/Player/brayden-tyson-46141748/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-305",
    "name": "Davion Crumitie",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 604,
    "status": "ELSEWHERE",
    "school": {
      "name": "Rickards",
      "address": "Tallahassee, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-10 / 150 · 247 rating 89 · Listed: ATH · 247 lists commitment: Vanderbilt",
    "links": {
      "s247": "https://247sports.com/Player/davion-crumitie-46157280/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-306",
    "name": "Cristian Mbamarah",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 605,
    "status": "ELSEWHERE",
    "school": {
      "name": "Cherokee Trail",
      "address": "Aurora, CO"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 175 · 247 rating 89 · Listed: ATH · 247 lists commitment: Northwestern",
    "links": {
      "s247": "https://247sports.com/Player/cristian-mbamarah-46158483/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-307",
    "name": "Brayden Booth",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 606,
    "status": "ELSEWHERE",
    "school": {
      "name": "South San Antonio",
      "address": "San Antonio, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 220 · 247 rating 89 · Listed: ATH · 247 lists commitment: North Carolina",
    "links": {
      "s247": "https://247sports.com/Player/brayden-booth-46152717/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-308",
    "name": "Ronnie Gomiller",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 607,
    "status": "ELSEWHERE",
    "school": {
      "name": "East St. Louis",
      "address": "East St. Louis, IL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-10 / 187 · 247 rating 89 · Listed: ATH · 247 lists commitment: Cincinnati",
    "links": {
      "s247": "https://247sports.com/Player/ronnie-gomiller-46145803/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-309",
    "name": "Kaston Lewis",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 608,
    "status": "ELSEWHERE",
    "school": {
      "name": "Iowa",
      "address": "Iowa, LA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 180 · 247 rating 89 · Listed: ATH · 247 lists commitment: Texas Tech",
    "links": {
      "s247": "https://247sports.com/Player/kaston-lewis-46163162/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-310",
    "name": "Brian Dillard",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 609,
    "status": "ELSEWHERE",
    "school": {
      "name": "Evans",
      "address": "Orlando, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 165 · 247 rating 88 · Listed: ATH · 247 lists commitment: South Florida",
    "links": {
      "s247": "https://247sports.com/Player/brian-dillard-46154732/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-311",
    "name": "Kaneilius Purdy",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 610,
    "status": "ELSEWHERE",
    "school": {
      "name": "Lake Wales",
      "address": "Lake Wales, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 190 · 247 rating 88 · Listed: ATH · 247 lists commitment: UCF",
    "links": {
      "s247": "https://247sports.com/Player/kaneilius-purdy-46146570/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-312",
    "name": "Jaxx DeJean",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 611,
    "status": "ELSEWHERE",
    "school": {
      "name": "Odebolt-Arthur",
      "address": "Odebolt, IA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3.5 / 233 · 247 rating 87 · Listed: ATH · 247 lists commitment: Iowa",
    "links": {
      "s247": "https://247sports.com/Player/jaxx-dejean-46148046/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-313",
    "name": "Stanley Smart",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 612,
    "status": "ELSEWHERE",
    "school": {
      "name": "Benedictine Military School",
      "address": "Savannah, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-10 / 200 · 247 rating 87 · Listed: ATH · 247 lists commitment: Virginia Tech",
    "links": {
      "s247": "https://247sports.com/Player/stanley-smart-46151805/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-314",
    "name": "Kevin Jackson",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 613,
    "status": "ELSEWHERE",
    "school": {
      "name": "Shadow Creek",
      "address": "Pearland, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-11.5 / 185 · 247 rating 84 · Listed: ATH · 247 lists commitment: Maryland",
    "links": {
      "s247": "https://247sports.com/Player/kevin-jackson-46146944/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of27-315",
    "name": "Brooklyn Bailey",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 614,
    "status": "ELSEWHERE",
    "school": {
      "name": "Mountain Vista",
      "address": "Littleton, CO"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-11 / 162 · 247 rating 84 · Listed: ATH · 247 lists commitment: San Diego State",
    "links": {
      "s247": "https://247sports.com/Player/brooklyn-bailey-46159384/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-001",
    "name": "Jayden Wade",
    "jersey": "—",
    "positionGroup": "QB",
    "classYear": 2028,
    "grade": null,
    "order": 700,
    "status": "ELSEWHERE",
    "school": {
      "name": "IMG Academy",
      "address": "Bradenton, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 190 · 247 rating 96 · Listed: QB · 247 lists commitment: Georgia",
    "links": {
      "s247": "https://247sports.com/Player/jayden-wade-46131982/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-002",
    "name": "Titus Huard",
    "jersey": "—",
    "positionGroup": "QB",
    "classYear": 2028,
    "grade": null,
    "order": 701,
    "status": "OFFERED",
    "school": {
      "name": "Valor Christian",
      "address": "Littleton, CO"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 205 · 247 rating 90 · Listed: QB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/titus-huard-46152644/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-003",
    "name": "Nash Henry",
    "jersey": "—",
    "positionGroup": "QB",
    "classYear": 2028,
    "grade": null,
    "order": 702,
    "status": "OFFERED",
    "school": {
      "name": "Norman North",
      "address": "Norman, OK"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 210 · 247 rating 90 · Listed: QB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/nash-henry-46161094/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-004",
    "name": "Luke Rubley",
    "jersey": "—",
    "positionGroup": "QB",
    "classYear": 2028,
    "grade": null,
    "order": 703,
    "status": "OFFERED",
    "school": {
      "name": "Regis Jesuit",
      "address": "Aurora, CO"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 180 · 247 rating 89 · Listed: QB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/luke-rubley-46150861/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-005",
    "name": "Matthew Lee",
    "jersey": "—",
    "positionGroup": "QB",
    "classYear": 2028,
    "grade": null,
    "order": 704,
    "status": "OFFERED",
    "school": {
      "name": "Loyola Academy",
      "address": "Wilmette, IL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 200 · 247 rating 88 · Listed: QB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/matthew-lee-46159666/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-006",
    "name": "Trey Wright",
    "jersey": "—",
    "positionGroup": "QB",
    "classYear": 2028,
    "grade": null,
    "order": 705,
    "status": "OFFERED",
    "school": {
      "name": "Frisco Lone Star",
      "address": "Frisco, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-9.5 / 175 · 247 rating 88 · Listed: QB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/trey-wright-46156668/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-007",
    "name": "Oscar Sloan",
    "jersey": "—",
    "positionGroup": "QB",
    "classYear": 2028,
    "grade": null,
    "order": 706,
    "status": "OFFERED",
    "school": {
      "name": "Center Grove",
      "address": "Greenwood, IN"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 190 · 247 rating 87 · Listed: QB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/oscar-sloan-46150827/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-008",
    "name": "Carter Morgan",
    "jersey": "—",
    "positionGroup": "QB",
    "classYear": 2028,
    "grade": null,
    "order": 707,
    "status": "OFFERED",
    "school": {
      "name": "Denton Guyer",
      "address": "Denton, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 200 · 247 rating 87 · Listed: QB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/carter-morgan-46159601/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-009",
    "name": "Tristan Johnson",
    "jersey": "—",
    "positionGroup": "QB",
    "classYear": 2028,
    "grade": null,
    "order": 708,
    "status": "OFFERED",
    "school": {
      "name": "Rockhurst",
      "address": "Kansas City, MO"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-10.5 / 175 · 247 rating 86 · Listed: QB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/tristan-johnson-46165933/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-010",
    "name": "Chase Grove",
    "jersey": "—",
    "positionGroup": "QB",
    "classYear": 2028,
    "grade": null,
    "order": 709,
    "status": "OFFERED",
    "school": {
      "name": "North Central",
      "address": "Indianapolis, IN"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2.5 / 184 · unrated · Listed: QB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/chase-grove-46155304/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-011",
    "name": "Zealand Danielson",
    "jersey": "—",
    "positionGroup": "QB",
    "classYear": 2028,
    "grade": null,
    "order": 710,
    "status": "OFFERED",
    "school": {
      "name": "Yukon",
      "address": "Yukon, OK"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2.5 / 205 · unrated · Listed: QB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/zealand-danielson-46159020/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-012",
    "name": "Jayshawn Mitchell",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2028,
    "grade": null,
    "order": 711,
    "status": "OFFERED",
    "school": {
      "name": "San Antonio Brennan",
      "address": "San Antonio, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-10 / 180 · 247 rating 90 · Listed: RB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/jayshawn-mitchell-46166449/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-013",
    "name": "Elijah Cromwell",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2028,
    "grade": null,
    "order": 712,
    "status": "OFFERED",
    "school": {
      "name": "Cherry Creek",
      "address": "Englewood, CO"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-11 / 180 · 247 rating 90 · Listed: RB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/elijah-cromwell-46153247/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-014",
    "name": "Zachary Belyeu",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2028,
    "grade": null,
    "order": 713,
    "status": "OFFERED",
    "school": {
      "name": "North Cobb",
      "address": "Kennesaw, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-11 / 210 · 247 rating 88 · Listed: RB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/zachary-belyeu-46153083/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-015",
    "name": "Jeremiah Tabor",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2028,
    "grade": null,
    "order": 714,
    "status": "OFFERED",
    "school": {
      "name": "Melissa",
      "address": "Melissa, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 220 · 247 rating 88 · Listed: RB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/jeremiah-tabor-46153261/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-016",
    "name": "Jhaheem Brown",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2028,
    "grade": null,
    "order": 715,
    "status": "OFFERED",
    "school": {
      "name": "Desert Edge",
      "address": "Goodyear, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-8 / 170 · 247 rating 87 · Listed: RB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/jhaheem-brown-46161349/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-017",
    "name": "Kason Williams",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2028,
    "grade": null,
    "order": 716,
    "status": "OFFERED",
    "school": {
      "name": "Alexandria",
      "address": "Alexandria, LA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 190 · 247 rating 87 · Listed: RB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/kason-williams-46161517/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-018",
    "name": "Byron Brandon",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2028,
    "grade": null,
    "order": 717,
    "status": "OFFERED",
    "school": {
      "name": "Desert Edge",
      "address": "Goodyear, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-10 / 185 · 247 rating 86 · Listed: RB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/byron-brandon-46155695/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-019",
    "name": "Kai Robinson",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2028,
    "grade": null,
    "order": 718,
    "status": "OFFERED",
    "school": {
      "name": "Lutheran North",
      "address": "St. Louis, MO"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-10 / 175 · 247 rating 85 · Listed: RB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/kai-robinson-46165791/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-020",
    "name": "Darrik Ward Jr.",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2028,
    "grade": null,
    "order": 719,
    "status": "OFFERED",
    "school": {
      "name": "Crandall",
      "address": "Crandall, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-10 / 180 · unrated · Listed: RB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/darrik-ward-jr-46161997/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-021",
    "name": "Chrystian Ervin",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2028,
    "grade": null,
    "order": 720,
    "status": "OFFERED",
    "school": {
      "name": "Saguaro",
      "address": "Scottsdale, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-10 / 205 · unrated · Listed: RB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/chrystian-ervin-46167766/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-022",
    "name": "Braylon Clark",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2028,
    "grade": null,
    "order": 721,
    "status": "OFFERED",
    "school": {
      "name": "Providence Day School",
      "address": "Charlotte, NC"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2.5 / 188 · 247 rating 91 · Listed: WR · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/braylon-clark-46151079/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-023",
    "name": "Jaelyn Easterling-Flores",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2028,
    "grade": null,
    "order": 722,
    "status": "OFFERED",
    "school": {
      "name": "Desert Edge",
      "address": "Goodyear, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 180 · 247 rating 90 · Listed: WR · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/jaelyn-easterling-flores-46151182/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-024",
    "name": "Jaden Hurndon",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2028,
    "grade": null,
    "order": 723,
    "status": "OFFERED",
    "school": {
      "name": "Longview",
      "address": "Longview, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 185 · 247 rating 90 · Listed: WR · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/jaden-hurndon-46155044/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-025",
    "name": "Derrell Hines Jr.",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2028,
    "grade": null,
    "order": 724,
    "status": "OFFERED",
    "school": {
      "name": "Carrollwood Day",
      "address": "Tampa, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 170 · 247 rating 90 · Listed: WR · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/derrell-hines-jr-46158469/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-026",
    "name": "Joshua Parker",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2028,
    "grade": null,
    "order": 725,
    "status": "OFFERED",
    "school": {
      "name": "Brandon",
      "address": "Brandon, MS"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 185 · 247 rating 90 · Listed: WR · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/joshua-parker-46163286/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-027",
    "name": "Carter St. Junious",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2028,
    "grade": null,
    "order": 726,
    "status": "OFFERED",
    "school": {
      "name": "Manvel",
      "address": "Manvel, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 185 · 247 rating 90 · Listed: WR · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/carter-st-junious-46160123/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-028",
    "name": "Ryan Richmond-McDavis",
    "jersey": "—",
    "positionGroup": "WR_SLOT",
    "classYear": 2028,
    "grade": null,
    "order": 727,
    "status": "OFFERED",
    "school": {
      "name": "Cardinal Ritter College Prep",
      "address": "St. Louis, MO"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-11 / 160 · 247 rating 90 · Listed: WR · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/ryan-richmond-mcdavis-46158604/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-029",
    "name": "Baron Marshall",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2028,
    "grade": null,
    "order": 728,
    "status": "OFFERED",
    "school": {
      "name": "Blue Valley Northwest",
      "address": "Overland Park, KS"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 175 · 247 rating 90 · Listed: WR · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/baron-marshall-46152068/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-030",
    "name": "David Thomas",
    "jersey": "—",
    "positionGroup": "WR_SLOT",
    "classYear": 2028,
    "grade": null,
    "order": 729,
    "status": "OFFERED",
    "school": {
      "name": "Knoxville Catholic",
      "address": "Knoxville, TN"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-10 / 161 · 247 rating 88 · Listed: WR · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/david-thomas-46154575/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-031",
    "name": "Corderro Bennett",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2028,
    "grade": null,
    "order": 730,
    "status": "OFFERED",
    "school": {
      "name": "Morton",
      "address": "Hammond, IN"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 190 · 247 rating 88 · Listed: WR · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/corderro-bennett-46161865/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-032",
    "name": "Gabriel Cabell",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2028,
    "grade": null,
    "order": 731,
    "status": "OFFERED",
    "school": {
      "name": "Christ Presbyterian Academy",
      "address": "Nashville, TN"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 200 · 247 rating 87 · Listed: WR · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/gabriel-cabell-46161230/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-033",
    "name": "Cameron Fuse",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2028,
    "grade": null,
    "order": 732,
    "status": "OFFERED",
    "school": {
      "name": "Lakeland",
      "address": "Lakeland, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 173 · 247 rating 86 · Listed: WR · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/cameron-fuse-46150881/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-034",
    "name": "Antron Branch",
    "jersey": "—",
    "positionGroup": "WR_SLOT",
    "classYear": 2028,
    "grade": null,
    "order": 733,
    "status": "OFFERED",
    "school": {
      "name": "McArthur",
      "address": "Hollywood, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-10 / 165 · 247 rating 86 · Listed: WR · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/antron-branch-46161361/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-035",
    "name": "Jordyn Murray",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2028,
    "grade": null,
    "order": 734,
    "status": "OFFERED",
    "school": {
      "name": "Tampa Bay Tech",
      "address": "Tampa, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 180 · unrated · Listed: WR · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/jordyn-murray-46165496/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-036",
    "name": "Doyle Morrison",
    "jersey": "—",
    "positionGroup": "WR_SLOT",
    "classYear": 2028,
    "grade": null,
    "order": 735,
    "status": "OFFERED",
    "school": {
      "name": "Gainesville",
      "address": "Gainesville, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-10 / 173 · unrated · Listed: WR · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/doyle-morrison-46166919/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-037",
    "name": "Hayden Green",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2028,
    "grade": null,
    "order": 736,
    "status": "OFFERED",
    "school": {
      "name": "North Crowley",
      "address": "Fort Worth, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 205 · unrated · Listed: WR · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/hayden-green-46161364/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-038",
    "name": "Camarre Palmer",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2028,
    "grade": null,
    "order": 737,
    "status": "OFFERED",
    "school": {
      "name": "Langham Creek",
      "address": "Houston, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 195 · unrated · Listed: WR · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/camarre-palmer-46165458/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-039",
    "name": "Chase Hancock",
    "jersey": "—",
    "positionGroup": "WR_SLOT",
    "classYear": 2028,
    "grade": null,
    "order": 738,
    "status": "OFFERED",
    "school": {
      "name": "Pulaski Academy",
      "address": "Little Rock, AR"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-9 / 160 · unrated · Listed: WR · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/chase-hancock-46158451/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-040",
    "name": "Israel Johnigan",
    "jersey": "—",
    "positionGroup": "TE",
    "classYear": 2028,
    "grade": null,
    "order": 739,
    "status": "OFFERED",
    "school": {
      "name": "Center",
      "address": "Kansas City, MO"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 220 · 247 rating 90 · Listed: TE · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/israel-johnigan-46166488/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-041",
    "name": "Connor Arant",
    "jersey": "—",
    "positionGroup": "TE",
    "classYear": 2028,
    "grade": null,
    "order": 740,
    "status": "OFFERED",
    "school": {
      "name": "Bixby",
      "address": "Bixby, OK"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 225 · 247 rating 90 · Listed: TE · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/connor-arant-46161620/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-042",
    "name": "Jack McNamara",
    "jersey": "—",
    "positionGroup": "TE",
    "classYear": 2028,
    "grade": null,
    "order": 741,
    "status": "OFFERED",
    "school": {
      "name": "Brother Rice",
      "address": "Oak Lawn, IL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 235 · 247 rating 89 · Listed: TE · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/jack-mcnamara-46158061/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-043",
    "name": "Breck Brady",
    "jersey": "—",
    "positionGroup": "TE",
    "classYear": 2028,
    "grade": null,
    "order": 742,
    "status": "OFFERED",
    "school": {
      "name": "Mustang",
      "address": "Mustang, OK"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-6 / 245 · 247 rating 89 · Listed: TE · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/breck-brady-46162331/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-044",
    "name": "Jordan McKinley",
    "jersey": "—",
    "positionGroup": "TE",
    "classYear": 2028,
    "grade": null,
    "order": 743,
    "status": "OFFERED",
    "school": {
      "name": "Loyola Academy",
      "address": "Wilmette, IL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 220 · 247 rating 88 · Listed: TE · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/jordan-mckinley-46155318/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-045",
    "name": "Max Jones",
    "jersey": "—",
    "positionGroup": "TE",
    "classYear": 2028,
    "grade": null,
    "order": 744,
    "status": "OFFERED",
    "school": {
      "name": "Parkway West",
      "address": "Ballwin, MO"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 210 · 247 rating 88 · Listed: TE · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/max-jones-46165579/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-046",
    "name": "Bennett Conyers",
    "jersey": "—",
    "positionGroup": "TE",
    "classYear": 2028,
    "grade": null,
    "order": 745,
    "status": "OFFERED",
    "school": {
      "name": "Montgomery Bell Academy",
      "address": "Nashville, TN"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 215 · 247 rating 87 · Listed: TE · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/bennett-conyers-46163975/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-047",
    "name": "Kemarion Jordan",
    "jersey": "—",
    "positionGroup": "TE",
    "classYear": 2028,
    "grade": null,
    "order": 746,
    "status": "OFFERED",
    "school": {
      "name": "Pine Forest",
      "address": "Pensacola, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 236 · unrated · Listed: TE · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/kemarion-jordan-46166673/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-048",
    "name": "Koleman Hendrix",
    "jersey": "—",
    "positionGroup": "TE",
    "classYear": 2028,
    "grade": null,
    "order": 747,
    "status": "OFFERED",
    "school": {
      "name": "Lubbock-Cooper Liberty",
      "address": "Lubbock, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-6 / 225 · unrated · Listed: TE · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/koleman-hendrix-46161747/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-049",
    "name": "AJ Criss",
    "jersey": "—",
    "positionGroup": "TE",
    "classYear": 2028,
    "grade": null,
    "order": 748,
    "status": "OFFERED",
    "school": {
      "name": "Krum",
      "address": "Krum, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-7 / 205 · unrated · Listed: TE · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/aj-criss-46168939/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-050",
    "name": "Sloan Blackwell",
    "jersey": "—",
    "positionGroup": "TE",
    "classYear": 2028,
    "grade": null,
    "order": 749,
    "status": "OFFERED",
    "school": {
      "name": "Waco Midway",
      "address": "Waco, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 225 · unrated · Listed: TE · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/sloan-blackwell-46166606/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-051",
    "name": "R'Monie Edwards",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2028,
    "grade": null,
    "order": 750,
    "status": "OFFERED",
    "school": {
      "name": "Cy Ranch",
      "address": "Cypress, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4.5 / 310 · 247 rating 91 · Listed: OT · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/rmonie-edwards-46153244/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-052",
    "name": "Wyatt VanBoening",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2028,
    "grade": null,
    "order": 751,
    "status": "OFFERED",
    "school": {
      "name": "Carmel Catholic",
      "address": "Mundelein, IL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-7 / 280 · 247 rating 90 · Listed: OT · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/wyatt-vanboening-46163620/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-053",
    "name": "Cannon Zubeck",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2028,
    "grade": null,
    "order": 752,
    "status": "OFFERED",
    "school": {
      "name": "Shawnee Mission East",
      "address": "Prairie Village, KS"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-7 / 270 · 247 rating 90 · Listed: OT · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/cannon-zubeck-46162138/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-054",
    "name": "Carter Barrett",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2028,
    "grade": null,
    "order": 753,
    "status": "OFFERED",
    "school": {
      "name": "Dowling Catholic",
      "address": "West Des Moines, IA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-6 / 305 · 247 rating 90 · Listed: OT · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/carter-barrett-46152199/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-055",
    "name": "Liam Davis",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2028,
    "grade": null,
    "order": 754,
    "status": "OFFERED",
    "school": {
      "name": "Hallsville",
      "address": "Hallsville, MO"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5.5 / 305 · 247 rating 90 · Listed: OT · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/liam-davis-46165581/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-056",
    "name": "King Pitts",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2028,
    "grade": null,
    "order": 755,
    "status": "OFFERED",
    "school": {
      "name": "Kapa'a",
      "address": "Kapa'a, HI"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 270 · 247 rating 89 · Listed: OT · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/king-pitts-46150208/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-057",
    "name": "Reece Wilmes",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2028,
    "grade": null,
    "order": 756,
    "status": "OFFERED",
    "school": {
      "name": "Lawrence Free State",
      "address": "Lawrence, KS"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 285 · 247 rating 89 · Listed: OT · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/reece-wilmes-46159544/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-058",
    "name": "Declan Heying",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2028,
    "grade": null,
    "order": 757,
    "status": "OFFERED",
    "school": {
      "name": "Des Moines Christian School",
      "address": "Des Moines, IA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 270 · 247 rating 88 · Listed: OT · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/declan-heying-46160784/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-059",
    "name": "Ryan Rodgers",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2028,
    "grade": null,
    "order": 758,
    "status": "OFFERED",
    "school": {
      "name": "Calvary Baptist Academy",
      "address": "Shreveport, LA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 280 · 247 rating 87 · Listed: OT · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/ryan-rodgers-46165895/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-060",
    "name": "Hayden Shannon",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2028,
    "grade": null,
    "order": 759,
    "status": "OFFERED",
    "school": {
      "name": "PCM",
      "address": "Monroe, IA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 275 · 247 rating 87 · Listed: OT · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/hayden-shannon-46157325/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-061",
    "name": "Darrius Smiley",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2028,
    "grade": null,
    "order": 760,
    "status": "OFFERED",
    "school": {
      "name": "St. Mary's",
      "address": "St. Louis, MO"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-6 / 290 · 247 rating 86 · Listed: OT · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/darrius-smiley-46152820/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-062",
    "name": "Gerrit DeWaard",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2028,
    "grade": null,
    "order": 761,
    "status": "OFFERED",
    "school": {
      "name": "Malcolm",
      "address": "Malcolm, NE"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-7 / 300 · 247 rating 86 · Listed: OT · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/gerrit-dewaard-46166186/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-063",
    "name": "Cooper Clark",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2028,
    "grade": null,
    "order": 762,
    "status": "OFFERED",
    "school": {
      "name": "Mustang",
      "address": "Mustang, OK"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-6 / 260 · 247 rating 86 · Listed: OT · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/cooper-clark-46166947/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-064",
    "name": "Sean Sherman",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2028,
    "grade": null,
    "order": 763,
    "status": "OFFERED",
    "school": {
      "name": "Anna",
      "address": "Anna, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3.5 / 340 · 247 rating 85 · Listed: OT · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/sean-sherman-46163910/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-065",
    "name": "Thomas Inkelaar",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2028,
    "grade": null,
    "order": 764,
    "status": "OFFERED",
    "school": {
      "name": "Andover Central",
      "address": "Andover, KS"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-6 / 330 · unrated · Listed: OT · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/thomas-inkelaar-46166279/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-066",
    "name": "Chase Mayes",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2028,
    "grade": null,
    "order": 765,
    "status": "OFFERED",
    "school": {
      "name": "Cy Lakes",
      "address": "Katy, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 270 · unrated · Listed: OT · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/chase-mayes-46165424/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-067",
    "name": "Gavin Wilson",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2028,
    "grade": null,
    "order": 766,
    "status": "OFFERED",
    "school": {
      "name": "Bixby",
      "address": "Bixby, OK"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 266 · 247 rating 90 · Listed: IOL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/gavin-wilson-46167624/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-068",
    "name": "Ty Hathaway",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2028,
    "grade": null,
    "order": 767,
    "status": "OFFERED",
    "school": {
      "name": "Lipscomb Academy",
      "address": "Nashville, TN"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4.5 / 265 · 247 rating 89 · Listed: IOL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/ty-hathaway-46166594/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-069",
    "name": "PJ Evans",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2028,
    "grade": null,
    "order": 768,
    "status": "OFFERED",
    "school": {
      "name": "Jackson Academy",
      "address": "Jackson, MS"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3.5 / 310 · 247 rating 87 · Listed: IOL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/pj-evans-46152518/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-070",
    "name": "Jude Womack",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2028,
    "grade": null,
    "order": 769,
    "status": "OFFERED",
    "school": {
      "name": "Legacy Christian Academy",
      "address": "Frisco, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 315 · 247 rating 86 · Listed: IOL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/jude-womack-46164725/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-071",
    "name": "Colton Ott",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2028,
    "grade": null,
    "order": 770,
    "status": "OFFERED",
    "school": {
      "name": "Fairview",
      "address": "Boulder, CO"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4.5 / 310 · 247 rating 85 · Listed: IOL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/colton-ott-46159830/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-072",
    "name": "Ashton Coles",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2028,
    "grade": null,
    "order": 771,
    "status": "OFFERED",
    "school": {
      "name": "Ensworth",
      "address": "Nashville, TN"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 325 · 247 rating 85 · Listed: IOL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/ashton-coles-46166595/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-073",
    "name": "Kendrick Morgan",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2028,
    "grade": null,
    "order": 772,
    "status": "OFFERED",
    "school": {
      "name": "Frisco Lone Star",
      "address": "Frisco, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 280 · unrated · Listed: IOL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/kendrick-morgan-46154282/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-074",
    "name": "Abram Bengard",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2028,
    "grade": null,
    "order": 773,
    "status": "OFFERED",
    "school": {
      "name": "Frisco Lone Star",
      "address": "Frisco, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 280 · unrated · Listed: IOL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/abram-bengard-46151168/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-075",
    "name": "Carl Noisette",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2028,
    "grade": null,
    "order": 774,
    "status": "OFFERED",
    "school": {
      "name": "Gainesville",
      "address": "Gainesville, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 270 · unrated · Listed: IOL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/carl-noisette-46151909/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-076",
    "name": "Kameron McGee",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2028,
    "grade": null,
    "order": 775,
    "status": "OFFERED",
    "school": {
      "name": "Brother Rice",
      "address": "Oak Lawn, IL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 245 · 247 rating 98 · Listed: Edge · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/kameron-mcgee-46154559/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-077",
    "name": "Darieon Prescott",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2028,
    "grade": null,
    "order": 776,
    "status": "ELSEWHERE",
    "school": {
      "name": "Bolingbrook",
      "address": "Bolingbrook, IL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 255 · 247 rating 95 · Listed: Edge · 247 lists commitment: Notre Dame",
    "links": {
      "s247": "https://247sports.com/Player/darieon-prescott-46154828/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-078",
    "name": "Antonio Thomas Jr.",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2028,
    "grade": null,
    "order": 777,
    "status": "OFFERED",
    "school": {
      "name": "Carrollwood Day",
      "address": "Tampa, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 240 · 247 rating 93 · Listed: Edge · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/antonio-thomas-jr-46155485/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-079",
    "name": "Landen Wade",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2028,
    "grade": null,
    "order": 778,
    "status": "OFFERED",
    "school": {
      "name": "Basha",
      "address": "Chandler, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 250 · 247 rating 91 · Listed: Edge · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/landen-wade-46150755/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-080",
    "name": "Jevyn Severson",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2028,
    "grade": null,
    "order": 779,
    "status": "OFFERED",
    "school": {
      "name": "Madrid",
      "address": "Madrid, IA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 230 · 247 rating 91 · Listed: Edge · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/jevyn-severson-46158003/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-081",
    "name": "Jalanie George",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2028,
    "grade": null,
    "order": 780,
    "status": "OFFERED",
    "school": {
      "name": "Desert Edge",
      "address": "Goodyear, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4.5 / 245 · 247 rating 90 · Listed: Edge · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/jalanie-george-46151179/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-082",
    "name": "Keoni Snipes",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2028,
    "grade": null,
    "order": 781,
    "status": "OFFERED",
    "school": {
      "name": "Saraland",
      "address": "Saraland, AL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 245 · 247 rating 90 · Listed: Edge · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/keoni-snipes-46158544/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-083",
    "name": "Tristian Henderson",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2028,
    "grade": null,
    "order": 782,
    "status": "OFFERED",
    "school": {
      "name": "Pine Forest",
      "address": "Pensacola, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 225 · 247 rating 90 · Listed: Edge · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/tristian-henderson-46158796/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-084",
    "name": "Steven McClendon",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2028,
    "grade": null,
    "order": 783,
    "status": "OFFERED",
    "school": {
      "name": "Douglas County",
      "address": "Douglasville, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 215 · 247 rating 90 · Listed: Edge · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/steven-mcclendon-46162815/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-085",
    "name": "Chance Archangel",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2028,
    "grade": null,
    "order": 784,
    "status": "ELSEWHERE",
    "school": {
      "name": "Westgate",
      "address": "New Iberia, LA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 240 · 247 rating 89 · Listed: Edge · 247 lists commitment: Texas A&M",
    "links": {
      "s247": "https://247sports.com/Player/chance-archangel-46157646/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-086",
    "name": "Nasir Walker",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2028,
    "grade": null,
    "order": 785,
    "status": "OFFERED",
    "school": {
      "name": "Crean Lutheran",
      "address": "Irvine, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-6 / 230 · 247 rating 89 · Listed: Edge · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/nasir-walker-46161471/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-087",
    "name": "DeMarcus Dale-Brown",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2028,
    "grade": null,
    "order": 786,
    "status": "OFFERED",
    "school": {
      "name": "Williamson",
      "address": "Mobile, AL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 230 · 247 rating 88 · Listed: Edge · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/demarcus-dale-brown-46158391/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-088",
    "name": "Jaylen Johnson",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2028,
    "grade": null,
    "order": 787,
    "status": "OFFERED",
    "school": {
      "name": "Bishop Miege",
      "address": "Mission, KS"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 210 · 247 rating 88 · Listed: Edge · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/jaylen-johnson-46164765/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-089",
    "name": "Remington Merlau",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2028,
    "grade": null,
    "order": 788,
    "status": "OFFERED",
    "school": {
      "name": "Rose Hill",
      "address": "Rose Hill, KS"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 235 · 247 rating 87 · Listed: Edge · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/remington-merlau-46159564/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-090",
    "name": "LeRoi Kamtio",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2028,
    "grade": null,
    "order": 789,
    "status": "OFFERED",
    "school": {
      "name": "Gardner Edgerton",
      "address": "Gardner, KS"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 230 · unrated · Listed: Edge · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/leroi-kamtio-46168067/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-091",
    "name": "Jameer Whyce",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2028,
    "grade": null,
    "order": 790,
    "status": "ELSEWHERE",
    "school": {
      "name": "Trotwood-Madison",
      "address": "Dayton, OH"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 270 · 247 rating 91 · Listed: DL · 247 lists commitment: Ohio State",
    "links": {
      "s247": "https://247sports.com/Player/jameer-whyce-46149358/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-092",
    "name": "RJ Wyms",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2028,
    "grade": null,
    "order": 791,
    "status": "OFFERED",
    "school": {
      "name": "College Park",
      "address": "The Woodlands, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 255 · 247 rating 91 · Listed: DL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/rj-wyms-46161279/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-093",
    "name": "David Dotson",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2028,
    "grade": null,
    "order": 792,
    "status": "OFFERED",
    "school": {
      "name": "Atascocita",
      "address": "Humble, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 240 · 247 rating 91 · Listed: DL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/david-dotson-46165795/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-094",
    "name": "Myles Tate",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2028,
    "grade": null,
    "order": 793,
    "status": "OFFERED",
    "school": {
      "name": "Woodward Academy",
      "address": "College Park, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 225 · 247 rating 90 · Listed: DL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/myles-tate-46158244/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-095",
    "name": "Caleb Tucker",
    "jersey": "—",
    "positionGroup": "DT",
    "classYear": 2028,
    "grade": null,
    "order": 794,
    "status": "OFFERED",
    "school": {
      "name": "Mount Carmel",
      "address": "Chicago, IL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 355 · 247 rating 90 · Listed: DL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/caleb-tucker-46154032/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-096",
    "name": "Zylen Little",
    "jersey": "—",
    "positionGroup": "DT",
    "classYear": 2028,
    "grade": null,
    "order": 795,
    "status": "OFFERED",
    "school": {
      "name": "Carrollwood Day",
      "address": "Tampa, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1.5 / 290 · 247 rating 90 · Listed: DL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/zylen-little-46155261/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-097",
    "name": "Zayre Thomas",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2028,
    "grade": null,
    "order": 796,
    "status": "OFFERED",
    "school": {
      "name": "Raytown South",
      "address": "Kansas City, MO"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 240 · 247 rating 89 · Listed: DL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/zayre-thomas-46158415/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-098",
    "name": "Tory Clark",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2028,
    "grade": null,
    "order": 797,
    "status": "OFFERED",
    "school": {
      "name": "Woodward Academy",
      "address": "College Park, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 275 · 247 rating 89 · Listed: DL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/tory-clark-46160342/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-099",
    "name": "Chase Foster II",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2028,
    "grade": null,
    "order": 798,
    "status": "OFFERED",
    "school": {
      "name": "IMG Academy",
      "address": "Bradenton, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 260 · 247 rating 89 · Listed: DL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/chase-foster-ii-46151610/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-100",
    "name": "Andrae Maddox",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2028,
    "grade": null,
    "order": 799,
    "status": "OFFERED",
    "school": {
      "name": "Oxford",
      "address": "Oxford, MS"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 280 · 247 rating 89 · Listed: DL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/andrae-maddox-46142017/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-101",
    "name": "Isaac Kalubi Lukuni",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2028,
    "grade": null,
    "order": 800,
    "status": "OFFERED",
    "school": {
      "name": "Rabun Gap-Nacoochee",
      "address": "Rabun Gap, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 280 · 247 rating 89 · Listed: DL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/isaac-kalubi-lukuni-46165880/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-102",
    "name": "Savon Jamison",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2028,
    "grade": null,
    "order": 801,
    "status": "OFFERED",
    "school": {
      "name": "Joliet West",
      "address": "Joliet, IL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 250 · 247 rating 88 · Listed: DL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/savon-jamison-46167374/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-103",
    "name": "Micah Santiago",
    "jersey": "—",
    "positionGroup": "DT",
    "classYear": 2028,
    "grade": null,
    "order": 802,
    "status": "OFFERED",
    "school": {
      "name": "Omaha Westside",
      "address": "Omaha, NE"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 295 · 247 rating 88 · Listed: DL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/micah-santiago-46159187/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-104",
    "name": "Logan Lokey",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2028,
    "grade": null,
    "order": 803,
    "status": "OFFERED",
    "school": {
      "name": "Denton Guyer",
      "address": "Denton, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 250 · 247 rating 88 · Listed: DL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/logan-lokey-46150622/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-105",
    "name": "Antonio Flowers",
    "jersey": "—",
    "positionGroup": "DT",
    "classYear": 2028,
    "grade": null,
    "order": 804,
    "status": "OFFERED",
    "school": {
      "name": "Chambers",
      "address": "Charlotte, NC"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 300 · 247 rating 88 · Listed: DL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/antonio-flowers-46166813/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-106",
    "name": "Charles Ibe",
    "jersey": "—",
    "positionGroup": "DT",
    "classYear": 2028,
    "grade": null,
    "order": 805,
    "status": "OFFERED",
    "school": {
      "name": "Providence Day School",
      "address": "Charlotte, NC"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 290 · 247 rating 87 · Listed: DL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/charles-ibe-46148117/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-107",
    "name": "Noah Ross",
    "jersey": "—",
    "positionGroup": "DT",
    "classYear": 2028,
    "grade": null,
    "order": 806,
    "status": "OFFERED",
    "school": {
      "name": "Richardson",
      "address": "Richardson, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 295 · 247 rating 86 · Listed: DL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/noah-ross-46155470/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-108",
    "name": "Bajani Jones",
    "jersey": "—",
    "positionGroup": "DT",
    "classYear": 2028,
    "grade": null,
    "order": 807,
    "status": "OFFERED",
    "school": {
      "name": "Lanier",
      "address": "Buford, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 305 · 247 rating 86 · Listed: DL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/bajani-jones-46158610/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-109",
    "name": "Aaron Snell",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2028,
    "grade": null,
    "order": 808,
    "status": "OFFERED",
    "school": {
      "name": "Waxahachie",
      "address": "Waxahachie, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 265 · 247 rating 84 · Listed: DL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/aaron-snell-46158725/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-110",
    "name": "Jordyn Grant",
    "jersey": "—",
    "positionGroup": "DT",
    "classYear": 2028,
    "grade": null,
    "order": 809,
    "status": "OFFERED",
    "school": {
      "name": "College Park",
      "address": "The Woodlands, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 300 · unrated · Listed: DL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/jordyn-grant-46164723/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-111",
    "name": "Max Farmer",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2028,
    "grade": null,
    "order": 810,
    "status": "OFFERED",
    "school": {
      "name": "Klein Oak",
      "address": "Spring, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 280 · unrated · Listed: DL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/max-farmer-46165412/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-112",
    "name": "Jayln Smith",
    "jersey": "—",
    "positionGroup": "DE",
    "classYear": 2028,
    "grade": null,
    "order": 811,
    "status": "OFFERED",
    "school": {
      "name": "South Oak Cliff",
      "address": "Dallas, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 280 · unrated · Listed: DL · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/jayln-smith-46168884/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-113",
    "name": "Jameer Miles",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2028,
    "grade": null,
    "order": 812,
    "status": "OFFERED",
    "school": {
      "name": "Carmel Catholic",
      "address": "Mundelein, IL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 192 · 247 rating 91 · Listed: LB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/jameer-miles-46162585/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-114",
    "name": "Blake Nesbitt",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2028,
    "grade": null,
    "order": 813,
    "status": "OFFERED",
    "school": {
      "name": "Kirksville",
      "address": "Kirksville, MO"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2.5 / 220 · 247 rating 90 · Listed: LB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/blake-nesbitt-46155036/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-115",
    "name": "Deshawn Simmons",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2028,
    "grade": null,
    "order": 814,
    "status": "OFFERED",
    "school": {
      "name": "San Antonio Harlan",
      "address": "San Antonio, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 215 · 247 rating 90 · Listed: LB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/deshawn-simmons-46159192/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-116",
    "name": "Cale Britt",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2028,
    "grade": null,
    "order": 815,
    "status": "ELSEWHERE",
    "school": {
      "name": "Bishop Moore Catholic",
      "address": "Orlando, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 209 · 247 rating 89 · Listed: LB · 247 lists commitment: Wisconsin",
    "links": {
      "s247": "https://247sports.com/Player/cale-britt-46162068/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-117",
    "name": "Travion Washington",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2028,
    "grade": null,
    "order": 816,
    "status": "OFFERED",
    "school": {
      "name": "Brandon",
      "address": "Brandon, MS"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 205 · 247 rating 88 · Listed: LB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/travion-washington-46154903/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-118",
    "name": "Israel Samuel",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2028,
    "grade": null,
    "order": 817,
    "status": "OFFERED",
    "school": {
      "name": "Lake Highlands",
      "address": "Dallas, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 195 · 247 rating 88 · Listed: LB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/israel-samuel-46166376/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-119",
    "name": "Reginald Ward",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2028,
    "grade": null,
    "order": 818,
    "status": "OFFERED",
    "school": {
      "name": "Williamson",
      "address": "Mobile, AL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 200 · 247 rating 87 · Listed: LB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/reginald-ward-46164781/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-120",
    "name": "Anthony Busby",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2028,
    "grade": null,
    "order": 819,
    "status": "OFFERED",
    "school": {
      "name": "St. Louis University",
      "address": "St. Louis, MO"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 210 · unrated · Listed: LB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/anthony-busby-46161307/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-121",
    "name": "Dallas Gray",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2028,
    "grade": null,
    "order": 820,
    "status": "OFFERED",
    "school": {
      "name": "Wichita Northwest",
      "address": "Wichita, KS"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 207 · unrated · Listed: LB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/dallas-gray-46166278/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-122",
    "name": "Tyce Payne",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2028,
    "grade": null,
    "order": 821,
    "status": "OFFERED",
    "school": {
      "name": "Vernon",
      "address": "Vernon, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 205 · unrated · Listed: LB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/tyce-payne-46167521/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-123",
    "name": "Jason Catchings",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2028,
    "grade": null,
    "order": 822,
    "status": "OFFERED",
    "school": {
      "name": "Richardson",
      "address": "Richardson, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 210 · unrated · Listed: LB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/jason-catchings-46168076/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-124",
    "name": "Nekhi Lambeth",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2028,
    "grade": null,
    "order": 823,
    "status": "OFFERED",
    "school": {
      "name": "Desert Edge",
      "address": "Goodyear, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 175 · 247 rating 90 · Listed: CB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/nekhi-lambeth-46151180/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-125",
    "name": "Man Robinson",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2028,
    "grade": null,
    "order": 824,
    "status": "OFFERED",
    "school": {
      "name": "IMG Academy",
      "address": "Bradenton, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-10 / 178 · 247 rating 89 · Listed: CB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/man-robinson-46151818/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-126",
    "name": "Dale Perry",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2028,
    "grade": null,
    "order": 825,
    "status": "OFFERED",
    "school": {
      "name": "Langston Hughes",
      "address": "Fairburn, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 170 · 247 rating 89 · Listed: CB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/dale-perry-46164404/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-127",
    "name": "Bryce Willingham",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2028,
    "grade": null,
    "order": 826,
    "status": "OFFERED",
    "school": {
      "name": "North Atlanta",
      "address": "Atlanta, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 180 · 247 rating 88 · Listed: CB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/bryce-willingham-46158521/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-128",
    "name": "Kahmaree Crumity",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2028,
    "grade": null,
    "order": 827,
    "status": "OFFERED",
    "school": {
      "name": "Tallahassee Lincoln",
      "address": "Tallahassee, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-9.5 / 173 · 247 rating 88 · Listed: CB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/kahmaree-crumity-46159419/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-129",
    "name": "Quinn Pollock",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2028,
    "grade": null,
    "order": 828,
    "status": "OFFERED",
    "school": {
      "name": "McEachern",
      "address": "Powder Springs, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 185 · 247 rating 88 · Listed: CB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/quinn-pollock-46165886/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-130",
    "name": "Zamfir Dailey Jr.",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2028,
    "grade": null,
    "order": 829,
    "status": "OFFERED",
    "school": {
      "name": "De Smet Jesuit",
      "address": "St. Louis, MO"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 165 · 247 rating 88 · Listed: CB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/zamfir-dailey-jr-46167070/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-131",
    "name": "Jordan Hall",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2028,
    "grade": null,
    "order": 830,
    "status": "OFFERED",
    "school": {
      "name": "Aledo",
      "address": "Aledo, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-9.5 / 165 · 247 rating 87 · Listed: CB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/jordan-hall-46153279/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-132",
    "name": "Sean Sigler",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2028,
    "grade": null,
    "order": 831,
    "status": "OFFERED",
    "school": {
      "name": "Thompson",
      "address": "Alabaster, AL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 195 · 247 rating 87 · Listed: CB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/sean-sigler-46165537/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-133",
    "name": "Brendon Davis",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2028,
    "grade": null,
    "order": 832,
    "status": "OFFERED",
    "school": {
      "name": "Buford",
      "address": "Buford, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 173 · 247 rating 87 · Listed: CB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/brendon-davis-46162763/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-134",
    "name": "Khristian Anderson",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2028,
    "grade": null,
    "order": 833,
    "status": "OFFERED",
    "school": {
      "name": "American Heritage",
      "address": "Plantation, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-11 / 180 · 247 rating 84 · Listed: CB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/khristian-anderson-46160927/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-135",
    "name": "Cordey Sherman",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2028,
    "grade": null,
    "order": 834,
    "status": "OFFERED",
    "school": {
      "name": "C.E. King",
      "address": "Houston, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-11 / 160 · unrated · Listed: CB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/cordey-sherman-46155288/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-136",
    "name": "Marco Munoz",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2028,
    "grade": null,
    "order": 835,
    "status": "OFFERED",
    "school": {
      "name": "San Antonio Brandeis",
      "address": "San Antonio, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-11 / 170 · unrated · Listed: CB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/marco-munoz-46168415/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-137",
    "name": "Antonio Dural",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2028,
    "grade": null,
    "order": 836,
    "status": "OFFERED",
    "school": {
      "name": "Klein Oak",
      "address": "Spring, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-10 / 170 · unrated · Listed: CB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/antonio-dural-46157351/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-138",
    "name": "Derek Templeton",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2028,
    "grade": null,
    "order": 837,
    "status": "OFFERED",
    "school": {
      "name": "Jones",
      "address": "Jones, OK"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 170 · unrated · Listed: CB · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/derek-templeton-46169390/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-139",
    "name": "Jackson Parker",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2028,
    "grade": null,
    "order": 838,
    "status": "OFFERED",
    "school": {
      "name": "Garces Memorial",
      "address": "Bakersfield, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 185 · 247 rating 91 · Listed: S · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/jackson-parker-46165254/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-140",
    "name": "Braylen Bedford",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2028,
    "grade": null,
    "order": 839,
    "status": "OFFERED",
    "school": {
      "name": "Brentwood Academy",
      "address": "Brentwood, TN"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-10.5 / 170 · 247 rating 90 · Listed: S · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/braylen-bedford-46139764/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-141",
    "name": "Kentrell Gaddis II",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2028,
    "grade": null,
    "order": 840,
    "status": "OFFERED",
    "school": {
      "name": "Choctaw",
      "address": "Choctaw, OK"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-11 / 165 · 247 rating 90 · Listed: S · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/kentrell-gaddis-ii-46166373/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-142",
    "name": "Drae Simmons",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2028,
    "grade": null,
    "order": 841,
    "status": "OFFERED",
    "school": {
      "name": "Atlanta",
      "address": "Atlanta, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 180 · 247 rating 90 · Listed: S · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/drae-simmons-46167112/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-143",
    "name": "Jarvious Owens Jr.",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2028,
    "grade": null,
    "order": 842,
    "status": "OFFERED",
    "school": {
      "name": "Langham Creek",
      "address": "Houston, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 175 · 247 rating 89 · Listed: S · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/jarvious-owens-jr-46164489/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-144",
    "name": "Bryce Hayes-Roberts",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2028,
    "grade": null,
    "order": 843,
    "status": "OFFERED",
    "school": {
      "name": "IMG Academy",
      "address": "Bradenton, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 185 · 247 rating 89 · Listed: S · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/bryce-hayes-roberts-46165800/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-145",
    "name": "Desiray Christian",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2028,
    "grade": null,
    "order": 844,
    "status": "OFFERED",
    "school": {
      "name": "Emerald",
      "address": "Greenwood, SC"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-0 / 190 · unrated · Listed: S · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/desiray-christian-46165083/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-146",
    "name": "Cooper Cranston",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2028,
    "grade": null,
    "order": 845,
    "status": "OFFERED",
    "school": {
      "name": "Holcomb",
      "address": "Holcomb, KS"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 195 · unrated · Listed: S · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/cooper-cranston-46167716/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-147",
    "name": "Isaiah Taylor",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2028,
    "grade": null,
    "order": 846,
    "status": "OFFERED",
    "school": {
      "name": "Keller Central",
      "address": "Keller, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 170 · 247 rating 94 · Listed: ATH · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/isaiah-taylor-46160186/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-148",
    "name": "Grant Bowen",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2028,
    "grade": null,
    "order": 847,
    "status": "OFFERED",
    "school": {
      "name": "Immaculate Conception",
      "address": "Elmhurst, IL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-4 / 220 · 247 rating 90 · Listed: ATH · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/grant-bowen-46161719/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-149",
    "name": "Ridge Janes",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2028,
    "grade": null,
    "order": 848,
    "status": "OFFERED",
    "school": {
      "name": "De Smet Jesuit",
      "address": "St. Louis, MO"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-5 / 225 · 247 rating 90 · Listed: ATH · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/ridge-janes-46150287/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-150",
    "name": "Owen Price",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2028,
    "grade": null,
    "order": 849,
    "status": "OFFERED",
    "school": {
      "name": "Central Catholic",
      "address": "Grand Island, NE"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 210 · 247 rating 90 · Listed: ATH · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/owen-price-46167717/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-151",
    "name": "Brayden Bonik",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2028,
    "grade": null,
    "order": 850,
    "status": "OFFERED",
    "school": {
      "name": "Fort Bend Ridge Point",
      "address": "Missouri City, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 195 · 247 rating 89 · Listed: ATH · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/brayden-bonik-46150522/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-152",
    "name": "Cole Pollock",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2028,
    "grade": null,
    "order": 851,
    "status": "OFFERED",
    "school": {
      "name": "McEachern",
      "address": "Powder Springs, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 185 · 247 rating 88 · Listed: ATH · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/cole-pollock-46159227/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-153",
    "name": "Kameron Battle",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2028,
    "grade": null,
    "order": 852,
    "status": "OFFERED",
    "school": {
      "name": "Carrollwood Day",
      "address": "Tampa, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-8.5 / 183 · 247 rating 87 · Listed: ATH · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/kameron-battle-46158257/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-154",
    "name": "Sharad Haire",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2028,
    "grade": null,
    "order": 853,
    "status": "OFFERED",
    "school": {
      "name": "Jones",
      "address": "Orlando, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 165 · 247 rating 85 · Listed: ATH · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/sharad-haire-46159965/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-155",
    "name": "Trey Finney",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2028,
    "grade": null,
    "order": 854,
    "status": "OFFERED",
    "school": {
      "name": "Willis",
      "address": "Willis, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-9 / 165 · 247 rating 85 · Listed: ATH · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/trey-finney-46139954/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-156",
    "name": "Jordan Moore",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2028,
    "grade": null,
    "order": 855,
    "status": "OFFERED",
    "school": {
      "name": "Brother Rice",
      "address": "Oak Lawn, IL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-3 / 185 · unrated · Listed: ATH · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/jordan-moore-46156797/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-157",
    "name": "De'Jay Davenport",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2028,
    "grade": null,
    "order": 856,
    "status": "OFFERED",
    "school": {
      "name": "Bay",
      "address": "Panama City, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-1 / 190 · unrated · Listed: ATH · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/dejay-davenport-46165535/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-158",
    "name": "Langston Hakeem",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2028,
    "grade": null,
    "order": 857,
    "status": "OFFERED",
    "school": {
      "name": "Woodward Academy",
      "address": "College Park, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 5-10 / 175 · unrated · Listed: ATH · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/langston-hakeem-46161647/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  },
  {
    "id": "of28-159",
    "name": "Kipton Neighbors",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2028,
    "grade": null,
    "order": 858,
    "status": "OFFERED",
    "school": {
      "name": "Gilmer",
      "address": "Gilmer, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "247 offer board · 6-2 / 195 · unrated · Listed: ATH · uncommitted",
    "links": {
      "s247": "https://247sports.com/Player/kipton-neighbors-46159196/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 14, 2026"
  }
];

const _STAFF_GROUPS = [
  {
    label: "Coaches",
    members: [
      "Klein HC", "Gleeson OC", "Peterson DC", "Woodson Co-DC", "Weber STC",
      "Ward AHC/WR", "DeRuyter AHC Def", "Ellsworth QB", "Patterson RB",
      "Buford IR", "Lepak TE", "Schmidt OL", "Johnson DB", "Toth LB",
      "Mason OLB", "Wyatt DL", "Dove DT",
    ],
  },
  {
    label: "Assistants & Performance",
    members: [
      "Maguire Asst QB", "Ohara Asst RB", "Liddle Asst OL", "Emmanuel OL Analyst",
      "Kardulis Asst S", "Fowler ST QC", "Linton Def Analyst",
      "Jacobs S&C", "Reid Assoc S&C", "Carter Asst S&C", "Porter Asst S&C",
      "Young Asst S&C",
    ],
  },
  {
    label: "Personnel & Operations",
    members: [
      // Add recruiting / personnel / operations staff here as "Name Role".
    ],
  },
];

window.BOARD_CONFIG = {
  school: {
    id: "kansas-state",
    name: "Kansas State Football",
    short: "K-STATE",
    primary: "#512888", // K-State Royal Purple
    accent: "#D1D1D1",  // K-State silver
  },
  staffGroups: _STAFF_GROUPS,
  seedProspects: _SEED_PROSPECTS,
  staffPassword: "Recruit26", // change before sharing with staff
  // supabase: { url: "https://YOUR-PROJECT.supabase.co", anonKey: "YOUR-ANON-KEY" },
};

/* generated by build_school.py */
window.BOARD_CONFIG.iconDataUrl = "data:image/png;base64,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";
