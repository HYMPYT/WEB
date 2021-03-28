const data = [
    {
        name: 'Evgen Levchuk',
        number: '+38099332233',
        cityandCountry: 'Kyiv, Ukraine'
    },
    {
        name: 'Ivan Kucher',
        number: '+38099111111',
        cityandCountry: 'Kyiv, Ukraine'
    },
    {
        name: 'Dmitriy Glozda',
        number: '+38099222222',
        cityandCountry: 'Kyiv, Ukraine'
    }
];

if (!localStorage.getItem('contacts')) {
    localStorage.setItem('contacts', JSON.stringify(data));
}
