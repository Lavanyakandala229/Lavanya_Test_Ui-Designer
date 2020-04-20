var obj=[
{OrderNumber: "1",
UserName: "Nagendra",
OrderDate : "03/30/2020",
RequiredDate: "03/30/2020",
ShippedDate: "03/30/3030",
Email: "nagendra@april.biz",
Status: "Active",
Contact: "9999999999",
street: "Kulas Light",
city: "Gwenborough",
zipcode: "92998-3874"
},

{
OrderNumber: "2",
UserName: "Kumar",
OrderDate: "03/30/2020",
RequiredDate: "03/30/2020",
ShippedDate: "03/30/3030",
Email: "Kumar@april.biz",
Status: "InActive",
Contact: "9999999999",
street: "Kulas Light",
city: "Gwenborough",
zipcode: "92998-3874"
  },

{
OrderNumber: "3",
UserName: "Johnson",
OrderDate: "03/30/2020",
RequiredDate: "03/30/2020",
ShippedDate: "03/30/3030",
Email: "Johnson@april.biz",
Status: "Pending",
Contact: "9999999999",
street: "Kulas Light",
city: "Gwenborough",
zipcode: "92998-3874"
  }
];


var form = document.createElement('form');
form.id="details";
document.body.appendChild(form);

var tableDiv  = document.createElement('div');
tableDiv.setAttribute("id", "tabDiv");
form.appendChild(tableDiv);

var table = document.createElement("table");
table.setAttribute("id", "myTable");
tableDiv.appendChild(table);

var btnDelete = document.createElement('input');
btnDelete.type = "button";
btnDelete.value = "Delete";
btnDelete.onclick = deleteRow;
form.appendChild(btnDelete);

var addForm = document.createElement('div');
form.appendChild(addForm);

var row = document.createElement("tr");
var cell = document.createElement("th");
row.appendChild(cell);
cell.innerHTML = "Select";
var cell = document.createElement("th");
row.appendChild(cell);
cell.innerHTML = "Sl.No";
table.appendChild(row);
Object.keys(obj[0]).forEach(function(val) {
  var cell = document.createElement("th");
  row.appendChild(cell); 
  cell.innerHTML = val;
});
var cell = document.createElement("th");
row.appendChild(cell);
cell.innerHTML = "Action";

for (var i = 0; i < obj.length; i++) {
  var btnSave = document.createElement('button');
  btnSave.innerHTML = "Save";
  btnSave.onclick = saveCell;

  var btnEdit = document.createElement('input');
  btnEdit.type = "button";
  btnEdit.value = "Edit";
  btnEdit.onclick = editCell;
  
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.id= "checkBox";

  var row = document.createElement("tr");
  table.appendChild(row);
  var cell = document.createElement("td");
  row.appendChild(cell);
  cell.appendChild(checkbox);
  var cell = document.createElement("td");
  row.appendChild(cell);
  cell.innerHTML = i;
  for (key in obj[i]) {
    var cell = document.createElement("td");
    row.appendChild(cell);
    cell.innerHTML = obj[i][key];
  }
  var cell = document.createElement("td");
  row.appendChild(cell);
  cell.appendChild(btnEdit);
  cell.appendChild(btnSave);
}

var OrderNumber = document.createElement('input');
OrderNumber.type = "text";
OrderNumber.placeholder = "OrderNumber";
OrderNumber.required = true;
addForm.appendChild(OrderNumber);

var UserName = document.createElement('input');
UserName.type = "text";
UserName.placeholder = "UserName";
UserName.required = true;
addForm.appendChild(UserName);

var OrderDate = document.createElement('input');
OrderDate.type = "text";
OrderDate.placeholder = "OrderDate";
OrderDate.required = true;
addForm.appendChild(OrderDate);

var RequiredDate = document.createElement('input');
RequiredDate.type = "text";
RequiredDate.placeholder = "RequiredDate";
RequiredDate.required = true;
addForm.appendChild(RequiredDate);

var ShippedDate = document.createElement('input');
ShippedDate.type = "text";
ShippedDate.placeholder = "ShippedDate";
ShippedDate.required = true;
addForm.appendChild(ShippedDate);

var email = document.createElement('input');
email.type = "email";
email.placeholder = "Email";
email.required = true;
addForm.appendChild(email);

var Status = document.createElement('input');
Status.type = "text";
Status.placeholder = "Status";
Status.required = true;
addForm.appendChild(Status);


