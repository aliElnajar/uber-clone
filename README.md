### hello , lemme talk briefly about the project

> > it's an uber clone, user have to login,then he/she can start a trip and choose between variety of ride options, a map will be shown to user in the beginning and when he enters the pickup and dropoff points it'll be marked up on the map,the prices will be different based on distance between the two points by km, and also prices are different based on ride type(scooter,uberX,uberComfort), user can cancel his ride anytime before the driver arrival,every ride have available drivers and information will be shown to the user such as (driver name,picture and accumulated rating, driver car picture,model and its identification number)

### what tech have i used to build it?

1. next 13.4
2. next auth
3. tailwind css and daisyUI
4. tanstack query for react
5. context api
6. mapbox api for displaying a responsive map and getting distance between different locations

#### how to navigate around the files

1.  src/api: for pages(which's protected if user not loggedin) and api(for next auth handling)
2.  src/component: pages data are slized into smaller components inside component folder
3.  src/utils: having fetching fns and dummy data for rides and its drivers
4.  src/store&providers: having the context api and reducer fn to control general state, and providers needed for the application which are(nextauth-reactQuery-contextProvider)
5.  src/hooks: having the useFetch hook which utilizes the react queries to fetch different data pieces needed for the application


### latest update

1. added search autocomplete option and inputs will be autofilled with address/city/country
2. added modal for canceling the ride 
3. added custom error pages and 404 error page