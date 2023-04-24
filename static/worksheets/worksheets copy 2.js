function worksheets(value) {
  try {
    window.navigator.serviceWorker.register("/static/worksheets/uv/sw.js", {
        scope: __uv$config.prefix,
      })
      .then(() => {
        console.log("Service worker registration successful");

        const url = value.trim();
        if (!(url.startsWith("https://") || url.startsWith("http://"))) {
          url = "https://" + url;
        }
        try {
          sessionStorage.setItem("uvURL", __uv$config.encodeUrl(url));
          console.log("Session storage successful");
        } catch (error) {
          console.error("Session storage failed:", error);
        }
        try {
          location.href = "html-loader.html";
          console.log("Redirection successful");
        } catch (error) {
          console.error("Redirection failed:", error);
        }
      });
  } catch (error) {
    console.error("Service worker registration failed:", error);
  }
}