var Contact = document.createElement('input');
Contact.type = "number";
Contact.placeholder = "Contact";
Contact.required = true;
addForm.appendChild(Contact);

var street = document.createElement('input');
street.type = "text";
street.placeholder = "street";
street.required = true;
addForm.appendChild(street);

var city = document.createElement('input');
city.type = "text";
city.placeholder = "city";
city.required = true;
addForm.appendChild(city);

var zipcode = document.createElement('input');
zipcode.type = "text";
zipcode.placeholder = "zipcode";
zipcode.required = true;
addForm.appendChild(zipcode);

var addTable = function() { 
var btnSave = document.createElement('button');
btnSave.innerHTML = "Save";
btnSave.onclick = saveCell;

  var btnEdit = document.createElement('input');
  btnEdit.type = "button";
  btnEdit.value = "Edit";
  btnEdit.onclick = editCell;
  
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.id= "checkBox";
  var row = document.createElement("tr");
  if((OrderNumber.value!="")&&
    (UserName.value!="")&&
    (OrderDate.value!="")&&
    (RequiredDate.value!="")&&
    (ShippedDate.value!="")&&
    (email.value!="")&&
    (Status.value!="")&&
    (Contact.value!="")&&
    (street.value!="")&&
    (city.value!="")&&
    (zipcode.value!="")){
  
    table.appendChild(row);
    var cell = document.createElement("td");
  	row.appendChild(cell);
  	cell.appendChild(checkbox);
    
    var cell = document.createElement("td");
    row.appendChild(cell);
    cell.innerHTML = i++;
    
    var cell = document.createElement("td");
    row.appendChild(cell);
    cell.innerHTML = OrderNumber.value;
    
    var cell = document.createElement("td");
    row.appendChild(cell);
    cell.innerHTML = UserName.value;
    
    var cell = document.createElement("td");
    row.appendChild(cell);
    cell.innerHTML = OrderDate.value;

    var cell = document.createElement("td");
    row.appendChild(cell);
    cell.innerHTML = RequiredDate.value;
    
    var cell = document.createElement("td");
    row.appendChild(cell);
    cell.innerHTML = ShippedDate.value;

    var cell = document.createElement("td");
    row.appendChild(cell);
    cell.innerHTML = email.value;

    var cell = document.createElement("td");
    row.appendChild(cell);
    cell.innerHTML = Status.value;
    
    var cell = document.createElement("td");
    row.appendChild(cell);
    cell.innerHTML = Contact.value;

    var cell = document.createElement("td");
    row.appendChild(cell);
    cell.innerHTML = street.value;

    var cell = document.createElement("td");
    row.appendChild(cell);
    cell.innerHTML = city.value;

    var cell = document.createElement("td");
    row.appendChild(cell);
    cell.innerHTML = zipcode.value;
  
    var cell = document.createElement("td");
    row.appendChild(cell);
    cell.appendChild(btnEdit);
    cell.appendChild(btnSave);
    
    document.getElementById("details").reset();
	}
  else {
  	alert("Enter Input Values");
  }
};

var btnClick = document.createElement('input');
btnClick.type = "submit";
btnClick.value = "Add Row";
btnClick.onclick = addTable;
form.appendChild(btnClick);

function deleteRow() {
  var tabDel = document.getElementById('myTable');
  var rowCount = tabDel.rows.length;
  for(var i=0; i<rowCount; i++) {
    var row = tabDel.rows[i];
    var chkbox = row.cells[0].childNodes[0];
    if(chkbox.checked) {
      tabDel.deleteRow(i);
      rowCount--;
      i--;
    }
	}
}

function editCell(e) {

  var t = e.target.parentElement.parentElement;
  var trs = t.getElementsByTagName("tr");
	tds = t.getElementsByTagName("td");

  tds[2].appendChild(OrderNumber);

	tds[3].appendChild(UserName);  
  
  tds[4].appendChild(OrderDate);

  tds[5].appendChild(RequiredDate);

  tds[6].appendChild(ShippedDate);
  
  tds[7].appendChild(email);

  tds[8].appendChild(Status);
  
  tds[9].appendChild(Contact);

  tds[10].appendChild(street);

  tds[11].appendChild(city);
  curr = t;
}

function saveCell() { 
  if(curr != undefined)
  {
    var inputs = curr.getElementsByTagName("td");
    for(var i = 2; i < inputs.length - 1; i++)
    {
      currInput = inputs[i].getElementsByTagName("input");
      currInput[0].parentElement.innerHTML = currInput[0].value;
    }
    curr = undefined;
  }
}