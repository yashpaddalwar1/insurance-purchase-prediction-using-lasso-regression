
// jQuery.validator.setDefaults({
//     debug: true,
//     success: "valid"
// });
// $(function(){
// $("form[name='admissionchecker']").validate({
//     $( "#admissionchecker" ).validate({
//          rules:{
//              gre:{
//                  required=true,
//                  range: [0, 340]
//              },
//              toefl:{
//                  required:true,
//                  range: [0, 120]
//              },
//              university:{
//                 required:true,
//                 range: [0, 5]
//              },
//              sop:{
//                 required:true,
//                 range: [0, 5]
//              },
//              lor:{
//                 required:true,
//                 range: [0, 5]
//              },
//              cgpa:{
//                 required:true,
//                 range: [0, 9.92]
//              },
//              research:"required"
//          },

//         messages:{
//             gre:{required:"Please fill this field",minLength:"GRE Score should be between 0 and 340"},
//             toefl:{required:"Please fill this field",minLength:"TOEFL Score should be between 0 and 120"},
//             university:{required:"Please fill this field",minLength:"University Rating should be between 0 and 5"},
//             sop:{required:"Please fill this field",minLength:"SOP Score should be between 0 and 5"},
//             lor:{required:"Please fill this field",minLength:"LOR Score should be between 0 and 5"},
//             cgpa:{required:"Please fill this field",minLength:"CGPA should be below 10"}
//         },
//         submitHandler: function(form){
//             form.submit()
//         }
// });
// });

jQuery('#admissionchecker').validate({
	rules:{
		gre:{
				required:true,
				range: [0, 340]
			},
			toefl:{
			    required:true,
			    range: [0, 120]
			},
			university:{
			   required:true,
			   range: [0, 5]
			},
			sop:{
			   required:true,
			   range: [0, 5]
			},
			lor:{
			   required:true,
			   range: [0, 5]
			},
			cgpa:{
			   required:true,
			   range: [0, 9.92]
			},
			research:"required"
	},
    messages:{
		gre:{
			required:"Please fill this field!",
			range:"GRE Score Range should be between 0 to 340"
		},
		toefl:{
			required:"Please fill this field!",
			range:"TOEFL Score should be between 0 and 120"
		},
        university:{
			required:"Please fill this field!",
			range:"University Rating should be between 0 and 5"
		},
        sop:{
			required:"Please fill this field!",
			range:"SOP Score should be between 0 and 5"
		},
        lor:{
			required:"Please fill this field!",
			range:"LOR Score should be between 0 and 5"
		},
        cgpa:{
			required:"Please fill this field!",
			range:"CGPA should be greater than 0 and less than 10"
		}
	},
	submitHandler:function(form){
		form.submit();
	}
});