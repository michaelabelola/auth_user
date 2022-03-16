import express, { NextFunction, Request, Response, Router } from "express";
import QueryString from "qs";
var router:Router = express.Router();

/* GET users listing. */
router.get(
  "/",
  function (
    req: Request<{}, any, any, QueryString.ParsedQs, Record<string, any>>,
    // res: Response<any, Record<string, any>, number>,
    res: Response<Record<string, any>, any>,
    next: NextFunction
  ) {
    res.send({book:"respond with a resource"})
  }
);
export default router;
