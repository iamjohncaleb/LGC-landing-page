export function ThemeInitScript() {
  const code = `
    (function () {
      try {
        var savedTheme = window.localStorage.getItem("legendary-consults-theme");
        var theme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";
        document.documentElement.dataset.theme = theme;
      } catch (error) {
        document.documentElement.dataset.theme = "dark";
      }
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
