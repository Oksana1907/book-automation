let listHW = [{
    logo: '<img src="https://lms.ithillel.ua/uploads/images/885d3b77fc0d39a12aad31af709b9bd6.jpg">',
    surname: "Чебикін",
    nameUser: "Антон",
    madeHW: 7,
    score: 698,
},
{   logo: '<img src="https://klike.net/uploads/posts/2020-08/1597994286_2.jpg">',
    surname: "Mukhatasov",
    nameUser: "Borys",
    madeHW: 7,
    score: 697,
},
{   logo: '<img src="https://bigpicture.ru/wp-content/uploads/2019/04/grandbeauty27.jpg">',
    surname: "Kushrinuk",
    nameUser: "Oleksandra",
    madeHW: 7,
    score: 687,
},
{   logo: '<img src="https://klike.net/uploads/posts/2020-08/1597994375_6.jpg">',
    surname: "Odinsov",
    nameUser: "Oleksandr",
    madeHW: 7,
    score: 680,
},
{   logo: '<img src="https://klike.net/uploads/posts/2020-08/1597994277_8.jpg">',
    surname: "Vashenko",
    nameUser: "David",
    madeHW: 7,
    score: 675,
}];
listHW.forEach(function(element) {
    document.getElementById("card_user").insertAdjacentHTML(
        "beforeend",
        `
        <tr>
        <td>${element.logo}</td>
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
