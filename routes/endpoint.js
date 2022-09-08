var express = require("express");
var router = express.Router();
const five_minutes = require("../models/five_minutes");
const one_hour = require("../models/one_hour");

/* GET Five minutes Data. */
router.get("/", async function (req, res, next) {
  let data = await five_minutes.find();
  res.status(200).json({
    message: "success",
    data: data,
  });
});

router.post("/five_minutes", async function (req, res, next) {
  console.log(req.body);
  try {
    const data = await five_minutes.findOneAndUpdate(
      {
        time: req.body?.time,
        ticker: req.body?.ticker,
      },
      req.body,
      {
        upsert: true,
        new: true,
      }
    );

    // Add the logic in getting possible position.

    res.send({
      data: data,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false });
  }
});

router.post("/one_hour", async function (req, res, next) {
  console.log(req.body);
  try {
    const data = await one_hour.findOneAndUpdate(
      {
        time: req.body?.time,
        ticker: req.body?.ticker,
      },
      req.body,
      {
        upsert: true,
        new: true,
      }
    );

    // Add the logic in getting possible position.

    res.send({
      data: data,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false });
  }
});

// router.post("/chop", async function (req, res, next) {
//   console.log(req.body);
//   try {
//     const data = await five_minutes.create(req.body);
//     let filter_data = await five_minutes.find({
//       time: req.body?.time,
//       ticker: req.body?.ticker,
//     });
//     if (filter_data?.length == 2) {
//       console.log("========================================== test 2");
//     }

//     // Add the logic in getting possible position.

//     res.send({
//       data: data,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(400).json({ success: false });
//   }
// });

module.exports = router;
