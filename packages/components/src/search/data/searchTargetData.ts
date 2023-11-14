import { contactData } from "../domain/types";

export const documents = [
  {
    id: 1,
    title: "Moby Dick",
    text: "Call me Ishmael. Some years ago...",
    category: "fiction",
  },
  {
    id: 2,
    title: "Zen and the Art of Motorcycle Maintenance",
    text: "I can see by my watch...",
    category: "fiction",
  },
  {
    id: 3,
    title: "Neuromancer",
    text: "The sky above the port was...",
    category: "fiction",
  },
  {
    id: 4,
    title: "Zen and the Art of Archery",
    text: "At first sight it must seem...",
    category: "non-fiction",
  },
  // ...and more
];

export const _contactsListData = [
  {
    lastname: "Venus",
    firstname: "Grimes",
    email: "lectus.rutrum@Duisa.edu",
  },
  {
    lastname: "Fletcher",
    firstname: "Owen",
    email: "metus@Aenean.org",
  },
  {
    lastname: "William",
    firstname: "Hale",
    email: "eu.dolor@risusodio.edu",
  },
  {
    lastname: "TaShya",
    firstname: "Cash",
    email: "tincidunt.orci.quis@nuncnullavulputate.co.uk",
  },
  {
    lastname: "Jakeem",
    firstname: "Walker",
    email: "Morbi.vehicula.Pellentesque@faucibusorci.org",
  },
];

const generateRandomId = () => {
  return Math.floor(Math.random() * 10000);
};

export const addIds = (nonAddedIdList) => {
  const addedIdList = nonAddedIdList.map((contact) => {
    const addedContact = { ...contact, id: generateRandomId() };
    return addedContact;
  });
  return addedIdList;
};

