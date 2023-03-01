let btnContainer = document.getElementsByClassName("btn-container");
let filterMenu = document.getElementById("filterMenu");
let menuSection = document.getElementById("menuSection");
selectMenu("all");
function selectMenu(selected) {
  let menu = [
    {
      id: 1,
      title: "Mercimek Çorbası",
      category: "soup",
      price: 29.99,
      img: "https://i.nefisyemektarifleri.com/2022/03/03/lokanta-usulu-mercimek-corbasi-tarifi.jpg",
      desc: `3-4 yemek kaşığı  Ayçiçek Yağı, 1 adet kuru soğan, 1 tepeleme yemek kaşığı un, 1 su bardağı Kırmızı Mercimek, 1 çay kaşığı zerdeçal, Yarım çay kaşığı kimyon, Yarım çay kaşığı  Tane Karabiber, 1 tatlı kaşığı tuz, 1 litre sıcak su`,
    },
    {
      id: 2,
      title: "Arpa Şehriye Çorbası",
      category: "soup",
      price: 29.99,
      img: "https://i.nefisyemektarifleri.com/2022/02/01/tam-olculu-arpa-sehriye-corbasi.jpg",
      desc: `1 çay bardağı arpa şehriye, 5 su bardağı su, 3 yemek kaşığı sıvı yağ, 1 yemek kaşığı salça, 1 tutam maydanoz, 1-2 adet limon tuzu, 1 çay kaşığı nane, Pulbiber, Tuz`,
    },
    {
      id: 3,
      title: "Ezogelin Çorbası",
      category: "soup",
      price: 29.99,
      img: "https://i.nefisyemektarifleri.com/2022/11/09/lokanta-usulu-ezogelin-corbasi-13.jpg",
      desc: `1 adet küçük boy soğan, Yarım çay bardağı sıvı yağ, 1 yemek kaşığı un, 1 yemek kaşığı tepeleme domates salçası, 1 su bardağı kırmızı mercimek, 2 yemek kaşığı pirinç, 2 yemek kaşığı bulgur, 1 adet tavuk bulyon (kullanmak istemeyenler suyunu kullanabilirsiniz), Tuz, 2 litre su (koyu kıvamda olursa extra ekleyebilirsiniz)`,
    },
    {
      id: 4,
      title: "Kıbrıs Tatlısı",
      category: "dessert",
      price: 25.99,
      img: "https://i.nefisyemektarifleri.com/2018/09/05/kibris-tatlisi-tarifi-videosu.jpg",
      desc: `3 adet yumurta, Yarım su bardağı şeker, Yarım su bardağı sıvı yağ, 1 su bardağı galeta unu, 1 su bardağı kırılmış ceviz, 1 su bardağı Hindistan cevizi, 1 paket kabartma tozu`,
    },
    {
      id: 5,
      title: "Patates Püreli Mantarlı Tavuk Sote",
      category: "food",
      price: 89.99,
      img: "https://i.nefisyemektarifleri.com/2022/03/18/patates-pureli-mantarli-tavuk-sote.jpg",
      desc: `4.5 adet patates, 2 adet tavuk göğsü, 250 gram mantar, 1 tatlı kaşığı tereyağı (patates püresi için), 2 adet kırmızı kapya biber, 2 adet yeșil biber, 1 adet kuru soğan, 1.5 yemek kaşığı biber salçası, 1 adet domates, 1 çay kaşığı karabiber, 1 çay kaşığı kırmızı toz biber, 1 tatlı kaşığı tuz, 1 çay bardağı su, 1 çay bardağından iki parmak eksik sıvı yağ`,
    },
    {
      id: 6,
      title: "Fincan Tatlısı",
      category: "dessert",
      price: 25.99,
      img: "https://i.nefisyemektarifleri.com/2022/09/28/fincan-tatlisi-nasil-yapilir-3.jpg",
      desc: `1 litre süt, 1 su bardağı toz şeker, 1 su bardağı un, 1 yemek kaşığı tereyağı, 1 paket vanilya`,
    },
    {
      id: 7,
      title: "Patates Oturtma",
      category: "food",
      price: 79.99,
      img: "https://i.nefisyemektarifleri.com/2022/03/30/patates-oturtma.jpg",
      desc: `1 kg patates, 500 gram kıyma, 1 adet soğan, 3 adet yeşil biber, 1 adet kapya biber, 1 yemek kaşığı salça, 1 yemek kaşığı tereyağ, 2 yemek kaşığı zeytinyağı, Tuz, Kara biber, Pul biber`,
    },
    {
      id: 8,
      title: "Fırında Sütlaç",
      category: "dessert",
      price: 25.99,
      img: "https://i.nefisyemektarifleri.com/2019/11/12/firinda-sutlac-nasil-yapilir.jpg",
      desc: `1 litre süt, 1 su bardağı şeker, Yarım su bardağı pirinç, 3 yemek kaşığı buğday nişastası, 1 paket vanilya, 2 su bardağı su, Yarım su bardağı süt (nişastayı açmak için)`,
    },
    {
      id: 9,
      title: "Köri Soslu Kremalı Mantarlı Tavuk",
      category: "food",
      price: 89.99,
      img: "https://i.nefisyemektarifleri.com/2022/04/14/kori-soslu-kremali-mantarli-tavuk-videolu-2.jpg",
      desc: `3 parça tavuk göğsü, 1 adet soğan, 2 yemek kaşığı kadar sıvı yağ, 300-400g mantar, 1 paket sıvı krema, 1 tatlı kaşığı köri, Yarım çay kaşığı karabiber, 1 çay kaşığı kekik, 1 çay kaşığı tuz`,
    },
  ];

  let copyMenu = [];
  copyMenu = menu.filter((item) => {
    menuSection.innerHTML = ``;
    if (selected === "soup") {
      return item.category === "soup";
    }
    if (selected === "food") {
      return item.category === "food";
    }
    if (selected === "dessert") {
      return item.category === "dessert";
    } else {
      return item;
    }
  });
  copyMenu.map((item) => {
    menuSection.innerHTML += `
  <div class="menu-items col-lg-6 col-sm-12">
    <img src="${item.img}" class="photo"></img>
    <div class="menu-info">
      <div class="menu-title">
        <h4>${item.title}</h4>
        <h4>${item.price}</h4>
      </div>
      <div class="menu-text">
      ${item.desc}
      </div>
    </div>
  </div>
  `;
  });
}

filterMenu.innerHTML = `
    <div class="btn-item" onclick="selectMenu('all')">Tümü</div>
    <div class="btn-item" onClick="selectMenu('soup')">Çorbalar</div>
    <div class="btn-item" onClick="selectMenu('food')">Ana Yemekler</div>
    <div class="btn-item" onClick="selectMenu('dessert')">Tatlılar</div>
`;
