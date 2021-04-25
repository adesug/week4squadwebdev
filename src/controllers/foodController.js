const { foods } = require ('../models/')

module.exports = {
    getAllFoods : (req, res) => {
        foods.findAll()
        .then ((data) => {
            res.status(200).send({
                msg: "get all data success",
                status : 200,
                data
            })
        })
        .catch((error) => {
            res.send(500).send({
                msg: "get all data error",
                status : 500,
                error
            })
        })
    },
    addnewFoods : (req,res) => {
        const {body} =req;
        console.log(body);
        foods.create(body)
        
        .then ((data) => {
            res.status(200).send({
                msg: "create new data foods is success",
                status : 200,
                data : data
            })
        })
        .catch ((error) => {
            res.status(500).send({
                msg: "get all data is error",
                status: 500,
                error
            })
        })
    },
    getFoodsByID : (req,res) => {
        const id = req.params.id;
        foods.findOne({
            where:{
                id
            }
        })
        .then((data) => {
            res.status(200).send({
                msg: "get data by id success",
                status: 200,
                data
            })
        })
        .catch((error)=> {
            res.status(500).send({
                msg:"get data id is error",
                status: 500,
                error
            })
        })
    },
    deleteFoods : async(req,res) => {
        const {id} = req.params;

        let findfoods = await foods.findOne({
            where : {
                id
            }
        });
        if( findfoods === null) {
            res.status(404).send({
                msg:"delete makan error",
                status : 404,
                err,
            })
        }
        foods.destroy({
            where:({
                id
            })
        })
        .then((data) => {
            const resObject = {...findfoods.dataValues}
            res.status(200).send({
                msg:"delete data succes",
                status: 200,
                data: resObject
            })
        })
        .catch ((error) => {
            res.status(500).send({
                msg: "delete data is error",
                status: 500,
                error
            })

        })
    },
    updateFoods : async (req,res) => {
        const { id } = req.params;
        const {body} = req
        let findfoods = await foods.findOne({
            where: {
                id
            }
        })

        if(findfoods === null){
            res.status(404).send({
                msg:"update error",
                status : 404,
                error : "data is error"
            })
        }

        foods.update (body,{
            where:{
                id
            }
        })
        .then((data) => {
            const resObject = {...findfoods.dataValues, ...body}

            res.status(200).send({
                msg:"update data success",
                status: 200,
                data: resObject
            })
        })
        .catch ((error)=> {
            res.status(500).send({
                msg: "update is error",
                status : 500,
                err
            })
        })
    }


}