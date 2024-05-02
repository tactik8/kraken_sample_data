import { faker } from "https://esm.sh/@faker-js/faker/locale/fr_CA";



export const sample_data = {

    review: review,
    offer: offer,
    product: product, 
    postalAddress: postalAddress,
    person: person,
    organization: organization
}





function review(author) {
    let low = new Date(new Date().setFullYear(new Date().getFullYear() - 1));

    let high = new Date(new Date());

    let record = {
        "@type": "Review",
        "@id": String(crypto.randomUUID()),
        author: author || "",
        datePublished: faker.date.between({ from: low, to: high }),
        reviewBody: "",
        name: "",
        reviewRating: {
            "@type": "Rating",
            bestRating: "5",
            ratingValue: faker.number.int({ min: 0, max: 5 }),
            worstRating: "1",
        },
    };
    return record;
}

function offer(product) {
    let record = {
        "@type": "PriceSpecification",
        "@id": String(crypto.randomUUID()),
        price: faker.commerce.price({ min: 10, max: 200 }),
        priceCurrency: "cad",
    };
    return record;
}

function product() {
    let record = {
        "@type": "product",
        "@id": String(crypto.randomUUID()),
        name: faker.commerce.product(),
        description: faker.commerce.productDescription(),
        offers: {
            "@type": "Offer",
            priceSpecification: offer(),
        },
    };

    return record;
}

function postalAddress() {
    let postalAddress = {
        "@type": "postalAddress",
        "@id": String(crypto.randomUUID()),
        streetAddress: faker.location.streetAddress(),
        addressLocality: faker.location.city(),
        addressRegion: faker.location.state(),
        postalCode: faker.location.zipCode(),
    };
    return postalAddress;
}

function person() {
    const sex = faker.person.sexType();
    const firstName = faker.person.firstName(sex);
    const lastName = faker.person.lastName();
    const email = faker.internet.email({ firstName, lastName });
    const phone = faker.phone.number();
    const userName = faker.internet.userName({ firstName, lastName });

    let record = {
        "@type": "Person",
        "@id": String(crypto.randomUUID()),
        gender: sex,
        givenName: firstName,
        familyName: lastName,
        email: email,
        image: faker.image.avatar(),
        birthday: faker.date.birthdate({ max: 60, min: 24, mode: "age" }),
        jobTitle: faker.person.jobTitle(),
        telephone: phone,
        username: userName,
        address: postalAddress(),
        worksFor: organization(),
    };

    return record;
}

function organization() {
    const companyName = faker.company.name();

    let record = {
        "@type": "organization",
        "@id": String(crypto.randomUUID()),
        name: companyName,
        url: faker.internet.url(companyName),
        address: postalAddress(),
    };
    return record;
}
