const course ={

    coursename: "javascript",
    price: "999",
    courseInstructor: "rohit"
}
// course.courseInstructor
const {courseInstructor: instructor}= course;//destructuring
console.log(instructor);

// {
//     name: "rohit",
//     coursename: "js in hindi",
//     price: "99"

// }
const api ={
  "results": [
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Estéban",
        "last": "Vincent"
      },
      "location": {
        "street": {
          "number": 13,
          "name": "Rue de Cuire"
        },
        "city": "Fort-de-France",
        "state": "Martinique",
        "country": "France",
        "postcode": 32562,
        "coordinates": {
          "latitude": "-14.3665",
          "longitude": "-61.9472"
        },
        "timezone": {
          "offset": "-7:00",
          "description": "Mountain Time (US & Canada)"
        }
      },
      "email": "esteban.vincent@example.com",
      "login": {
        "uuid": "4f2075a4-d219-4ef3-99c3-d4a83060effb",
        "username": "smallduck865",
        "password": "microsof",
        "salt": "ZigK58mx",
        "md5": "7713367a0a3841df58cf9104096dc8e3",
        "sha1": "2324b4e543682f4e755331ffd80b55aaa3b6ff56",
        "sha256": "74cffed25c4d1343a31c4d468cd95f7b247b85feed0a5ff1ee984742fb446b28"
      },
      "dob": {
        "date": "1960-02-18T08:46:36.883Z",
        "age": 65
      },
      "registered": {
        "date": "2015-01-06T22:08:12.840Z",
        "age": 10
      },
      "phone": "02-03-08-99-75",
      "cell": "06-09-61-05-56",
      "id": {
        "name": "INSEE",
        "value": "1600148517164 38"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/51.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/51.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/51.jpg"
      },
      "nat": "FR"
    }
  ],
  "info": {
    "seed": "b488f6cc5920f066",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}

const {gender:g} = api.results[0];
console.log(g);
const {first:f} = api.results[0].name;
console.log(f);
const {number:L} = api.results[0].location.street;
console.log(L);