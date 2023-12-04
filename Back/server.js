const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const multer = require("multer");
app.use(express.json());

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
    user: "mohamedamine.tifoun2003@gmail.com",
    pass: "yytewkohzcyrasrq",
  },
});

/* ENVOIE DU MAIL */

app.post("/mail", upload.array("Fichier"), (req, res) => {
  console.log("SENDING");
  const msg = `Nom: ${req.body.Nome} \nPrénom: ${req.body.Prenom} \nAdresse mail: ${req.body.Mail} \nTelephone: ${req.body.Phone}\n Materiel: ${req.body.Materiel} \nMessage: ${req.body.Msg}`;
  const Files = req.files;
  const attachments = Files.map((file) => ({
    filename: file.originalname,
    content: file.buffer,
    encoding: "base64",
    contentType: file.mimetype,
  }));
  const mailer = {
    from: "mohamedamine.tifoun2003@gmail.com",
    to: "mohamedamine.tifoun2003@gmail.com",
    subject: "Avis de devis",
    text: msg,
    attachments: attachments,
  };

  /* Envoie du Mail */
  EXP.sendMail(mailer, (error, infos) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Mail envoyé à : " + mailer.to);
  });
});

/*  SERVER ACTIVATION */
app.listen(5000, (req, res) => {
  console.log("Connecté au port 5000");
});
/***************************/
