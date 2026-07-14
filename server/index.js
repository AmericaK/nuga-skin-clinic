// Nuga Skin Clinic — Express server
// Serves the built React client (client/dist) and exposes /api/contact.
// The contact endpoint is a stub for now; wire Resend in Phase 4 (see README).

const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// --- API -------------------------------------------------------------------
// Placeholder. Phase 4: send email via Resend using process.env.RESEND_API_KEY.
app.post("/api/contact", (req, res) => {
  const { name, phone, message } = req.body || {};
  if (!name || !phone) {
    return res.status(400).json({ ok: false, error: "이름과 연락처를 입력해 주세요." });
  }
  // TODO(Phase 4): integrate Resend and forward to the clinic inbox.
  console.log("[contact]", { name, phone, message });
  return res.json({ ok: true });
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
