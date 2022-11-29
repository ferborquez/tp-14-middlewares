module.exports = {
    list:(req,res) =>{
        res.render('index',{
            texto:`Bienvenido ADMIN ${req.admin}`
        })
    },
    crear:(req,res) =>{
        res.render('index',{
            texto:`Bienvenido ADMIN ${req.admin}`
        })
    },
    editar:(req,res) =>{
        res.render('index',{
            texto:`Bienvenido ADMIN ${req.admin}`
        })
    },
    eliminar:(req,res) =>{
        res.render('index',{
            texto:`Bienvenido ADMIN ${req.admin}`
        })
    },
}