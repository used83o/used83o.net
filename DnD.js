$(function() {
    $('.content').on('dragstart', onDragStart);
    $('.content').on('dragend', onDragEnd);

    const $dropzone = $('.dropzone')
    .on('dragover', onDragOver)
    .on('dragenter', onDragEnter)
    .on('dragleave', onDragLeave)
    .on('drop', onDrop);

    function onDragStart(e)
    {
        e.originalEvent.dataTransfer.setData('text', e.originalEvent.target.id);
        addDraggingEffect();
    }
    function onDragEnter(e)
    {
        addEnterEffect();
    }
    function onDragLeave(e)
    {
        removeEnterEffect();
    }
    function onDragOver(e)
    {
        e.preventDefault();
    }
    function onDragEnd(e)
    {
        resetAllEffect();
    }
    function onDrop(e)
    {
        e.preventDefault();
        let goto = e.originalEvent.dataTransfer.getData('text');
        window.location.href = goto;
    }
    
    function addDraggingEffect()
    {
        $dropzone.addClass('dragging');
        let txt = document.getElementById('plus');
        txt.textContent = '+';
    }
    function removeDraggingEffect()
    {
        $dropzone.removeClass('dragging');
        let txt = document.getElementById('plus');
        txt.textContent = '';
    }
    function addEnterEffect()
    {
        $dropzone.addClass('dragenter');
        let gotoDesc = document.getElementById('nextpage');
        let where = document.getElementById('goto').textContent;
        gotoDesc.innerHTML = "go to :<br>" + where;
    }
    function removeEnterEffect()
    {
        $dropzone.removeClass('dragenter');
        let gotoDesc = document.getElementById('nextpage');
        gotoDesc.innerHTML = "";
    }
    function resetAllEffect(e)
    {
        removeDraggingEffect();
        removeEnterEffect();
    }

});