function clickHandler (){
    var textarea = $(this).siblings("textarea").val()
    var hour = $(this).siblings("div").attr("id")
    localStorage.setItem(hour,textarea)
}
$(".saveBtn").on("click",clickHandler)