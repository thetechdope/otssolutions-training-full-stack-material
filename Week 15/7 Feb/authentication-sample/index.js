// const credentials = require("./authorisationKey.json");
import express from "express";
import dotenv from "dotenv";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

dotenv.config();

const PORT = process.env.PORT || 3000;

const firebaseConfig = {
  type: "service_account",
  project_id: "authorisation-app-001",
  private_key_id: "c4b335d7ed7d9f0033ce38d590846e0ec27efcdd",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC9DE3jvLi6L4zB\nRvSfDVCPmOtiMtQ1EnwvcIWA6Dg8i6YEiaP27oIwUgGrmtePzpp5ivVsuuuD9Ms4\ntnbqN92ki8tfrUiTUI0zk22m2n+YkHwvX/gYQaRouYsUNDagKvMhiH41RGk4ud+T\nsFc8SBcqwdf8L7df0Dx5sZOS+6aycI9l4luRESz4dvVIIy4EXaO8Q1eUPd0jp68l\nraJu+nS/JTiNKzvtqBiuKknLntPUd1bqkxZRtk9SosoAS78x/4NZ3vFr/0PtDs87\nRcUP2RunlWbJaBi7a2jyGI9wWRA/5ELzMf/xFN6dEtxO59g3/6KiLaUXwLgwGJuG\njGn2j8xRAgMBAAECggEADalV958ruki1Y0I9a0ELEVV7rRz/ONadItB+1VHyvm1Z\nEfrgXnfd8J/8fuoxqbLEdwQTuEfJvT9zcCW/ci2XVszDZaagGAU6Lv/4bJZdoijO\n0J2e0CHuP6Mo6czcJbb02veCJ1dKQ08rWQDlTPXotq5LbW4FUmc595FdmMGWyk44\nNtHpvJgn2XHc6/snyuSSKPCZ70hYudVPrMZCBtGKRyaqkd04wSduJuHoPwJAEzet\nVgUBv2bTXpEiI0yivZtef6Qd52xA7yHFLWUeOCvyB3xo6RNNMIQ/0Nmgh6E+USOV\nOdFEOIYwQGfK7KKq+znfh7lc7fJtyTp/oegc3mVCAQKBgQDoVgrfMWUbqtR9JNuj\nuosF+eFiQKidXOJIgLncSF/gmCly3oO4v78rxj4vIijajGNULKwGhJOA+5Aj/7lT\nbk7tNwcb2KKyVsvwr9vjp8sljb43Bh64zgy2jcx0o5MA5Ml9UaLskPsmPVP8gBHT\nkDIaCop1HjshWMxZtTWLcRlYowKBgQDQTZCJbWheMJGxVd6wA/cZkc0L0breyzOW\n9sswr+yufkim82wgrCuOuhTMxkyCf+AWwhmrPRrfWI8moKNkSrX8dbqPwz62KSRd\nuY9OhqPle6eY+te9IFG0tfLy8rtcMzfVVtRe9EtoczPiKcbnXSl+IKuVojSFx0hR\nlGFQVOpSewKBgHp70eN0cO8zEi6fXcNlNqGB6JYZrEq5ivnaEyHUbedDkKZkNGET\nhT8YlfPXOF5vIHZhzpbpEbIv7P9tc1BOmQFpvy+o96y5IW7T50KPVQOJRDxR16Rp\nzD35Z04eZgNUmfydKx04GY9BSaOWCM/V9vPPlsrDkzyzSZgJdh77EvetAoGALHtT\n0TUO44ZFpnPq4PWHz+sFuW9pE2ibNLKxA02eIkkPZK94uKVri8gK5wu1jOyXwuRi\nLOIYmfdEYoBNQ/58TFQrqcWM38N7Y5RbmO5Bk6DLUmzGozmCmS99mQninrbFRoaL\nRVevvrdTLgmz0vZfBPMfEQ4ZXzQGKn2gJlJr038CgYEAl4sAa+is9GPwt60hKgGk\nzJRSE0LsDWes83l8Cn0tWD3DtiHKd9kl01NZUA1WC4cK7sB9USAFEsv/Zq/0beWG\nSAbVBfEAlj4dZaojg0bcpGFrqF85AN8TEsVNycaGlo5FFxazWs1jlpq6oQDM1TIx\n34sqzbw3QgzOZbj/JHHd/00=\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-uajw5@authorisation-app-001.iam.gserviceaccount.com",
  client_id: "110023178785744634534",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-uajw5%40authorisation-app-001.iam.gserviceaccount.com",
};

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("", (req, res) => {
  res.status(200).json({ text: "Hello World!" });
});

app.post("/createUserWithEmailAndPassword", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  console.log(1);
  const app = initializeApp(firebaseConfig);
  console.log(2);
  const auth = getAuth();
  console.log(3);

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
});

app.listen(PORT, () => {
  console.log(
    `Database Connected & Server running at http://localhost:${PORT}/`
  );
});
