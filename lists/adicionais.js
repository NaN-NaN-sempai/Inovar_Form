var adicionaisList = [
    {
        name: "Luva Protetora (protege a capa)",
        sendValue: "PLuva protetora",
        price: "R$ 12,00",
        img: "./assets/Images/adicionais/luvaProtetora.jpg",
        favorite: false
    },
    {
        name: "Pingente",
        sendValue: "Pingente",
        price: "R$ 6,00",
        img: "./assets/Images/adicionais/pingente.jpg",
        favorite: false
    },
    {
        name: "Abas Divisórias Adesivas",
        sendValue: "Abas Divisórias",
        price: "R$ 6,00",
        img: "./assets/Images/adicionais/abasDivisorias.jpg",
        favorite: true
    },
    {
        name: "Marcador de página",
        sendValue: "Marcador de página",
        price: "R$ 5,00",
        img: "./assets/Images/adicionais/marcador.gif",
        favorite: true
    }];

insertImageCheckboxValues("#adicionais", adicionaisList);