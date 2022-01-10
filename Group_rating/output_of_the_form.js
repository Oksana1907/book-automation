let listHW = [{
    logo: 'https://lms.ithillel.ua/uploads/images/885d3b77fc0d39a12aad31af709b9bd6.jpg',
    surname: "Чебикін",
    nameUser: "Антон",
    madeHW: 8,
    score: 698,
},
{   logo: 'https://klike.net/uploads/posts/2020-08/1597994286_2.jpg',
    surname: "Mukhatasov",
    nameUser: "Borys",
    madeHW: 8,
    score: 697,
},
{   logo: 'https://bigpicture.ru/wp-content/uploads/2019/04/grandbeauty27.jpg',
    surname: "Kushrinuk",
    nameUser: "Oleksandra",
    madeHW: 7,
    score: 687,
},
{   logo: 'https://klike.net/uploads/posts/2020-08/1597994375_6.jpg',
    surname: "Odinsov",
    nameUser: "Oleksandr",
    madeHW: 6,
    score: 580,
},
{   logo: 'https://klike.net/uploads/posts/2020-08/1597994277_8.jpg',
    surname: "Vashenko",
    nameUser: "David",
    madeHW: 6,
    score: 575,
}];
let homeworkDone = listHW.filter(function (elm) {
        return elm.madeHW > 6;
    });

homeworkDone.forEach(function(element) {
document.getElementById("card_user").insertAdjacentHTML(
    "beforeend",
    `
    <tr>
    <td><img src=${element.logo} alt=""></td>
    <td>  
        <div>${element.nameUser}</div>
        <div>${element.surname}</div>
    </td>
    <td>
        <div>${element.madeHW}</div>
        <div>${element.score}</div>
    </td>
    </tr>
    `
        )
    }
)

