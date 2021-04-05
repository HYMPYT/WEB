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

if (!localStorage.getItem('currentUser')) {
    localStorage.setItem('currentUser', null);
}

if (!localStorage.getItem('users')) {
    localStorage.setItem(
        'users',
        JSON.stringify([
            {
                username: 'test',
                email: 'test@test.com',
                password: '111',
                sex: 'female',
                birthday: '2000-11-11',
                contacts: data
            }
        ])
    );
}
