$("#success").hide();
$("#error").hide();
$(document).ready(function(data) {
  $("#submit-form").submit((e)=>{
    e.preventDefault();
    $.ajax({
      url:"https://script.google.com/macros/s/AKfycbyoam-c4hhdyaKVy8YhPU4l-o4JZC9vr2WC3puk/exec",
      data:$("#submit-form").serialize(),
      method:"post",
      success:function (response){
        formsucss();
      },
      error:function (err){
        formError();
      }
    })
  })
  function formsucss() {
    $("#success").show();
    $("#submit-form").each(function(){
      this.reset();
    })
  }
  function formError() {
    $("#error").show();
  }
})

//zuhailpm©//
