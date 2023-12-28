import "@styles/globals.css";

export const metadata = {
  title: "Promptopia ",
  description: "Discovers & Share AI Prompts",
};
const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
      </body>
      <main className="app">{children}</main>
    </html>
  );
};

export default Rootlayout;
