let myHeaders = new Headers();
myHeaders.append("x-api-key", "AJalp94dfG14ju70pLJhzD0Hzpp7oOZ5egTmTEC1");

let requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

 const FetchUsers = (token) => {
    myHeaders.append("Authorization", `Bearer ${token}`);

    fetch("http://cors-anywhere.herokuapp.com/https://7ktgzkl5ce.execute-api.us-east-1.amazonaws.com/prod/users", requestOptions)
    .then(response => response.text())
    .then((result) => {
      console.log(result);
      myHeaders = new Headers();
    })
    .catch(error => console.log('error', error));

}


export const fetchNotification = (token) => {

    myHeaders.append("Authorization", `Bearer ${token}`);

    console.log(token);
    // fetch("http://cors-anywhere.herokuapp.com/https://7ktgzkl5ce.execute-api.us-east-1.amazonaws.com/prod/notifications", requestOptions)
    fetch('http://cors-anywhere.herokuapp.com/https://api.weatherapi.com/v1/current.json?key=ceb4ee17b82e42b58bb220920212105&q=london&aqi=no')
    .then(response => response.json())
    .then((result) => {
      console.log(result)
      myHeaders = new Headers();
    }).catch(error => console.log('error', error))
    .finally((item) => {
      return item;
    }
    );
    return 

}

