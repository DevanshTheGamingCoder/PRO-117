$(document).ready(function(){

    console.log('Ready')

    //  Fetch the current date and update it in the DOM
    var date_time = new Date()
    let current_date = "Date :"+ date_time.toLocaleDateString()

$('#date').text("Date: " +current_date)

    //  write an event, when Submit button is clicked
    $('#button').click(function(){

        //  get the text value from the textarea using the 'val()' method
        

        //  Convert it to JS object.
        //  Provide a 'key' here and in write the same in app.py file as well to extract data
        
        let review = $('#text').val()
        let input_data = {"Customer_review": review}
        //  ajax request
        $.ajax({

            //  type of web request
            type : 'POST',
            url : '/predict',


            //  Data to be sent in JSON format
            data : JSON.stringify(input_data),

            //  type of response expected is json
            dataType : 'json',

            //  contentType
            contentType : 'application/json',

            //  if everything is successful, run this function
            success : function(result){

                let prediction = result.prediction
                let emoji_url = result.url
                
                // Display Result Using JavaScript----->HTML
                $("#sentiment").text(prediction)
                $("#sentiment").show()

                $("#emoji").attr('src', emoji_url)
                $("#emoji").show()
                
            },
        
          

            //  if any error, run this function
            error : function(result){

                console.log(result)
            }
        })


        //  clearing the textbox after every button push
        $('#text').val("")
    })
        
})