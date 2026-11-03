# PUB CertChain — Frontend Prototype

A multi-page HTML/CSS/JavaScript frontend prototype based on Problem A1 in the PUB CSE Fest-26 problem set.

## Files
- `index.html` — landing page
- `login.html` — demo issuer login
- `issuer.html` — issuer dashboard and revoke action
- `issue.html` — issue certificate and download PDF
- `verify.html` — verify by certificate ID or uploaded PDF
- `student.html` — student certificate portal
- `audit.html` — audit event list
- `styles.css` — shared external stylesheet
- `app.js` — shared JavaScript

## Run
1. Extract the ZIP.
2. Open the folder in VS Code.
3. For best results, run with the VS Code **Live Server** extension.
4. Open `index.html`.

Demo login:
- Email: `issuer@pub.ac.bd`
- Password: `123456`

## Important prototype limitations
This is frontend-only. Records and audit events are stored in browser `localStorage`; login is a demo check, not secure authentication. Transaction references are simulated, not blockchain transaction hashes. PDF creation and QR generation use CDN libraries, so internet access is needed. For the PDF verification demo, upload the original PDF downloaded at issuance; editing or re-saving it may change its hash. The certificate's PDF SHA-256 hash is stored in the browser registry.

A production version still needs a backend, secure role-based authentication, a smart contract on a test network, issuer registration/approval, server-side audit logging, secure storage, and robust student-to-issuer permissions.
