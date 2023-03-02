import express, { text } from 'express'; //route management
import nodemailer from 'nodemailer'; //for emails
import cors from 'cors';

const app = express();

app.use(cors())

app.get('/' , async (req,res) => {
    console.log('running in browser');

    const name = req.query.name;
    const email = req.query.email;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        secure: false,
        auth: {
            user: 'lizzyraesetja2@gmail.com',
            pass: 'vuwpdsjqfszhllzz'
        }
    })
    try {
       await transporter.sendMail({
            from: '"Lizzy" <lizzyraesetja2@gmail.com>',
            to: email,
            subject: 'bootcam task3',
            text: '',
            html: 
        < div style="height: fit-content; width: fit-content; border: 1px solid rgb(200, 100, 100);border-radius: 10px">
            <div style="margin: 20px">
            <h3>Welcome  ${name}</h3>
            <p>WE ARE HAPPY TO HAVE YOU</p>
            </div>
        </div>
        })
        res.send({message: 'sucess'})
        /*<html>
            <head>
                <title>sendMail</title>
            </head>
            <body>
                
            </body>
        </html>*/
        
    }
    catch (error) {
        res.send({message: error})

    }

    res.send({message: 'sucess'})
})


app.listen(3000, () => {
    console.log('running');
})