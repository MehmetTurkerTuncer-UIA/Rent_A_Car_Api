"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const CustomError = require("../errors/customError");

// Middleware: permissions

const message = "Your account is not active. Please contact support.";

module.exports = {
  isLogin: (req, res, next) => {
    if (req.user) {
      next();
    } else {
      throw new CustomError(
        "AuthenticationError: You must be logged in to access this resource.",
        401
      );
    }
  },
  isStaffOrisAdmin: (req, res, next) => {
    if (!(req.user.isAdmin || req.user.isStaff)) {
      throw new CustomError(
        "AuthorizationError: You must be an Admin or Staff to access this resource.",
        403
      );
    }
    if (!req.user.isActive) {
      throw new CustomError(
        "AuthorizationError: your account is not active. Please contact support.",
        403
      );
    }

    next();
  },
  isAdmin: (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      next();
    } else {
      throw new CustomError(
        "AuthorizationError: You must be an Admin to access this resource.",
        403
      );
    }
  },
};
