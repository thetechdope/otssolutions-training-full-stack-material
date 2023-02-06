const express = require("express");
const dotenv = require("dotenv");
const admin = require("firebase-admin");
const credentials = require("./authorisationKey.json");

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

app.get("", (req, res) => {
  res.status(200).json({ text: "Hello World!" });
});

app.get("/searchUserByUid/:uid", async (req, res) => {
  try {
    const { uid } = req.params;
    const newUserResponse = await admin.auth().getUser(uid);
    res.json(newUserResponse);
  } catch (error) {
    res.json({
      Error: error,
    });
  }
});

app.get("/searchUserByEmail/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const newUserResponse = await admin.auth().getUserByEmail(email);
    res.json(newUserResponse);
  } catch (error) {
    res.json({
      Error: error,
    });
  }
});

app.get("/searchUserByPhoneNumber/:phoneNumber", async (req, res) => {
  try {
    const { phoneNumber } = req.params;
    const newUserResponse = await admin
      .auth()
      .getUserByPhoneNumber(phoneNumber);
    res.json(newUserResponse);
  } catch (error) {
    res.json({
      Error: error,
    });
  }
});

app.get("/deleteUserByUid/:uid", async (req, res) => {
  try {
    const { uid } = req.params;
    const newUserResponse = await admin.auth().deleteUser(uid);
    res.json(newUserResponse);
  } catch (error) {
    res.json({
      Error: error,
    });
  }
});

app.post("/updatePassword", async (req, res) => {
  try {
    const { uid, newPassword } = req.body;
    const newUserResponse = await admin.auth().updateUser(uid, {
      password: newPassword,
    });
    res.json(newUserResponse);
  } catch (error) {
    res.json({
      Error: error,
    });
  }
});

app.post("/updateEmail", async (req, res) => {
  try {
    const { uid, newEmail } = req.body;
    const newUserResponse = await admin.auth().updateUser(uid, {
      email: newEmail,
    });
    res.json(newUserResponse);
  } catch (error) {
    res.json({
      Error: error,
    });
  }
});

app.post("/sign-up", async (req, res) => {
  try {
    const newUserResponse = await admin.auth().createUser({
      email: req.body.email,
      password: req.body.password,
      emailVerified: false,
      disabled: false,
    });
    //res.status(200);
    res.json(newUserResponse);
  } catch (error) {
    //res.status(404);
    res.json({
      Error: error,
    });
  }
});

app.listen(PORT, () => {
  console.log(
    `Database Connected & Server running at http://localhost:${PORT}/`
  );
});
