import firebase from "./firebase";

const db = firebase.database().ref("/cars");

export const getAll = () => {
  return db;
};

export const create = (data) => {
  return db.push(data);
};

export const update = (key, data) => {
  return db.child(key).update(data);
};

export const remove = (key) => {
  return db.child(key).remove();
};

const removeAll = () => {
  return db.remove();
};

export default {

  
  removeAll,
};