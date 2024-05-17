const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const multer = require("multer");
const path = require("path");
const hb = require("nodemailer-express-handlebars");
const { Stats } = require("fs");
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");

  // Passez à l'étape suivante
  next();
});

/********* Configuration du chargement des fichiers  **************/

const stockage = multer.memoryStorage(); /* ALLOCATION */
const upload = multer({
  storage: stockage,
}); /*  POUR TELECHARGER LES FICHIER ET LES METTRE DANS STOCKAGE */

/* CONFIGURATION DE L'EXPEDITEUR */
const EXP = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "lr_sisaber@esi.dz",
    pass: "thqqyaizzcjvxodt",
  },
});
/****** TEMPLATE CONFIG */
const config = {
  viewEngine: {
    extName: ".handlebars",
    partialsDir: path.resolve(__dirname, "./public/views"),
    defaultLayout: false,
  },
  viewPath: path.resolve(__dirname, "./public/views"),
  extName: ".handlebars",
};

EXP.use("compile", hb(config));
/* ENVOIE DU MAIL */

app.post("/mail", upload.array("Fichier"), (req, res) => {
  console.log("SENDING");
  const Files = req.files;
  console.log(req.body);
  const fileAttachments = Files.map((file) => ({
    filename: file.originalname,
    content: file.buffer,
    encoding: "base64",
    cid: `file`,
    contentType: file.mimetype,
  }));
  const mailer = {
    from: "lr_sisaber@esi.dz",
    to: "lr_sisaber@esi.dz",
    subject: "Avis de devis",
    template: "index",
    context: {
      Titre: "Avis de Devis",
      Date: new Date().toLocaleDateString(),
      Heure: new Date().toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      Nom: `${req.body.Nome.toUpperCase()}`,
      Prenom: `${req.body.Prenom.toUpperCase()}`,
      EMAIL: `${req.body.Mail}`,
      TELEPHONE: `${req.body.Phone}`,
      Materiel: `${req.body.Materiel}`,
      Mention: `${req.body.Msg}`,
      attachments: fileAttachments,
    },
    attachments: [
      {
        filename: "logo.png",
        path: __dirname + "/public/views/logo.png",
        cid: "logo",
      },
      ...fileAttachments,
    ],
  };
  console.log(mailer.context);
  /* Envoie du Mail */
  EXP.sendMail(mailer, (error, infos) => {
    if (error) {
      console.log(error);
      return res.status(500);
    }

    res.status(200).send("Mail envoyé à : " + mailer.to);
    alert(" DEVIS ENVOYE ");
  });
});

/*  SERVER ACTIVATION */
app.listen(2000, (req, res) => {
  console.log("Connecté au port 5000");
});
/***************************/
