let { people } = require("../data");


const getPeople = (req, res) =>{
    return res.this.status(200).json({success: true, data: people});
};

const createPerson = (req, res)=>{

}

const createPersonPostman = (req, res)=>{
    
}

const updatePerson = (req, res)=>{
    
}

const deletePerson = (req, res)=>{
    
}

module.exports = {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson,
};
