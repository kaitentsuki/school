class Employee {
    name;
    surname;
    gender;
    birthdate;
    workload;

    constructor({ name, surname, gender, birthdate, workload }) {
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.birthdate = birthdate;
        this.workload = workload;
    }
};

Array.prototype.random = function () {
    return scope[Math.floor((Math.random() * this.length))];
}

const maleFirstNames = [
    'Antonín',
    'Miroslav',
    'Jaromír',
    'Aleš',
    'Václav',
    'Ján',
    'Miloslav',
    'Mykhaylo',
    'Milan',
    'Otto',
    'Zdeněk',
    'Pavel',
    'Bartoloměj',
    'Jiří',
    'Vladimír',
    'Roman',
    'František',
    'Jan',
    'Jaroslav',
    'Josef',
    'Ladislav',
    'Lubomír',
    'Petr',
    'Jindřich',
    'Adam',
    'Radoslav',
    'Martin',
    'Patrik',
    'Hong Thang',
    'Bedřich',
    'Tomáš',
    'Karel',
    'Michal',
    'Alex',
    'Robert',
    'Ondřej',
    'Oldřich',
    'David',
    'Matěj',
    'Radek',
    'Luboš',
    'Ivo',
    'Štefan',
    'Lukáš',
    'Stanislav',
    'Vojtěch',
    'Dušan',
    'Valtr',
    'Jakub',
    'Marek',
];

const maleLastNames = [
    'Jehlík',
    'Hložek',
    'Novobilský',
    'Smitka',
    'Kovář',
    'Boytsenyuk',
    'Stránský',
    'Čečerle',
    'Stejskal',
    'Krajňák',
    'Böhm',
    'Pokorný',
    'Rejta',
    'Červeňák',
    'Řepišťák',
    'Švec',
    'Veleba',
    'Tkáč',
    'Janovský',
    'Nguyen',
    'Chudárek',
    'Maršálek',
    'Košvanec',
    'Sekula',
    'Kukačka',
    'Lerach',
    'Kučera',
    'Till',
    'Thang',
    'Šimo',
    'Dvořák',
    'Löffelmann',
    'Čuhel',
    'Lokša',
    'Peclinovský',
    'Hošek',
    'Soldát',
    'Ruml',
    'Svozil',
    'Halbrštát',
    'Skokov',
    'Krajíček',
    'Flajzar',
    'Jech',
    'Uttendorfský',
    'Šourek',
    'Handl',
    'Šíma',
    'Filgas',
    'Koutný',
]

const femaleFirstNames = [
    'Dagmar',
    'Marcela',
    'Jaroslava',
    'Pavla',
    'Alena',
    'Jitka',
    'Kateřina',
    'Ivana',
    'Marie',
    'Radka',
    'Olga',
    'Erika',
    'Lucie',
    'Hana',
    'Eva',
    'Natálie',
    'Jana',
    'Helena',
    'Petra',
    'Štěpánka',
    'Jiřina',
    'Veronika',
    'Zdeňka',
    'Miluška',
    'Drahuše',
    'Andrea',
    'Věra',
    'Edita',
    'Anna',
    'Marta',
    'Barbora',
    'Renata',
    'Lenka',
    'Markéta',
    'Jarmila',
    'Terezie',
    'Miluše',
    'Ludmila',
    'Eliška',
    'Martina',
    'Danuše',
    'Lea',
    'Miroslava',
    'Zuzana',
    'Karolína',
    'Michaela',
    'Iveta',
    'Aurelie',
    'Vlasta',
    'Tereza',
];

const femaleLastNames = [
    'Ovesná',
    'Židková',
    'Brdičková',
    'Přibylová',
    'Pokorná',
    'Jakobovská',
    'Bělonožníková',
    'Šmeráková',
    'Keltnerová',
    'Nováková',
    'Balievová',
    'Opatrná',
    'Šplíchalová',
    'Červenková',
    'Daňová',
    'Svědínková',
    'Křížová',
    'Bohmanová',
    'Simbartlová',
    'Havelková',
    'Hajdamachová',
    'Zubatá',
    'Hasenőhrlová',
    'Krejzová',
    'Kubišová',
    'Nyplová',
    'Tesarčíková',
    'Štychová',
    'Hejnová',
    'Richterová',
    'Cepáková',
    'Zývalová',
    'Ruthová',
    'Winkelhoferová',
    'Babejová',
    'Tomášková',
    'Neubauerová',
    'Maixnerová',
    'Velinská',
    'Rapantová',
    'Tomešová',
    'Bohmannová',
    'Benešová',
    'Čečáková',
    'Sekerová',
    'Mrázková',
    'Thímová',
    'Kamínková',
    'Hrabáková',
    'Kelinová',
]

const Gender = Object.freeze({
    MALE: 'male',
    FEMALE: 'female',
});

const GenderList = Object.values(Gender);

const Workload = Object.freeze({
    '10': 10,
    '20': 20,
    '30': 30,
    '40': 40,
});

const WorkloadList = Object.values(Workload);

const firstNamesByGender = {
    [Gender.MALE] : maleFirstNames,
    [Gender.FEMALE] : femaleFirstNames,
}

const lastNamesByGender = {
    [Gender.MALE] : maleLastNames,
    [Gender.FEMALE] : femaleLastNames,
}

const randomBirthdate = (minAge, maxAge) => {
    const startDate = new Date(new Date().setFullYear(new Date().getFullYear() - minAge));
    const endDate = new Date(new Date().setFullYear(new Date().getFullYear() - maxAge));
    return new Date(endDate.getTime() + Math.random() * (startDate.getTime() - endDate.getTime()));
};

const main = ({ count, age: { min: minAge, max: maxAge } }) => {
    const employeeList = [];
    for (let i = 0; i < count; i++) {
        const randomGender = GenderList.random();

        employeeList.push(new Employee({
            name: firstNamesByGender[randomGender].random(),
            surname: lastNamesByGender[randomGender].random(),
            gender: randomGender,
            birthdate: randomBirthdate(minAge, maxAge),
            workload: WorkloadList.random(),
        }))
    }

    return employeeList;
}

console.log(main({
    count: 5,
    age: {
        min: 19,
        max: 35
    }
}));
