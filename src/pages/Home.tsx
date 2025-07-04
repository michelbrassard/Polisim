import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>Welcome to the Home page.</p>
      <Link to={"/fizika"}>Fizika</Link>
    </div>
  )
}