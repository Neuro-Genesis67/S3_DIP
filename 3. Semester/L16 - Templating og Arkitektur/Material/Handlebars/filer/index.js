const usersUrl = 'https://jsonplaceholder.typicode.com/users';

onload = async () => {
    const [template, usersResponse] =
        await Promise.all([fetch('/users.hbs'), fetch(usersUrl)]);
    const templateText = await template.text();
    const users = await usersResponse.json();
    const compiledTemplate = Handlebars.compile(templateText);
    document.body.innerHTML = compiledTemplate({users});
};

