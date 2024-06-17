export default async function preview(req, res) {
    const { slug = "" } = req.query;
    const params = req.url.split("?");
   
    if (req.query.secret !== "MY_SECRET_TOKEN") {
      return res.status(401).json({ message: "Invalid token" });
    }
   
    res.setPreviewData({});
   
    // Set cookie to None, so it can be read in the Storyblok iframe
    const cookies = res.getHeader("Set-Cookie");
    res.setHeader(
      "Set-Cookie",
      cookies.map((cookie) =>
        cookie.replace("SameSite=Lax", "SameSite=None;Secure")
      )
    );
   
    res.redirect(`/${slug}?${params[1]}`);
  }