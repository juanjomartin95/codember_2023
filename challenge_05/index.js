const getText = () => fetch('https://codember.dev/data/database_attacked.txt',
    {method: 'GET'}).then(response => response.text());

const validateAlphanumericString = (text) => {
  const strRegex = new RegExp(/^[a-z0-9]+$/i);
  return strRegex.test(text);
};

const validateEmail = (text) => {
  const emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  return emailRegex.test(text);
};

const validateNumber = (text) => {
  const strRegex = new RegExp(/^[0-9]+$/i);
  return strRegex.test(text);
}

const validateText = (text) => {
  const strRegex = new RegExp(/^[a-z\s]+$/i);
  return strRegex.test(text);
}


getText().then((text) => {
  const list = text.split('\n');
  const userList = list.map((user) => {
    const [id, username, email, age, location] = user.split(',');
    return {
      id: id !== '' ? id : null,
      username: username !== '' ? username : null,
      email: email !== '' ? email : null,
      age: age !== '' ? age : null,
      location: location !== '' ? location : null,
    };
  });

  const validUsers = [];
  const invalidUsers = [];

  userList.forEach(user => {
    const {id, username, email, age, location} = user;
    const idCondition = id && validateAlphanumericString(id)
    const usernameCondition = username && validateAlphanumericString(username)
    const emailCondition = email && validateEmail(email)
    const ageCondition = !age ? true : validateNumber(age)
    const locationCondition = !location ? true : validateText(location)
    if (idCondition && usernameCondition && emailCondition && ageCondition && locationCondition) {
      validUsers.push(username)
    } else {
      invalidUsers.push(username)
    }
  });
  console.log(invalidUsers.map(user => user[0]).join(''));
  // youh4v3beenpwnd
});