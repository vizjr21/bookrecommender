let express = require('express');
let app = express();

let bp = require('body-parser');
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.set('view engine', 'ejs');
app.use(express.static('static'));

app.get('/', (req, res, next) => {
    res.render('home');
})
.post('/', (req, res, next) => {
   try {
    console.log(req.body.book);
        if (!req.body.book || req.body.book === '') {
            throw new Error('empty book insert')
        } else {
            console.log('run R algorithm');
            res.send('here are some books!')
        }
   } catch(err) {
        console.log(err)
        res.send('an error has occurred')
   }
})

app.listen(process.env.PORT); 