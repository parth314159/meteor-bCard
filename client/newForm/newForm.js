Template.newForm.events({

'submit form':(event, template) => {
   event.preventDefault();
 
   let fname = template.find('#firstName').value;

   console.log(fname);
   console.log(lastName.value);
   console.log(quote.value);
   console.log(gender.value);
   console.log(githubLink.value);

}

});
