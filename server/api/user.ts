export default defineEventHandler((event) => {
    return {
        lastname: "Иванов",
        name: "Иван",
        middlename: "Иванович",
        phonenumber: 79887656077.,
        location: "Г.Волгодонск , п-р.Строителей 8б , квартира 43. ",
        education: [
            {
                type: "Средннее-профессиональное образование",
                name: "ФГАОУ ГИУК ВРАП",
                qualify: "Техник"
            },
            {
                type: "Высшее образование",
                name: "РГУ",
                qualify: "Ииженер"
            },
        ],
        job: [
            {
                organization: "ООО Код",
                position: "Руководитель",
                expitience: 2

            },
            {
                organization: "ООО ГУ ВЩА",
                position: "Ведущий инженер",
                expitience: 5
            },
        ],
        certificates: [
            {
                name: ""
            },
        ]


    }
})
