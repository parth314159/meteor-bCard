Template.newForm.events({

'submit form':(event, template) => {
   event.preventDefault();
 
   let fname = template.find('#firstName').value;
   let lname = template.find('#lastName').value;
   let quote = template.find('#quote').value;
   let gender = template.find('#gender').value;
   let link = template.find('#githubLink').value;

   // console.log(fname);
   // console.log(lastName.value);
   // console.log(quote.value);
   // console.log(gender.value);
   // console.log(githubLink.val

   Session.set('firstName',fname);
   Session.set('lastName',lname);
   Session.set('quote',quote);
   Session.set('githubLink',link);
   //Session.set('firstName',fname);

   Router.go(`/${fname}`);
   
}

});
