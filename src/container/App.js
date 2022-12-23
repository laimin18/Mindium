//import logo from './logo.svg';
import Nav from "../Nav";
import Intro from "./Intro";
import "./App.css";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import APIHandler from "../service/APIHandler";

function App() {
  const [currentMode, setCurrentMode] = useState(localStorage.getItem("theme"));
  // theme state: dark / light
  const [theme, setTheme] = useState(currentMode ? currentMode : "light");

  // mobile navbar menu toggler: true if show / false
  const [menu, setMenu] = useState(false);

  // posts returned from api
  const [posts, setPosts] = useState([]);

  // article id user want to visit (click that post)
  const [post, setPost] = useState();

  const POST_URL = "http://localhost:3001/posts";
  const DELETE_URL = "http://localhost:3001/delete";

  useEffect(() => {
    calculateTheme();
    setPreferredTheme();
  });
  useEffect(() => {
    loadPosts();
  }, []);

  const setPreferredTheme = () => {
    if (currentMode == theme) {
      localStorage.setItem("theme", theme);
    }
  };

  const calculateTheme = () => {
    let switchCheck = document.querySelector("#flexSwitchCheckDefault");
    if (theme !== currentMode) {
      setTheme(theme);
      setCurrentMode(theme);
    } else {
      document.body.className = theme;
    }
    // set default switch button by the currentMode state (from local storage)
    if (currentMode == "dark") {
      switchCheck.checked = true;
    } else {
      switchCheck.checked = false;
    }
  };

  const loadPosts = () => {
    console.log("Load POSTS!!!");
    APIHandler(POST_URL)
      .then((response) => {
        return response.json();
      })
      .then((posts) => {
        // future: lazy load
        const postsArr = posts.slice(0, 8);
        setPosts(postsArr);
      })
      .catch((err) => {
        console.log(err);
      });

    /* await version:
        try {
          const response = await APIHandler(URL);
          return posts = await response.json();
        } catch (err) {
          // do something
        }
      */
  };

  // when user click switch button, change theme state and save it in local storage
  const changeMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // handle mobile navbar menu toggle
  const toggleMenu = () => {
    setMenu(!menu);
  };

  // handle delete pages
  const deletePost = (postId) => {
    APIHandler(DELETE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: postId,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data === "Success") {
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Mindium</h1>
      <Nav changeMode={changeMode} toggleMenu={toggleMenu} menu={menu} />
      <Intro />
      <Outlet context={{ posts, deletePost }} />
    </div>
  );
}

export default App;
