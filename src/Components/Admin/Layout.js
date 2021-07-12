import AdminHeaderBottom from "../AdminHeader/AdminBottomHeader";
// import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <AdminHeaderBottom />

      <div className="container">{children}</div>
    </>
  );
}
