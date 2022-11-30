import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        {/* <span className="headerTitleSm">React & Node App</span> */}
        <span className="headerTitleLg">Travel Blogs</span>
      </div>
      <img
        className="headerImg"
        src="https://wallpaperaccess.com/full/488480.jpg"
        alt=""
      />
    </div>
  );
}
