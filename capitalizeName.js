const capitalize = (name) => {
  //Check name via Regular expression
  const allowed = /^[a-zA-Z ]+$/;
  if (!name.match(allowed)) {
    return console.log("Name should contain only A-z and white space");
  }
  let nameArr = name.split(" ");
  nameArr = nameArr.filter((name) => name != "");
  let capitalized = "";
  nameArr.forEach((name) => {
    name = name[0].toUpperCase() + name.substring(1).toLowerCase();
    capitalized = capitalized + name + " ";
  });
  console.log(capitalized);
};

capitalize(" abdul  m KHAN");
