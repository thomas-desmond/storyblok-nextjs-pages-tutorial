const IS_PROD = process.env.NODE_ENV === "production";

const setCookieSameSite = (res, value) => {
  const cookies = res.getHeader("Set-Cookie");
  res.setHeader(
    "Set-Cookie",
    cookies?.map((cookie) =>
      cookies.replace(
        cookie,
        "SameSite=Lax",
        `SameSite=${value}; ${IS_PROD ? "Secure;" : ""}`
      )
    )
  );
};


export default async function preview(req, res) {
  const { slug = "" } = req.query;
  const params = req.url.split("?");

  if (req.query.secret !== "MY_SECRET_TOKEN") {
    return res.status(401).json({ message: "Invalid token" });
  }

  res.setPreviewData({});
  setCookieSameSite(res, "None");

  res.redirect(`/${slug}?${params[1]}`);
}
