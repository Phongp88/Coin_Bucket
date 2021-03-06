/////////////////////////
///// THEME COLORS /////
///////////////////////

export const COIN_BUCKET_PRIMARY_COLOR = "#1fa2ff";
export const COIN_BUCKET_SECONDARY_COLOR = "#12d8fa";
export const COIN_BUCKET_TERTIARY_COLOR = "#7b30f2";

/////////////////
///// REGX /////
///////////////

export const EMAIL_REGX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PASSWORD_REGX = /.{6,}$/;
export const NAME_REGX = /.{1,}$/;
export const NUMBER_ONLY_REGX = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/;

/////////////////////
///// Messages /////
///////////////////

export const AUTH_ERRORS = {
  EMAIL_IN_USE: "auth/email-already-in-use",
  BAD_EMAIL: "auth/invalid-email",
  WEAK_PASSWORD: "auth/weak-password",
  WRONG_PASSWORD: "auth/wrong-password",
  USER_NOT_FOUND: "auth/user-not-found"
};

export const AUTH_ERROR_MESSAGES = {
  [AUTH_ERRORS.BAD_EMAIL]: "The email address is badly formatted.",
  [AUTH_ERRORS.WEAK_PASSWORD]: "Password should be at least 6 characters",
  [AUTH_ERRORS.USER_NOT_FOUND]:
    "The password is invalid or the user does not have a password.",
  [AUTH_ERRORS.WRONG_PASSWORD]:
    "The password is invalid or the user does not have a password.",
  [AUTH_ERRORS.EMAIL_IN_USE]:
    "The email address is already in use by another account."
};
