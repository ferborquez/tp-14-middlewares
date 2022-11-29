module.exports = {
    main:(req,res) =>{
        res.render('index',{
            texto : "Home Page"
        })
    },
    about:(req,res) =>{
        res.send('BIENVENIDOS A LA VISTA ABOUT')
    },
    register:(req,res) =>{
        res.send('BIENVENIDOS A LA VISTA REGISTER')
    },
    processRegister:(req,res) =>{
        res.redirect('/')
    },
    login:(req,res) =>{
        res.send('BIENVENIDOS A LA VISTA LOGIN')
    },
    processLogin:(req,res) =>{
        res.redirect('/')
    }
}