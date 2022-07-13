import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Post from "./Post"

const RAY_IMAGE =
  "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale"
const ANAKIN_IMAGE =
  "https://pbs.twimg.com/profile_images/1455962541046312970/KzAZS4IM_400x400.jpg"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Post
      author={{
        name: "Anakin Skywalker",
        photo: ANAKIN_IMAGE,
        nickname: "@dart_vader",
      }}
      content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
      image={RAY_IMAGE}
      date={"26 февр."}
    />
  </React.StrictMode>
)
