import moment from "moment";

export const fmtPaymentDate = (t) => {
  return t ? moment(moment.utc(t).toDate()).local().fromNow() : "Unavailable";
};

export const toCurrentTimeZone = (t) => {
  return moment(moment.utc(t).toDate()).local().calendar();
};
