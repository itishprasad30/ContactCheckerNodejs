const asyncHandler = require("express-async-handler");


//@desc Get All Contact
// @route GET /api/contacts
//@access public


const getContact = asyncHandler(async (req, res) => {
      res.status(200).json({ message: "Get All the Contact" });
});


//@desc Create  Contact
// @route POST /api/contacts
//@access public



const createContact = asyncHandler(async (req, res) => {
      console.log("The request body", req.body);
      
      const { name, email, age } = req.body;
      if (!name || !email || !age) {
            res.status(400);
            throw new Error("All fields are mandatory");
      }

      
      res.status(201).json({ message: "Contact Created" });
});

//@desc Update  Contact
// @route PUT /api/contacts/:id
//@access public


const updateContact = asyncHandler(async (req, res) => {
      res.status(200).json({ message: `Update contact for ${req.params.id}` });
});


//@desc Delete  Contact
// @route Delete /api/contacts/:id
//@access public


const deleteContact = asyncHandler(async (req, res) => {
      res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = {getContact,createContact,updateContact,deleteContact}