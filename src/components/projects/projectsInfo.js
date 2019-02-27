
const projects = [
    {
        title: 'CoinDock',
        demo: 'https://coindock.herokuapp.com/',
        github: 'https://github.com/travislang/coindock',
        description: 'A cross platform cryptocurrency tracking application with real time prices',
        appInfo1: 'This application uses webSockets to stream real time cryptocurrency prices to the user with the ability to create/delete portfolios, add/remove cryptocurrencies, drag and drop to organize cryptocurrencies within portfolios, and set price alerts on specific cryptocurrencies.',
        appInfo2: 'Alerts are constantly monitored on the server and when required an alert will be sent using Push Notifications. This is accomplished utalizing the Push API and service workers.',
        appInfo3: 'Checkout the readme on Github to see a full list of all technologies used.'
    },
    {
        title: 'ResponseGen',
        demo: 'https://responsegendemo.herokuapp.com',
        github: 'https://github.com/travislang/patent-app',
        description: 'A CMS and template generation application for patent attorneys',
        appInfo1: 'This is a full stack application built for a patent attorney that manages patent applications and generates response documents.',
        appInfo2: 'The user can create, edit, delete applications, select applicable templates, and in line edit those templates to suit the needs of the specific use case.',
        appInfo3: 'Once a full document has been generated based on editable templates the user can export it into a complete docx format. To view a demo of the app click the link in the upper right and you can sign in with the "demo" for the username and password.'
    },
    {
        title: 'Weather App',
        demo: 'https://github.com/travislang/react-native-weather-app',
        github: 'https://github.com/travislang/react-native-weather-app',
        description: 'A React Native mobile weather application that retrieves the current forecast',
        appInfo1: 'A weather application that uses the users geolocation to get the current weather and then sets the background image to match the users current weather.',
        appInfo2: 'This application is written using React Native and complies into native code, it is not a hybrid app displayed ina webview so it has no percievable loss in performance.',
        appInfo3: 'I built this app to explore React Native and writing mobile applications.'
    },
    {
        title: 'IntelliFlix',
        demo: 'https://intelliflix.herokuapp.com',
        github: 'https://github.com/travislang/movie-sentiment', 
        description: 'A movie information app that uses sentimental analysis of Twitter tweets to generate a rating',
        appInfo1: 'This project is a full stack application that has search & filter functionality as well as similar and recommended movies.',
        appInfo2: 'The application uses Twitter tweets to generate a rating based on sentimental analysis to give users a rating based on real peoples opinions',
        appInfo3: 'It also uses GrapghQL for a backend API. Checkout the source on Github for more detailed information.'
    },
]

export default projects
