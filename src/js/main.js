$(()=>{
    const button = $("#button");
    const modal = $("#modal");
    const close = $("#close");

    button.on('click', ()=>{
        modal.addClass("modal_active");
    });

    close.on('click', ()=>{
        modal.removeClass("modal_active")
    })

})