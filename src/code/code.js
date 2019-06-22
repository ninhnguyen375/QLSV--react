let ObjectSchema = {
  id: "",
  fname: "",
  school_class_id: "",
  school_class_name: "",
  lname: "",
  chemistry: "",
  math: "",
  physical: ""
};

let checkUnique = obj => {
  for (const key in obj) {
    if (!ObjectSchema.hasOwnProperty(key)) {
      return false;
    }
  }
  for (const key in ObjectSchema) {
    if (!obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true; //correct
};

const checkUniqueArr = arr => {
  let correctArr = [];
  let incorrectArr = [];
  for (let i = 0; i < arr.length; i++)
    if (checkUnique(arr[i])) correctArr.push(arr[i]);
    else incorrectArr.push(arr[i]);
  return {
    correctArr,
    incorrectArr
  };
};

const convertToMyObject = arr => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let newObj = {
      id: arr[i].id,
      fname: arr[i].fname,
      school_class: {
        id: arr[i].school_class_id,
        name: arr[i].school_class_name
      },
      lname: arr[i].lname,
      scores: {
        math: arr[i].math,
        physical: arr[i].physical,
        chemistry: arr[i].chemistry
      }
    };
    newArr.push(newObj);
  }
  return newArr;
};

export default {
  checkUniqueArr,
  convertToMyObject
};
