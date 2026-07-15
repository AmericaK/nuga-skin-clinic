// Nuga Skin Clinic — Express server
// Serves the built React client (client/dist) and exposes /api/contact.
// /api/contact emails every submission to the clinic inbox via Resend.

const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// --- Contact / booking email ----------------------------------------------
// Env vars (set in Railway → Variables):
//   RESEND_API_KEY = your Resend API key                       (required)
//   CONTACT_FROM   = "Nuga Website <noreply@your-verified-domain>"
//                    Must be a domain verified in Resend. "onboarding@resend.dev"
//                    works for a quick test but Resend test mode only delivers
//                    to the Resend account owner's own address.
//   CONTACT_TO     = seon0807@gmail.com                        (optional; default below)
//
// No extra npm package needed — uses the Resend REST API via Node's built-in
// fetch (Node 18+, which Railway provides).

const CONTACT_TO = process.env.CONTACT_TO || "seon0807@gmail.com";
const CONTACT_FROM = process.env.CONTACT_FROM || "Nuga Website <onboarding@resend.dev>";

const esc = (s = "") =>
  String(s).replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c]));

app.post("/api/contact", async (req, res) => {
  try {
    const { firstName, email, phone, treatments, message } = req.body || {};

    if (!firstName || !email || !message) {
      return res
        .status(400)
        .json({ ok: false, error: "이름, 이메일, 메시지를 입력해 주세요." });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("[contact] RESEND_API_KEY is not set");
      return res.status(500).json({ ok: false, error: "메일 설정이 완료되지 않았습니다." });
    }

    const list =
      Array.isArray(treatments) && treatments.length ? treatments.join(", ") : "—";

    const text =
      `New booking / inquiry from the Nuga website\n\n` +
      `Name:    ${firstName}\n` +
      `Email:   ${email}\n` +
      `Phone:   ${phone || "—"}\n` +
      `Interested in: ${list}\n\n` +
      `Message:\n${message}\n`;

    const html =
      `<h2 style="margin:0 0 12px">New booking / inquiry</h2>` +
      `<p><strong>Name:</strong> ${esc(firstName)}</p>` +
      `<p><strong>Email:</strong> ${esc(email)}</p>` +
      `<p><strong>Phone:</strong> ${esc(phone || "—")}</p>` +
      `<p><strong>Interested in:</strong> ${esc(list)}</p>` +
      `<p><strong>Message:</strong><br>${esc(message).replace(/\n/g, "<br>")}</p>`;

    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM,
        to: [CONTACT_TO],
        reply_to: email, // replying to the email goes straight to the client
        subject: `New booking/inquiry — ${firstName}`,
        text,
        html,
      }),
    });

    if (!r.ok) {
      const detail = await r.text().catch(() => "");
      console.error("[contact] Resend API error", r.status, detail);
      return res.status(502).json({ ok: false, error: "이메일 발송에 실패했습니다." });
    }

    console.log("[contact] sent", { firstName, email });
    return res.json({ ok: true });
  } catch (e) {
    console.error("[contact] error", e);
    return res.status(500).json({ ok: false, error: "서버 오류가 발생했습니다." });
  }
});

// --- Static client ---------------------------------------------------------
const clientDist = path.join(__dirname, "..", "client", "dist");
app.use(express.static(clientDist));

// SPA fallback (Express 4 uses "*" for catch-all)
app.get("*", (_req, res) => {
  res.sendFile(path.join(clientDist, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Nuga Skin Clinic running on :${PORT}`);
});
