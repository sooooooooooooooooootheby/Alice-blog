$(".highlight").wrap("<div class='code-wrapper' style='position:relative'></div>");
/*页面载入完成后，创建复制按钮*/
!function (e, t, a) {
    /* code */
    var initCopyCode = function () {
        var copyHtml = '';
        copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
        copyHtml += '  <i class="fa fa-clipboard"></i><span><svg class="icon" aria-hidden="true"><use xlink:href="#icon-fuzhi"></use></svg></span>';
        copyHtml += '</button>';
        $(".highlight .code").before(copyHtml);
        var clipboard = new ClipboardJS('.btn-copy', {
            target: function (trigger) {
                return trigger.nextElementSibling;
            }
        });
        clipboard.on('success', function (e) {
            e.trigger.innerHTML = '<i class="fa fa-clipboard"></i><span><svg class="icon" aria-hidden="true"><use xlink:href="#icon-zhengqueshixin"></use></svg></span>'
            setTimeout(function () {
                e.trigger.innerHTML = '<i class="fa fa-clipboard"></i><span><svg class="icon" aria-hidden="true"><use xlink:href="#icon-fuzhi"></use></svg></span>'
            }, 1000)
           
            e.clearSelection();
        });
        clipboard.on('error', function (e) {
            e.trigger.innerHTML = '<i class="fa fa-clipboard"></i><span><svg class="icon" aria-hidden="true"><use xlink:href="#icon-guanbishixin"></use></svg></span>'
            setTimeout(function () {
                e.trigger.innerHTML = '<i class="fa fa-clipboard"></i><span><svg class="icon" aria-hidden="true"><use xlink:href="#icon-fuzhi"></use></svg></span>'
            }, 1000)
            e.clearSelection();
        });
    }
    initCopyCode();
}(window, document);