export const contactsListData: contactData[] = [
  {
    lastname: "Venus",
    firstname: "Grimes",
    email: "lectus.rutrum@Duisa.edu",
  },
  {
    lastname: "Fletcher",
    firstname: "Owen",
    email: "metus@Aenean.org",
  },
  {
    lastname: "William",
    firstname: "Hale",
    email: "eu.dolor@risusodio.edu",
  },
  {
    lastname: "TaShya",
    firstname: "Cash",
    email: "tincidunt.orci.quis@nuncnullavulputate.co.uk",
  },
  {
    lastname: "Jakeem",
    firstname: "Walker",
    email: "Morbi.vehicula.Pellentesque@faucibusorci.org",
  },
  {
    lastname: "Malcolm",
    firstname: "Trujillo",
    email: "sagittis@velit.edu",
  },
  {
    lastname: "Wynne",
    firstname: "Rice",
    email: "augue.id@felisorciadipiscing.edu",
  },
  {
    lastname: "Evangeline",
    firstname: "Klein",
    email: "adipiscing.lobortis@sem.org",
  },
  {
    lastname: "Jennifer",
    firstname: "Russell",
    email: "sapien.Aenean.massa@risus.com",
  },
  {
    lastname: "Rama",
    firstname: "Freeman",
    email: "Proin@quamPellentesquehabitant.net",
  },
  {
    lastname: "Jena",
    firstname: "Mathis",
    email: "non.cursus.non@Phaselluselit.com",
  },
  {
    lastname: "Alexandra",
    firstname: "Maynard",
    email: "porta.elit.a@anequeNullam.ca",
  },
  {
    lastname: "Tallulah",
    firstname: "Haley",
    email: "ligula@id.net",
  },
  {
    lastname: "Timon",
    firstname: "Small",
    email: "velit.Quisque.varius@gravidaPraesent.org",
  },
  {
    lastname: "Randall",
    firstname: "Pena",
    email: "facilisis@Donecconsectetuer.edu",
  },
  {
    lastname: "Conan",
    firstname: "Vaughan",
    email: "luctus.sit@Classaptenttaciti.edu",
  },
  {
    lastname: "Dora",
    firstname: "Allen",
    email: "est.arcu.ac@Vestibulumante.co.uk",
  },
  {
    lastname: "Aiko",
    firstname: "Little",
    email: "quam.dignissim@convallisest.net",
  },
  {
    lastname: "Jessamine",
    firstname: "Bauer",
    email: "taciti.sociosqu@nibhvulputatemauris.co.uk",
  },
  {
    lastname: "Gillian",
    firstname: "Livingston",
    email: "justo@atiaculisquis.com",
  },
  {
    lastname: "Laith",
    firstname: "Nicholson",
    email: "elit.pellentesque.a@diam.org",
  },
  {
    lastname: "Paloma",
    firstname: "Alston",
    email: "cursus@metus.org",
  },
  {
    lastname: "Freya",
    firstname: "Dunn",
    email: "Vestibulum.accumsan@metus.co.uk",
  },
  {
    lastname: "Catherine",
    firstname: "West",
    email: "malesuada.augue@elementum.com",
  },
  {
    lastname: "Jena",
    firstname: "Chambers",
    email: "erat.Etiam.vestibulum@quamelementumat.net",
  },
  {
    lastname: "Neil",
    firstname: "Rodriguez",
    email: "enim@facilisis.com",
  },
  {
    lastname: "Freya",
    firstname: "Charles",
    email: "metus@nec.net",
  },
  {
    lastname: "Anastasia",
    firstname: "Strong",
    email: "sit@vitae.edu",
  },
  {
    lastname: "Bell",
    firstname: "Simon",
    email: "mollis.nec.cursus@disparturientmontes.ca",
  },
  {
    lastname: "Minerva",
    firstname: "Allison",
    email: "Donec@nequeIn.edu",
  },
  {
    lastname: "Yoko",
    firstname: "Dawson",
    email: "neque.sed@semper.net",
  },
  {
    lastname: "Nadine",
    firstname: "Justice",
    email: "netus@et.edu",
  },
  {
    lastname: "Hoyt",
    firstname: "Rosa",
    email: "Nullam.ut.nisi@Aliquam.co.uk",
  },
  {
    lastname: "Shafira",
    firstname: "Noel",
    email: "tincidunt.nunc@non.edu",
  },
  {
    lastname: "Jin",
    firstname: "Nunez",
    email: "porttitor.tellus.non@venenatisamagna.net",
  },
  {
    lastname: "Barbara",
    firstname: "Gay",
    email: "est.congue.a@elit.com",
  },
  {
    lastname: "Riley",
    firstname: "Hammond",
    email: "tempor.diam@sodalesnisi.net",
  },
  {
    lastname: "Molly",
    firstname: "Fulton",
    email: "semper@Naminterdumenim.net",
  },
  {
    lastname: "Dexter",
    firstname: "Owen",
    email: "non.ante@odiosagittissemper.ca",
  },
  {
    lastname: "Kuame",
    firstname: "Merritt",
    email: "ornare.placerat.orci@nisinibh.ca",
  },
  {
    lastname: "Maggie",
    firstname: "Delgado",
    email: "Nam.ligula.elit@Cum.org",
  },
  {
    lastname: "Hanae",
    firstname: "Washington",
    email: "nec.euismod@adipiscingelit.org",
  },
  {
    lastname: "Jonah",
    firstname: "Cherry",
    email: "ridiculus.mus.Proin@quispede.edu",
  },
  {
    lastname: "Cheyenne",
    firstname: "Munoz",
    email: "at@molestiesodalesMauris.edu",
  },
  {
    lastname: "India",
    firstname: "Mack",
    email: "sem.mollis@Inmi.co.uk",
  },
  {
    lastname: "Lael",
    firstname: "Mcneil",
    email: "porttitor@risusDonecegestas.com",
  },
  {
    lastname: "Jillian",
    firstname: "Mckay",
    email: "vulputate.eu.odio@amagnaLorem.co.uk",
  },
  {
    lastname: "Shaine",
    firstname: "Wright",
    email: "malesuada@pharetraQuisqueac.org",
  },
  {
    lastname: "Keane",
    firstname: "Richmond",
    email: "nostra.per.inceptos@euismodurna.org",
  },
  {
    lastname: "Samuel",
    firstname: "Davis",
    email: "felis@euenim.com",
  },
  {
    lastname: "Zelenia",
    firstname: "Sheppard",
    email: "Quisque.nonummy@antelectusconvallis.org",
  },
  {
    lastname: "Giacomo",
    firstname: "Cole",
    email: "aliquet.libero@urnaUttincidunt.ca",
  },
  {
    lastname: "Mason",
    firstname: "Hinton",
    email: "est@Nunc.co.uk",
  },
  {
    lastname: "Katelyn",
    firstname: "Koch",
    email: "velit.Aliquam@Suspendisse.edu",
  },
  {
    lastname: "Olga",
    firstname: "Spencer",
    email: "faucibus@Praesenteudui.net",
  },
  {
    lastname: "Erasmus",
    firstname: "Strong",
    email: "dignissim.lacus@euarcu.net",
  },
  {
    lastname: "Regan",
    firstname: "Cline",
    email: "vitae.erat.vel@lacusEtiambibendum.co.uk",
  },
  {
    lastname: "Stone",
    firstname: "Holt",
    email: "eget.mollis.lectus@Aeneanegestas.ca",
  },
  {
    lastname: "Deanna",
    firstname: "Branch",
    email: "turpis@estMauris.net",
  },
  {
    lastname: "Rana",
    firstname: "Green",
    email: "metus@conguea.edu",
  },
  {
    lastname: "Caryn",
    firstname: "Henson",
    email: "Donec.sollicitudin.adipiscing@sed.net",
  },
  {
    lastname: "Clarke",
    firstname: "Stein",
    email: "nec@mollis.co.uk",
  },
  {
    lastname: "Kelsie",
    firstname: "Porter",
    email: "Cum@gravidaAliquam.com",
  },
  {
    lastname: "Cooper",
    firstname: "Pugh",
    email: "Quisque.ornare.tortor@dictum.co.uk",
  },
  {
    lastname: "Paul",
    firstname: "Spencer",
    email: "ac@InfaucibusMorbi.com",
  },
];
