
$(document).ready(function () {
    $('.reset').on('click', resetClick);

    $('.cross').on('dragstart', drag);
    $('.circle').on('dragstart', drag);
    
    $('.dropBox').on('dragover', allowDrop);
    $('.dropBox').on('drop', drop);

    
});

const resetClick = (event) => {
    location.reload()
};

let allowDrop = (event) => {
    event.preventDefault();
}

const drag = (event) => {
    const e = event.originalEvent;
    e.dataTransfer.setData('text', $(event.target).attr('id'));
}

const drop = (event) => {
    event.preventDefault();

    const data = event.originalEvent.dataTransfer.getData('text');

    $(event.target).append($(`#${data}`))
}