const FormModel = require('../schema/form');
exports.contactForm = async (req, res) => {
  try {
      const contactDetails = await FormModel.create(req.body);
      console.log("contactDetails:",contactDetails);
      res.status(201).json({
        status: 'success',
        data: {
          contactDetails,
        },
      });
   
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.errmsg,
    });
  }
};