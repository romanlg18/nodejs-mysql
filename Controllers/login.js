export const login = async (req, res)=>{
    const{usuario, contrasena} = req.body;

    if(usuario =="Test" && contrasena == "Test"){
        res.json({
            data: "Entrada existosa",
        });
    }else{
        return res.status(500).json({
            data:"Creedenciales incorrectas",
        });
    }
};