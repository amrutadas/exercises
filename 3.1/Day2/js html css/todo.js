//Method to append text to the list onclick of button
 function add_new_list()
 {
      text = document.getElementById("listElement"); //Fetch the text entered in the text box
      ul = document.getElementById("list"); //Fetch the exisitng list element
	  newSpan = document.createElement('span'); // Create a new span element to enclose checkbox and text.
      newLi = document.createElement('li'); // Create a new list element
	  newTextNode = document.createTextNode(text.value); // Create a new text node and add text obtained from the text field
	  checkbox = document.createElement( "input" ); //Create an input type which will be the checkbox
      checkbox.type = "checkbox"; //Create input type checkbox
      checkbox.checked = false; //It should not be checked
	  newLi.appendChild(checkbox);
	  newSpan.appendChild(newTextNode); //append text Node to the span
 	  newLi.appendChild(newSpan);// Append List element to a span created
	  ul.appendChild(newLi); // Append new span element to existing list.
	  text.value='';// making the text field blank
	  count=document.getElementById('list').childElementCount; //get the count of the child elements from the ol -list
	  document.getElementById("countDisplay").innerHTML=count;//fetch the span where the count is to be displayed,and display it.
	  
	}

//Method for validation	
function textField_Validator()
{
 text = document.getElementById("listElement").value; //Fetch the text entered in the text box and find its length
 if (text.length >200)// if number of characters is null or more than 200 : Then give alert
    {
     alert("Kindly enter less than 200 characters for description."); // Build alert box message showing how many characters entered
     return (false); // return false to stop further processing
	}
 else if(text.length=='')
    {
     alert("Your text field is null.Kindly enter a description"); 
     return (false);
	}
 else //If no error than continue to function to add to the list 
  add_new_list() // If text_name is not null and less than 200 characters continue processing ie append it to list.
}