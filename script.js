import { faker } from 'https://esm.sh/@faker-js/faker/locale/fr_CA';

const randomName = faker.person.fullName()
const randomEmail = faker.internet.email()

console.log(randomEmail)


export function offer(product){

    let record = {
            "@type": "PriceSpecification",
            "price": faker.commerce.price({ min: 10, max: 200}),
            "priceCurrency": "cad"
        }
    return record
    
}

export function product(){

    let record = {
        "@type": "product",
        "name": faker.commerce.product(),
        "description": faker.commerce.productDescription(),
        "offers": {
            "@type": "Offer",
            "priceSpecification": offer()
        }
    }

    return record
}


export function postalAddress(){

    let postalAddress = {
            "@type": "postalAddress",
            "streetAddress": faker.location.streetAddress(),
            "addressLocality": faker.location.city(),
            "addressRegion": faker.location.state(),
            "postalCode": faker.location.zipCode(),
        }
    return postalAddress
}

export function person() {

    const sex = faker.person.sexType();
    const firstName = faker.person.firstName(sex);
    const lastName = faker.person.lastName();
    const email = faker.internet.email({ firstName, lastName });
    const phone = faker.phone.number();
    const userName = faker.internet.userName({ firstName, lastName })
    
    let record = {
        gender: sex,
        givenName: firstName,
        familyName: lastName,
        email: email,
        image: faker.image.avatar(),
        birthday: faker.date.birthdate({max: 60, min: 24, mode: 'age'}),
        jobTitle: faker.person.jobTitle(),
        telephone: phone, 
        username: userName, 
        address: postalAddress(),
        worksFor: organization()
    }
 
    return record
}

export function organization(){

    const companyName = faker.company.name()
    
    let record = {
        "@type": "organization",
        "name": companyName,
        "url": faker.internet.url(companyName),
        address: postalAddress(),
    }
    return record
}


const randomUser = person()
console.log(JSON.stringify(randomUser, null, 4))

const randomProduct = product()
console.log(JSON.stringify(randomProduct, null, 4))