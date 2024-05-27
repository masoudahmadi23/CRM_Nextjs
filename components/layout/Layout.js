import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <Link href="/">
          <h2>Masoud CRM</h2>
        </Link>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        <a
          href="https://github.com/masoudahmadi23"
          target="_blank"
          rel="noreferrer"
        >
          Masoud
        </a>{" "}
        Next.js course | CRM Project &copy;
      </footer>
    </>
  );
}

export default Layout;
