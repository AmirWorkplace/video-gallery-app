# Video Gallery APP

This very simple project is used for learning how to make React-Redux video
gallery app with `JSON MOC Server` Database.

# Steps to follow

1. Make sure to change the firebaseConfig from src/index.js
2. Make sure in Firestore you have read and write permission on
3. Insert, Update and Delete records accordingly
4. You can also use Find By ID to find items from firebase database

# Tech stack

1.  [Firebase](https://firebase.google.com/)
2.  [Firestore](https://firebase.google.com/docs/firestore)
3.  [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

# Use for reference

Use solely for reference material only. const [route, setRoute] =
useState(false) {route ? : }

 <div className='w-full h-auto flex flex-end p-2 px-10 justify-end items-center'>
        <button
          className='text-xl font-bold ring-4 ring-slate-300 rounded-md px-2 p-0.5 bg-teal-700 text-slate-100 duration-700 hover:bg-slate-900 hover:tracking-wider uppercase'
          onClick={() => (route === false ? setRoute(true) : setRoute(false))}>
          Change
        </button>
      </div>
// import logoImage from "../../assets/lws.svg";
// import searchImage from "../../assets/search.svg";
// import Home from "./pages/Home";
// import VideGrid from "./components/grid/VideoGrid"
// import Tags from "./components/tags/Tags"
// import Pagination from "./components/ui/Pagination"
