
const projects = [
    {
        title: 'CoinDock',
        demo: 'https://coindock.herokuapp.com/',
        github: 'https://github.com/travislang/coindock',
        description: 'A cross browser cryptocurrency tracking application with real time prices',
        appInfo1: 'This application uses webSockets to stream real time cryptocurrency prices to the user with the ability to create/delete portfolios, add/remove cryptocurrencies, drag and drop to organize cryptocurrencies within portfolios, and set price alerts on specific cryptocurrencies.',
        appInfo2: 'Alerts are constantly monitored on the server and when required an alert will be sent using Push Notifications. This is accomplished utalizing the Push API and service workers.',
        appInfo3: 'Checkout the readme on Github to see a full list of all technologies used.'
    },
    {
        title: 'Weather App',
        demo: 'https://github.com/travislang/react-native-weather-app',
        github: 'https://github.com/travislang/react-native-weather-app',
        description: 'A weather application that uses the users geolocation to get the current weather and then sets the background image to match the users current weather.',
        appInfo2: 'This application is written using react Native and complies into native code, it is not a hybrid app displayed ina webview so it has no percievable loss in performance.',
        appInfo3: 'I built this app to explore React Native and writing mobile applications.'
    },
    {
        title: 'Todo App',
        demo: 'https://tasks-5.herokuapp.com/',
        github: 'https://github.com/travislang/todo-app', 
        description: 'A simple todo app that has database logic for persisting data',
        appInfo1: 'This project may be a rite of passage for becoming a developer.',
        appInfo2: 'The application allows a user to add new tasks, complete tasks, and delete tasks.  Tasks are automatically reordered to place completed tasks at the bottom of the list. All of the tasks and whether or not they have been completed is stored in a backend database.',
        appInfo3: 'This application used jQuery. Checkout the readme on Github for more detailed information.'
    },
    {
        title: 'Feedback App',
        demo: 'https://tasks-5.herokuapp.com/',
        github: 'https://github.com/travislang/feedback',
        description: 'A simple feedback form that has seperate views with state, and on submit the feeback is saved in a database',
        appInfo1: 'This is a basic react feeback project that directs a user to enter information across multiple pages. The application shows the step the user is on and how many more pages are left before being allowed to submit the feedback.',
        appInfo2: 'As the user moves through the pages they can see all of the information that has been entered.  Once the user submits the feeback the data is saved in a backend database using postreSQL.',
        appInfo3: 'Checkout the readme on Github for more detailed information.'
    }
]

export default projects
