import express, { NextFunction, Request, Response, Router } from "express";
import QueryString from "qs";

var router: Router = express.Router();
/* GET home page. */
router.get(
  "/",
  function (
    req: Request<{}, any, any, QueryString.ParsedQs, Record<string, any>>,
    // res: Response<any, Record<string, any>, number>,
    res: Response<Record<string, any>, any>,
    next: NextFunction
  ) {
    res.render("index", { title: "Express" });
  }
);
export default router;
// module.exports = router;