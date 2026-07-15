// =============================================================================
//  Nuga Skin Clinic — Contact/Booking email route  (Express + Resend)
//  Sends every form submission to:  seon0807@gmail.com
//
//  HOW TO WIRE INTO YOUR SERVER (server/index.js or wherever your Express app is):
//
//    import express from "express";
//    import contactRoute from "./contact-route.js";
//    const app = express();
//    app.use(express.json());          // make sure JSON body parsing is enabled
//    app.use("/api", contactRoute);    // -> exposes POST /api/contact
//
//  (CommonJS variant — if your server uses require():
//    const contactRoute = require("./contact-route.js");
//    app.use("/api", contactRoute);
//   ...and change the two ESM lines below to require()/module.exports.)
//
//  ENV VARS (set in Railway → Variables):
//    RESEND_API_KEY   = your Resend API key
//    CONTACT_TO       = seon0807@gmail.com          (optional; defaults below)
//    CONTACT_FROM     = "Nuga Website <noreply@YOUR-VERIFIED-DOMAIN>"
//                       Must be a domain you've verified in Resend. For a quick
//                       test you may use "onboarding@resend.dev", but Resend test
//                       mode only delivers to the Resend account owner's address.
// =============================================================================

import express from "express";
import { Resend } from "resend";

const router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY);

const TO = process.env.CONTACT_TO || "seon0807@gmail.com";
const FROM = process.env.CONTACT_FROM || "Nuga Website <onboarding@resend.dev>";

const esc = (s = "") =>
  String(s).replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c]));

router.post("/contact", async (req, res) => {
  try {
    const { firstName, email, phone, treatments, message } = req.body || {};

    if (!firstName || !email || !message) {
      return res.status(400).json({ ok: false, error: "Missing required fields." });
    }

    const list = Array.isArray(treatments) && treatments.length ? treatments.join(", ") : "—";

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

    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: email,          // reply goes straight to the client
      subject: `New booking/inquiry — ${firstName}`,
      text,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(502).json({ ok: false, error: "Email service error." });
    }

    return res.json({ ok: true });
  } catch (e) {
    console.error("Contact route error:", e);
    return res.status(500).json({ ok: false, error: "Server error." });
  }
});

export default router;
